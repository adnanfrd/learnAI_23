export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { queryD1 } from '@/lib/cloudflare-d1';

// User data type for admin
interface AdminUserData {
  session_id: string;
  user_email: string | null;
  user_name: string | null;
  started_at: string;
  completed_at: string | null;
  is_completed: number;
  total_responses: number;
  responses: string | null;
}

export async function GET(): Promise<NextResponse> {
  try {
    // Get user sessions with responses
    const userData = await queryD1<AdminUserData>(`
      SELECT 
        us.session_id,
        us.user_email,
        us.user_name,
        us.started_at,
        us.completed_at,
        us.is_completed,
        COUNT(ur.id) as total_responses
      FROM user_sessions us
      LEFT JOIN user_responses ur ON us.session_id = ur.session_id
      GROUP BY us.session_id, us.user_email, us.user_name, us.started_at, us.completed_at, us.is_completed
      ORDER BY us.started_at DESC
    `);
    
    return NextResponse.json({
      success: true,
      users: userData,
      total: userData.length
    });
    
  } catch (error) {
    console.error('Users fetch error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch user data',
      users: [],
      total: 0
    }, { status: 500 });
  }
}