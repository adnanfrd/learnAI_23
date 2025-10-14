export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';
import type { 
  SubmitQuizRequest, 
  SubmitQuizResponse, 
  ApiErrorResponse,
  UserSession,
  UserResponse
} from '@/lib/types/quiz';
import { queryD1, sanitizeString } from '@/lib/cloudflare-d1';

export async function POST(request: NextRequest): Promise<NextResponse<SubmitQuizResponse | ApiErrorResponse>> {
  try {
    const body: SubmitQuizRequest = await request.json();
    const { sessionId, responses, userInfo, completedAt } = body;
    
    console.log('Final quiz submission:', { 
      sessionId, 
      responseCount: Object.keys(responses).length,
      userInfo: { email: userInfo.email, name: userInfo.name }
    });

    // Sanitize strings for SQL
    const finalCompletedAt = completedAt || new Date().toISOString();
    const emailString = sanitizeString(userInfo?.email || '');
    const nameString = sanitizeString(userInfo?.name || '');

    // Mark session as completed
    await queryD1<UserSession>(`
      UPDATE user_sessions 
      SET 
        is_completed = 1, 
        completed_at = '${finalCompletedAt}',
        user_email = '${emailString}',
        user_name = '${nameString}'
      WHERE session_id = '${sessionId}'
    `);

    // Insert any missing responses (backup mechanism)
    for (const [itemId, response] of Object.entries(responses)) {
      try {
        const responseType = Array.isArray(response) ? 'checkbox' : 
                            typeof response === 'number' ? 'scale' : 
                            typeof response === 'boolean' ? 'yesno' : 'radio';
        
        const responseString = sanitizeString(JSON.stringify(response));
        
        await queryD1<UserResponse>(`
          INSERT OR IGNORE INTO user_responses 
          (session_id, item_id, response, response_type, answered_at) 
          VALUES (
            '${sessionId}', 
            '${itemId}', 
            '${responseString}', 
            '${responseType}', 
            '${finalCompletedAt}'
          )
        `);
      } catch (responseError) {
        console.error(`Failed to insert response for item ${itemId}:`, responseError);
      }
    }

    const successResponse: SubmitQuizResponse = {
      success: true,
      message: 'Quiz completed successfully!',
      sessionId,
      totalResponses: Object.keys(responses).length,
      completedAt: finalCompletedAt,
      userInfo
    };

    return NextResponse.json(successResponse);

  } catch (error) {
    console.error('Quiz submission error:', error);
    
    const errorResponse: ApiErrorResponse = {
      success: false,
      message: 'Failed to submit quiz',
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}