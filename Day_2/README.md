# Node.js


##### День 2
1. Работа с Express - добавить
2. Routing - добавить
1. MVC рассказать. - создать 
3. Работа с базами данных Mongo (Mongoose)(chapter5)
4. Модуль Request(chapter6)
5. Файловая структура проекта(chapter7)
6. Аутентификация в Node.js с использованием Passport.js(chapter8) - добавить
[Ссылка на теорию - день 2](http://# "Ссылка на теорию - день 2ы")
[Ссылка на код - день 2](http://# "Ссылка на код - день 2")

###### Работа с базами данных
###### Модуль Request
###### Файловая структура проекта
###### Аутентификация в Node.js с использованием Passport.js
###### Модульное тестирование
###### Отладка
###### Безопасность
###### Деплой вашего приложения
###### Мониторинг Node.js-приложений


## Express node js
Предварительная подготовка

Мы познакомимся с фреймворком **express**. Реализуем базовый вебсервер и опишем роуты для списка исполнителей и конкретного исполнителя.

Express — один из лучших фреймворков для Node. Он имеет отличную поддержку со стороны разработчиков и кучу полезных функций. Есть много замечательных статей по Express, которые охватывают все основы работы с ним. Однако сейчас я хочу копнуть немного глубже и поделиться своим опытом в создании полноценного веб-сайта. В целом, эта статья не только о самом Express, но и о его комбинации с другими, не менее замечательными инструментами, которые доступны для разработчиков.

Итак я создал пустую папку под наш проект. Первое, что необходимо сделать, это создать файл package.json. Это файл, в котором мы храним список установленных пакетов и их версии. Когда вы захотите развернуть ваш проект на новой машине или дать проект другому девелоперу, одной команды npm install будет достаточно, чтобы установить все зависимости, которые необходимы для проекта.

Для создания файла package.json автоматически напишем
`npm init`
на все вопросы жмем enter.

Если мы откроем файл package.json, то он практически пустой. В нем указан автор, версия и другая общая информация.

Теперь давайте установим express
`npm install express`

Эта команда установила нам express и все его зависимости. Аргумент --save мы написали, чтобы пакет был добавлен в package.json. Если мы посмотрем в него, то увидим, что у нас создался обьект dependencies, где указан express и его установленная версия.

Также в проекте у нас создалась директория node_modules. Это папка, где хранятся все библиотеки установленные с помощью npm.
Теперь давайте создадим файл server.js, который будет нашим сервером.
Для начала нам нужно подключить библиотеку express. Делается это с помощью слова require. В данном случае оно подключит пакет express из папки node_modules.
`var express = require('express');`

Дальше нам необходимо создать переменную app, которая и будет являтся нашим сервером.
`var app = express();`

Теперь мы обьявить роут для нашего приложения. Описывая роут, мы описываем, что будет происходить, когда мы зайдем на определенный урл.
```javascript
app.get('/', function (req, res) {
  res.send('Hello API');
});
```
Здесь мы описали, что мы хотим описать роут /, и когда мы будем на него заходить, то нам на странице будет выводиться Hello API. req - это request, а res - это response. И мы вызываем функцию end, чтобы закончить ответ и вывести строку на екран.

Теперь нам нужно настроить сервер, чтобы он был запущен на определенном порту. Для этого добавим

```javascript
app.listen(3012, function () {
  console.log('API app started')
})
```
Это запустит сервер на 3012 порту и когда он запустится выведет в консоль console.log.

Теперь если мы в консоли напишем node server.js, то у нас запустится сервер и выведется в консоль API app started.

Теперь если мы откроем в браузере http://localhost:3012, то у нас выведется на страницу Hello API.

Мы с вами будем делать API музыкальных исполнителей. И уже сейчас мы можем добавить роут, который будет возвращать нам список исполнителей.

Давайте создадим массив исполнителей, который пока будет статическим и опишем роут /artists для него.

Артистов мы будем хранить как массив обьектов с ID и названиями.
```javascript
var artists = [
  {
    id: 1,
    name: 'Metallica'
  },
  {
    id: 2,
    name: 'Iron Maiden'
  },
  {
    id: 3,
    name: 'Deep Purple'
  }
];
```

и добавим роут
```javascript
app.get('/artists', function (req, res) {
  res.send(artists);
});
```
в котором отдадим описаных исполнителей.

Не забывайте также о том, что мы с вами еще не реализовали автоматической перезагрузки сервера при изменении файлов. Это значит, что каждый раз, когда вы сделали изменение вам нужно остановить вебсервер с помощь ctrl+c либо command+c и запустить заново.

Если мы перезапустим вебсервер и зайдем на http://localhost:3012/artists, то увидим что у нас отрендерился спсок исполнителе.

Как вы видите у меня он красиво выглядит, а у вас скорее всего он отображается просто как текст в одну строчку.

Для красивого отображения JSON вы можете в google chrome установить плагин JSON Viewer.

Теперь давайте опишем роут, который будет возвращать отдельного исполнителя. Для того, чтобы описать урл вида /artists/1 нам необходимо вместо 1 задать динамический параметр.

```javascript
app.get('/artists/:id', function (req, res) {
  res.send('test');
});
```
Теперь что бы мы не писали вместо id, у нас всегда будет срабатывать этот обработчик. Получить значение динамического id можно из req.params, где содержатся все параметры. Давайте законсолим req.params.

И теперь давайте найдем необходимого исполнителя в массиве
```javascript
app.get('/artists/:id', function (req, res) {
  var artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id);
  })
  console.log(artist);
  res.send(artist);
});

```
Мы использовали обычный find из javascript, чтобы найти обьект в массиве. Единственный нюанс в том, что все параметры из урла являются строками. А наши ID это Number. Поэтому мы приводим req.params.id к Number.

Итак в этом уроке мы познакомились с фреймворком express. Реализовали базовый вебсервер и описали роуты для списка исполнителей и конкретного исполнителя.

В основе фреймворка Express лежит Connect. Это набор middleware-функций, которое поставляется вместе с множеством полезных вещей. Если Вам интересно, что же такое middleware-функция, вот Вам небольшой пример:

```javascript
var connect = require('connect'),
    http = require('http');
 
var app = connect()
    .use(function(req, res, next) {
        console.log("That's my first middleware");
        next();
    })
    .use(function(req, res, next) {
        console.log("That's my second middleware");
        next();
    })
    .use(function(req, res, next) {
        console.log("end");
        res.end("hello world");
    });
http.createServer(app).listen(3000);
```
Middleware-функцией в основном зовётся функция, которая принимает в качестве параметров request и responce-объекты, а также callback-функцию, которая будет вызвана следующей. Каждая middleware-функция решает: либо ответить, используя responce-объект, либо передать поток следующей callback-функции. В примере выше, если Вы уберёте вызов метода next() во второй функции, строка “hello world” никогда не будет отправлена клиенту. В целом, именно как работает Express. В нём есть несколько предопределённых middleware-функций, которые, несомненно, сэкономят Вам кучу времени. Таковой, например, является Body-парсер, разбирающий тело запроса и поддерживающий типы содержимых application/json, application/x-www-form-urlencoded и multipart/form-data. Или Cookie-парсер, который разбирает куки-заголовки и заполняет поле req.cookies объектом, ключом которого будет имя куки.

Фактически, Express обёртывает собой Connect-фреймворк, дополняя его некоторой функциональностью, такой, например, как логика маршрутизации, которая делает прохождение процесса маршрутизации более гладким. Ниже приведён пример обработки GET-запроса:

```javascript
app.get('/hello.txt', function(req, res){
    var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});
```

Системой управления базами данных будет Express. Кроме того, в качестве вспомогательного средства для работы с JSON, используем пакет **body-parser**. Установим всё это:

`npm install express body-parser`

Ещё, я очень рекомендую установить Nodemon как dev-зависимость. Это простой маленький пакет, который, при изменении файлов, автоматически перезапускает сервер.

Для установки этого пакета выполните команду:

`npm install --save-dev nodemon`

Затем можно добавить следующий скрипт в файл package.json:

```javascript
// package.json
  "scripts": {
    "dev": "nodemon server.js"
  },
```

Готовый package.json будет выглядеть примерно так:

```javascript
// package.json
{
  "name": "notable",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mongodb": "^2.2.16"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}
```

Теперь создадим файл *server.js* и приступим к работе.

**Предварительная подготовка**

В качестве фреймворка мы планируем использовать Express. Системой управления базами данных будет MongoDB. Кроме того, в качестве вспомогательного средства для работы с JSON, используем пакет body-parser. Установим всё это:

`npm install express mongodb body-parser`

Ещё, я очень рекомендую установить Nodemon как dev-зависимость. Это простой маленький пакет, который, при изменении файлов, автоматически перезапускает сервер.

Для установки этого пакета выполните команду:

`npm install --save-dev nodemon`

Затем можно добавить следующий скрипт в файл package.json:

```javascript
// package.json
  "scripts": {
    "dev": "nodemon server.js"
  },
```

Готовый package.json будет выглядеть примерно так:

```javascript
// package.json
{
  "name": "notable",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mongodb": "^2.2.16"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}
```

Теперь создадим файл server.js и приступим к работе над API.

### Что делает body-parser с выражением  в Express?

Он анализирует тело запроса HTTP. Это обычно необходимо, когда вам нужно знать больше, чем только URL-адрес, который вы нажимаете, особенно в контексте HTTP-запроса POST или PUT PATCH, где информация, которую вы хотите, содержится в теле.

В основном это промежуточное программное обеспечение для разбора JSON, обычного текста или просто возврата необработанного объекта Buffer, с которым вам нужно иметь дело, как вам нужно.

body-parser извлекает всю часть тела входящего потока запросов и предоставляет его на **req.body.**

Среднее программное обеспечение ранее было частью Express.js, но теперь вы должны установить его отдельно.

Этот модуль body-parser анализирует данные JSON, буфера, строки и URL-адреса, переданные с использованием запроса HTTP POST. Установите body-parser с помощью NPM, как показано ниже.

`npm install body-parse`

body-parser извлекает всю часть тела входящего потока запросов и предоставляет его на req.body как нечто более легкое для взаимодействия. Вам это не нужно само по себе, потому что вы могли бы все это сделать сами. Тем не менее, он, скорее всего, сделает то, что вы хотите, и избавит вас от неприятностей.

Пойти немного глубже; body-parser дает вам промежуточное программное обеспечение, которое использует nodejs/zlib, чтобы разархивировать входящие данные запроса, если он заархивирован и stream-utils/raw-body, чтобы дождаться полного, необработанного содержимого тела запроса до "разбора" (это означает, что если вы не собираетесь использовать тело запроса, вы просто теряете некоторое время).

После получения необработанного содержимого body-parser проанализирует его с использованием одной из четырех стратегий в зависимости от конкретного промежуточного программного обеспечения, которое вы решили использовать:

bodyParser.raw(): фактически не анализирует тело, а просто выводит содержимое буферизованного содержимого из a Buffer в req.body.

bodyParser.text(): Читает буфер как обычный текст и предоставляет результирующую строку на req.body.

bodyParser.urlencoded(): анализирует текст в виде URL-кодированных данных (так как браузеры, как правило, отправляют данные формы из регулярные формы, установленные в POST) и выдает результирующий объект (содержащий ключи и значения) на req.body. Для сравнения; в PHP все это автоматически выполняется и отображается в $_POST.

bodyParser.json(): Разбирает текст как JSON и выдает результирующий объект на req.body.

Только после установки req.body в желаемое содержимое он вызовет следующее промежуточное программное обеспечение в стеке, которое затем сможет получить доступ к данным запроса, не задумываясь о том, как его распаковать и проанализировать.

Вы можете обратиться к body-parser github, чтобы прочитать их документацию, в нем содержится информация о его работе.

### Перезагружаем node с помощью nodemon

Абсолютно у всех разработчиков знакомство с nodejs начинается с того, что после каждого изменения нужно перезагружать сервер. Поэтому, в этом видео мы разберем, как сделать так, чтобы сервер перегружался автоматически.

Самый популярный вариант - это nodemon. То есть идея состоит в том, что в development окружении мы хотим, чтобы nodemon следил за файлами, которые мы меняем и просто перезапускал сервер, если эти файлы относятся к серверу.

У меня сейчас есть пустой проект с index.js, куда я установил nodemon.

В документации nodemon первой строчкой идет, что вы можете установить его глобально. Пожалуйста, не ставьте никогда пакеты глобально. Все нужные пакеты должны быть внутри, а не снаружи. Ни один разработчик не хочет склонировать проект, а потом сидеть и разбираться, а какие же внешние зависимости и каких версий ему требуются.

Для установки этого пакета выполните команду:

`npm install --save-dev nodemon`

Затем можно добавить следующий скрипт в файл package.json:

```javascript
// package.json
  "scripts": {
    "dev": "nodemon server.js"
  },

```

Как мы видим он запустился. Нам вывелось, что он вотчит все файлы в нашей папке и запускает команду node server.js при изменении любого файла.

Теперь, если мы изменим наш server.js, то nodemon перезапустит сервер.

`console.log('nodemon?')`


### APIAPI
CRUD is an acronym for Create, Read, Update and Delete. It is a set of operations we get servers to execute (POST, GET, PUT and DELETE respectively). This is what each operation does:
###### Create (POST) - Make something
###### Read (GET)_- Get something
###### Update (PUT) - Change something
###### Delete (DELETE)- Remove something
If we put CRUD, Express and MongoDB together into a single diagram, this is what it would look like:
 

https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

Доступ к документам можно организовать по HTTP, используя CRUD-подобное (Create, Read, Update, Delete) RESTful API:
###### GET /documents - возвращает список документов
###### POST /documents/ - создает новый документ
###### GET /documents/:id - возвращает конкретный документ
###### PUT /documents/:id - изменяет конкретный документ
###### DELETE /documents/:id - удалет конкретный документ
HTTP-метод очень важен. Обратите внимание, что список документов и создание нового документа имеют один и тот же URL, а результат зависит от того, какой HTTP-метод используется (PUT или GET). Express корректно обработает каждый из этих URL и выполнить для каждого из них нужный код.

### HTTP-метод имеет значение
Если Вы до сих пор не использовали в своей работе данный подход, то просто запомните - HTTP-метод имеет значение. Так, например, в прошлой части руководства мы определили следующий метод:
```javascript
app.get('/', function(req, res) {
  // Ответ на GET для '/'
  // ...
});
```
Если Вы создадите форму, которая будет выполнять POST для того же URL, то Express будет возвращать ошибку, так как не задан соответствующий обработчик.

Так же напомню, что в прошлой части мы добавили в конфигурацию настройку express.methodOverride. Причиной этому является тот факт, что мы не можем полагаться на браузер в вопросах определения HTTP-методов (например, таких как DELETE). Но мы можем использовать некоторое соглашение, чтобы обойти эту проблему: формы могут использовать скрытые поля, которые Express будет интерпретировать как “настоящий” HTTP-метод.

Иногда этот подход к RESTful HTTP API может показаться неизящным, но плюсом данного соглашения является огромное количество веб-приложений, которые успешно используют REST.

#### Справочник CRUD заглушек
Вот как должны выглядеть CRUD заглушки:
```javascript
// Список
app.get('/documents.:format', function(req, res) {
});

// Создать
app.post('/documents.:format?', function(req, res) {
});

// Прочитать
app.get('/documents/:id.:format?', function(req, res) {
});

// Изменить
app.put('/documents/:id.:format?', function(req, res) {
});

// Удалить
app.del('/documents/:id.:format?', function(req, res) {
});

```

**Обратите внимание, что Express использует del вместо delete.**


Задание соответствия между разными HTTP-запросами и разными частями нашего кода называется «маршрутизация» («routing», роутинг). Давайте тогда создадим модуль под названием router.

###### Предварительная подготовка

В качестве фреймворка мы планируем использовать **Express**. Системой управления базами данных будет **MongoDB**. Кроме того, в качестве вспомогательного средства для работы с JSON, используем пакет body-parser. Установим всё это:

`npm install express mongodb body-parser`

Ещё, я очень рекомендую установить Nodemon как dev-зависимость. Это простой маленький пакет, который, при изменении файлов, автоматически перезапускает сервер.

Для установки этого пакета выполните команду:

`npm install --save-dev nodemon`

Затем можно добавить следующий скрипт в файл package.json:

// package.json
  "scripts": {
    "dev": "nodemon server.js"
  },

Готовый package.json будет выглядеть примерно так:

// package.json
{
  "name": "notable",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mongodb": "^2.2.16"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

Теперь создадим файл server.js и приступим к работе над API.


Простая разработка приложений на Node.js и MongoDB с помощью Mongoose
Node.js и MongoDB  -- это пара, каждый из которой создан друг для друга. 

Умение использовать JSON сверх меры и JavaScript делают разработку очень простой. 

CRUD это то, что необходимо для большинства разрабатываемых приложений. Ведь информацию нужно постоянно создавать, читать, редактировать и удалять.

Сегодня мы разберем примеры кода для обработки операций CRUD в приложении, использующем Node.js, ExpressJS и MongoDB. Воспользуемся популярным Node-пакетом, mongoose .

Эти примеры кода использовались для создания Node.js RESTful API , так как при создании API необходимо использование операций CRUD. 

###### Что такое Mongoose?
**mongoose** -- пакет объектного моделирования для Node, который в основном работает как ORM, которые вы можете встретить в других языках (вроде Eloquent for Laravel).

Mongoose позволяет нам обращаться к MongoDB с помощью команд CRUD просто и легко. Для использования mongoose добавьте ее в свой Node-проект следующей командой:
`$ npm install mongoose --save`

Теперь, когда пакет установлен, просто прикрепите его к проекту:
`const mongoose = require('mongoose');`

Также необходимо подключиться к MongoDB (локальной или внешней):
mongoose.connect('mongodb://localhost/myappdatabase');

###### Переходим к командам.

**Определение модели**
Перед тем, как работать с CRUD-операциями, нам необходима mongoose-модель. Эти модели -- это конструкторы, которые мы определяем. Они представляют (схематически) документы, которые могут быь сохранены и извлечены из БД. 

Mongoose схема.  mongoose схема -- это то, что используется для определения атрибутов для наших документов.

Mongoose методы. Методы могут также быть определены в mongoose схеме.
Пример модели для Users

```javascript
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

Здесь рассмотрено, как схема определяется. Надо сначала прикрутить  mongoose и mongoose.Schema. Затем мы можем определить атрибуты в нашей userSchema для всего, что необходимо в профиле нашего юзера  user. Также заметьте, как можно определить вложенные объекты как в атрибуте meta.

Разрешенные типы данных SchemaTypes:
- ·         String
- ·         Number
- ·         Date
- ·         Buffer
- ·         Boolean
- ·         Mixed
- ·         ObjectId
- ·         Array


Затем создадим mongoose модель вызовом mongoose.model. Также можно создать специальные методы. Удобное, кстати, место для создания метода  хэширования пароля 

Пользовательский метод
```javascript
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema ...

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```
**ПРИМЕР ИСПОЛЬЗОВАНИЯ
ТЕПЕРЬ У НАС ЕСТЬ ПОЛЬЗОВАТЕЛЬСКАЯ МОДЕЛЬ И МЕТОД, КОТОРЫЙ МОЖНО ВЫЗВАТЬ В КОДЕ:**

```javascript
// if our user.js file is at app/models/user.js
const User = require('./app/models/user');

  
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
```

Это бесполезный пользовательский метод, но мысль в том, чтобы научиться создавать пользовательские методы и использовать их. Эту методику можно использовать для того, чтобы убедиться, что пароль hashed перед сохранением, для сравнения паролей, найти пользователей со сходными атрибутами и т. д.

##### Выполнение функции перед сохранением

Допустим, мы хотим иметь переменную created_at для фиксации времени создания записи. Можно использовать схему Schema pre метод для того, чтобы некоторые операции были выполнены перед сохранением объекта.

Ниже приведен код, который необходимо добавить к нашей схеме для того, чтобы сохранялась дата в переменной created_at при первом сохранении, и в updated_at при каждом последующем:

```javascript
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  const currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
```
Теперь при каждом сохранении будет добавляться дата. Также это отличное место для хэширования паролей и проверки, не введен ли простой текст.
Мы также можем определить еще некоторые вещи в схемах и моделях, такие как статика и индексы. Для дополнительной информации -- mongoose docs.
Создание

Мы будем использовать метод User, созданный ранее. Встроенный в модели mongoose save метод используется для создания user:// grab the user model
```javascript
const User = require('./app/models/user');

// create a new user
const newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
```



### Чтение
Может быть много причин для запроса базы данных пользователей (users). Может понадобиться отдельный пользователь, группа похожих пользователей, все пользователи и другие разные сценарии. Ниже несколько примеров:
##### Find all (найти все)
```javascript
// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
Find one (найти один)
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

Find by ID (Найти по ID)
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});
```

### Запросы

Можно также пользоваться синтаксисом MongoDB query 
```javascript
// get any admin that was created in the past month

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});
```

### Редактирование (обновление)

Здесь мы будем находить отдельного пользователя, изменять некоторые атрибуты и затем сохранять.

##### Получить пользователя, затем обновить
```javascript
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });

});
```
Следует помнить, что мы создали функцию для изменения updated_at даты, это будет также происходить при сохранении save.
Найти и обновить
Есть более простой метод, в котором нет необходимости извлекать пользователя, модифицировать и затем сохранять. Можно простоприменить mongodb команду findAndModify.
```javascript
// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```

##### Найти по ID и обновить
```javascript
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```


### Удаление

##### Получить USER, потом удалить
```javascript
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});
```

##### Найти и удалить
```javascript
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
Найти по ID и удалить
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```


