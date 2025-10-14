export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { queryD1, sanitizeString } from '@/lib/cloudflare-d1';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    // Await params before using
    const { sessionId } = await params;
    
    const responses = await queryD1(`
      SELECT 
        item_id,
        response,
        response_type,
        answered_at
      FROM user_responses
      WHERE session_id = '${sanitizeString(sessionId)}'
      ORDER BY answered_at
    `);
    
    return NextResponse.json({
      success: true,
      responses
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: `Failed to fetch user responses: ${error instanceof Error ? error.message : String(error)}`,
      responses: []
    }, { status: 500 });
  }
}