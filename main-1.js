const http = require("http");

const server = new http.Server();

server.addListener("request", (request, response) => {
    console.log("Hey");
    if (request.url === "/secret") {
        response.write("Secret");
    } else {
        response.write('<a href="http://localhost:3000/secret">Click me!!</a>');
    }
    response.end();
});

server.listen(3000);