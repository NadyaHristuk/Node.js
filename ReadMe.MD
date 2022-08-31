Nadin
  4:11 PM
Приветик!
Есть какие-то вопросы или проблемы с 1 - 3 домашними работами?
white_check_mark
eyes
raised_hands







Наташа Гримуд
  4:47 PM
привет.
Спасибо за беспокойство! так неожиданно... :-)
Я только приступила к первой. Пересматриваю видео и делаю по ходу.
попробую сама, будут вопросы - напишу.
:+1:
1



Наташа Гримуд
  7:08 PM
а что значит "TODO: задокументировать каждую функцию"?
это комментарии по ходу кода написать, что каждая функция делает?


Nadin
  7:08 PM
Хорошей практикой считается - описание того кода, который вы пишите
то есть вы оставляете комментарий. который кратко описывает для чего эта функция. что она делает, может какие-то особенности.
что бы разработчикам после вас было проще читать код (edited) 


Наташа Гримуд
  7:59 PM
ок, поняла.
подскажи, для  function addContact(name, email, phone) можно id генерировать через shortid? (мы на реакте так делали)

1 reply
2 years agoView thread


Наташа Гримуд
  11:18 PM
я попыталась добавить тебя в контибьюторы? есть контакт?
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/01-node-basics
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Nadin
  12:21 PM
Привет, да. добавилась
12:22
node_modules - заливтаь на гит не надо, сначала добавляем файл - .gitignore а только потом добавляем первый коммит,
если сначала сделать коммит, а потом добавить .gitignore - то папка с node_modules - уже будет на гите (edited) 


Наташа Гримуд
  12:30 PM
та я вот после коммита и увидела, что у меня все на гит пошло. Не создала гитигнор при создании репозитория.
Как корректно убрать ее оттудова? если я в новой ветке буду работать - там будет свой гитигнор или он общий на весь репозиторий?
прям всегда с этим гитом какие-то траблы вылазят... :slightly_smiling_face: .


34 replies
Last reply 2 years agoView thread


Nadin
  12:33 PM
в принципе все верно, но вам не показывли более современные варианты кода с промиссами? и async await а то как бы уже почти 2020 завершается
12:33
а вы все с колбеками


Наташа Гримуд
  6:33 PM
Надин, привет!
ест парочка тупых вопросов по второй домашке....  поможешь?
я попыталась написать домашку по аналогии, как указано в учебном вебинаре....
у нас есть файл с контактами contacts.json, я описала server.js, старт которого вызывается в index.js,
написала роуты и контроллеры.....
как проверять все это - вот тут не очень понимаю.... :disappointed:
сначала я в терминале должна запустить сервер через команду "node index.js", правильно?
(если что, то у меня в этом месте уже ругается: Error: listen EADDRINUSE: address already in use :::3000)
и как потом проверять корректность работы моих запросов  - через терминал или через постмен?
I need help....


Nadin
  8:27 PM
так, порт, просто поменяй
8:27
у тебя 3000 порт - уже занят. уже какое-то проиложение там уже работает
8:28
просто ручками ставишь любое число от 3000 до 65000
8:28
через терминал, ты никак не проверишь только через постмен


Nadin
  8:28 PM
если нужна такая псерьезная помощь - то надо завтра созвониться через зум, что бы я могла тобой поуправлять, а ты разберешься как это работает


17 replies
Last reply 2 years agoView thread


Наташа Гримуд
  2:38 AM
спасибо за помощь!
запосы поганяла через Postman, вроде все отработало.
можно проверять.
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/02-express
только мои node modules, удаленные в ветке 01, появились в ветке 02, хотя уже были добавлены в .gitignore (edited) 
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Nadin
  5:46 PM
node_modules - не надо заливать на Гит ))

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
5:47
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/02-express/user - вы работаете с сущносттью КОнтакты, и соответственно все названия должны быть от Контактов.

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
5:47
в Следующей дз у вас уже будут Юзеры, и вот их надо будет называть через - user
5:48
В папку Юзер не надо класть server.js - не правильная архитектура

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
5:49
ваша папка Юзер должна быть api а вот user.contacts.js - вообще переменовать в контакт.функции. и вместе с контороллерами и роутерами положить в папку - контакты

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
5:49
Ожидаю исправлений. пока поставила 3


Наташа Гримуд
  11:27 PM
внесла исправления, можно проверять


Наташа Гримуд
  2:22 PM
день добрый!
запушила дз №3
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/03-mongodb
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Nadin
  8:47 PM
ДОбрый день!
Замечания по ДЗ - 3
node_modules - не заливаем на гит
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/03-mongodb/api/server.js#L55 - весь не нужный код удаляем
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/03-mongodb/api/contacts - называйте файлы единообразно, если контроллеры и роуты через точку называете, то и схему тоже лучше через точку.
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/03-mongodb/api/contacts/contact.controller.js#L5 - вы работаете с Контактами, откуда в названиях - UserListControllers - про юзеров - getUserList, getUserById, createUser, updateUser, deleteUser, checkUserInList и т.д.

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Nadin
  8:50 PM
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/pull/4 - померджи пожалуйста конфликты, что бы я могла слить ветки


6 replies
Last reply 2 years agoView thread


Наташа Гримуд
  12:41 AM
Замечания по Д№3 исправила:
-весь не нужный код удалила
схему  через точку переименовала
вы работаете с Контактами, откуда в названиях - Use..... так было сделано в прошлой домашке, тут использовался код пред.домашки => оттудова и пошло... Исправила названия где были юзеры на контакт.
я не пойму, почему node_modules попадают в ветку - я их не заливала.
node_modules прописаны в гитигноре. :disappointed: Как мне сейчас корректно их удалить, чтобы они там не появлялись
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Nadin
  12:36 PM
с нод. модулями - там сложная история


Nadin
  12:42 PM
вы сделали первый коммит - у вас создался "слепок" вашего репозитория и он был отправлен на гит.
вы добавили уже после "слепка" гитиногр - но в слепке есть эти модули. и он делает точно по "слепку" - если там были. значит должны быть, и гитигнор просто инерируется
что можно сделать. спулить мастер, убить у себя руками папку нодмодулей и обратно запушить без этой ветки. и из мастера в котором нет нод. модулей - отбранчевать ветку и в ней уже сделать ручками "npm i" , только так
(edited)


3 replies
Last reply 2 years agoView thread


Наташа Гримуд
  12:15 AM
сделала ДЗ№4
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/04-auth
нодмодули удалось побороть.
по дз№3 я так и не разобралась с конфликтами. Можете мне показать как это правильно делать?
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


9 replies
Last reply 2 years agoView thread


Nadin
  5:14 PM
Замечания по 4 дз
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/.env - нельзя этот файл заливать на гит.
{ expiresIn: 172800 } // two deys  (https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.controllers.js#L49)- магичесские числа, считается плохой практикой и антипатерно программирования - https://refactoring.guru/ru/replace-magic-number-with-symbolic-constant и в библиотеке - jsonwebtoken в поле - expiresIn давно можно писать обычным удобным читаемым языком - https://www.npmjs.com/package/jsonwebtoken - "expiresIn: expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms")."
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.helpers.js - тут тогда можно было еще объеденить фунцию - и немного изменить ваш хелпер
async function updateToken(id, newData) {
  return await userModel.findByIdAndUpdate(id,  {
          $set: newData,
        },
        { new: true }
      );
}
и тогда мы могли бы  вызывали бы ее в https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.controllers.js#L51 - updateToken(user._id, token :token});
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.controllers.js#L68 - updateToken(user._id, token :null});
еще сюда и фунцию - https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.controllers.js#L89 бы добавили updateToken(req.params.id, req.body)
но тогда надо и все название этой функции еще заменить на не updateToken а на что-то более общее


Nadin
  11:59 PM
что бы вот так вообще обращения к бд не выносить в хелперы, есть вот такой вариант кода
const mongoose = require('mongoose');
const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscription: {
    type: String,
    enum: ['free', 'pro', 'premium'],
    default: 'free',
  },
  token: { type: String, required: false },
});

// Static methods
userSchema.statics.findUserByIdAndUpdate = findUserByIdAndUpdate;
userSchema.statics.findUserByEmail = findUserByEmail;
userSchema.statics.updateToken = updateToken;

async function findUserByIdAndUpdate(userId, updateParams) {
  return this.findByIdAndUpdate(
    userId,
    {
      $set: updateParams,
    },
    {
      new: true,
    },
  );
}

async function findUserByEmail(email) {
  return this.findOne({ email });
}

async function updateToken(id, newToken) {
  return this.findByIdAndUpdate(id, {
    token: newToken,
  });
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
- и потом когда надо обратится в другом файле к фунции поиска по емейлу например -
const userModel = require('..user.model');
какие то строки кода и потом 
нам надо найти кого-то по емейлу 
await userModel.findUserByEmail(email);
(edited)


3 replies
Last reply 2 years agoView thread


Наташа Гримуд
  12:37 PM
. env   есть у меня в  .gitignore.  Мне непонятно, почему он залился на гитхаб, раз он есть в гитигноре. В предыдущих ветках он не заливался на гитхаб.


Nadin
  1:08 PM
есть возможность со мной по зуму поговорить?
1:08
привет


Наташа Гримуд
  1:40 PM
привет! запушила кизменения по 4й ломашке, но у меня ощущение, что я все поломала... :slightly_smiling_face:


2 replies
Last reply 2 years agoView thread


Наташа Гримуд
  1:41 PM
к зуму смогу, минут через 5


4 replies
Last reply 2 years agoView thread


Nadin
  6:04 PM
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/server.js - или я под конец дня ослепла, что тоже может быть. но где подключение к базе? я уже 3 раза пересмотрела этот файл, и я не вижу подключения к монгусу. я даже не вижу что бы вы его тут конектили к серверу (edited) 

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
6:05
как я могу зарегется, или потестить работу роутов, я честно не вижу подключения к базе
6:06
https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/blob/04-auth/api/users/user.shema.js - я вижу схему, но не вижу подключения

GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.


Наташа Гримуд
  6:28 PM
прекрасно помержили конфликты - поломалось все, что до этого работало. )))
Спасибо.
сейчас добавлю - потестирую. отпишусь


Nadin
  6:29 PM
блин (( сори, это из за мерджа - прости!!!


Наташа Гримуд
  8:16 PM
та все... я окончательно запуталась с updateToken....
коннект с БД добавила.
Registration user у меня получился, а дальше застопорилась.....


Nadin
  10:19 PM
так, сори, давай для тех, у кого уже голова не варит, мы про какую дз, и про какую часть задания?


5 replies
Last reply 2 years agoView thread


Наташа Гримуд
  11:53 PM
привет!
только сегодня увидела твой ответ и в общем, так и сделала - вернула ДЗ №4 к прежнему работающему варианту.
сделала дз 5.
наверное можно проверять... https://github.com/NataliiaHrymud/GoIt-node.js-homeworks/tree/05-images
GitHubGitHub
NataliiaHrymud/GoIt-node.js-homeworks
node.js-homeworks. Contribute to NataliiaHrymud/GoIt-node.js-homeworks development by creating an account on GitHub.
:raised_hands:
1



Nadin
  9:43 AM
привет, оценку поставила,
ветки слила (edited) 

Добрый день!
по условиям сдачи домашних работ - каждую домашнюю работу надо загружать в отдельную ветку (https://github.com/goitacademy/nodejs-homework)
папку node_modules - не заливают в гит, а добавляют в .gitignore
для того, что бы каждый раз не указывать - "./db/contacts.json" - у вас в задании необходимо было сделать переменную const contactsPath = ; надо было записать вот так - что бы показать, что вы поняли как работают методы модуля path" 
const contactsPath = path.join(__dirname, "./db/contacts.json");

GitHubGitHub
goitacademy/nodejs-homework
Contribute to goitacademy/nodejs-homework development by creating an account on GitHub.

GitHubGitHub
pashadidychenko/01-node-basics
Contribute to pashadidychenko/01-node-basics development by creating an account on GitHub.

GitHubGitHub
pashadidychenko/01-node-basics
Contribute to pashadidychenko/01-node-basics development by creating an account on GitHub.
white_check_mark
eyes
raised_hands







Pasha
  9:41 PM
Папку node_modules залило случайно, я сперва закоментировал домашку и только потом заметил что нету файла гит игнор, добавил и запушил, а оно запушило все. Домашку переделал и залил в новую ветку,  contactsPath переделал. Хотел еще спросить, в примере кода есть коментарий "// TODO: задокументировать каждую функцию" что именно требуется сделать, написать код или еще что то дополнительно .


Nadin
  9:43 AM
Хорошей практикой считается добавлять комментарий к коду - что какая функция делает
Это называется задокументировать код
9:44
Упрощает работу с кодом для других разработчиков


Pasha
  10:15 AM
Я понял спасибо, запушил исправленую версию, добавил комментарии к функциям и ссылку на скриншот в реадми файл.
:+1:
1



Pasha
  12:57 PM
Добрый день, запушил вторую домашку.


Nadin
  1:01 PM
https://github.com/pashadidychenko/GoIT-Node.js-Homework/blob/01-node-basics/contacts.js - привет, это же твоя первая домашка?

GitHubGitHub
pashadidychenko/GoIT-Node.js-Homework
Contribute to pashadidychenko/GoIT-Node.js-Homework development by creating an account on GitHub.


Pasha
  1:03 PM
Эта да, там новая ветка 02-express


Nadin
  1:03 PM
я знаю где новая ветка
1:03
меня именно этот код инетресует


Pasha
  1:04 PM
Да, это переделанная первая


Nadin
  1:05 PM
вопрос - вам работу с промисами и через async await - показывали, а не через колбеки?
1:05
а то, как бы уже 2020 год, и уже колбеки, не очень модная тема ))
1:05
и относительно ноды тоже )
1:06
то есть да. по смыслу - ок, сделанно через колбеки. но, можно и более современными методами делать ))


Pasha
  1:07 PM
А можете пример показать. Переделать что-то на современный лад


Nadin
  1:07 PM
да, сек, покажу
1:08
пример через чистый промис.
// Node.js program to demonstrate  
// the fsPromises.readFile() method  

// Include fs module  
var fs = require('fs');  
const fsPromises = require('fs').promises; 

// Use fsPromises.readFile() method 
// to read the file  
fs.promises.readFile("./GFG_Test.txt") 
.then(function(result) { 
  console.log(""+result); 
}) 
.catch(function(error) { 
   console.log(error); 
})
1:08
вот статейка, в ней показыватеся разница в использовании fs и fs.promises - https://medium.com/@hugolarrousse/read-write-a-file-node-js-2019-fs-promises-d234ca00f851

MediumMedium
Read/Write a file with Node.js in 2019
bye bye callbacks! Say hi to async/await + fs promises
Reading time
2 min read
Sep 26th, 2019 (20 kB)
https://medium.com/@hugolarrousse/read-write-a-file-node-js-2019-fs-promises-d234ca00f851



Pasha
  1:09 PM
Ок, почитаю, спасибо.


Nadin
  1:09 PM

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
вот это работа функции через колбеки.
но в ноде уже добавили возможность работать через промисы. добавляем const fs = require('fs').promises; и теперь функция возвращает промис а не колбек.
Но  уже есть промиc, тебе не надо использовать кол-бек. достаточно написать
const data = await fs.readFile("./db/contacts.json", "utf-8");
а обработку ошибок надо делать через - try/catch
(edited)
1:10
сори это копипаст был для другой девушки
1:10
но у нее та же была особенность
1:12
async function addContact(name, email, phone) {
  try {
  const contactsList = JSON.parse(
      await fsPromises.readFile("./db/contacts.json", "utf-8")
    );
    const newContact = {
      id: contactsList.length + 1,
      name,
      email,
      phone,
    };
    const newList = [...contactsList, newContact];
    await fsPromises.writeFile(contactsPath, JSON.stringify(newList ), "utf-8");
    console.table(newList);
  } catch (err) {
    throw err;
  }
}
1:13
но вначале файла мы должны указать что берем промисы из модуля fs  - const { promises: fsPromises } = fs;
1:13
если будут вопросы - спрашивайте


Nadin
  1:25 PM
https://github.com/pashadidychenko/GoIT-Node.js-Homework/blob/02-express/api/controllers/contacts.js - почему тут появились - синхронные методы? их используют крайне редко, потому что они нарушают принцип ноды - асинхронность, а вы такими методом останавливаете все процессы выполнения

GitHubGitHub
pashadidychenko/GoIT-Node.js-Homework
Contribute to pashadidychenko/GoIT-Node.js-Homework development by creating an account on GitHub.


Pasha
  2:02 PM
Делал синхронную так как в противном случае получал undefined.
2:02
Буду пробовать через промисы.


Pasha
  9:38 PM
Переделал вторую домашку на промисах.
:+1:
1



Pasha
  9:21 PM
Добрый вечер,  залил третью домашку но не доконца понятно как сделать условие <Обязательно обработай ошибку подключения. Выведи в консоль сообщение ошибки и заверши процесс используя process.exit(1).
>


2 replies
Last reply 2 years agoView thread


Pasha
  9:22 PM
Сделал .catch((error) => {
        console.log(error);
        return process.exit(0);
      });
9:22
если ставлю process.exit(1) то падает код.
9:23
Возможно не правильно подключаю но не знаю где почитать как правильно.


Pasha
  9:37 PM
Если process.exit(1) пишет: [nodemon] app crashed - waiting for file changes before starting... (пишет красным)
9:37
Если process.exit(0) пишет: [nodemon] clean exit - waiting for changes before restart (пишет зеленым)


Nadin
  7:29 PM
так, код запустила - но у меня нет ошибки
Снимок экрана от 2020-10-08 19-28-41.png 
Снимок экрана от 2020-10-08 19-28-41.png


7:31
"Сделал .catch((error) => {
        console.log(error);
        return process.exit(0);
      });
[9:22 PM] если ставлю process.exit(1) то падает код."
это обработка ошибки, и специально ставится код, отличный от 0, что бы как раз и произошел выход из выполнения команды.
все что отлично от 0 - считается ошибкой и это должно привести к "падению кода"
но это будет происходить, только в том случае, если не получилось подключится к базе. Если к базе подключился - все работает, если не получилось подключится - то логично, что код должен прекратить выполнятся, потому что нет подключения к базе
7:32
или я как-то не так поняла в чем проблема?
7:35
const userListRouter = Router(); - мне кажется указание везде - что это именно не просто контроллеры и роуты у сущности юзеов - а именно список - излишне.
название переменных немного длинновато ,как на меня. учитывая то, что информация о том, что это список, не является очень важной.
но самое важное. что вы работаете с сущностью - КОнтакты - а у вас они обозначены, как юзеры.
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subscription: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: false, default: "" },
  },
  { versionKey: false }
);

const userModel = mongoose.model("contacts", userSchema);
7:37
будьте внимательны - creatUser - "create" - у вас не хватает одной буквы


Pasha
  7:58 PM
Нет, все правильно, ошибка появляется когда нету подключения к базе, а так все работает отлично, мне просто было интересно про сам process.exit(1). По поводу наименований, буду внимательней)


5 replies
Last reply 2 years agoView thread


Pasha
  7:43 PM
Привет, запушил 4 домашку, сделал так же дополнительное необязательное задание, но не знаю или правильно реализовал.


Nadin
  3:07 PM
Спасибо, проверяю
saltRounds = 1; - в реальности, не меньше 8 ))
 if (!isPasswordValid) {
        return res.status(401).json({ message: "Email or password is wrong" });
тут наверно правильней написать что именно пароль не верный ))
3. { expiresIn: 172800 } // two deys - - антипаттерн проектирования - магичесские числа - к стати можно писать и по человечески  - "2 days"
expiresIn: expressed in seconds or a string describing a time span zeit/ms.
Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms").
https://www.npmjs.com/package/jsonwebtoken
а вот тут обьясняют что такое магичесские числа - https://refactoring.guru/ru/replace-magic-number-with-symbolic-constant
4. https://github.com/pashadidychenko/GoIT-Node.js-Homework/blob/04-auth/api/users/users.controllers.js#L51 - status(200) - идет по умолчанияю, если ничего другого небыло указанно
5, а зачем указывать https://github.com/pashadidychenko/GoIT-Node.js-Homework/blob/04-auth/api/users/users.schema.js#L13 - required: false - если оно по умолчанию false?
6. не совсем поняла, с подпиской - да. у тебя можно обновить толкьо одно из заданных полей подписки, но я не вижу проверки, когда на попытку обновления полей, у тебя сначала Joi должен был проверить, что ту. подписку, которую хотят обновить - должна быть одной из - "free", "pro", "premium", а только потом передвать на функцию обновления данной записи в базе
7. с пагинацией и фильтрацией - да, но не совсем
https://github.com/pashadidychenko/GoIT-Node.js-Homework/blob/04-auth/api/contacts/contacts.controllers.js#L7
тут по умолчанию сделаны опции при которых - из контактов будет отфильтрованны только subscription: "free", - даже если этот запрос прийдет через - GET /contacts?page=1&limit=20 - но в этом задании - "Сделать пагинацию с mongoose-paginate-v2 для коллекции контактов (GET /contacts?page=1&limit=20)." - нет оганичения, что должны выводится, только бесплатные подписки.
(edited)


Nadin
  7:01 PM
Вот вариант более элегантной пагинации -
const { sub, page, limit } = req.query
const options = {
                page: page || 1,
                limit: limit || 20
            }
.....paginate(sub && { subscription: sub }, options)


Pasha
  8:41 PM
Понял, спасибо.

по 3 дз - работа принята. Небольшая доработка нужна. Сейчас в одной ветке находятся два проекта .
уберите пожалуйста лишние файлы
-https://github.com/elinako/node-js/blob/03-mongodb/contacts.js - этот файл уже не нужен, вы уже работаете с настоящей базой.
https://github.com/elinako/node-js/blob/03-mongodb/models/contacts.js - вы же уже пользуетесь настоящей базой, вам уже не надо считывать данные из файла.
https://github.com/elinako/node-js/tree/03-mongodb/db - эта папка уже не нужна - все данные уже находятся в базе данных. И хранить вот так открыто данные из базы данных - очень не безопасно. Так данные не хранят.
https://github.com/elinako/node-js/blob/03-mongodb/controllers/contacts.controllers.js - тоже не актуальный файл.


Надежда
  8:17 PM
по 4 дз - принята.
https://github.com/elinako/node-js/blob/04-auth/contacts.js - лишний файл.
expiresIn: 2 * 24 * 60 * 60, // 2 days - в библиотеке - https://www.npmjs.com/package/jsonwebtoken - есть возможность передавать в удобном формате -
expiresIn: expressed in seconds or a string describing a time span zeit/ms.
Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms").
хорошо, что у Вас есть комментарий, // 2 days - потому что без него можно было бы сказать что это - антипаттерн "магические числа" https://refactoring.guru/ru/replace-magic-number-with-symbolic-constant


убирай не используемые console.log('sub')
убирай то, что закомментировано и ты им не пользуешься
https://github.com/IgorSapko/Node/blob/06-email/controllers/contacts.js#L45 - следи за пустыми строками, которые тут не нужны
https://github.com/IgorSapko/Node/blob/06-email/controllers/contacts.js#L132 есть пустая строка, в точно тамком же месте нет https://github.com/IgorSapko/Node/blob/06-email/controllers/contacts.js#L117 - писать единообразно. - так легче читать твой код будет. больше простят ошибки.
вообще следи за пустыми строками - они  у тебя то появляются и разделяют код - то все склеено, и нет какой-то логики - вот в этом всем файле - https://github.com/IgorSapko/Node/blob/06-email/controllers/users.js#L41 - или ты пишешь без пустых строк, и не отделяешь блоки кода, или отделяешь пустыми строками. но должно быть единообразие кода на весь файл.
улучшения по коду:
 const validationRules = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    phone: Joi.string(),
  });
тут над обыло дописать
 const validationRules = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    phone: Joi.string(),
  }).min(1); - что бы он точно проверял на то, что риходит хотя бы одно поле.
4:32
А в общем код чистенький, все понятно и логично.
Но тут вопрос сколько тут твоего кода, а сколько то, что Вам преподаватель на уроке дает.  Но общее впечатление - хорошее.

По 6 дз
contacts.json - этот файл можно удалить. он уже не нужен.
добавить файл .env.example - и туда вынести название переменных необходимых для работы приложения.
что бы не делать, вот такую проверку руками,
if (
      subscription === "pro" ||
      subscription === "premium" ||
      subscription === "free" ||
      subscription === undefined
    )
предлагаю воспользоватся готовыми инстументами из библиотеки joi -
subscription: Joi.string().allow("pro","premium","free"),

По 5 дз - работа принята, все хорошо. Тесты еще не смотрела. Вот манюсенькое возможное изменение
если сюда в схему прописать что поле email: { type: String, required: true }, еще и уникально, то можно
вот эту проверку
const existedUser = await userModel.findOne({ email });

		if (existedUser) {
			return res.status(409).json({ message: 'Email in use' });
		}
можно не делать эту проверку, если поле будет уникально. то при обращении к базе - база сама будет возвращать 1100 ошибку, и тогда в обработчике ошибок, можно дополнительно прописать что если
if (error.code === 11000) {
      return res.status(409).json({ message: 'Email in use' });

    }

Добрый день!
 по 5 дз - работа принята, есть несколько предложений по улучшению кода:
в шаге по раздаче статики подразумевалось уазание именно префикса пути - /images - и тогда строка выглядела бы -
this.server.use('/images',  express.static(__dirname + 'src/public'));
(edited)


Надежда
  3:38 PM
expiresIn: 2 * 24 * 60 * 60, //two days
"expiresIn: expressed in seconds or a string describing a time span zeit/ms.
Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms").
"https://www.npmjs.com/package/jsonwebtoken
можно записывать более удобной записью, что бы не проставлять потом комментарий.
и хорошо, что у вас возле цифр есть комментарий. без него бы это был антипаттер - магичесские числа - https://refactoring.guru/ru/replace-magic-number-with-symbolic-constant#:~:text=%D0%9F%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B%20%D1%80%D0%B5%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3%D0%B0,%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%BF%D0%BE%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BC%D0%B0%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D1%87%D0%B8%D1%81%D0%BB%D0%BE.

Vladislava Marchuk
  14:50
@канал як і обіцяла ресурси для фрілансу)
З українських популярні такі:

https://freelancehunt.com/
https://freelance.ua/
https://free-lance.ua/
можна ще знайти замовника на https://kabanchik.ua/ua/freelance

Менш популярні теж можуть спрацювати, але замовників мало, через війну і взагалі. Це варіант для тих, у кого погано з англійською і хто не знає, як отримувати оплату із за кордону. Ну й взагалі багатьом на початку комфортніше працювати із нашими замовниками.


Якщо мова дозволяє і людина з амбіціями, то краще одназу йти на https://www.upwork.com/
Починате саме з нього, бо це найпопулярніша біржа. І після початку війни з неї повикидалю русню, тому замовлення можна знайти. Але треба вчитися комунікувати, часто треба володіти додатковими знаннями (розуміння UI/UX, початкове SEO чи щось інше). Хоча це дивлячись, який замовник.
На апворк, на відміну від наших бірж, досить пристойна оплата. Можна виводити на картки українських банків.
Із мінусів - треба багато уваги приділяти портфоліо, відгукам. Але це на кожній біржі так.

Стосовно оплат, тут по-разному.
На апворк, якщо адекватне портфоліо, я б починав із 8-10 долларів за 1 годину. Якщо с досвідом, то підвищувати до 30-40 долларів.
Якщо увесь проект, то я бачив ціни для початківців від 200 долларів за зверстаний лендінг, але це дууууже приблизно. Якщо, наприклад, проект американьский, то готовність зробити за 200 їх швидше налякає - наче брехня. Вони чекатимуть за 1500. Тому тут я радив би подивитись аккаунти інших, ставити як усі початківці, а далі потроху підвищувати.
Щодо наших бірж, тут ціни нижчі, бо замовники не готові на великих проектів. Робити проекти типу "за 1000 грн" категорично НЕ раджу нікому, навіть для портфоліо. Бо таких замовник буде пити кров і вимагати постійних переробок. Тут би я пропонував ціни від 3000-4000 грн за лендінг. Із подальшим підвищенням до стартової ціни 400 долларів за будь-який проект, а далі - в залежності від складності.
Але зараз взагалі не знаю, наскільки ці ціни актуальні, бо я на біржах нічного не брав вже давно. Це тільки спочатку працюєш так, а потім на тебе працює сарафанне радіо і шукати замовлення вже не треба.


Приветик, я к Вам с вопросом, у меня есть еще материалы по Ноде, но они на русском, как бы все перешли на обучение на Укр. По этому я их и перестала выкладывать, а за перевод еще не села.
Вопрос - бросать сюда всякое полезное на русском, или не надо? и только когда переведу, то тогда уже скидывать полезную инфу сюда?
https://i.gifer.com/6E2.gif

(456 КБ)
https://i.gifer.com/6E2.gif



Надежда
  12:11
Будь ласка!!! для другої ДЗ не додайте мене в КОЛЛАБОРАТОРИ!!! ))) буду дуже вдяччна, не забувайте!!
:рука_указывает_вправо:Починаючи з другої домашньої роботи, додайте мене, будь ласка, в колаборатори - мій нік на гіт-хабі - NadyaHristuk :женщина-технолог:
Навіщо мене додавати в колаборатори - така умова здачі ваших робіт з курсу Node.js - https://github.com/goitacademy/nodejs-homework
______________________________________________________________________
Як додати в колаборатори - заходимо на сайт https://github.com/ - відкриваємо потрібний нам репозиторій, над кодом є панель управління і крайня справа клавіша - налаштування (Settings) - далі - Manage access - вводимо пароль - шукаємо велику зелену клавішу - "Invite a collaborator" - в спливашці, що з'явилася, вводимо мій нік - NadyaHristuk і натискаємо - Add to this repository

GitHubGitHub
GitHub - goitacademy/nodejs-homework
Contribute to goitacademy/nodejs-homework development by creating an account on GitHub. (44 КБ)
https://github.com/goitacademy/nodejs-homework

белая_галочка
глаза
ура







Надежда
  16:14
Дорогие мои и обожаемые!!! :влюбленный_взгляд:
Вы активизировались в сдаче дз, это прекрасно!!! :механическая_рука:осталось еще совсем немного!!! До завтра до 15-00, надо успеть до сдать все хвосты! ну не бросать же этот уже начатый путь на пол-пути!!! :график_роста:
Берите друг-друга в побратимы и доставайте дз!!! ПЛЗ!!!!
https://www.deviantart.com/lionheartcartoon/art/Wanted-Applejack-410628883 (отредактировано) 

_____________________________________________________________________
:рука_указывает_вправо: Начиная со второй домашней работы, добавьте меня, пожалуйста, в коллабораторы - мой ник на гит-хабе - NadyaHristuk :женщина-технолог:
Зачем меня добавлять в коллабораторы - такое условие по сдаче ваших работ по курсу Node.js - https://github.com/goitacademy/nodejs-homework
______________________________________________________________________
Как добавить в коллабораторы - заходим на сайт https://github.com/ - открываем нужный нам репозиторий, над кодом есть панель управления и крайняя справа клавиша - настройки (Settings) - дальше  - Manage access - вводим пароль - ищем большую зелененькую клавишу - "Invite a collaborator" - в появившейся всплывашке вводим мой ник - NadyaHristuk и нажимаем -   Add  to this repository

GitHubGitHub
GitHub - goitacademy/nodejs-homework
Contribute to goitacademy/nodejs-homework development by creating an account on GitHub. (43 КБ)
https://github.com/goitacademy/nodejs-homework


GitHubGitHub
GitHub: Where the world builds software
GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat... (490 КБ)
https://github.com/

:жест_ок:
1
:сердце:
1
:обнимаю:
1

21:17
По 1 дз - если все понятно, то не читаем, если не понятно, то может, это вам поможет
Кака работать с  yargs в switch
Давайте с начала - в вашей домашней работе предполагается реализовать методы работы с файлом: чтение из него всех данных и вывод в консоль, добавление данных, удаление данных и поиск по id.
Но как мы можем вызвать ту или иную функцию на выполнение. Для этого нам надо как-то в скрипт передать данные.
Для этих целей используется модуль yargs
он позволяет передавать в виде аргументов данные, которые могут обрабатываться внутри вашего скрипта.
что бы просто запустить на выполнение код из файла в ноде надо написать node и название того файла который вы хотите запустить. В вашей дз это node index.js
 Но нам надо как-то передать в этот файл параметры, что бы можно было вызвать на выполнение конкретную функцию
 node index.js --action="list"
вот тут происходит запуск файла index.js и передача аргумента --action="list"
как он будет обрабатываться в самом скрипте
сначала подключаем вначале файла нужный нам модуль - const argv = require('yargs').argv;   берем из него возможность работы с аргументами.
дальше создаем функцию которая принимает аргументы  - function invokeAction({ action, id, name, email, phone })
 и вызываем ее  - invokeAction(argv); -
если мы запустим наш скрпит с аргументами node index.js --action="list" - то в функцию попадает флаг --action со значением list
дальше управление передается на
switch (action) {
и тут будет происходить поиск
    case 'list':
      // ...
      break;
ответа со значением list
аналогично отработают все остальные action, которые вы передадите какждый раз запуская скрипт с разными аргументами
node index.js --action="get" --id=5

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Удаляем контакт
node index.js --action="remove" --id=3
если вы попробуете вызвать ваш скрипт НЕ передав аргументы  - node index.js - вы попадете на ветку -
   default:
      console.warn('\x1B[31m Unknown action type!');
и увидите в консоли ошибку красного цвета - с сообщением, что это не известный вид action
Красный цвет обеспечивает  - \x1B[31m
Вот таким методом работает в связке argv и switch
что бы в простом виде посмотреть как это работает можете написать как-то так
 // index.js
const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log('list')
      break;

    case 'get':
       console.log('id',id)
      break;

    case 'add':
     console.log( 'name email phone', name, email, phone)
      break;

    case 'remove':
      console.log('id',id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
и запустите этот скрпит с предложенными вам методами
node index.js --action="list"

# Получаем контакт по id
node index.js --action="get" --id=5

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Удаляем контакт
node index.js --action="remove" --id=3
Ну а дальше вам надо прописывать методы в самом contact.js экспортировать их из файла и импортировать в файле index.js и вызывать их в соответствующих case
21:17
_____________________________
Пояснения по 1 дз
Как добавить пользовательский скрипт в мой файл package.json, который запускает файл index.js?
При выполнении команды npm start в каталоге проекта, будет выполнятся команда node index.js . И тем самым будет запускаться на выполнение файл index.js
Вот что надо записать в файле package.json
"scripts": {
    "start": "node index.js"
}
 Поле «script»
Возможно вы этого не знали, но npm содержит поле под названием scripts в файле package.json проекта для того, чтобы делать такие команды, как npm test, фактически, выполняющая содержимое поля scripts.test, и npm start, вызывающая инструкции из поля scripts.start.
npm test и npm start — это, всего лишь, удобные ссылки для npm run test и npm run start. С помощью npm run можно выполнить совершенно любое содержимое любого поля внутри scripts.
__________________________
npm - главные скрипты  - такие как запуск, остановка, перезагрузка, установить, версия или тест не требует выполнить команду. Эти сценарии и некоторые другие описаны в документации npm. И выполняются они через написание директивы npm и указания самой команды - например.
npm start
Остальные пользовательских скрипты npm, что бы вызвать вам нужно добавить run перед именем скрипта npm run dev
npm run dev
Абсолютно у всех разработчиков знакомство с nodejs начинается с того, что после каждого изменения нужно перезагружать сервер. Поэтому, появляется вопрос,  как сделать так, чтобы сервер перегружался автоматически.
Самый популярный вариант - это nodemon. То есть идея состоит в том, что в development окружении мы хотим, чтобы nodemon следил за файлами, которые мы меняем и просто перезапускал сервер, если эти файлы относятся к серверу.
Необходимо установить локально в наш проект как devDependencies nodemon.
npm i -D nodemon
или
yard add nodemon
Теперь давайте в package json добавим команду для него.
"scripts": {
  "dev": "nodemon index.js"
}
Теперь в консоли давайте запустим его командой
npm run dev
Как мы видим он запустился. Нам вывелось, что он вотчит все файлы в нашей папке и запускает команду node index.js при изменении любого файла.
Теперь, если мы изменим наш index.js, то nodemon перезапустит сервер.
Итого
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
В 1 ДЗ СКРИПТЫ ЗАПУСКАТЬ БЕЗПОЛЕЗНО - ВЫ НИЧЕГО НЕ УВДИТЕ!!! ОНИ У ВАС НЕ ВЫПОЛНЯТСЯ ПРАВИЛЬНО!!
Вы сможете с ними нормально работать только со 2 дз!!
ЕСЛИ ЗАПУСТИТЕ СКРИПТЫ сейчас - ТО ПОЛУЧИТЕ ОШИБКУ - почему, потому что вы вызывает index.js без аргументов и попадаете в ветку
default:
      console.warn('\x1B[31m Unknown action type!');
И ЕЕ ЖЕ УВИДИТЕ В КОНСОЛИ!!!
Что почитать - https://habr.com/ru/company/ruvds/blog/458504/

ХабрХабр
13 приёмов работы с npm, которые помогают экономить время
Каждый день миллионы разработчиков, создавая свои JavaScript-приложения, обращаются к npm (или к Yarn). Выполнение команд наподобие npm init или npx create-react-app стало привычным способом начала... (41 КБ)
https://habr.com/ru/company/ruvds/blog/458504/

:+1:
1

21:18
______________________________
Модуль Path
для подключения файлов необходимо использовать метод
path.join([path1][, path2][, ...]) — Объединяет все аргументы и нормализует полученный путь.
для получения точки отсчета - откуда надо проложить путь к нужному файлу используется __dirname - возвращает путь к каталогу текущего исполняемого файла.  И указываем путь  к файлу который хотим подключить.
const path = require('path');

const absolutePath = path.join(__dirname, './db/contacts.json');
(отредактировано)
[19:46] ___________________________________________
Как экспортировать функции из файла и импортировать?
При разделении программного кода на несколько файлов module.exports используется передачи переменных и функций для использования в том месте, где будет вызван этот модуль.
Если вы просто хотите выставить только одну функцию или переменную , например:
// test.js
var name = 'william';

module.exports = function(){
    console.log(name);
}   

// index.js
var test = require('./test');
test();
этот модуль предоставляет только одну функцию, и свойство name является локальным и недоступным для внешнего модуля, в котором подключается './test' .
______________________________
Если необходимо экспортировать несколько функций или переменных - то можно передать в module.exports объект:
//data.js

module.exports = {
    getContacts,
    getById
}
//app.js
const functions = require('./data.js');
functions.getContacts();
functions.getById();
или можно
const { getContacts, getById } = require('./data.js');
getContacts();
getById();
21:18
_____________________________________________
разница const fs = require('fs').promises и const fs = require('fs')
Изначально модуль написан с использованием call-back функций и вызывался через  const fs = request("fs")
Дальше js развивается и уже никто не пишет на call-back функциях, потому что это устаревший стиль и еще колл-бак ад. Тогда в модуль добавили поддержку промисов,  Теперь можно использовать функции, но работать с ними не через коллбаки, а через промисы.  Соответвенно надо подключить работу с промисами const fs = require('fs').promises
Сейчас уже работают, не через промисы, а через обвертку над промисами async /await. Это сокращает код и делает его более читабельным
Если собираетесь использовать колбеки, то подключаете библиотеку без промисов.
Давайте поговорим о базовом JS
Что такое колбэки - "В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия"
когда они используются? - когда есть «асинхронность» (когда какой-то процесс  будет завершен не сейчас, а потом)
function НазваниеФункции (аргументы, callback) {
 ......(какой-то код)
}
Теперь работа с самой функцией колбека
function НазваниеФункции (аргументы, function(error, data) {
  if (error) {
    // обрабатываем ошибку
  } else {
    // успешно выполнено
  }
});
такой подход называется «колбэк с первым аргументом-ошибкой» («error-first callback»).
Правила таковы:
Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.
теперь то, как это выглядит применительно к вашей 1 дз и к первой функции
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err)  return console.error(err.message);
      console.table(JSON.parse(data.toString()));
  });
}
это если мы собираемся в основном файле просто вызвать функцию listContacts()
Если вы хотите вернуть данные и уже в основном файле и обработать и вывести их в консоль, то
function listContacts() {  
fs.readFile(contactsPath, (err, data) => {    
if (err) return console.error(err.message);     
   return data;  
});  
return JSON.parse(list);
}
тогда в основном файле вы можете вызвать listContacts().then(data => console.table(data)
[19:49] ______________________________________________________________________________
 Потом эволюция дошла до промисов,
const fs = require('fs').promises
Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
promise.then навешивает обработчики на успешный результат или ошибку
Если очередной then вернул промис, то далее по цепочке будет передан не сам этот промис, а его результат.
Если then возвращает промис, то до его выполнения может пройти некоторое время, оставшаяся часть цепочки будет ждать.
То есть, логика довольно проста:
В каждом then мы получаем текущий результат работы.
Можно его обработать синхронно и вернуть результат (например, применить JSON.parse). Или же, если нужна асинхронная обработка – инициировать её и вернуть промис.
При возникновении ошибки – она отправляется в ближайший обработчик onRejected.
Такой обработчик нужно поставить через второй аргумент .then(..., onRejected) или, что то же самое, через .catch(onRejected).
Чтобы поймать всевозможные ошибки, которые возникнут при загрузке и обработке данных, добавим catch в конец цепочки
promise.then(onFulfilled, onRejected)
пример первой функции з дз на чистых промисах
function listContacts() { 
readFile(contactsPath,'utf-8')
.then(data => console.log(JSON.parse(data))
    .catch(err => console.log(err))
}
Если собираемся вернуть данные в основной файл
function listContacts() { 
const list = readFile(contactsPath,'utf-8')
.then(data => return JSON.parse(data))
    .catch(err => console.log(err))
return list
}
[19:49] _________________________________________________________________________________________
Async/await
Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.
По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем promise.then.
Что бы переписать функцию на промисах с помощью async/await:
Нам нужно заменить вызовы .then на await.
И добавить ключевое слово async перед объявлением функции.
async function listContacts() => {
  const res = await readFile(contactsPath);
  console.log(res)
}
Ошибки можно ловить, используя try..catch, как с обычным throw
В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}
Если собираемся вернуть данные в основную функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
     return result;  
  } catch (error) {
    console.log(error);
  }
}
Что дополнительно почитать:
https://habr.com/ru/company/skillbox/blog/458950/
Хабр
Разбираем Async/Await в JavaScript на примерах
Автор статьи разбирает на примерах Async/Await в JavaScript. В целом, Async/Await — удобный способ написания асинхронного кода. До появления этой возможности подобный код писали с использованием...
	https://habr.com/ru/company/skillbox/blog/458950/
[19:49] _____________________________________
Для чего нужен файл .gitignore?
Для чего нужно использовать файл .gitignore, если можно просто выбрать файлы которые необходимо закоммитить, и сделать это?
Есть несколько задач, которые наиболее эффективно решаются с использованием файла .gitignore:
Не мучаться с выбором нужных файлов для индексации (которая git add).
В большом проекте часто бывает много файлов, которые не подлежат версионированию. А ещё вам может быть удобно хранить какие-то промежуточные результаты в папке tmp.
Настройка .gitignore позволяет не выискивать нужные файлы, а добавлять всё сразу или по крайней мере уточнять меньше.
Сделать локальный конфиг, который не будет затронут pull-ом.
Защитить чувствительную информацию от случайного раскрытия.
Случается, что вы случайно добавили и закоммитили ключи или пароли от какого-нибудь облачного хранилища, например Amazon.
Если так уж необходимо хранить чувствительную информацию в папке проекта, то нужно положить её в под-папку, игнорируемую git.
Быстро очищать проект от временных файлов.
Предположим, что вы пишете на компилируемом языке и при построении вашего проекта формируется множество промежуточных файлов (объектные, прекомпиляция, вот это всё). Перед каждой сборкой необходимо их удалять, чтобы в случае чего не прилинковать лишнее. Можно делать это вручную. Можно написать скрипт. А можно просто добавить их в .gitignore и делать так:
git clean -fX
________________________________________________
файл  .gitignore - можно сгенерировать и тогда вам самостоятельно надо разбираться с теми зависимостями, которые туда добавил генератор  .gitignore
или вы можете собрать самостоятельно создав в корне проекта файл  .gitignore: и добавить туда ту информацию по вашему проекту, которую необходимо не загружать на гит.
# комментарий — эта строка игнорируется
# не обрабатывать файлы, имя которых заканчивается на .a
*.a
# НО отслеживать файл lib.a, несмотря на то, что мы игнорируем все .a файлы с помощью предыдущего правила
!lib.a
# игнорировать только файл TODO находящийся в корневом каталоге, не относится к файлам вида subdir/TODO
/TODO
# игнорировать все файлы в каталоге build/
build/
# игнорировать doc/notes.txt, но не doc/server/arch.txt
doc/*.txt
# игнорировать все .txt файлы в каталоге doc/
doc/**/*.txt
_______________________________________________________________________
Какая задача на этапе 1 дз - убрать папку node_modules
├── js
│   ├── app.js
│   └── system.js
├── scss
│   ├── system.scss
│   └── theme.scss
└── node_modules       <-- Убрать
    │   ├── load-json-file
    │   ├── lodash
    │   ├── jquery
    │   ├── make-error
    │   ├── semantic
    │   └── yargs
    └── semantic.json
Решение:
node_modules/*
_____________________________________
Как игнорировать файлы, которые уже отслеживаются?
Если вы добавили файл или папку в .gitignore, после того как они попали в репозиторий, то их необходимо удалить из репозитория командой:
git rm --cached <file>
Например убрать папку storage/framework/cache/. Обратите внимание: вначале отсутствует слеш.
git rm -r --cached "storage/framework/cache/"
что почитать на тему - https://devacademy.ru/article/ignorirovanie-faylov-i-katalogov-v-git
[19:50] _________________________________________________
Второй пример для разбора с return
async function listContacts() {
  try {
    .........
    console.table(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

/// и в фале index.js /
   listContacts();
Директива return  - нужна, только ели вы хотите что-то передать из функции, вернуть из нее что-то и передать дальше. Но в данном примере мы все данные, которые нам нужны выводим в консоль. А в функции listContacts() никак возвращаемые данные не обрабатываем, значит это лишний код.
____________________
Пример, когда имело бы смысл возвращать данные.
async function listContacts() {
  try {
    .........
    return result;
  } catch (error) {
    console.log(error);
  }
}

/// и в фале index.js /
   listContacts().then(data=>console.table(data));
Это мелочи, но по ним складывается впечатление о понимании Вами того, что вы пишите.
 ____________________________________________________
По улучшениями/оптимизации к 1 ДЗ:
У вас повторяются функции чтения из файла и преобразования данных и запись в файл. Их можно вынести как отдельные функции, это никем не запрещается ))
[19:50] __________________________________________________
На всякий случай давайте обсудим вот такой момент:
"добавление нового контакта, без метода push().
  function addContact(name, email, phone) {
 fs.readFile(contactsPath, { encoding: 'utf8' }, (err, data) => {
        if (err) { console.log(err.message) }
            const contacts = JSON.parse(data)
            const contactsNew = {id: shortid.generate(), name, email, phone }
            const contactsList = JSON.stringify([contactNew, ...contacts], null, '\t')

            fs.writeFile(contactsPath, contactsList, (err) => { if (err) console.error(err) })
    })
  }
  try {
    addContact()
  } catch (error) {
    next(error)
  }
При классическом push(), вы ожидаете увидеть вот такого вида запись - const NewArr = contacts.push(contactNew)
- в примере сделали более элегантно -
"Использование оператора spread
Использование оператора spread не ограничивается передачей параметров функции. Несколько примеров его полезного использования:
Клонирование свойств массивов
var arr = ['will', 'love'];
var data = ['You', ...arr, 'spread', 'operator'];
console.log(data); // ['You', 'will', 'love', 'spread', 'operator']
"
http://jsraccoon.ru/es6-spread-rest
https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit
const contactsList = JSON.stringify([
contactNew, ...contacts], null, '\t') - вот место, где делается спред вместо push() (отредактировано) 

ХабрХабр
Разбираем Async/Await в JavaScript на примерах
Автор статьи разбирает на примерах Async/Await в JavaScript. В целом, Async/Await — удобный способ написания асинхронного кода. До появления этой возможности подобный код писали с использованием... (40 КБ)
https://habr.com/ru/company/skillbox/blog/458950/


jsraccoon.rujsraccoon.ru
ES6: Операторы Spread и Rest
Новый оператор ... называется spread (распростанение, расширение) или rest (остаток) в зависимости от того, где и как он используется. (383 КБ)
http://jsraccoon.ru/es6-spread-rest


ХекслетХекслет
Spread-оператор и создание новых массивов / JS: Массивы
Spread-оператор и создание новых массивов / JS: Массивы: Научиться применять spread-оператор (оператор "расширения") для массивов. (122 КБ)
https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit

21:20
_____________________________________________
Обработка ошибки в конструкции try/catch в Node.js
по обработке ошибки -  лучше обрабатывать ошибку через
  try {
    //...
  } catch (err) {
    //... handle it locally
error.message = "listContacts error";
    throw new Error(err.message)
  }
ссылка на источник  -  https://nodejs.dev/learn/error-handling-in-nodejs#exceptions-with-promises

nodejs.devnodejs.dev
Error handling in Node.js
How to handle errors during the execution of a Node.js application


Nick Blunt
  16:34
былобы просто супер есле бы это все было в отдельном документе а не в слаке :широкая_улыбка:

1 ответ
3 мес. назадПосмотреть обсуждение


Vladimir
  13:18
@Надежда
  Добрый день, подскажите пожалуйста, в 5-й домашке, раньше по условию при регистрации у нас не создавался и не возвращался в ответе токен, а тут в условии написания теста, нужно проверить возвращается ли токен, это ошибка в дз и на самом деле нужно протестировать логин? или переделать регистрацию, чтобы создавался и возвращался токен? (отредактировано) 
Task - Google Chrome.jpg 
Task - Google Chrome.jpg




Надежда
  14:44
да, вижу, я сейчас уточню у мереджеров, потому что тут немного внесли изменения в текст дз и теперь я сама не знаю как должно быть


2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Vladimir
  17:18
@Надежда
 Вы не узнали? А то ж у менеджеров 2 дня выходных впереди (


2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Kilkenni
  16:05
Питання: чи можливо імпортувати модулі за умовою?
Приклад: припустимо, я хочу в режимі development імпортувати пакет dotenv, щоб задати env variables руками з файлу .env. В режимі production все це буде зчитуватися з env системи, на якій задеплоєний сервер - отже, імпорт dotenv не потрібний.
Перевірити, в якому режимі ми працюємо, в Express досить легко:
app.get("env") === "development"
А чи можливо якось причепити до цього імпорт dotenv?


8 ответов
Последний ответ 3 мес. назадПосмотреть обсуждение


Kilkenni
  17:39
Припустимо,  я хочу кидати в morgan не лише інформацію про запити, а й певну кастомну інформацію (наприклад, використати його для логування помилок замість console.log).
Яким чином це правильно робити?
...і чи здатний morgan взагалі логувати щось КРІМ запитів? Наприклад, відповіді. (отредактировано) 


2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Сергій
  14:38
Добрый день. Не могу сдать домашнее задание номер 1, при отправке ссылки , появляется окно : не достаточно прав для доступа информации. Хелп

2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Надежда
  22:29
Напоминаю - ______________________________________________________________________
:рука_указывает_вправо: Начиная со второй домашней работы, добавьте меня, пожалуйста, в коллабораторы - мой ник на гит-хабе - NadyaHristuk :женщина-технолог:
Зачем меня добавлять в коллабораторы - такое условие по сдаче ваших работ по курсу Node.js - https://github.com/goitacademy/nodejs-homework
______________________________________________________________________
Как добавить в коллабораторы - заходим на сайт https://github.com/ - открываем нужный нам репозиторий, над кодом есть панель управления и крайняя справа клавиша - настройки (Settings) - дальше  - Manage access - вводим пароль - ищем большую зелененькую клавишу - "Invite a collaborator" - в появившейся всплывашке вводим мой ник - NadyaHristuk и нажимаем -   Add  to this repository

GitHubGitHub
GitHub - goitacademy/nodejs-homework
Contribute to goitacademy/nodejs-homework development by creating an account on GitHub. (44 КБ)
https://github.com/goitacademy/nodejs-homework


GitHubGitHub
GitHub: Where the world builds software
GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat... (490 КБ)
https://github.com/

22:29
___________________________________________
Зачем вам нужны ветки? и зачем меня добавлять в коллабораторы.
Это приближенный вариант работы над проектом над реальным проектом.
Обычно в проекте есть много веток, каждую "фичу" дорабатывают в отдельной ветке, потом делают пул-реквест, на слияние с основной веткой. Ваш тим-лид проверяет ваш код и сливает с основной веткой, или пишет замечания и отправляет на доработку.
Дз сделанны по такому принципу, что вы от работы к работе добавляете "фичи" и расширяете основной проект. Каждую дз вы делаете в отдельной ветке, и делаете пул-реквест на добавление этого кода в основную ветку. Я ваш "тим-лид" который на время курса по Node.js, проверяю ваш пул-реквест, если все хорошо, я добавляю ваш код в основную ветку. Если есть замечания я вам из отписываю в пул-реквесте.
А в основной ветке у вас всегда самый актуальный код.
По 2 дз :
в бойлерплейте дан метод PATCH а в ДЗ требуют прописать PUT:задумчивость::обезьяна:.  стоит переименовывать метод на PUT?
В условиях 2 дз - нет значения - что возьмете - то и хорошо.
Если дотошничать.
"PATCH используется для частичного изменения ресурса. PUT создает новый ресурс или заменяет представление целевого ресурса, данными представленными в теле запроса.
Иными словами, в PATCH вложенный объект содержит набор инструкций, описывающих, как ресурс, находящийся в данный момент на исходном сервере, должен быть модифицирован для создания новой версии. А в PUT содержится новая версия ресурса целиком.
В отличие от PUT, PATCH не идемпотентный, это подразумевает что успешные идентичные PATCH запросы могут иметь отличные эффекты. Однако, возможно выдавать запросы PATCH таким образом, чтобы они были идемпотентные.
.....
UPDATE
PATCH не является идемпотентным (одноитоговым), т.к. в него можно вставить инструкцию добавления элемента. Тогда повторный запрос добавит его еще раз. А вот PUT просто перезаписал бы ресурс целиком (снова), т.е повторный запрос не приводит к разным результатам. Другие примеры: GET запрос идемпотентный: сколько бы раз ты не запрашивал в Google некоторый запрос, Google вернет тебе тот же результат. POST не идемпотентный: он может вставлять в базу новую строку каждый раз." (отредактировано)
___________________________________________
Валидацию добавления и обновления можно выделить в две отдельные схемы. Что бы при добавлении записи обязательно запрашивались ВСЕ поля для заполнения. А при обновлении контактов достаточно что бы обновилось значение хотя бы одного из полей, записи которая уже есть в базе данных.
при валидации контактов, которые приходят к вам для обновления необходимо убедится, что к вам пришло хотя бы одно поле на обновление
const schemaUpdate = Joi.object({
  name: Joi.string()    
  email: Joi.string()
  phone: Joi.string()
}).min(1) - надо дописать - .min(1) - что минимально придет хотя бы одно поле на обновление
______________________________________________
const schemaUpdate = Joi.object({
  name: Joi.string()    
  email: Joi.string()
  phone: Joi.string()
})
.or("name", "email", "phone") что минимально придет хотя бы одно поле на обновление
.or("name", "email", "phone") или .min(1); - делает одно и тоже.
_________________________________________________________
Больше информации, примеры, с объяснениями можно найти на - https://github.com/NadyaHristuk/node.js_additional-materials
статьи которые лежат в папка с нумерацией модулей - это не мой авторский труд - это выдержки из разных статей, заметок - то компиляция разных текстов, но попыталась сделать выжимку из разных материалов.
это не обязательное - это если вам мало того, что дают на основных уроках.

GitHubGitHub
GitHub - NadyaHristuk/node.js_additional-materials
Contribute to NadyaHristuk/node.js_additional-materials development by creating an account on GitHub. (131 КБ)
https://github.com/NadyaHristuk/node.js_additional-materials

22:30
_______________________________________________________________________________
Если вам сложно и плохо дается в понимании как сделать 2 дз - может вам помогут эти ссылочки
https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/routes
https://metanit.com/web/nodejs/7.1.php
https://monsterlessons.com/project/lessons/express-router

Articles by Victoria LoArticles by Victoria Lo
Build a REST API with Node.js: Routes and Controllers
Hello friends! Welcome to the 2nd article of the Let's Build a Node.js REST API Series! In this article, we will continue from where we left off in Designing and Planning your API and start creating some routes and controllers for our T-API! What are... (45 КБ)
https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers


developer.mozilla.orgdeveloper.mozilla.org
Учебник Express часть 4: Маршруты и контроллеры - Изучение веб-разработки | MDN
В этом уроке мы настроим маршруты (код обработки URL) с "фиктивными" функциями-обработчиками для всех конечных точек ресурса, которые нам понадобятся на веб-сайте LocalLibrary. По завершении мы получим модульную структуру для нашего кода обработки маршрута, который будет расширен реальными функциями-обработчиками в следующих статьях. У нас также будет хорошее понимание того, как создавать модульные маршруты с помощью Express!
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/routes


metanit.commetanit.com
Node.JS | Паттерн MVC. Контроллеры
Паттерн MVC в Node.js, основные компоненты, определение системы маршрутизации и контроллеров

monsterlessons.commonsterlessons.com
Express router
В этом уроке мы реализуем добавление, обновление и удаление наших исполнителей с помощью express router. Также мы познакомимся с такой полезной утилитой как Postman.
22:30
____________________________________________
Morgan, что за зверь?, и с чем его едят.
const logger = require('morgan')
morgan библиотека для логирования. Она подключается как прослойка (middleware)
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short' - позволяет выводить логирование или в варианте  'dev' 'short' - в зависимости от стадии разработки проверка - 'development' или нет.

app.use(logger(formatsLogger))
Что такое логирование - когда вы будете делать к вашему API (это ваш сервер) запросы через Постмен, то в консоли, вы будете видеть, что то вот такого типа
info: ::1 - - [16/Feb/2018:12:37:44 +0000] "GET /logout HTTP/1.1" 200 34 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
timestamp=2018-02-16T12:37:44.421Z 
И вот эта информация и называется - логирование
В чем смысл - мы делаем запрос, запрос проходит через эту прослойку,  и эта прослойка присылает в консоль информацию про запрос - когда, какой, на какой адрес, какой код ответа. Или сообщает, что произошла ошибка
 Зачем это надо? Потому что тут вы сами себе присылаете запросы. Но обычно вы на сервере просто видите, как пользователи из разных точек мира шлют запросы на сервер, и вы видите какие запросы приходят, как их много, какие ответы - положительные или ошибки. Это такой журнал наблюдения за работой вашего сервера.  Что бы потом, когда что-то не так пойдет, вы поднимаете такой журнал и смотрите, что вот после запроса на такой-то роут, в такое-то время с такими-то параметрами - ваш сервер умер. Значит там у нас проблемы. Можно не в консоль писать, можно писать в файл
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
Это из примера самой библиотеки, если будете использовать, только вары замените.
 _________________________________
Если  код весь подсвечивается красным и Еслинт ругался на двойные ковычки и ; ???
Ответ - В файле .eslintrc.js, в свойство rules дописываешь:
"quotes": [2, "double", { "avoidEscape": true }]


Vitalii Dzoma
  10:26
добавлен(а) в канал mentor-nadin пользователем Катерина
.


Надежда
  13:20
Приветик, я к Вам с вопросом, у меня есть еще материалы по Ноде, но они на русском, как бы все перешли на обучение на Укр. По этому я их и перестала выкладывать, а за перевод еще не села.
Вопрос - бросать сюда всякое полезное на русском, или не надо? и только когда переведу, то тогда уже скидывать полезную инфу сюда?
:один:
2



2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Надежда
  10:20
ПО 3 ДЗ
__________________________________________________
Большая просьба!!!___________________________________________
С 3 дз у Вас появится файл - .env и он находится в .gitignore. И не надо мне, в переживаниях, что я не смогу проверить дз, его заливать на гит, ок?
у меня честно тоже есть база на Аталасе, я могу спокойно создать свой .env в каждом вашем проекте со своими данными и я подключаюсь к своей чистой коллекции, каждый раз зачищаю. И спокойненько могу потестить ваш код ))
Меня же не интересует именно содержимое ВАШЕЙ конкретной базы. Мне надо что бы ваш код был работоспособный. Была правильная архитектура приложения, ну и что бы он был визуально "нормальный" (еслинт и т.д.)
Если меня что-то смущает в конкретной работе, то я стучусь к студенту в личку и прошу именно его содержимое .env файла, что бы подключится к его базе, но такое бывает редко, обычно только если есть какие-то ошибки, которые студент сам не может отловить, и я помогаю с решением ошибок
________________________________________________________________
Архитектура приложений MVC и REST
я не нашла так, что бы было хорошо описано в одном источнике.
Проблема в том, что часто пишут таким языком, что бы понять это, надо уже знать это - по этому скину 3 статьи - если постараться прочитать их то по идее в голове из кусочков должно сформироваться представление о том, что хотели этим сказать - MVC
https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn - об архитектуре - модель, представление, контроллер - (хорошо и с примером кода, что и где должно лежать по папочкам)
https://habr.com/ru/company/ruvds/blog/333856/ - на примере абстрактных функций
https://ruseller.com/lessons.php?id=666 - тут проблема в том. что они на примере пхп обьясняют, но я думаю будет понятно
https://metanit.com/web/nodejs/7.1.php - и на примере чистой ноды
А вот тут только единственное место, где не плохо об рахитектуре - REST API
https://webdraftt.com/tutorial/nodejs/rest-api - общая инфа, и
https://webdraftt.com/tutorial/nodejs/app-structure - а вот тут уже именно об архитектуре
_______________________________________________________________________
3 ДЗ - работа с БД - функции
Немного позанудничаю.
Если вы это уже поняли, то просто пропускаем и можно не читать. Но если вы не совсем разобрались. То давайте разберемся с функциями
Функции обращения к БД в названии которых есть слово One - были созданы для работы с любыми полями, но обычно с любым другим кроме поля _id.
Для работы с полем _id есть специальные функции в названии которых уже содержится слово ById что позволяет немного сократить синтаксис обращения к БД
Начнем с первого варианта который я встерчала в некоторых дз -
findOne({ _id: id }) - тут вызывается функция - в названии которой используется - One -  в этой функции явно не указывается конкретное поле, по которому идет поиск в БД, по этому надо явно указывать название поля _id и значение которое передается - id  - ({ _id: id })
updateOne({ _id: id }, { token }) - тут тоже самое, в названии есть слово One и тут явно передается название поля _id по которому идет поиск и потом явно передаешь значение этого поля id
findOneAndUpdate({ _id: id },  { subscription },  { new: true } ) - аналогично.
НО ЭТО ВСЕ МОЖНО УПРОСТИТЬ НА ЧУТЬ-ЧУТЬ
_____________________________________________________________
Что бы не передавать явно указанное название поля - _id можно использовать функции, в названии которых уже содержится слово id. Это специальные - именованные функции для поиска по полю id, а именно
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
тут везде явно указывается название поля, по которому будет  производится поиск по базе данных - ById
по этому тут можно сразу передавать значение по которому происходит поиск - в этом примере мы его передаем в переменной - id
НО даже когда используются функции в названии которых уже явно указывается слово ById , по которому идет поиск в БД, все равно используется синтаксис, как будуд-то вызыватеся функция с записью -  One 
В двух ДЗ видела вот такую запись  -
 const result = await Contact.findByIdAndUpdate({ _id: contactId },
    { ...body },
    { new: true },
  )
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate
если вы используете findByIdAndUpdate достаточно сразу передавать id , не надо конкретизировать какое поле вы передаете - { _id: id } - findByIdAndUpdate( id, ...body, { new: true } )
или если вы хотите явно указывать поле, по которому вы обращаетесь с БД, то можно использовать findOneAndUpdate( { _id: id }, ...body, { new: true }) - и тут надо явно указывать по какому полю мы ищем элемент.
____________________________________
И такая же ситуация и с функцией удаления.
const result = await Contact.findByIdAndRemove({ _id: contactId })
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndDelete
findByIdAndRemove(id) - не надо передавать { _id: id }, вы и так уже объявили, по какому полю ищите
_______________________________________________________________
А еще вы уже "большие", и по этому -
А давайте вы начнете красиво оформлять сам файл Readme.md - Что значит красиво? - файл должен содержать краткую информацию о том, что это за проект, как его запустить. и что он умеет делать - на какие роуты каую информацию можно получить. Возможный пример - https://github.com/HackerNews/API - не обязательно так красиво, но это что бы было куда стремится.
https://medium.com/astrolabe/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%[…]-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9-readme-159f88076b26
http://webdesign.ru.net/article/pravila-oformleniya-fayla-readmemd-na-github.html
____________________________________________
Если вам сложно и плохо дается в понимании как сделать 3 дз - может вам помогут эти ссылочки
https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5
https://rahmanfadhil.com/express-rest-api/
https://medium.com/@alicantorun/build-a-rest-api-with-mongodb-mongoose-and-node-js-3a5afc4a0431
https://blog.tericcabrel.com/create-a-rest-api-with-nodejs-express-mongodb-and-typescript/
______________________
Как выложить проект с фронтом и беком на Хероку - How to deploy a React + Node app to Heroku in 3 minutes without the command line - https://www.freecodecamp.org/news/deploy-a-react-node-app-to/ (отредактировано) 


Надежда
  11:51
______________________________________
Что в этом примере значит  $set и для чего он нужен?
если кратко, то тут мы говорим про БАЗОВЫЙ модуль к MongoDB, а не Mongoose, то метод $set позволяет обновлять не все поля в объекте, к которому обращаются, а только те, которые мы указали. В примере на принтскрине в первом случае будет перезаписан весь объект с данными и там будет создано только имя, а во втором случае будет заменено ТОЛЬКО значение имени. Но в Mongoose, при обновлении все поля по умолчанию обворачиваются в $set - что бы не было нечаянной перезаписи полей
[options.overwrite=false] «Boolean» By default, if you don't include any update operators in doc, Mongoose will wrap doc in $set for you. This prevents you from accidentally overwriting the document. This option tells Mongoose to skip adding $set.
Link to docs: https://mongoosejs.com/docs/api.html#model_Model.update


Надежда
  14:00
____________________________________________________
:мишень:Допольнительный материал - видео по Node.js :улитка:
:рука_указывает_вправо:если есть желание углубится в ноду,  - в предложенных курсах будет и то, что вам будут рассказывать в след. лекциях, и что-то дополнительно. :женщина-технолог: Можете и покодить и посмотреть доп-инфу :замаскированное_лицо:
https://www.youtube.com/watch?v=thWNUby1G3U&list=PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz&index=2 - хороший курс, вот тут с 1 по 10 тему, это объяснение базы, на которой строится нода, очень советую посмотреть и разобраться. :привидение:
https://www.youtube.com/watch?v=ob9qRQeajA0&list=PL0lO_mIqDDFX0qH9w5YQIDV6Wxy0oawet - курс на русском. без такого глубокого погружения. но тоже много полезного :ленивец:
Три курса по основам ноды от одного автора, от совсем основ, до построения корзины и АPI - мне он нравится очень просто и понятно излагает
https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR - Node.js - Tutorial - Introduction
https://www.youtube.com/watch?v=-3vvxn78MH4&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp&index=2 - NodeJS / Express / MongoDB - Build a Shopping Cart
https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q - What is a RESTful API? | Creating a REST API with Node.js
https://www.youtube.com/watch?v=7f787SsgknA - :cubimal_chick: понимание асинхронности в ноде. Как просиходит цикл событий. :будильник: :лампочка:
:глаза: Как дополнение и более глубокий разбор тем
https://www.youtube.com/watch?v=vQldMjSJ6-w&list=PLvTBThJr861y60LQrUGpJNPu3Nt2EeQsP - JWT
:голова_робота: как дополнение кроме того, то есть в основных темах :механическая_рука:
https://www.youtube.com/watch?v=_ndbCZ9Ni6E - Koa как замена Express
https://www.youtube.com/watch?v=7giZGFDGnkc&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&start_radio=1 - GraphQL - как перейти к новой концепции запросов к беку
https://www.youtube.com/watch?v=ed8SzALpx1Q - GraphQL Full Course - Novice to Expert
и желательно кроме монги разобраться еще с SQL базой данных -
https://www.youtube.com/watch?v=2tDvHQCBt3w&t=4s - Работа с базами данных в Node.js на примере PostgreSQL
  :график_роста: И самое  главное, что когда вы будете смотреть как кодят, на ноде у вас уже будет намотренность, и вы будешь уже интуитивно понимать как называют переменные, и как архитектуру пишут :бомба:
:мегафон:По основам ноды.
:бейдж: Необязательно всех авторов смотреть, я скинула нескольких, потому что обычно один автор заходит и его подача материала, а другой не заходит и не подходит его подача материала. :гроб: :ничего_не_вижу:
:спортивная_медаль:Если все пересмотрите и будет скучно я Вам еще подкину, что можно глянуть - это пока основы :пришелец:
Список дополнительных тем по Node.js  -  https://docs.google.com/spreadsheets/d/1DAm9kUziEXw56CsZzEk0UsoucS_5RG5gMMNX-x-gmfc/edit#gid=379096805
:+1:
1
:единорог:
1



Irina Bazhinova
  14:51
добавлен(а) в канал mentor-nadin пользователем Катерина
.


Надежда
  23:29
Якщо у Вас виникли проблеми з SendGrid
Значить SendGrid з якоїсь причини вважають ваш обліковий запис не безпечним, у них дуже дивна система безпеки. І з цієї причини вимагають звернутися до служби підтримки для підтвердження вашої особистості. Зазвичай такі звернення можуть розглядатися більше тижня в SendGrid.
Що я можу запропонувати:
взяти ключі у когось із одногрупників, хто вже зареєструвався у SendGrid.
взяти телефон і спробувати походити містом і зареєструватися через інші і-мейли через інші мережі wi-fi
походити по друзям і спробувати через їх комп'ютери зареєструватися. Попросити друзів зареєструватися, і якщо у них вийде то, що б вони дали вам ключ від SendGrid.
Та не забувайте, що можна заюзати НодМейлер, він в тексті дз вказан як альтернатива!!! (отредактировано) 
:белая_галочка:
1




11 ответов
Последний ответ 2 мес. назадПосмотреть обсуждение


Надежда
  13:36
Дорогие мои и обожаемые!!! :влюбленный_взгляд:
Половина из Вас сдали от одной до 5 дз,  - это прекрасно!!! :механическая_рука:осталось еще совсем немного!!! ну не бросать же этот уже начатый путь на пол-пути!!! :график_роста:
5 дз сдало только 30%
1 сдало 50%
Берите друг-друга в побратимы и доставайте дз!!! ПЛЗ!!!!
https://i.gifer.com/94mq.gif (отредактировано) 

(457 КБ)
https://i.gifer.com/94mq.gif

:лошадь:
2



Надежда
  23:13
:влюбленный_взгляд:Молодцы!!! активизировались!!! появились домашки на проверку!!!
https://i.gifer.com/origin/c8/c8d8f3ebcb3eba52f9d2058ab1cc4214_w200.gif

(1 МБ)
https://i.gifer.com/origin/c8/c8d8f3ebcb3eba52f9d2058ab1cc4214_w200.gif

:сердце:
3



Надежда
  19:09
Вы мне вчера писали, что я вчера задержала с проверкой дз,  и спрашивали где проверки,
так вот теперь я буду ходить снова по личным сообщениям и спрашивать где ваши дз?
https://i.gifer.com/Xuw0.gif

(482 КБ)
https://i.gifer.com/Xuw0.gif

:ослепительная_улыбка:
4

Привіт. Все ,що могли зробили, тестери перевірили.
https://github.com/RomanKhrapai/Slim-Mom  ---  код фронт,
https://slim-mom7.netlify.app/   --------------------- сторінка,
https://github.com/RomanKhrapai/silm-mom-server -- код сервера,
https://slim-mom-server.herokuapp.com/   --------------адреса сервера,
https://slim-mom-server.herokuapp.com/api/docs/  -- документація по серверу.

Надежда
  13:15
:женщина-фея:Была рада с Вами работать! :влюбленный_взгляд:Надеюсь смогла помочь, простите если где-то долго отвечала на вопросы, или чего-то не так как вы хотели отвечала.:ничего_не_вижу::привидение:
:стрелка_вниз:Для тех, у кого я не была ментором - :рука_указывает_вправо:давайте оставаться на связи - https://www.linkedin.com/in/nadya-hristuk/ - это для нет-воркинга, вам будет проще найти выпускников и рекрутеров:мишень: )) и расширить сеть. :мишень:Ну и можно мне писать если будут какие-то вопросы.:пишущая_рука:https://img2.reactor.cc/pics/post/%D0%BA%D0%BE%D1%82%D1%8D-%D0%BC%D0%B8%D0%BB%D0%BE%D1%82%D0%B0-7028079.jpeg
  
  
репо фронта: https://github.com/Kilkenni/slim-team-goit (нетліфай справа в описі)
репо бека: https://github.com/Kilkenni/slim-team-goit-backend (посилання на swagger-док справа в описі) (отредактировано) 

Contact.find({}, {}, {});

@Ivetta Dashkova
 https://github.com/dariaddz/fullstack-finalproject-slimmom-frontend/tree/dev
https://github.com/KurbatovAS/fullstack-finalproject-slimmom-backend

dariadz
  18 июля в 13:39
@Надежда
 привет! посмотри, плз проделанную работу. статус на сегодня- отдали сайт на тестирование, продолжаем править косяки.
ссылка на бэк репозиторий, сам бэк на heroku, ссылка в описании https://github.com/KurbatovAS/fullstack-finalproject-slimmom-backend
ссылка на нетлифай https://g3-slimmom.netlify.app/
ссылка на фронт репо https://github.com/dariaddz/fullstack-finalproject-slimmom-frontend/tree/dev
GitHubGitHub
GitHub - KurbatovAS/fullstack-finalproject-slimmom-backend
Contribute to KurbatovAS/fullstack-finalproject-slimmom-backend development by creating an account on GitHub. (141 КБ)
https://github.com/KurbatovAS/fullstack-finalproject-slimmom-backend

project1


Eugene Piron
  21 июля в 16:25
https://github.com/fragile-chamomile/weightbusters-backend
GitHubGitHub
GitHub - fragile-chamomile/weightbusters-backend
Contribute to fragile-chamomile/weightbusters-backend development by creating an account on GitHub. (123 КБ)
https://github.com/fragile-chamomile/weightbusters-backend

:+1:
1
:сложенные_руки:
1

project4


Kilkenni
  20 июля в 20:41
@Ivetta Dashkova
 
@Надежда
 поясніть, будь ласка, які наші подальші дії? Захист запланований на завтра на 19? Чи маємо ми показати результат ДО захисту?
репо фронта: https://github.com/Kilkenni/slim-team-goit (нетліфай справа в описі)
репо бека: https://github.com/Kilkenni/slim-team-goit-backend (посилання на swagger-док справа в описі) (отредактировано) 
GitHubGitHub
GitHub - Kilkenni/slim-team-goit: GoIT graduation team project (frontend)
GoIT graduation team project (frontend). Contribute to Kilkenni/slim-team-goit development by creating an account on GitHub. (126 КБ)
https://github.com/Kilkenni/slim-team-goit

GitHubGitHub
GitHub - Kilkenni/slim-team-goit-backend: GoIT gradiation team project (backend)
GoIT gradiation team project (backend). Contribute to Kilkenni/slim-team-goit-backend development by creating an account on GitHub. (127 КБ)
https://github.com/Kilkenni/slim-team-goit-backend

Личное сообщение


Роман
  20 июля в 20:11
Привіт. Все ,що могли зробили, тестери перевірили.
https://github.com/RomanKhrapai/Slim-Mom  ---  код фронт,
https://slim-mom7.netlify.app/   --------------------- сторінка,
https://github.com/RomanKhrapai/silm-mom-server -- код сервера,
https://slim-mom-server.herokuapp.com/   --------------адреса сервера,
https://slim-mom-server.herokuapp.com/api/docs/  -- документація по серверу.

Личное сообщение


Марина Тріпецька
  20 июля в 15:26
https://github.com/MarinaTripetska/slim-mom-back
GitHubGitHub
GitHub - MarinaTripetska/slim-mom-back
Contribute to MarinaTripetska/slim-mom-back development by creating an account on GitHub. (103 КБ)
https://github.com/MarinaTripetska/slim-mom-back

команда-3


Наталья Семешенко
  17 июля в 20:44
Создание кастомного компонента  с mui https://www.youtube.com/watch?v=ziWJ4k_3BLk
YouTubeYouTube | Justin Kim
Formik with Material UI Tutorial - Create Beautiful React Forms 

команда-3


Alena Senkiv
  17 июля в 21:05
https://youtu.be/fN25fMQZ2v0
YouTubeYouTube | Ulbi TV
Продвинутая JWT авторизация на React и Node js. Access, refresh, активация по почте 

:жест_ок:
1

Личное сообщение


Роботецький Тарас
  20 июля в 1:05
Вибачте що турбую Вас в пізній час)))))
Личное сообщение


Андрей Пенский
  19 июля в 21:00
https://github.com/AndreiPenskiy/Slim-Mom-Backend
GitHubGitHub
GitHub - AndreiPenskiy/Slim-Mom-Backend
Contribute to AndreiPenskiy/Slim-Mom-Backend development by creating an account on GitHub. (106 КБ)
https://github.com/AndreiPenskiy/Slim-Mom-Backend

Личное сообщение


Vladyslav Nemylostyvyi
  18 июля в 15:34
https://github.com/codajoker/final_project_react_node_backend
GitHubGitHub
GitHub - codajoker/final_project_react_node_backend
Contribute to codajoker/final_project_react_node_backend development by creating an account on GitHub. (101 КБ)
https://github.com/codajoker/final_project_react_node_backend

Личное сообщение


Vitaliy Kretsul
  18 июля в 13:14
якщо можете перевірте поки непізно наш проект, там гралися з сессіями по коду там порядок наведем де рефреш сессія, в загалом все працює плюс добавили в базу перевод продуктів на анг. https://github.com/Kretsul-Vitaliy/slim-mom-calculate-daily-calorie-backend
GitHubGitHub
GitHub - Kretsul-Vitaliy/slim-mom-calculate-daily-calorie-backend: slim-mom-calculate-daily-calorie-backend
slim-mom-calculate-daily-calorie-backend. Contribute to Kretsul-Vitaliy/slim-mom-calculate-daily-calorie-backend development by creating an account on GitHub. (152 КБ)
https://github.com/Kretsul-Vitaliy/slim-mom-calculate-daily-calorie-backend

Личное сообщение


Maksym Lvov
  18 июля в 14:19
Надежда, добрый день)
Обсуждение в канале Личное сообщение


Владимир Белов
  30 июня в 17:15
Та ну. Так не интересно((( ты хоть в личку скажи как я сделал последний шаг в дз. Правильно, не правильно
random


Роботецький Тарас
  22 июня в 11:53
https://dou.ua/lenta/articles/strange-test-tasks/?from=nl&utm_source=newsletter&utm_medium=email&utm_campaign=22062022
ДОУДОУ
«На співбесіді попросили розробити план польоту на Місяць». Айтівці — про тестові, які найбільше здивували
Ми вирішили запитати ІТ-спеціалістів, які тестові на співбесідах їх найбільше здивували з різних причин. Деякі фахівці стикнулися з нереалістичними дедлайнами, невідповідними їхньому рівню чи посаді завданнями, поділилися цікавими задачами та розповіли про курйозні ситуації. У статті – найцікавіші відповіді.
https://dou.ua/lenta/articles/strange-test-tasks/?from=nl&utm_source=newsletter&utm_medium=email&utm_campaign=22062022

ментор-христюк


Dmytro Bondarenko
  21 июня в 19:52
Прошу пiдказку з jest. Роблю як Вiка. (отредактировано) 
3 файла 
ice_screenshot_20220621-194834.png


ice_screenshot_20220621-194855.png


ice_screenshot_20220621-195150.png


Личное сообщение


Надежда
  9 июня в 10:39
await Contact.find({ _id: contactId, owner: userId });
Личное сообщение


Надежда
  9 июня в 10:36
const result = await Contact.findByIdAndUpdate(
		{ _id: id, owner: userId },
		{ ...body },
		{ new: true }
	);
ментор-христюк


Igor
  29 мая в 14:02
message": "missing field favorite Как вывести при пустом теле запроса на favorite, конкретно это сообщение?
ментор-христюк


Oksana Lytvynchuk
  31 мая в 17:38
@Надежда
, поясніть, будь ласка, що в даному прикладі $set і для чого це
image.png 
image.png


Личное сообщение


Владимир Белов
  31 мая в 16:20
Здравствуйте. У нас в 2 дз при валидации я написал number.string() а как сделать правильно, и поставить условие, чтоб нужно было ввести прям номер определенного формата. Я гуглил, но нашел только условие для email
ментор-христюк


Надежда
  31 мая в 23:11
если кратко, то тут мы говорим про БАЗОВЫЙ  модуль к монго, а не монгус, то метод $set позваляет обновлять не все поля в объекте, к которому обращаются, а только те, которые мы указали. В примере на Вашем принтскрине в первом случае будет перезаписан весь объект с данными и там будет создано только имя, а во втором случае будет заменено ТОЛЬКО значение имени. но в Монгусе, при обновлении все поля по умолчанию обворачиваются в  $set - что бы не было нечаянной перезапии полей
:+1:
1

ментор-христюк


Надежда
  31 мая в 23:11
[options.overwrite=false] «Boolean» By default, if you don't include any update operators in doc, Mongoose will wrap doc in $set for you. This prevents you from accidentally overwriting the document. This option tells Mongoose to skip adding $set.
Link to docs: https://mongoosejs.com/docs/api.html#model_Model.update
:+1:
1

Личное сообщение


Надежда
  31 мая в 22:20
const pattern = /^[0-9+]{7}-[0-9+]{1}$/

const schema = Joi.object({
  phone: Joi.string().pattern(new RegExp(pattern))
})
Личное сообщение


Надежда
  31 мая в 22:12
https://askdev.ru/q/kompleksnoe-regulyarnoe-vyrazhenie-dlya-proverki-nomera-telefona-857/

1 команда - https://github.com/Kretsul-Vitaliy/slim-mom-calculate-daily-calorie-backend - рефреш токен и сессии
2 команда - https://github.com/codajoker/final_project_react_node_backend
3 команда
4 команда
5 команда - https://github.com/Taras-Roboteckyi/node_team_project_health
6 команда - https://github.com/AndreiPenskiy/Slim-Mom-Backend
7 команда - https://github.com/dimatytenko/node-team-project


Надежда
  10:36
const result = await Contact.findByIdAndUpdate(
		{ _id: id, owner: userId },
		{ ...body },
		{ new: true }
	);





Добавлено в сохраненные объекты
10:39
await Contact.find({ _id: contactId, owner: userId });


Надежда
  15:38
const { subscription } = req.body;
  const subscriptionOptions = ["starter", "pro", "business"];
  const subscriptionVerification = subscriptionOptions.some(
    (item) => item === subscription
  );
  if (!subscriptionVerification) {
    throw new Error("There is no such subscription option");
  }


Надежда
  22:39
const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  let result = await findContacts({ owner: _id }, skip, limit);


Надежда
  13:48
const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id, ...(favorite && { favorite }) },
    "",
    {
      skip,
      limit: Number(limit),
    }
  ).populate("owner", "_id email subscription");


Надежда
  21:13
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100,


Надежда
  16:59
fileSize: 2048,


Надежда
  22:58
const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    favorite ? { owner: _id, favorite } : { owner: _id },
    "-createdAt -updatedAt",
    {
      skip,
      limit: +limit,
      // limit: Number(limit),
    }
  ).populate("owner", "email subscription");
  if (!result) {
    throw generateError(400, "missing field favorite");
  }
  res.json(result);


Надежда
  23:34
limits: { fileSize: 500000 },


Надежда
  10:14
fieldNameSize: 100,
		fileSize: 500000,


Надежда
  23:06
sgMail.setApiKey(SENDGRID_API_KEY);
const sendEmail = async (data) => {
  const email = { ...data, from: "dariadz@gmail.com" };
23:07
const msg = {
        to: userEmail, //Change to tour recipient
        from: 'rtvr@ukr.net', //Change to tour recipient
        subject: 'Confirm your email',


Надежда
  23:18
const sendMail = async (data) => {
    try {
        const mail = { ...data, from: "selim.fazylov1@gmail.com" };
        await sgMail.send(mail);
        return true;
    } catch (error) {
        throw error;
    }
};


Надежда
  22:33
const loginUser={
            email: "elenapat468@gmail.com",
            password: "elenapat468"
        };


Надежда
  11:01
const updateAvatar = async (userId, avatarURL) => {
  const user = await AuthModel.findById(userId);
  if (!user) {
    throw new Unauthorized("Not authorized");
  }
  return await AuthModel.findByIdAndUpdate(
    userId,
    { avatarURL },
    { new: true }
  );
};


Надежда
  11:19
const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.json(result);

Надежда
  15:18
:женщина-фея:Была рада с Вами работать! :влюбленный_взгляд:Надеюсь смогла помочь, простите если где-то долго отвечала на вопросы, или чего-то не так как вы хотели отвечала.:ничего_не_вижу::привидение:
:стрелка_вниз:Для тех, у кого я не была ментором - :рука_указывает_вправо:давайте оставаться на связи - https://www.linkedin.com/in/nadya-hristuk/ - это для нет-воркинга, вам будет проще найти выпускников и рекрутеров:мишень: )) и расширить сеть. :мишень:Ну и можно мне писать если будут какие-то вопросы.:пишущая_рука:

Надежда
  21:14
Привет! :рука:
Я ваш ментор по  Node.js :сноубордист:
С радостью буду помогать с вопросами по Node.js, и буду проверять Ваши домашние работы! :мужчина-фея:
По всем вопросам пишите в личные сообщения :пишущая_рука:
______________________________
Все дз обязательно отправляем на проверку через платформу  - LMS
_______________________________________________________________
1дз  - принсткрины можно положить в папочку на гите, можно добавить как ссылки в README.MD, можно добавить в LMS при сдаче дз - на ваш выбор
+ в LMS обязательно ссылка на репозиторий с самим кодом
:обнимаю:
4
:белая_галочка:
6



Olena Patlata
  11:56
теперь в канале #node_js.


Надежда
  14:42
По 1 дз - если все понятно, то не читаем, если не понятно, то может, это вам поможет
Кака работать с  yargs в switch
Давайте с начала - в вашей домашней работе предполагается реализовать методы работы с файлом: чтение из него всех данных и вывод в консоль, добавление данных, удаление данных и поиск по id.
Но как мы можем вызвать ту или иную функцию на выполнение. Для этого нам надо как-то в скрипт передать данные.
Для этих целей используется модуль yargs
он позволяет передавать в виде аргументов данные, которые могут обрабатываться внутри вашего скрипта.
что бы просто запустить на выполнение код из файла в ноде надо написать node и название того файла который вы хотите запустить. В вашей дз это node index.js
 Но нам надо как-то передать в этот файл параметры, что бы можно было вызвать на выполнение конкретную функцию
 node index.js --action="list"
вот тут происходит запуск файла index.js и передача аргумента --action="list"
как он будет обрабатываться в самом скрипте
сначала подключаем вначале файла нужный нам модуль - const argv = require('yargs').argv;   берем из него возможность работы с аргументами.
дальше создаем функцию которая принимает аргументы  - function invokeAction({ action, id, name, email, phone })
 и вызываем ее  - invokeAction(argv); -
если мы запустим наш скрипт с аргументами node index.js --action="list" - то в функцию попадает флаг --action со значением list
дальше управление передается на
switch (action) {
и тут будет происходить поиск
    case 'list':
      // ...
      break;
ответа со значением list
аналогично отработают все остальные action, которые вы передадите каждый раз запуская скрипт с разными аргументами
node index.js --action="get" --id=5

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Удаляем контакт
node index.js --action="remove" --id=3
если вы попробуете вызвать ваш скрипт НЕ передав аргументы  - node index.js - вы попадете на ветку -
   default:
      console.warn('\x1B[31m Unknown action type!');
и увидите в консоли ошибку красного цвета - с сообщением, что это не известный вид action
Красный цвет обеспечивает  - \x1B[31m
Вот таким методом работает в связке argv и switch
что бы в простом виде посмотреть как это работает можете написать как-то так
 // index.js
const argv = require('yargs').argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log('list')
      break;

    case 'get':
       console.log('id',id)
      break;

    case 'add':
     console.log( 'name email phone', name, email, phone)
      break;

    case 'remove':
      console.log('id',id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
и запустите этот скрипт с предложенными вам методами
node index.js --action="list"

# Получаем контакт по id
node index.js --action="get" --id=5

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Удаляем контакт
node index.js --action="remove" --id=3
Ну а дальше вам надо прописывать методы в самом contact.js экспортировать их из файла и импортировать в файле index.js и вызывать их в соответствующих case
____________________________
Пояснения по 1 дз
Как добавить пользовательский скрипт в мой файл package.json, который запускает файл index.js?
При выполнении команды npm start в каталоге проекта, будет выполнятся команда node index.js . И тем самым будет запускаться на выполнение файл index.js
Вот что надо записать в файле package.json
"scripts": {
    "start": "node index.js"
}
 Поле «script»
Возможно вы этого не знали, но npm содержит поле под названием scripts в файле package.json проекта для того, чтобы делать такие команды, как npm test, фактически, выполняющая содержимое поля scripts.test, и npm start, вызывающая инструкции из поля scripts.start.
npm test и npm start — это, всего лишь, удобные ссылки для npm run test и npm run start. С помощью npm run можно выполнить совершенно любое содержимое любого поля внутри scripts.
__________________________
npm - главные скрипты  - такие как запуск, остановка, перезагрузка, установить, версия или тест не требует выполнить команду. Эти сценарии и некоторые другие описаны в документации npm. И выполняются они через написание директивы npm и указания самой команды - например.
npm start
Остальные пользовательских скрипты npm, что бы вызвать вам нужно добавить run перед именем скрипта npm run dev
npm run dev
Абсолютно у всех разработчиков знакомство с nodejs начинается с того, что после каждого изменения нужно перезагружать сервер. Поэтому, появляется вопрос,  как сделать так, чтобы сервер перегружался автоматически.
Самый популярный вариант - это nodemon. То есть идея состоит в том, что в development окружении мы хотим, чтобы nodemon следил за файлами, которые мы меняем и просто перезапускал сервер, если эти файлы относятся к серверу.
Необходимо установить локально в наш проект как devDependencies nodemon.
npm i -D nodemon
или
yard add nodemon
Теперь давайте в package json добавим команду для него.
"scripts": {
  "dev": "nodemon index.js"
}
Теперь в консоли давайте запустим его командой
npm run dev
Как мы видим он запустился. Нам вывелось, что он вотчит все файлы в нашей папке и запускает команду node index.js при изменении любого файла.
Теперь, если мы изменим наш index.js, то nodemon перезапустит сервер.
Итого
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
В 1 ДЗ СКРИПТЫ ЗАПУСКАТЬ БЕЗПОЛЕЗНО - ВЫ НИЧЕГО НЕ УВДИТЕ!!! ОНИ У ВАС НЕ ВЫПОЛНЯТСЯ ПРАВИЛЬНО!!
Вы сможете с ними нормально работать только со 2 дз!!
ЕСЛИ ЗАПУСТИТЕ СКРИПТЫ сейчас - ТО ПОЛУЧИТЕ ОШИБКУ - почему, потому что вы вызывает index.js без аргументов и попадаете в ветку
default:
      console.warn('\x1B[31m Unknown action type!');
И ЕЕ ЖЕ УВИДИТЕ В КОНСОЛИ!!!
Что почитать - https://habr.com/ru/company/ruvds/blog/458504/
______________________________
Модуль Path
для подключения файлов необходимо использовать метод
path.join([path1][, path2][, ...]) — Объединяет все аргументы и нормализует полученный путь.
для получения точки отсчета - откуда надо проложить путь к нужному файлу используется __dirname - возвращает путь к каталогу текущего исполняемого файла.  И указываем путь  к файлу который хотим подключить.
const path = require('path');

const absolutePath = path.join(__dirname, './db/contacts.json');
(отредактировано)
[19:46] ___________________________________________
Как экспортировать функции из файла и импортировать?
При разделении программного кода на несколько файлов module.exports используется передачи переменных и функций для использования в том месте, где будет вызван этот модуль.
Если вы просто хотите выставить только одну функцию или переменную , например:
// test.js
var name = 'william';

module.exports = function(){
    console.log(name);
}   

// index.js
var test = require('./test');
test();
этот модуль предоставляет только одну функцию, и свойство name является локальным и недоступным для внешнего модуля, в котором подключается './test' .
______________________________
Если необходимо экспортировать несколько функций или переменных - то можно передать в module.exports объект:
//data.js

module.exports = {
    getContacts,
    getById
}
//app.js
const functions = require('./data.js');
functions.getContacts();
functions.getById();
или можно
const { getContacts, getById } = require('./data.js');
getContacts();
getById();
(отредактировано)

ХабрХабр
13 приёмов работы с npm, которые помогают экономить время
Каждый день миллионы разработчиков, создавая свои JavaScript-приложения, обращаются к npm (или к Yarn). Выполнение команд наподобие npm init или npx create-react-app стало привычным способом начала... (41 КБ)
https://habr.com/ru/company/ruvds/blog/458504/

14:42
разница const fs = require('fs').promises и const fs = require('fs')
Изначально модуль написан с использованием call-back функций и вызывался через  const fs = request("fs")
Дальше js развивается и уже никто не пишет на call-back функциях, потому что это устаревший стиль и еще колл-бак ад. Тогда в модуль добавили поддержку промисов,  Теперь можно использовать функции, но работать с ними не через коллбаки, а через промисы.  Соответвенно надо подключить работу с промисами const fs = require('fs').promises
Сейчас уже работают, не через промисы, а через обвертку над промисами async /await. Это сокращает код и делает его более читабельным
Если собираетесь использовать колбеки, то подключаете библиотеку без промисов.
Давайте поговорим о базовом JS
Что такое колбэки - "В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия"
когда они используются? - когда есть «асинхронность» (когда какой-то процесс  будет завершен не сейчас, а потом)
function НазваниеФункции (аргументы, callback) {
 ......(какой-то код)
}
Теперь работа с самой функцией колбека
function НазваниеФункции (аргументы, function(error, data) {
  if (error) {
    // обрабатываем ошибку
  } else {
    // успешно выполнено
  }
});
такой подход называется «колбэк с первым аргументом-ошибкой» («error-first callback»).
Правила таковы:
Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.
теперь то, как это выглядит применительно к вашей 1 дз и к первой функции
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err)  return console.error(err.message);
      console.table(JSON.parse(data.toString()));
  });
}
это если мы собираемся в основном файле просто вызвать функцию listContacts()
Если вы хотите вернуть данные и уже в основном файле и обработать и вывести их в консоль, то
function listContacts() {  
fs.readFile(contactsPath, (err, data) => {    
if (err) return console.error(err.message);     
   return data;  
});  
return JSON.parse(list);
}
тогда в основном файле вы можете вызвать listContacts().then(data => console.table(data)
[18:16] _____________________________________________
разница const fs = require('fs').promises и const fs = require('fs')
Изначально модуль написан с использованием call-back функций и вызывался через  const fs = request("fs")
Дальше js развивается и уже никто не пишет на call-back функциях, потому что это устаревший стиль и еще колл-бак ад. Тогда в модуль добавили поддержку промисов,  Теперь можно использовать функции, но работать с ними не через коллбаки, а через промисы.  Соответвенно надо подключить работу с промисами const fs = require('fs').promises
Сейчас уже работают, не через промисы, а через обвертку над промисами async /await. Это сокращает код и делает его более читабельным
Если собираетесь использовать колбеки, то подключаете библиотеку без промисов.
Давайте поговорим о базовом JS
Что такое колбэки - "В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия"
когда они используются? - когда есть «асинхронность» (когда какой-то процесс  будет завершен не сейчас, а потом)
function НазваниеФункции (аргументы, callback) {
 ......(какой-то код)
}
Теперь работа с самой функцией колбека
function НазваниеФункции (аргументы, function(error, data) {
  if (error) {
    // обрабатываем ошибку
  } else {
    // успешно выполнено
  }
});
такой подход называется «колбэк с первым аргументом-ошибкой» («error-first callback»).
Правила таковы:
Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.
теперь то, как это выглядит применительно к вашей 1 дз и к первой функции
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err)  return console.error(err.message);
      console.table(JSON.parse(data.toString()));
  });
}
это если мы собираемся в основном файле просто вызвать функцию listContacts()
Если вы хотите вернуть данные и уже в основном файле и обработать и вывести их в консоль, то
function listContacts() {  
fs.readFile(contactsPath, (err, data) => {    
if (err) return console.error(err.message);     
   return data;  
});  
return JSON.parse(list);
}
тогда в основном файле вы можете вызвать listContacts().then(data => console.table(data)
Потом эволюция дошла до промисов,
const fs = require('fs').promises
Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
promise.then навешивает обработчики на успешный результат или ошибку
Если очередной then вернул промис, то далее по цепочке будет передан не сам этот промис, а его результат.
Если then возвращает промис, то до его выполнения может пройти некоторое время, оставшаяся часть цепочки будет ждать.
То есть, логика довольно проста:
В каждом then мы получаем текущий результат работы.
Можно его обработать синхронно и вернуть результат (например, применить JSON.parse). Или же, если нужна асинхронная обработка – инициировать её и вернуть промис.
При возникновении ошибки – она отправляется в ближайший обработчик onRejected.
Такой обработчик нужно поставить через второй аргумент .then(..., onRejected) или, что то же самое, через .catch(onRejected).
Чтобы поймать всевозможные ошибки, которые возникнут при загрузке и обработке данных, добавим catch в конец цепочки
promise.then(onFulfilled, onRejected)
пример первой функции з дз на чистых промисах
function listContacts() { 
readFile(contactsPath,'utf-8')
.then(data => console.log(JSON.parse(data))
    .catch(err => console.log(err))
}
Если собираемся вернуть данные в основной файл
function listContacts() { 
const list = readFile(contactsPath,'utf-8')
.then(data => return JSON.parse(data))
    .catch(err => console.log(err))
return list
}
_________________________________________________________________________________________
Async/await
Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.
По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем promise.then.
Что бы переписать функцию на промисах с помощью async/await:
Нам нужно заменить вызовы .then на await.
И добавить ключевое слово async перед объявлением функции.
async function listContacts() => {
  const res = await readFile(contactsPath);
  console.log(res)
}
Ошибки можно ловить, используя try..catch, как с обычным throw
В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}
Если собираемся вернуть данные в основную функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
     return result;  
  } catch (error) {
    console.log(error);
  }
}
Что дополнительно почитать:
https://habr.com/ru/company/skillbox/blog/458950/
Хабр
Разбираем Async/Await в JavaScript на примерах
Автор статьи разбирает на примерах Async/Await в JavaScript. В целом, Async/Await — удобный способ написания асинхронного кода. До появления этой возможности подобный код писали с использованием...
	https://habr.com/ru/company/skillbox/blog/458950/
[18:17] о нужен файл .gitignore?
Для чего нужно использовать файл .gitignore, если можно просто выбрать файлы которые необходимо закоммитить, и сделать это?
Есть несколько задач, которые наиболее эффективно решаются с использованием файла .gitignore:
Не мучаться с выбором нужных файлов для индексации (которая git add).
В большом проекте часто бывает много файлов, которые не подлежат версионированию. А ещё вам может быть удобно хранить какие-то промежуточные результаты в папке tmp.
Настройка .gitignore позволяет не выискивать нужные файлы, а добавлять всё сразу или по крайней мере уточнять меньше.
Сделать локальный конфиг, который не будет затронут pull-ом.
Защитить чувствительную информацию от случайного раскрытия.
Случается, что вы случайно добавили и закоммитили ключи или пароли от какого-нибудь облачного хранилища, например Amazon.
Если так уж необходимо хранить чувствительную информацию в папке проекта, то нужно положить её в под-папку, игнорируемую git.
Быстро очищать проект от временных файлов.
Предположим, что вы пишете на компилируемом языке и при построении вашего проекта формируется множество промежуточных файлов (объектные, прекомпиляция, вот это всё). Перед каждой сборкой необходимо их удалять, чтобы в случае чего не прилинковать лишнее. Можно делать это вручную. Можно написать скрипт. А можно просто добавить их в .gitignore и делать так:
git clean -fX

ХабрХабр
Разбираем Async/Await в JavaScript на примерах
Автор статьи разбирает на примерах Async/Await в JavaScript. В целом, Async/Await — удобный способ написания асинхронного кода. До появления этой возможности подобный код писали с использованием... (40 КБ)
https://habr.com/ru/company/skillbox/blog/458950/



Надежда
  14:42
________________________________________________
файл  .gitignore - можно сгенерировать и тогда вам самостоятельно надо разбираться с теми зависимостями, которые туда добавил генератор  .gitignore
или вы можете собрать самостоятельно создав в корне проекта файл  .gitignore: и добавить туда ту информацию по вашему проекту, которую необходимо не загружать на гит.
# комментарий — эта строка игнорируется
# не обрабатывать файлы, имя которых заканчивается на .a
*.a
# НО отслеживать файл lib.a, несмотря на то, что мы игнорируем все .a файлы с помощью предыдущего правила
!lib.a
# игнорировать только файл TODO находящийся в корневом каталоге, не относится к файлам вида subdir/TODO
/TODO
# игнорировать все файлы в каталоге build/
build/
# игнорировать doc/notes.txt, но не doc/server/arch.txt
doc/*.txt
# игнорировать все .txt файлы в каталоге doc/
doc/**/*.txt
_______________________________________________________________________
Какая задача на этапе 1 дз - убрать папку node_modules
├── js
│   ├── app.js
│   └── system.js
├── scss
│   ├── system.scss
│   └── theme.scss
└── node_modules       <-- Убрать
    │   ├── load-json-file
    │   ├── lodash
    │   ├── jquery
    │   ├── make-error
    │   ├── semantic
    │   └── yargs
    └── semantic.json
Решение:
node_modules/*
_____________________________________
Как игнорировать файлы, которые уже отслеживаются?
Если вы добавили файл или папку в .gitignore, после того как они попали в репозиторий, то их необходимо удалить из репозитория командой:
git rm --cached <file>
Например убрать папку storage/framework/cache/. Обратите внимание: вначале отсутствует слеш.
git rm -r --cached "storage/framework/cache/"
что почитать на тему - https://devacademy.ru/article/ignorirovanie-faylov-i-katalogov-v-git
[19:50] _________________________________________________
Второй пример для разбора с return
async function listContacts() {
  try {
    .........
    console.table(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

/// и в фале index.js /
   listContacts();
Директива return  - нужна, только ели вы хотите что-то передать из функции, вернуть из нее что-то и передать дальше. Но в данном примере мы все данные, которые нам нужны выводим в консоль. А в функции listContacts() никак возвращаемые данные не обрабатываем, значит это лишний код.
____________________
Пример, когда имело бы смысл возвращать данные.
async function listContacts() {
  try {
    .........
    return result;
  } catch (error) {
    console.log(error);
  }
}

/// и в фале index.js /
   listContacts().then(data=>console.table(data));
Это мелочи, но по ним складывается впечатление о понимании Вами того, что вы пишите.
 ____________________________________________________
По улучшениями/оптимизации к 1 ДЗ:
У вас повторяются функции чтения из файла и преобразования данных и запись в файл. Их можно вынести как отдельные функции, это никем не запрещается ))
[19:50] __________________________________________________
На всякий случай давайте обсудим вот такой момент:
"добавление нового контакта, без метода push().
  function addContact(name, email, phone) {
 fs.readFile(contactsPath, { encoding: 'utf8' }, (err, data) => {
        if (err) { console.log(err.message) }
            const contacts = JSON.parse(data)
            const contactsNew = {id: shortid.generate(), name, email, phone }
            const contactsList = JSON.stringify([contactNew, ...contacts], null, '\t')

            fs.writeFile(contactsPath, contactsList, (err) => { if (err) console.error(err) })
    })
  }
  try {
    addContact()
  } catch (error) {
    next(error)
  }
При классическом push(), вы ожидаете увидеть вот такого вида запись -  contacts.push(contactNew)
- в примере сделали более элегантно -
"Использование оператора spread
Использование оператора spread не ограничивается передачей параметров функции. Несколько примеров его полезного использования:
Клонирование свойств массивов
var arr = ['will', 'love'];
var data = ['You', ...arr, 'spread', 'operator'];
console.log(data); // ['You', 'will', 'love', 'spread', 'operator']
"
http://jsraccoon.ru/es6-spread-rest
https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit
const contactsList = JSON.stringify([
contactNew, ...contacts], null, '\t') - вот место, где делается спред вместо push() (отредактировано) 

jsraccoon.rujsraccoon.ru
ES6: Операторы Spread и Rest
Новый оператор ... называется spread (распростанение, расширение) или rest (остаток) в зависимости от того, где и как он используется. (383 КБ)
http://jsraccoon.ru/es6-spread-rest


ХекслетХекслет
Spread-оператор и создание новых массивов / JS: Массивы
Spread-оператор и создание новых массивов / JS: Массивы: Научиться применять spread-оператор (оператор "расширения") для массивов. (111 КБ)
https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit



2 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Надежда
  14:43
_____________________________________________
Обработка ошибки в конструкции try/catch в Node.js
по обработке ошибки -  лучше обрабатывать ошибку через
  try {
    //...
  } catch (err) {
    //... handle it locally
error.message = "listContacts error";
    throw new Error(err.message)
  }
ссылка на источник  -  https://nodejs.dev/learn/error-handling-in-nodejs#exceptions-with-promises

nodejs.devnodejs.dev
Error handling in Node.js
How to handle errors during the execution of a Node.js application


Надежда
  22:55
______________________________________________________________________
:рука_указывает_вправо: Начиная со второй домашней работы, добавьте меня, пожалуйста, в коллабораторы - мой ник на гит-хабе - NadyaHristuk :женщина-технолог:
Зачем меня добавлять в коллабораторы - такое условие по сдаче ваших работ по курсу Node.js - https://github.com/goitacademy/nodejs-homework
______________________________________________________________________
Как добавить в коллабораторы - заходим на сайт https://github.com/ - открываем нужный нам репозиторий, над кодом есть панель управления и крайняя справа клавиша - настройки (Settings) - дальше  - Manage access - вводим пароль - ищем большую зелененькую клавишу - "Invite a collaborator" - в появившейся всплывашке вводим мой ник - NadyaHristuk и нажимаем -   Add  to this repository

goitacademy/nodejs-homework
Stars
16
Last updated
10 days ago
Добавлено: GitHub
:+1::оттенок-кожи-2::+1:
3



Надежда
  12:51
Приветик, я к Вам с вопросом, у меня есть еще материалы по Ноде, но они на русском, как бы все перешли на обучение на Укр. По этому я их и перестала выкладывать, а за перевод еще не села.
Вопрос - бросать сюда всякое полезное на русском, или не надо? и только когда переведу, то тогда уже скидывать полезную инфу сюда?
https://i.gifer.com/6E2.gif (отредактировано) 

(456 КБ)
https://i.gifer.com/6E2.gif



3 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Надежда
  13:26
___________________________________________
Зачем вам нужны ветки? и зачем меня добавлять в коллабораторы.
Это приближенный вариант работы над проектом над реальным проектом.
Обычно в проекте есть много веток, каждую "фичу" дорабатывают в отдельной ветке, потом делают пул-реквест, на слияние с основной веткой. Ваш тим-лид проверяет ваш код и сливает с основной веткой, или пишет замечания и отправляет на доработку.
Дз сделанны по такому принципу, что вы от работы к работе добавляете "фичи" и расширяете основной проект. Каждую дз вы делаете в отдельной ветке, и делаете пул-реквест на добавление этого кода в основную ветку. Я ваш "тим-лид" который на время курса по Node.js, проверяю ваш пул-реквест, если все хорошо, я добавляю ваш код в основную ветку. Если есть замечания я вам из отписываю в пул-реквесте.
А в основной ветке у вас всегда самый актуальный код.
По 2 дз :
в бойлерплейте дан метод PATCH а в ДЗ требуют прописать PUT:задумчивость::обезьяна:.  стоит переименовывать метод на PUT?
В условиях 2 дз - нет значения - что возьмете - то и хорошо.
Если дотошничать.
"PATCH используется для частичного изменения ресурса. PUT создает новый ресурс или заменяет представление целевого ресурса, данными представленными в теле запроса.
Иными словами, в PATCH вложенный объект содержит набор инструкций, описывающих, как ресурс, находящийся в данный момент на исходном сервере, должен быть модифицирован для создания новой версии. А в PUT содержится новая версия ресурса целиком.
В отличие от PUT, PATCH не идемпотентный, это подразумевает что успешные идентичные PATCH запросы могут иметь отличные эффекты. Однако, возможно выдавать запросы PATCH таким образом, чтобы они были идемпотентные.
.....
UPDATE
PATCH не является идемпотентным (одноитоговым), т.к. в него можно вставить инструкцию добавления элемента. Тогда повторный запрос добавит его еще раз. А вот PUT просто перезаписал бы ресурс целиком (снова), т.е повторный запрос не приводит к разным результатам. Другие примеры: GET запрос идемпотентный: сколько бы раз ты не запрашивал в Google некоторый запрос, Google вернет тебе тот же результат. POST не идемпотентный: он может вставлять в базу новую строку каждый раз." (отредактировано)
___________________________________________
Валидацию добавления и обновления можно выделить в две отдельные схемы. Что бы при добавлении записи обязательно запрашивались ВСЕ поля для заполнения. А при обновлении контактов достаточно что бы обновилось значение хотя бы одного из полей, записи которая уже есть в базе данных.
при валидации контактов, которые приходят к вам для обновления необходимо убедится, что к вам пришло хотя бы одно поле на обновление
const schemaUpdate = Joi.object({
  name: Joi.string()    
  email: Joi.string()
  phone: Joi.string()
}).min(1) - надо дописать - .min(1) - что минимально придет хотя бы одно поле на обновление
______________________________________________
const schemaUpdate = Joi.object({
  name: Joi.string()    
  email: Joi.string()
  phone: Joi.string()
})
.or("name", "email", "phone") что минимально придет хотя бы одно поле на обновление
.or("name", "email", "phone") или .min(1); - делает одно и тоже.
_________________________________________________________
Больше информации, примеры, с объяснениями можно найти на - https://github.com/NadyaHristuk/node.js_additional-materials
статьи которые лежат в папка с нумерацией модулей - это не мой авторский труд - это выдержки из разных статей, заметок - то компиляция разных текстов, но попыталась сделать выжимку из разных материалов.
это не обязательное - это если вам мало того, что дают на основных уроках.

NadyaHristuk/node.js_additional-materials
Stars
4
Language
JavaScript
Добавлено: GitHub
13:27
_______________________________________________________________________________
Если вам сложно и плохо дается в понимании как сделать 2 дз - может вам помогут эти ссылочки
https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers
https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/routes
https://metanit.com/web/nodejs/7.1.php
https://monsterlessons.com/project/lessons/express-router

Articles by Victoria LoArticles by Victoria Lo
Build a REST API with Node.js: Routes and Controllers
Hello friends! Welcome to the 2nd article of the Let's Build a Node.js REST API Series! In this article, we will continue from where we left off in Designing and Planning your API and start creating some routes and controllers for our T-API! What are... (45 КБ)
https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers

13:27
____________________________________________
Morgan, что за зверь?, и с чем его едят.
const logger = require('morgan')
morgan библиотека для логирования. Она подключается как прослойка (middleware)
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short' - позволяет выводить логирование или в варианте  'dev' 'short' - в зависимости от стадии разработки проверка - 'development' или нет.

app.use(logger(formatsLogger))
Что такое логирование - когда вы будете делать к вашему API (это ваш сервер) запросы через Постмен, то в консоли, вы будете видеть, что то вот такого типа
info: ::1 - - [16/Feb/2018:12:37:44 +0000] "GET /logout HTTP/1.1" 200 34 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
timestamp=2018-02-16T12:37:44.421Z 
И вот эта информация и называется - логирование
В чем смысл - мы делаем запрос, запрос проходит через эту прослойку,  и эта прослойка присылает в консоль информацию про запрос - когда, какой, на какой адрес, какой код ответа. Или сообщает, что произошла ошибка
 Зачем это надо? Потому что тут вы сами себе присылаете запросы. Но обычно вы на сервере просто видите, как пользователи из разных точек мира шлют запросы на сервер, и вы видите какие запросы приходят, как их много, какие ответы - положительные или ошибки. Это такой журнал наблюдения за работой вашего сервера.  Что бы потом, когда что-то не так пойдет, вы поднимаете такой журнал и смотрите, что вот после запроса на такой-то роут, в такое-то время с такими-то параметрами - ваш сервер умер. Значит там у нас проблемы. Можно не в консоль писать, можно писать в файл
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
Это из примера самой библиотеки, если будете использовать, только вары замените.
 _________________________________
Если  код весь подсвечивается красным и Еслинт ругался на двойные ковычки и ; ???
Ответ - В файле .eslintrc.js, в свойство rules дописываешь:
"quotes": [2, "double", { "avoidEscape": true }]


Надежда
  10:20
ПО 3 ДЗ
__________________________________________________
Большая просьба!!!___________________________________________
С 3 дз у Вас появится файл - .env и он находится в .gitignore. И не надо мне, в переживаниях, что я не смогу проверить дз, его заливать на гит, ок?
у меня честно тоже есть база на Аталасе, я могу спокойно создать свой .env в каждом вашем проекте со своими данными и я подключаюсь к своей чистой коллекции, каждый раз зачищаю. И спокойненько могу потестить ваш код ))
Меня же не интересует именно содержимое ВАШЕЙ конкретной базы. Мне надо что бы ваш код был работоспособный. Была правильная архитектура приложения, ну и что бы он был визуально "нормальный" (еслинт и т.д.)
Если меня что-то смущает в конкретной работе, то я стучусь к студенту в личку и прошу именно его содержимое .env файла, что бы подключится к его базе, но такое бывает редко, обычно только если есть какие-то ошибки, которые студент сам не может отловить, и я помогаю с решением ошибок
________________________________________________________________
Архитектура приложений MVC и REST
я не нашла так, что бы было хорошо описано в одном источнике.
Проблема в том, что часто пишут таким языком, что бы понять это, надо уже знать это - по этому скину 3 статьи - если постараться прочитать их то по идее в голове из кусочков должно сформироваться представление о том, что хотели этим сказать - MVC
https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn - об архитектуре - модель, представление, контроллер - (хорошо и с примером кода, что и где должно лежать по папочкам)
https://habr.com/ru/company/ruvds/blog/333856/ - на примере абстрактных функций
https://ruseller.com/lessons.php?id=666 - тут проблема в том. что они на примере пхп обьясняют, но я думаю будет понятно
https://metanit.com/web/nodejs/7.1.php - и на примере чистой ноды
А вот тут только единственное место, где не плохо об рахитектуре - REST API
https://webdraftt.com/tutorial/nodejs/rest-api - общая инфа, и
https://webdraftt.com/tutorial/nodejs/app-structure - а вот тут уже именно об архитектуре
_______________________________________________________________________
3 ДЗ - работа с БД - функции
Немного позанудничаю.
Если вы это уже поняли, то просто пропускаем и можно не читать. Но если вы не совсем разобрались. То давайте разберемся с функциями
Функции обращения к БД в названии которых есть слово One - были созданы для работы с любыми полями, но обычно с любым другим кроме поля _id.
Для работы с полем _id есть специальные функции в названии которых уже содержится слово ById что позволяет немного сократить синтаксис обращения к БД
Начнем с первого варианта который я встерчала в некоторых дз -
findOne({ _id: id }) - тут вызывается функция - в названии которой используется - One -  в этой функции явно не указывается конкретное поле, по которому идет поиск в БД, по этому надо явно указывать название поля _id и значение которое передается - id  - ({ _id: id })
updateOne({ _id: id }, { token }) - тут тоже самое, в названии есть слово One и тут явно передается название поля _id по которому идет поиск и потом явно передаешь значение этого поля id
findOneAndUpdate({ _id: id },  { subscription },  { new: true } ) - аналогично.
НО ЭТО ВСЕ МОЖНО УПРОСТИТЬ НА ЧУТЬ-ЧУТЬ
_____________________________________________________________
Что бы не передавать явно указанное название поля - _id можно использовать функции, в названии которых уже содержится слово id. Это специальные - именованные функции для поиска по полю id, а именно
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
тут везде явно указывается название поля, по которому будет  производится поиск по базе данных - ById
по этому тут можно сразу передавать значение по которому происходит поиск - в этом примере мы его передаем в переменной - id
НО даже когда используются функции в названии которых уже явно указывается слово ById , по которому идет поиск в БД, все равно используется синтаксис, как будуд-то вызыватеся функция с записью -  One 
В двух ДЗ видела вот такую запись  -
 const result = await Contact.findByIdAndUpdate({ _id: contactId },
    { ...body },
    { new: true },
  )
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate
если вы используете findByIdAndUpdate достаточно сразу передавать id , не надо конкретизировать какое поле вы передаете - { _id: id } - findByIdAndUpdate( id, ...body, { new: true } )
или если вы хотите явно указывать поле, по которому вы обращаетесь с БД, то можно использовать findOneAndUpdate( { _id: id }, ...body, { new: true }) - и тут надо явно указывать по какому полю мы ищем элемент.
____________________________________
И такая же ситуация и с функцией удаления.
const result = await Contact.findByIdAndRemove({ _id: contactId })
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndDelete
findByIdAndRemove(id) - не надо передавать { _id: id }, вы и так уже объявили, по какому полю ищите
_______________________________________________________________
А еще вы уже "большие", и по этому -
А давайте вы начнете красиво оформлять сам файл Readme.md - Что значит красиво? - файл должен содержать краткую информацию о том, что это за проект, как его запустить. и что он умеет делать - на какие роуты каую информацию можно получить. Возможный пример - https://github.com/HackerNews/API - не обязательно так красиво, но это что бы было куда стремится.
https://medium.com/astrolabe/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%[…]-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9-readme-159f88076b26
http://webdesign.ru.net/article/pravila-oformleniya-fayla-readmemd-na-github.html
____________________________________________
Если вам сложно и плохо дается в понимании как сделать 3 дз - может вам помогут эти ссылочки
https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5
https://rahmanfadhil.com/express-rest-api/
https://medium.com/@alicantorun/build-a-rest-api-with-mongodb-mongoose-and-node-js-3a5afc4a0431
https://blog.tericcabrel.com/create-a-rest-api-with-nodejs-express-mongodb-and-typescript/
______________________
Как выложить проект с фронтом и беком на Хероку - How to deploy a React + Node app to Heroku in 3 minutes without the command line - https://www.freecodecamp.org/news/deploy-a-react-node-app-to/ (отредактировано) 


Надежда
  11:50
______________________________________
Что в этом примере значит  $set и для чего он нужен?
если кратко, то тут мы говорим про БАЗОВЫЙ модуль к MongoDB, а не Mongoose, то метод $set позволяет обновлять не все поля в объекте, к которому обращаются, а только те, которые мы указали. В примере на принтскрине в первом случае будет перезаписан весь объект с данными и там будет создано только имя, а во втором случае будет заменено ТОЛЬКО значение имени. Но в Mongoose, при обновлении все поля по умолчанию обворачиваются в $set - что бы не было нечаянной перезаписи полей
[options.overwrite=false] «Boolean» By default, if you don't include any update operators in doc, Mongoose will wrap doc in $set for you. This prevents you from accidentally overwriting the document. This option tells Mongoose to skip adding $set.
Link to docs: https://mongoosejs.com/docs/api.html#model_Model.update
image.png 
image.png




Надежда
  14:00
____________________________________________________
:мишень:Допольнительный материал - видео по Node.js :улитка:
:рука_указывает_вправо:если есть желание углубится в ноду,  - в предложенных курсах будет и то, что вам будут рассказывать в след. лекциях, и что-то дополнительно. :женщина-технолог: Можете и покодить и посмотреть доп-инфу :замаскированное_лицо:
https://www.youtube.com/watch?v=thWNUby1G3U&list=PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz&index=2 - хороший курс, вот тут с 1 по 10 тему, это объяснение базы, на которой строится нода, очень советую посмотреть и разобраться. :привидение:
https://www.youtube.com/watch?v=ob9qRQeajA0&list=PL0lO_mIqDDFX0qH9w5YQIDV6Wxy0oawet - курс на русском. без такого глубокого погружения. но тоже много полезного :ленивец:
Три курса по основам ноды от одного автора, от совсем основ, до построения корзины и АPI - мне он нравится очень просто и понятно излагает
https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR - Node.js - Tutorial - Introduction
https://www.youtube.com/watch?v=-3vvxn78MH4&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp&index=2 - NodeJS / Express / MongoDB - Build a Shopping Cart
https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q - What is a RESTful API? | Creating a REST API with Node.js
https://www.youtube.com/watch?v=7f787SsgknA - :cubimal_chick: понимание асинхронности в ноде. Как просиходит цикл событий. :будильник: :лампочка:
:глаза: Как дополнение и более глубокий разбор тем
https://www.youtube.com/watch?v=vQldMjSJ6-w&list=PLvTBThJr861y60LQrUGpJNPu3Nt2EeQsP - JWT
:голова_робота: как дополнение кроме того, то есть в основных темах :механическая_рука:
https://www.youtube.com/watch?v=_ndbCZ9Ni6E - Koa как замена Express
https://www.youtube.com/watch?v=7giZGFDGnkc&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&start_radio=1 - GraphQL - как перейти к новой концепции запросов к беку
https://www.youtube.com/watch?v=ed8SzALpx1Q - GraphQL Full Course - Novice to Expert
и желательно кроме монги разобраться еще с SQL базой данных -
https://www.youtube.com/watch?v=2tDvHQCBt3w&t=4s - Работа с базами данных в Node.js на примере PostgreSQL
  :график_роста: И самое  главное, что когда вы будете смотреть как кодят, на ноде у вас уже будет намотренность, и вы будешь уже интуитивно понимать как называют переменные, и как архитектуру пишут :бомба:
:мегафон:По основам ноды.
:бейдж: Необязательно всех авторов смотреть, я скинула нескольких, потому что обычно один автор заходит и его подача материала, а другой не заходит и не подходит его подача материала. :гроб: :ничего_не_вижу:
:спортивная_медаль:Если все пересмотрите и будет скучно я Вам еще подкину, что можно глянуть - это пока основы :пришелец:
Список дополнительных тем по Node.js  -  https://docs.google.com/spreadsheets/d/1DAm9kUziEXw56CsZzEk0UsoucS_5RG5gMMNX-x-gmfc/edit#gid=379096805

1 ответ
3 мес. назадПосмотреть обсуждение


Надежда
  19:30
Якщо лінтер підкреслюе Jest червоним
Потрібно в файл налаштувань еслінта .eslintrc.js; додати jest:true.
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest:true
  }
:+1::оттенок-кожи-2::+1:
3



Надежда
  19:41
Так, я сейчас выскажу лично свое мнение, значит оно не обязательно правильное, но просто его выскажу - цена тестировщика 1000 дол, цена разработчика - 3000, В моей практике обычно нанимают девочку/мальчика тестировщика, который тыкает в ваш свагер, или код, и пытается его тщательно поломать, ну и проверить а работает ли оно правильно. И так на каждый ваш чих он пытается это все паламать. И фирме обычно дешевле держать отдельно тестировщика, чем заставлять меня писать тесты ручками, обычно тратя на это столько же времени, сколько и на написание самого кода. А если мы говорим про качественную работу. то я должна покрыть код где-то процентов на 70%. Значит я буду работать в два раза медленней на разработку нового функционала, потому что половину своего времени я буду писать тесты. Итого, фирма мне оплачивает работу тестировщика за 1500 дол, за 15 дней работы или 3000 за месяц ))). И я в роли тестировщика стою на 2000 дол дороже чем обычный тестировщик. По этой причине мне почему-то не дают задание писать тесты. Обычно это звучит как-то так - Вот когда у нас будет много времени свободного, мы обязательно этим займемся. А второе, чем мы займемся, когда у нас будет много свободного времени - это документация ))) Потому что на ее написание надо тоже тратить много времени,
Навеяно проблемами с созданиями тестов, как доп задания к 5 дз, у студентов. (отредактировано) 




13 ответов
Последний ответ 2 мес. назадПосмотреть обсуждение


Надежда
  20:00
Якщо у Вас виникли проблеми з SendGrid
Значить SendGrid з якоїсь причини вважають ваш обліковий запис не безпечним, у них дуже дивна система безпеки. І з цієї причини вимагають звернутися до служби підтримки для підтвердження вашої особистості. Зазвичай такі звернення можуть розглядатися більше тижня в SendGrid.
Що я можу запропонувати:
взяти ключі у когось із одногрупників, хто вже зареєструвався у SendGrid.
взяти телефон і спробувати походити містом і зареєструватися через інші і-мейли через інші мережі wi-fi
походити по друзям і спробувати через їх комп'ютери зареєструватися. Попросити друзів зареєструватися, і якщо у них вийде то, що б вони дали вам ключ від SendGrid.
Та не забувайте, що можна заюзати НодМейлер, він в тексті дз вказан як альтернатива!!!

привет) вопрос по 2 дз. не могу понять почему при отправке неправильного id контакта мне выдается ошибка 500, а не 404?
image.png 
image.png


17:50
https://github.com/Selim96/nodejs-homework-api/tree/hw02-express


Selim mileS
  18:02
upd: нашел ошибку)
:+1:
1

18:02
все заработало правильно
Добавлено в сохраненные объекты


Selim mileS
  14:07
привет, app.use(express.json()) - для чего мы это прописываем?
еще мне не совсем понятно как происходит сам процесс отправки данных с фронтэнда на сервер, т.е. вот в постмене мы пишем уже все в json формате, но на фронте мы ж отправляем объект options просто как объект?


Надежда
  15:14
ты ж пользуешься библиотекой или фетч запросом - они преобразовывают
15:14
на фронте ничего не поменяется, там не надо будет в json формат переделывать. то есть как вы делали запросы, так все и останется.
15:16
express.json() - как раз что бы парсить тело запроса на методах - post, потому что без расширения вашего приложения, подключением функции express.json() - будет приходить ошибка что на метод пост ничего не было передано не бек - то есть он просто ничего не увидет в теле запроса


Selim mileS
  15:19
я пересмотрел конспект по JS, получается на фронте мы создаем и отправляем объект в json формате, а на бэкенде парсим обратно. свой вопрос этот я ппонял, но возник другой вопрос: для чего переводить в json формат а потом обратно?


Надежда
  15:20
а как ты передашь в виде строки объект по другому, если не превратив предварительно в строку, а потом из строки обратно в объект?
15:21
если совсем упрощенно, ты передаешь длинную строку, в которой есть куда стучимся, метод запроса, тело запроса и т..д и разная вспомогательная информация
15:21
ну так был придуман протокол html
15:22
ой, http
15:24
просто когда все это придумывали максимум что собирались передавать только статьи в виде статей из википедии
15:24
а потом оказалось что надо кучу всего преедавать и все усложнялось и усложнялось


Selim mileS
  15:24
все понял, все передается в строках, самый простой вид
15:24
спасибо


Надежда
  15:25
сори, если не совсем смогла понятно объеснять,
15:26
если придумают следующий протокол общения между серверами, может он будет более соврешенным


Selim mileS
  15:27
все понятно, это наверное больше к истории становления Интернета относится


Надежда
  15:27
да, где-то к 1989 году, никто не думал, что это будет не университетская сеть для передачи больше чем тексты книг (отредактировано) 
:нервный_смех:
1



Selim mileS
  18:39
привет, появилось несколько вопросов:
dotenv можно вызывать в любом файле проекта? Т.е. мы вызвали его в app.js, но mongoose уже подключили в server.js, почему dotenv не вызываем там же в server.js?
схема, которую мы передаем в модель от mongoose нужна только для валидации входящих даных, как при POST запросах? если да, то можно ли её не передавать в случае, когда API не предполагает создание новых документов в базе данных?
мы прописали отдельно функции-мидлвары, в которые , в частности, прокидываем контролеры: router.get('/:contactId', isValidId, ctrlWrapper(cntrlrs.getById)); параметрами мидлвар мы прописываем req, res, next - это зарезервированные имена или же они приобретают свое значение, когда мы их ставим в роут?
Добавлено в сохраненные объекты


Надежда
  10:24
это разные кусочки архитектуры. app.js - то, где просходит основная нстройка сервера, подключение прослоек, библиотек, обработка ошибок, вообщем это файл для конфигурации всего сервера.
server.js - по сути техничесский файл - его можно было и не выносить как отдельный и оставить это все в app.js. в server.js ты всего лишь свой уже готовый и настроенный сервер подключаешь к какой=то базе данных, а напоминаю они могут быть разные и реалиционные и нет, локльно поднятые и удаленные в облаке и т.д и говоришь что вот этот сконфигурированный сервер будет слушать вот такой-то порт.
По этому тут по архитектуре совершенно разная логика просиходит
в app.js - конфигурация, настройка, обработка - вообщем много важной работы.
server.js - просто указать порт который слушаем и куда стучимся с запросами - тут просто механичесское указание двух переменных. по этому вынесенно отдельно, что бы было легко найти где изменить конфигурацию для подключения к другой БД. То есть server.js - это по сути функция подключения сервера к БД.
Добавлено в сохраненные объекты
10:27
2. какая-то очень странная ситуация описана - ОБЧНО НИКТО БД НЕ НАПОЛНЯет ТАК данными, как вы делали в 3 дз. По этому опиши по подробней, как это магазин, юзеры, амазон и т.д - в котором берутся данные не понятно от куда. то есть пустая коллекция, а смысл тогда к ней делать запрос, если в ней нет вообще никаких данных. Перефразируй пожалуйста запрос
Добавлено в сохраненные объекты
10:32
3. нет имена не зарезервированны, там можно писать какие угодно слова, но функция по умолчанию обрабатывает первый аргумент, как объект запроса, второй обрабатывает, как объект, ответа. а третий как функция вызова проброса в следующую прослойку. По этому мы можем если нам не нужен какой-то из объектов прописыать - (_, res, next)
 а если не предполагается использование next то просто пишем - (req, res) (отредактировано) 


Selim mileS
  10:55
По 2 вопросу я в принципе понял, что БД изначально пустая, и мы сами с помощью запросов наполняем ее, а значит и схема обязательна

Selim mileS
  17 июня в 14:07
привет, app.use(express.json()) - для чего мы это прописываем?
еще мне не совсем понятно как происходит сам процесс отправки данных с фронтэнда на сервер, т.е. вот в постмене мы пишем уже все в json формате, но на фронте мы ж отправляем объект options просто как объект?
Личное сообщение


Надежда
  23 июня в 10:32
3. нет имена не зарезервированны, там можно писать какие угодно слова, но функция по умолчанию обрабатывает первый аргумент, как объект запроса, второй обрабатывает, как объект, ответа. а третий как функция вызова проброса в следующую прослойку. По этому мы можем если нам не нужен какой-то из объектов прописыать - (_, res, next)
 а если не предполагается использование next то просто пишем - (req, res) (отредактировано) 
Личное сообщение


Надежда
  23 июня в 10:27
2. какая-то очень странная ситуация описана - ОБЧНО НИКТО БД НЕ НАПОЛНЯет ТАК данными, как вы делали в 3 дз. По этому опиши по подробней, как это магазин, юзеры, амазон и т.д - в котором берутся данные не понятно от куда. то есть пустая коллекция, а смысл тогда к ней делать запрос, если в ней нет вообще никаких данных. Перефразируй пожалуйста запрос
Личное сообщение


Надежда
  23 июня в 10:24
это разные кусочки архитектуры. app.js - то, где просходит основная нстройка сервера, подключение прослоек, библиотек, обработка ошибок, вообщем это файл для конфигурации всего сервера.
server.js - по сути техничесский файл - его можно было и не выносить как отдельный и оставить это все в app.js. в server.js ты всего лишь свой уже готовый и настроенный сервер подключаешь к какой=то базе данных, а напоминаю они могут быть разные и реалиционные и нет, локльно поднятые и удаленные в облаке и т.д и говоришь что вот этот сконфигурированный сервер будет слушать вот такой-то порт.
По этому тут по архитектуре совершенно разная логика просиходит
в app.js - конфигурация, настройка, обработка - вообщем много важной работы.
server.js - просто указать порт который слушаем и куда стучимся с запросами - тут просто механичесское указание двух переменных. по этому вынесенно отдельно, что бы было легко найти где изменить конфигурацию для подключения к другой БД. То есть server.js - это по сути функция подключения сервера к БД.
Личное сообщение


Oleksii Persatyi
  15 июня в 21:26
Привет, я перечитал то что ты выложила по ноде и мне не понятна вот эта запись:
findOneAndUpdate( { _id: id }, ...body, { new: true }) а точнее второй параметр, если я все правильно понял то там должен идти объект



