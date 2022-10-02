const http = require("http");
const url = require('url');

http.createServer(function (request, response) {
	const queryStringItems = url.parse(request.url, true).query;
    const data = { message: "Hello Node World 234 567" };
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ internal: data, parameters: queryStringItems }, null, 3));
}).listen(8080);
