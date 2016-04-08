var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    console.log('Request for ' + pathname +' recieved.');

    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
