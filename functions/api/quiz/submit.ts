// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestPost = async ({ request, env }: { request: Request; env: any }) => {
  const body: {
    sessionId: string;
    responses: Record<string, unknown>;
    userInfo?: { email?: string; name?: string };
    completedAt?: string;
  } = await request.json();
  
  const { sessionId, responses, userInfo, completedAt } = body;

  const finalCompletedAt = completedAt || new Date().toISOString();
  const emailString = userInfo?.email || '';
  const nameString = userInfo?.name || '';

  // Mark session as completed
  await env.DB.prepare(
    `UPDATE user_sessions SET is_completed = 1, completed_at = ?, user_email = ?, user_name = ? WHERE session_id = ?`
  ).bind(finalCompletedAt, emailString, nameString, sessionId).run();

  // Insert any missing responses (backup mechanism)
  for (const [itemId, response] of Object.entries(responses)) {
    const responseType = Array.isArray(response) ? "checkbox" :
                          typeof response === "number" ? "scale" :
                          typeof response === "boolean" ? "yesno" : "radio";
    await env.DB.prepare(
      `INSERT OR IGNORE INTO user_responses (session_id, item_id, response, response_type, answered_at) VALUES (?, ?, ?, ?, ?)`
    ).bind(sessionId, itemId, JSON.stringify(response), responseType, finalCompletedAt).run();
  }

  const successResponse = {
    success: true,
    message: "Quiz completed successfully!",
    sessionId,
    totalResponses: Object.keys(responses).length,
    completedAt: finalCompletedAt,
    userInfo,
  };

  return new Response(JSON.stringify(successResponse), {
    headers: { "Content-Type": "application/json" },
  });
};