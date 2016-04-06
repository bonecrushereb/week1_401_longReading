var http = require('http');
var url = require('url');

var router = require(__dirname + '/router');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for '+ pathname +' Recieved');

    router.route(pathname);

    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.write('Hello World!');
    response.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
