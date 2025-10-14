export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { queryD1 } from '@/lib/cloudflare-d1';

interface UpdateItemRequest {
  item_id: string;
  text?: string | null;
  title?: string | null;
  description?: string | null;
  options?: {
    id?: string;
    item_id: string;
    option_text: string;
    order: number;
  }[];
}

export async function PUT(request: Request) {
  try {
    
    const { item_id, text, title, description, options }: UpdateItemRequest = await request.json();
    
    // Update item
    await queryD1(`
      UPDATE quiz_items 
      SET text = ?, title = ?, description = ?
      WHERE item_id = ?
    `, [text || null, title || null, description || null, item_id]);
    
    // Update options if provided
    if (options && Array.isArray(options)) {
      // Delete existing options
      await queryD1(`DELETE FROM quiz_options WHERE item_id = ?`, [item_id]);
      
      // Insert updated options
      for (const option of options) {
        if (option.option_text && option.option_text.trim()) {
          await queryD1(`
            INSERT INTO quiz_options (item_id, option_text, "order")
            VALUES (?, ?, ?)
          `, [item_id, option.option_text.trim(), option.order || 1]);
        }
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Item and options updated successfully' 
    });
  } catch (error) {
    console.error('Update item error:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to update item: ${error instanceof Error ? error.message : String(error)}`
    }, { status: 500 });
  }
}