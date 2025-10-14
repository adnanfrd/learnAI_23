// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestGet = async ({ env }: { env: any }) => {
  const userData = await env.DB.prepare(`
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
  `).all();

  return new Response(JSON.stringify({
    success: true,
    users: userData.results,
    total: userData.results.length,
  }), {
    headers: { "Content-Type": "application/json" },
  });
};