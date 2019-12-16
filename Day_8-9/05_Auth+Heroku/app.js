const express = require('express'); // получаем модуль Express
const app = express(); // создаем приложение, создает объект приложения.
const userRouter = require('./api/routes/users');
const checkAuth = require('./api/middleWares/middleWares')
app.use(express.json()); //мидлвеэре. смотрит и вызывает
app.use(express.urlencoded({urlencoded: true})); //проверяет там смотрит что там и вызывает
//Для каждого типа запросов здесь определен свой обработчик Express. Когда приходит GET-запрос к приложению, то возвращаем в ответ клиенту все документы из базы данных:

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/static/index.html')

})

app.use('/users', userRouter);
module.exports = app; 