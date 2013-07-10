var express = require('express');

var indexBuf = fs.readFileSync('index.html', String);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(indexBuf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
