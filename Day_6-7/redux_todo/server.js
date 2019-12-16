const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const routerTodo = require('./routes/todo_routes');

const config = require('./config/config');
const DB = config.Mongo_url;
const PORT = config.PORT;

mongoose.connect(DB, {useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/tasks', routerTodo);

app.use((req, res, next) => {
    res
      .status(404)
      .json({err: '404'});
  });
  
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res
      .status(500)
      .json({err: '500'});
  })

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});