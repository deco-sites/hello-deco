function handler(_req: Request): Response {
  return new Response("Hello world, weekend!");
}

Deno.serve(handler);
