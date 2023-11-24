function handler(_req: Request): Response {
  return new Response("Hello world wildcardcerts!!");
}

Deno.serve(handler);
