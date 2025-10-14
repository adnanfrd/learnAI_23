// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestGet = async ({ env }: { env: any }) => {
  const steps = await env.DB.prepare(`
    SELECT 
      s.step_id,
      s.title,
      s."order",
      COUNT(i.item_id) as item_count
    FROM quiz_steps s
    LEFT JOIN quiz_items i ON s.step_id = i.step_id
    GROUP BY s.step_id, s.title, s."order"
    ORDER BY s."order"
  `).all();
  return new Response(JSON.stringify({ success: true, steps: steps.results }), {
    headers: { "Content-Type": "application/json" },
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestPut = async ({ request, env }: { request: Request; env: any }) => {
  const { step_id, title, order } = await request.json() as { step_id: number; title: string; order: number };
  await env.DB.prepare(
    `UPDATE quiz_steps SET title = ?, "order" = ? WHERE step_id = ?`
  ).bind(title, order, step_id).run();
  return new Response(JSON.stringify({ success: true, message: "Step updated successfully" }), {
    headers: { "Content-Type": "application/json" },
  });
};