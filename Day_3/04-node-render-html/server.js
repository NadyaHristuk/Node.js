var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//тут читаем описание метода urlencoded
//https://www.npmjs.com/package/body-parser#express-route-specific

app.get('/', function (req, res) {
    res.sendfile(__dirname+"/index.html");
  })
  
  app.get('/login', function (req, res) {
    res.sendfile(__dirname+"/login.html");
  })
  
 // POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body)
    console.log(req.body);
    ///login/some?filter=id&sity=kiev
    console.log(req.query);
  })


  app.listen(3100, function () {
    console.log('API app started');
  })
  