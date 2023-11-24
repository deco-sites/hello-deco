function handler(_req: Request): Response {
  return new Response("Hello, Deco!");
}

Deno.serve(handler);
