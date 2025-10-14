export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';
import type { 
  SaveResponseRequest, 
  SaveResponseResponse, 
  ApiErrorResponse,
  UserSession,
  UserResponse
} from '@/lib/types/quiz';
import { queryD1, sanitizeString } from '@/lib/cloudflare-d1';

export async function POST(request: NextRequest): Promise<NextResponse<SaveResponseResponse | ApiErrorResponse>> {
  try {
    const body: SaveResponseRequest = await request.json();
    const { sessionId, itemId, response, responseType, userInfo } = body;
    
    console.log('Saving individual response:', { sessionId, itemId, responseType });

    // Sanitize strings for SQL
    const responseString = sanitizeString(JSON.stringify(response));
    const emailString = sanitizeString(userInfo?.email || '');
    const nameString = sanitizeString(userInfo?.name || '');

    // Insert/Update user session
    await queryD1<UserSession>(`
      INSERT OR REPLACE INTO user_sessions 
      (session_id, user_email, user_name, current_item_id, started_at) 
      VALUES (
        '${sessionId}', 
        '${emailString}', 
        '${nameString}', 
        '${itemId}', 
        datetime('now')
      )
    `);

    // Insert/Replace response
    await queryD1<UserResponse>(`
      INSERT OR REPLACE INTO user_responses 
      (session_id, item_id, response, response_type, answered_at) 
      VALUES (
        '${sessionId}', 
        '${itemId}', 
        '${responseString}', 
        '${responseType}', 
        datetime('now')
      )
    `);

    const successResponse: SaveResponseResponse = {
      success: true,
      message: 'Response saved successfully',
      sessionId,
      itemId
    };

    return NextResponse.json(successResponse);

  } catch (error) {
    console.error('Error saving response:', error);
    
    const errorResponse: ApiErrorResponse = {
      success: false,
      message: 'Failed to save response',
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : undefined
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}