var express = require('express');
var app = express();
var bodyParser     = require('body-parser');

var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
app.use(json_body_parser);
app.use(urlencoded_body_parser);

app.get('/', function(req, res){
    res.sendfile('index.html')
})

app.post('/',function(req){
    console.log('Request==>',req.body)
})

app.listen(8080);

console.log('Start Web Server');