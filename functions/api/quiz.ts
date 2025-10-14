// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestGet = async ({ env }: { env: any }) => {
  // Fetch all tables
  const steps = await env.DB.prepare('SELECT * FROM quiz_steps ORDER BY "order"').all();
  const items = await env.DB.prepare('SELECT * FROM quiz_items ORDER BY "order"').all();
  const options = await env.DB.prepare('SELECT * FROM quiz_options ORDER BY "order"').all();
  const paragraphs = await env.DB.prepare('SELECT * FROM content_paragraphs ORDER BY "order"').all();

  const response = {
    success: true,
    message: "Quiz data fetched successfully!",
    data: {
      steps: steps.results,
      items: items.results,
      options: options.results,
      paragraphs: paragraphs.results,
    },
    count: {
      steps: steps.results.length,
      items: items.results.length,
      options: options.results.length,
      paragraphs: paragraphs.results.length,
    },
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
};