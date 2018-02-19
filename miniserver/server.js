var express = require('express');
var app = express();
var bodyParser     = require('body-parser');

var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });
app.use(json_body_parser);
app.use(urlencoded_body_parser);

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
    res.sendfile('index.html')
})

app.post('/',function(req,res){
    console.log('Request==>',req.body);
    // res.send({
    //     name: 'Tets',
    //     age: 'test',
    // });
})

app.post('/period',function(req,res){
    console.log('Request==>',req.body);
    var periods = [
        {id : 1,  days: 31},
        {id : 2, days: 20},
        null,
        {id : 4, days: 14},
    ];
    console.log('Response==>',JSON.stringify(periods[req.body.id-1]));
     res.send(JSON.stringify(periods[req.body.id-1]));
})

app.get('/camers',function(req,res){
    console.log('Request==>',req.body);
    res.send(JSON.stringify([
        {
            id: 1,
            image: '32',
            name: 'Camera 1',
            street: 'Бориспіль,  Київський шлях, 71',
            description: 'Напрямок камери: Пішохідний перехід, кінотеатр Європа',
            private: false,
            period: null,
            archive: '',   
            maxPeriod: null,       
          },
          {
            id: 2,
            image: '21',
            name: 'Camera 2',
            street: 'Бориспіль,  Київський шлях, 33',
            description: 'Напрямок камери: Перехрестя вулиць Лютнева та Київський шлях',
            private: false,
            period: null,
            archive: '',
            maxPeriod: null,
          },
          {
            id: 3,
            image: '24',
            name: 'Camera 3',
            street: 'Бориспіль,  Київський шлях, 47',
            description: 'Напрямок камери: Перехрестя вулиць Головатого та Київський шлях',
            private: false,
            maxPeriod: null,
            period: null,
            archive: '',
          },
          {
            id: 4,
            image: '42',
            name: 'Camera 6',
            street: 'Бориспіль,  Київський шлях, 3',
            description: 'Напрямок камери: Перехрестя вулиць Броварська та Київський шлях (в сторону центру міста)',
            private: false,
            maxPeriod: null,
            period: null,
            archive: '',
          }
    ]));
    
})

app.listen(8080);

console.log('Start Web Server');