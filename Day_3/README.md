# Node.js

## День 3
3. Работа с базами данных Mongo (Mongoose)(chapter5)
4. Модуль Request(chapter6)
5. Файловая структура проекта(chapter7)
6. Аутентификация в Node.js с использованием Passport.js(chapter8) - добавить
- [Ссылка на теорию - день 2](http://# "Ссылка на теорию - день 2ы")
- [Ссылка на код - день 2](http://# "Ссылка на код - день 2")


## Postman
Запускаем Postman

Переходим по ссылке https://api.chucknorris.io/

Тут мы можем из готового API получить забавные ответы. 

Для того что бы воспользоваться расширенными возможностями Postman в параметры мы можем задать например - category  - "movie"


### Создание таблицы mongodb


**Теорема Брюера**
  эвристическое утверждение о том, что в любой реализации распределённых вычислений возможно обеспечить не более двух из трёх следующих свойств:
   согласованность данных (англ. consistency) — во всех вычислительных узлах в один момент времени данные не противоречат друг другу;
   доступность (англ. availability) — любой запрос к распределённой системе завершается корректным откликом;
   устойчивость к разделению (англ. partition tolerance) — расщепление распределённой системы на несколько изолированных секций не приводит к некорректности отклика от каждой из секций.

CAP-теорема

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




