function handler(_req: Request): Response {
  return new Response("fastest deploy you ever seen!");
}

Deno.serve(handler);
