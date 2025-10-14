// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestPost = async ({ request, env }: { request: Request; env: any }) => {
  const body: {
    sessionId: string;
    itemId: string;
    response: unknown;
    responseType: string;
    userInfo?: { email?: string; name?: string };
  } = await request.json();
  const { sessionId, itemId, response, responseType, userInfo } = body;

  // Insert/Update user session
  await env.DB.prepare(
    `INSERT OR REPLACE INTO user_sessions (session_id, user_email, user_name, current_item_id, started_at) VALUES (?, ?, ?, ?, datetime('now'))`
  ).bind(sessionId, userInfo?.email || '', userInfo?.name || '', itemId).run();

  // Insert/Replace response
  await env.DB.prepare(
    `INSERT OR REPLACE INTO user_responses (session_id, item_id, response, response_type, answered_at) VALUES (?, ?, ?, ?, datetime('now'))`
  ).bind(sessionId, itemId, JSON.stringify(response), responseType,).run();

  const successResponse = {
    success: true,
    message: "Response saved successfully",
    sessionId,
    itemId,
  };

  return new Response(JSON.stringify(successResponse), {
    headers: { "Content-Type": "application/json" },
  });
};