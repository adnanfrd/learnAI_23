export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { queryD1 } from '@/lib/cloudflare-d1';

// Admin step type
interface AdminStepData {
  step_id: string;
  title: string;
  order: number;
  item_count: number;
}

interface UpdateStepRequest {
  step_id: string;
  title: string;
  order: number;
}

// GET: Fetch all steps with items
export async function GET(): Promise<NextResponse> {
  try {
    const steps = await queryD1<AdminStepData>(`
      SELECT 
        s.step_id,
        s.title,
        s."order",
        COUNT(i.item_id) as item_count
      FROM quiz_steps s
      LEFT JOIN quiz_items i ON s.step_id = i.step_id
      GROUP BY s.step_id, s.title, s."order"
      ORDER BY s."order"
    `);
    
    return NextResponse.json({ success: true, steps });
  } catch (error: unknown) {
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message || 'Failed to fetch steps' 
    }, { status: 500 });
  }
}

// PUT: Update step
export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const { step_id, title, order }: UpdateStepRequest = await request.json();
    
    await queryD1(`
      UPDATE quiz_steps 
      SET title = ?, "order" = ?
      WHERE step_id = ?
    `, [title, order, step_id]);
    
    return NextResponse.json({ success: true, message: 'Step updated successfully' });
  } catch (error: unknown) {
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message || 'Failed to update step' 
    }, { status: 500 });
  }
}