const http = require("http");

http.createServer(function (request, response) {
    const data = { message: "Hello Node World 234 567" };
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ data: data, url: request.url }, null, 3));
}).listen(8080);
