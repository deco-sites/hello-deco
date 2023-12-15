function handler(_req: Request): Response {
  return new Response("Hello world, this is the fastest deploy you ever seen working?!!!!!");
}

Deno.serve(handler);
