
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const onRequestPut = async ({ request, env }: { request: Request; env: any }) => {
  const { item_id, text, title, description, options } = await request.json() as {
    item_id: number | string;
    text?: string;
    title?: string;
    description?: string;
    options?: Array<{ option_text: string; order?: number }>;
  };
  // Update the item
  await env.DB.prepare(
    `UPDATE quiz_items SET text = ?, title = ?, description = ? WHERE item_id = ?`
  ).bind(text || null, title || null, description || null, item_id).run();

  // Update options if provided
  if (options && Array.isArray(options)) {
    // Delete existing options
    await env.DB.prepare(`DELETE FROM quiz_options WHERE item_id = ?`).bind(item_id).run();

    // Insert updated options
    for (const option of options) {
      if (option.option_text && option.option_text.trim()) {
        await env.DB.prepare(
          `INSERT INTO quiz_options (item_id, option_text, "order") VALUES (?, ?, ?)`
        ).bind(item_id, option.option_text.trim(), option.order || 1).run();
      }
    }
  }

  return new Response(JSON.stringify({
    success: true,
    message: "Item and options updated successfully"
  }), {
    headers: { "Content-Type": "application/json" }
  });
};