# Работа с базами данных

Возможно, вы уже слышали, что существуют два основных типа баз данных: SQL и NoSQL.

## SQL

Начнём с SQL. Это язык запросов, предназначенный для работы с реляционными базами данных. SQL немного отличается в зависимости от продукта, который вы используете, но базовые вещи в них тождественны.

Сами данные хранятся в таблицах. Каждая добавленная часть будет представлена в виде строки в таблице, как в Google Sheets или Microsoft Excel.

В базе данных SQL вы можете определить схемы. Они предоставят скелет для данных, которые вы собираетесь разместить. Также, перед тем, как сохранить данные, будет необходимо задать типы различных значений. Например, вам нужно будет определить таблицу для ваших пользовательских данных и сообщить базе данных, что у неё есть имя пользователя, являющееся строкой, и возраст - целый тип.

## NoSQL

С другой стороны, в последнее десятилетие стали весьма популярны NoSQL базы данных. С NoSQL вам не нужно определять схему и вы можете хранить любой произвольный JSON. Это хорошо сочетается с JavaScript, потому что мы можем легко превратить любой объект в JSON. Будьте осторожны, потому что вы никогда не можете гарантировать, что данные консистентны, и вы никогда не сможете узнать, какая структура находится в базе данных.

## Node.js и MongoDB

Существует распространённое заблуждение о Node.js, которое можно услышать довольно часто:

*«Node.js можно использовать только с MongoDB (самая популярная NoSQL база данных)».*

По моему опыту, это не так. У большинства баз данных имеются драйверы для Node.js и библиотеки в NPM. По моему мнению, они такие же простые и лёгкие в использовании, как MongoDB.



### Создание таблицы mongodb


**Теорема Брюера**

  эвристическое утверждение о том, что в любой реализации распределённых вычислений возможно обеспечить не более двух из трёх следующих свойств:
  
   согласованность данных (англ. consistency) — во всех вычислительных узлах в один момент времени данные не противоречат друг другу;
   
   доступность (англ. availability) — любой запрос к распределённой системе завершается корректным откликом;
   
   устойчивость к разделению (англ. partition tolerance) — расщепление распределённой системы на несколько изолированных секций не приводит к некорректности отклика от каждой из секций.
   

#### CAP-теорема

**MongoDB**

   humongous – огромный
   
   документо-ориентированное хранение данных (JSON-подобная схема)
   не требует описания схем данных
   
   JavaScript в качестве языка запросов к базе данных

```javascript
db.students.insert({
    name: 'Дарья',
    nickname: 'Пиратка',
    group: 'ПИ-401'
})
```

##### Выборка данных

```javascript
db.students.find(){
    "_id" : <mark>ObjectId("56cc30e2e52c943bf62fff72")</mark>,
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
```

##### Любой процесс на любой машине сам отвечает за генерацию ID'шников и не вступает в конфликты с другими
```javascript
ObjectId("56cc30e2e52c943bf62fff72")
56cc30e2 – time
e52c94 – mid
3bf6 – pid
2fff72 – inc

```
56cc30e2 e52c94 3bf6 2fff72
56cc3503 e52c94 3bf6 2fff73</span>

```javascript
function insertStudent(name, nickname, group) {
    var year = group.split('-').pop().slice(0, 1);
    db.students.insert({
        name: name,
        nickname: nickname,
        group: group,
        year: year
    });
}
```
```javascript
insertStudent('Пётр', 'petr', 'МТ-204')
```
```javascript
db.students.find()
{
    "_id" : ObjectId("56cc30e2e52c943bf62fff72"),
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
{
    "_id" : ObjectId("56cc3a2ae52c943bf62fff74"),
    "name" : "Пётр",
    "nickname" : "petr",
    "group" : "МТ-204",
    "year" : "2"
}
```

### Выборка данных
```javascript
db.students.find({
    group: 'ПИ-301'
}})

```
```javascript
db.students.find({
    course: { $lt : 3 }
})
```
Для примера ищем у всех студентов, у кого 9 оценка по ДС равна 1
```javascript
{
    name: 'Дарья',
    course : 4,
    group : 'ПИ-401',
    grades: {
        javascript: [1,0.5,1,1,1,0.5,1,1,0.5,1],
        verstka: [1,1,1,1,1,0.5,1,0.5,0.5,0.5]
    }
}
```
Для этого будет достаточно просто записать
```javascript
db.students.find({
    "grades.javascript.9": 1
})
```
```javascript
db.students.update({
    group: /3\d{2}/
}, {
    $set: {
        course: "3"
    }
}, {
    multi: true
})
```

#### Удаление
```javascript
db.students.remove({
    course: 1
})
```
### Репликация и шардирование

##### Range Based шардирование
##### Hash Based шардирование

###### Range Based vs Hash Based

    Range Based проще настроить, но возможно неравномерное распределение данных
    Hash Based «соседние данные скорее всего будут в разных шардах», зато распределение максимально равномерно

### JOIN
#### Нормализация и денормализация
#####     Транзакции и конкурентность
   Транзакции в MongoDB https://habrahabr.ru/post/153321/ 

####    MongoDriver
   MongoDB Native  -https://github.com/mongodb/node-mongodb-native
   
   Mongoose https://www.npmjs.com/package/mongoose
   
#### Для чего нужно и не нужно использовать?
       Сильные стороны MongoDB
            - Большие объемы данных
            - Гибкая модель данных (schemeless)
            - Простота
          
        Слабые стороны MongoDB
            Нормализация
            
		Так для чего нужно?
            	- Быстрые прототипы
                - Блоги
                - Эксперименты
                - проект на хакатоне
				

## Express mongodb

Простая разработка приложений на Node.js и MongoDB с помощью Mongoose
Node.js и MongoDB  -- это пара, каждый из которой создан друг для друга. Умение использовать JSON сверх меры и JavaScript делают разработку очень простой. 

CRUD это то, что необходимо для большинства разрабатываемых приложений. Ведь информацию нужно постоянно создавать, читать, редактировать и удалять.

Сегодня мы разберем примеры кода для обработки операций CRUD в приложении, использующем Node.js, ExpressJS и MongoDB. Воспользуемся популярным Node-пакетом, mongoose .

Эти примеры кода использовались для создания Node.js RESTful API , так как при создании API необходимо использование операций CRUD. Для того, чтобы увидеть эти команды в действии, прочитайте этот пост. Эта статья есть нечто большее, чем ссылка на различные команды и способы их использования.

#### Что такое Mongoose?

mongoose -- пакет объектного моделирования для Node, который в основном работает как ORM, которые вы можете встретить в других языках (вроде Eloquent for Laravel).

Mongoose позволяет нам обращаться к MongoDB с помощью команд CRUD просто и легко. Для использования mongoose добавьте ее в свой Node-проект следующей командой:

`$ npm install mongoose --save`

Теперь, когда пакет установлен, просто прикрепите его к проекту:

`var mongoose = require('mongoose');`

Также необходимо подключиться к MongoDB (локальной или внешней):

`mongoose.connect('mongodb://localhost/myappdatabase');`

Переходим к командам.

##### Определение модели

Перед тем, как работать с CRUD-операциями, нам необходима mongoose-модель. Эти модели -- это конструкторы, которые мы определяем. Они представляют (схематически) документы, которые могут быь сохранены и извлечены из БД. 

##### Mongoose схема.
mongoose схема -- это то, что используется для определения атрибутов для наших документов.

Mongoose методы. Методы могут также быть определены в mongoose схеме.

##### Пример модели для Users

```javascript
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
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
·         String
·         Number
·         Date
·         Buffer
·         Boolean
·         Mixed
·         ObjectId
·         Array

Затем создадим mongoose модель вызовом mongoose.model. Также можно создать специальные методы. Удобное, кстати, место для создания метода  хэширования пароля 

#### Пользовательский метод

```javascript
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema ...

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
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

ПРИМЕР ИСПОЛЬЗОВАНИЯ

ТЕПЕРЬ У НАС ЕСТЬ ПОЛЬЗОВАТЕЛЬСКАЯ МОДЕЛЬ И МЕТОД, КОТОРЫЙ МОЖНО ВЫЗВАТЬ В КОДЕ:

```javascript
// if our user.js file is at app/models/user.js
var User = require('./app/models/user');
  
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

Выполнение функции перед сохранением

Допустим, мы хотим иметь переменную created_at для фиксации времени создания записи. Можно использовать схему Schema pre метод для того, чтобы некоторые операции были выполнены перед сохранением объекта.

Ниже приведен код, который необходимо добавить к нашей схеме для того, чтобы сохранялась дата в переменной created_at при первом сохранении, и в updated_at при каждом последующем:

```javascript
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
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

### Создание

Мы будем использовать метод User, созданный ранее. Встроенный в модели mongoose save метод используется для создания user:

```javascript
// grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
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

```javascript
Find all (найти все)
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

**Можно также пользоваться синтаксисом MongoDB query** 

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

#### Редактирование (обновление)

Здесь мы будем находить отдельного пользователя, изменять некоторые атрибуты и затем сохранять.

Получить пользователя, затем обновить

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

**Найти и обновить**

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

**Найти по ID и обновить**

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

**Получить USER, потом удалить**

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

**Найти и удалить**

```javascript
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```
**Найти по ID и удалить**

```javascript
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```

---

## Node.js и PostgreSQL

Для простоты мы будем использовать SQL в следующем примере. Мой выбор — PostgreSQL.

Чтобы запустить PostgreSQL, вам необходимо установить его на свой компьютер. Если вы используете Mac, вы можете использовать Homebrew для установки PostgreSQL. В противном случае, если вы работаете в Linux, вы можете установить его с помощью своего диспетчера пакетов.

![](NodeHeroEbook-TheComplete-010.png)

Для получения дополнительной информации ознакомьтесь с этим отличным [руководством](http://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/) по началу работы с вашей первой базой данных.

Если вы планируете использовать инструмент для просмотра базы данных, я бы рекомендовал утилиту для командной строки — `psql`. Она поставляется вместе с сервером PostgreSQL. Вот небольшая [инструкция](http://www.postgresonline.com/downloads/special_feature/postgresql83_psql_cheatsheet.pdf), которая пригодится, если вы начнёте использовать `psql`.

Если вам не нравится интерфейс командной строки, вы можете использовать [pgAdmin](https://www.pgadmin.org/), который является инструментом с открытым исходным кодом и предназначен для администрирования PostgreSQL.

Обратите внимание, что SQL — это сам по себе язык программирования. Мы не будем рассматривать все его возможности, а только наиболее простые. Если вам потребуется глубже изучить SQL, то в интернете есть много отличных онлайн-курсов, охватывающих все основы [PostgreSQL](https://www.pluralsight.com/courses/postgresql-getting-started).

## Взаимодействие Node.js с базой данных

Во-первых, мы должны создать базу данных, которую мы будем использовать. Для этого введите следующую команду в терминал: `createdb node_hero`.

Затем мы должны создать таблицу для наших пользователей.

```sql
CREATE TABLE users(
  name VARCHAR(20),
  age SMALLINT
);
```

Наконец, мы можем вернуться к программированию. Вот как вы можете взаимодействовать с вашей базой данных через вашу программу на Node.js:

```javascript
'use strict'

const pg = require('pg')
const conString = 'postgres://username:password@ localhost/node_hero' // Убедитесь, что вы указали данные от вашей базы данных

pg.connect(conString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})
```

Это был простой пример — "hello world" в PostgreSQL. Обратите внимание, что первым параметром является строка, которая является нашей SQL-командой, второй параметр представляет собой массив значений, которыми мы хотели бы параметризовать наш запрос.

Большой ошибкой с точки зрения безопасности был бы ввод данных, пришедших от пользователя, в том виде, в котором они были переданы. Приведённая выше функция `client.query` защищает вас от SQL-инъекций, являющихся распространённым видом атаки, когда злоумышленник пытается внедрить в запрос произвольный SQL-код. Всегда учитывайте это при создании любого приложения, в котором возможен ввод данных со стороны пользователя. Чтобы узнать больше, ознакомьтесь с нашим [контрольным списком безопасности Node.js-приложений](https://blog.risingstack.com/node-js-security-checklist/).

*Примечание переводчика: обычно никто не пишет SQL-запросы руками, вместо этого используют так называемые конструкторы запросов (query builder), например [sequelize](http://docs.sequelizejs.com/) и [knex](http://knexjs.org/).*

Давайте продолжим наш предыдущий пример.

```javascript
app.post('/users', function (req, res, next) {
  const user = req.body

  pg.connect(conString, function (err, client, done) {
    if (err) {
      // Передача ошибки в обработчик express
      return next(err)
    }
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], function (err, result) {
      done() // Этот коллбек сигнализирует драйверу pg, что соединение может быть закрыто или возвращено в пул соединений
      if (err) {
        // Передача ошибки в обработчик express
        return next(err)
      }
      res.send(200)
    })
  })
})
```

Достижение разблокировано: пользователь сохранён в базе данных! :) Теперь давайте попробуем прочитать эти данные. Затем добавим в наше приложение новый роут для поиска пользователей.

```javascript
app.get('/users', function (req, res, next {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      // Передача ошибки в обработчик express
      return next(err)
    }
    client.query('SELECT name, age FROM users;', [], function (err, result) {
      done()
      if (err) {
        // Передача ошибки в обработчик express
        return next(err)
      }
      res.json(result.rows)
    })
  })
})
```

## Это было не так сложно, не так ли?

Теперь вы можете запустить любой сложный SQL-запрос, который вы только сможете вообразить, в вашем Node.js-приложении.

>  *С помощью этой техники вы можете постоянно хранить данные в своём приложении, а благодаря трудолюбивой команде разработчиков модуля node-postgres это проще простого.*

Мы рассмотрели все основы, которые вы должны знать об использовании баз данных в Node.js. Теперь попробуйте создать что-то самостоятельно.

---
