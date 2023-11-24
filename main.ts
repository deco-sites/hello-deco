function handler(_req: Request): Response {
  return new Response("Hello world certs!!");
}

Deno.serve(handler);
