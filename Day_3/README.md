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

## Express mongodb




