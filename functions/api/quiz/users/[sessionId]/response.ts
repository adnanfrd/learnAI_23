// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestGet = async ({ env, params }: { env: any; params: { sessionId: string } }) => {
  const { sessionId } = params;
  const responses = await env.DB.prepare(`
    SELECT 
      item_id,
      response,
      response_type,
      answered_at
    FROM user_responses
    WHERE session_id = ?
    ORDER BY answered_at
  `).bind(sessionId).all();

  return new Response(JSON.stringify({
    success: true,
    responses: responses.results,
  }), {
    headers: { "Content-Type": "application/json" },
  });
};