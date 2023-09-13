import figlet from "figlet";

const body = figlet.textSync("Hey from Bun!")
console.log(body);

const server = Bun.serve({
  port: 3001,
  fetch(req){
    

    return new Response(body);
  },
})