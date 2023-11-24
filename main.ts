function handler(_req: Request): Response {
  return new Response("Hello world wildcardcerts!121233!!!");
}

Deno.serve(handler);
