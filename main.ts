function handler(_req: Request): Response {
  return new Response("Hello world wildcardcerts!123!!!");
}

Deno.serve(handler);
