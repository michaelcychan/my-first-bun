console.log("Hello via Bun!");

const response = "hello from Bun!"

const server = Bun.serve({
  port: 3001,
  fetch(req){
    return new Response(response);
  },
})