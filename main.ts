function handler(_req: Request): Response {
  return new Response("Hello world, Deco!!");
}

Deno.serve(handler);
