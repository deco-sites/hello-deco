function handler(_req: Request): Response {
  return new Response("Hello world, deco!");
}

Deno.serve(handler);
