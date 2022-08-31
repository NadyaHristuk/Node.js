Привіт)
Ще раз - радий знайомству :машу_рукой:
Посилання, які фігурували у занятті:
https://github.com/alucardpetrovich/goit-lessons/ - код, який я писав на заняттях, тут
ZSH (+ Oh my ZSH) установка на Ubuntu:
https://linuxhint.com/installing_zsh_ubuntu/
https://www.tecmint.com/install-oh-my-zsh-in-ubuntu/#:~:text=Installation%20of%20Oh%20My%20Zsh,running%20the%20following%20apt%20command.&text=Next%2C%20install%20Oh%20My%20Zsh,curl%20or%20wget%20as%20shown.
Windows (треба заюзати WSL - Windows for Linux :смех_до_слез:) - https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2
https://www.npmjs.com/package/esm
https://github.com/yargs/yargs/blob/main/docs/advanced.md#commanddirdirectory-opts
Всім гарного вечора :подмигивание:

linuxhint.comlinuxhint.com
Install ZSH on Ubuntu 20.04
Shell enables you to interact with your operating system with an interface and run various programs through it. One of the different Shell is the ZSH shell, which is preferred over others because it provides a number of different customization options and gives more control and power to run the commands on it. In this article, the method of installing the ZSH shell on Ubuntu 20.04 is explained.

tecmint.comtecmint.com
How to Install Oh My Zsh in Ubuntu 20.04
OH-MY-ZSH is an open-source framework for ZSH configuration and it comes with tons of helpful functions, plugins, helpers, and themes to make you better at the terminal. (28 КБ)
https://www.tecmint.com/install-oh-my-zsh-in-ubuntu/#:~:text=Installation%20of%20Oh%20My%20Zsh,running%20the%20following%20apt%20command.&text=Next%2C%20install%20Oh%20My%20Zsh,curl%20or%20wget%20as%20shown


DEV CommunityDEV Community
How to Install Oh My Zsh! on Windows 10 Home Edition
As a developer, some tools may be a game changer for your productivity, but sometimes we just need to... (50 КБ)
https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2


npmnpm
esm
Tomorrow's ECMAScript modules today!. Latest version: 3.2.25, last published: 3 years ago. Start using esm in your project by running npm i esm. There are 3905 other projects in the npm registry using esm.
:белая_галочка:
4



Mykola Levkiv
  21:36
https://docs.google.com/spreadsheets/d/1662nwetGdcHUUWWfGviZZyMNQT4lzrw_KL085jgP58E/edit?usp=sharing (отредактировано) 


Mykola Levkiv
  21:26
https://portswigger.net/web-security/csrf

portswigger.netportswigger.net
What is CSRF (Cross-site request forgery)? Tutorial & Examples | Web Security Academy
In this section, we'll explain what cross-site request forgery is, describe some examples of common CSRF vulnerabilities, and explain how to prevent CSRF ... (75 КБ)
https://portswigger.net/web-security/csrf



Mykola Levkiv
  21:35
https://howhttps.works/

howhttps.workshowhttps.works
How HTTPS works
:испуганный_кот: A cat explains how HTTPS works...in a comic! :влюбленный_кот: (71 КБ)
https://howhttps.works/



Mykola Levkiv
  21:47
https://howhttps.works/the-handshake/

howhttps.workshowhttps.works
How HTTPS works
:испуганный_кот: A cat explains how HTTPS works...in a comic! :влюбленный_кот: (71 КБ)
https://howhttps.works/the-handshake/



Mykola Levkiv
  21:57
https://www.cloudflare.com/

CloudflareCloudflare
Cloudflare - The Web Performance & Security Company | Cloudflare
Here at Cloudflare, we make the Internet work the way it should. Offering CDN, DNS, DDoS protection and security, find out how we can help your site. (65 КБ)
https://www.cloudflare.com/

21:58
https://portswigger.net/web-security

portswigger.netportswigger.net
Web Security Academy: Free Online Training from PortSwigger
The Web Security Academy is a free online training center for web application security, brought to you by PortSwigger. Create an account to get started. (75 КБ)
https://portswigger.net/web-security



Надежда
  20:45
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
20:46
______________________________
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
Что почитать - https://habr.com/ru/company/ruvds/blog/458504/ (отредактировано) 

ХабрХабр
13 приёмов работы с npm, которые помогают экономить время
Каждый день миллионы разработчиков, создавая свои JavaScript-приложения, обращаются к npm (или к Yarn). Выполнение команд наподобие npm init или npx create-react-app стало привычным способом начала... (41 КБ)
https://habr.com/ru/company/ruvds/blog/458504/

20:46
______________________________
Модуль Path
для подключения файлов необходимо использовать метод
path.join([path1][, path2][, ...]) — Объединяет все аргументы и нормализует полученный путь.
для получения точки отсчета - откуда надо проложить путь к нужному файлу используется __dirname - возвращает путь к каталогу текущего исполняемого файла.  И указываем путь  к файлу который хотим подключить.
const path = require('path');

const absolutePath = path.join(__dirname, './db/contacts.json');
(отредактировано)
20:46
___________________________________________
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
20:48
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
20:49
______________________________________________________________________________
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
20:49
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

ХабрХабр
Разбираем Async/Await в JavaScript на примерах
Автор статьи разбирает на примерах Async/Await в JavaScript. В целом, Async/Await — удобный способ написания асинхронного кода. До появления этой возможности подобный код писали с использованием... (40 КБ)
https://habr.com/ru/company/skillbox/blog/458950/

20:49
_____________________________________
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
20:50
_________________________________________________
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
20:50
__________________________________________________
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
contactNew, ...contacts], null, '\t') - вот место, где делается спред вместо push()

jsraccoon.rujsraccoon.ru
ES6: Операторы Spread и Rest
Новый оператор ... называется spread (распростанение, расширение) или rest (остаток) в зависимости от того, где и как он используется. (383 КБ)
http://jsraccoon.ru/es6-spread-rest


ХекслетХекслет
Spread-оператор и создание новых массивов / JS: Массивы
Spread-оператор и создание новых массивов / JS: Массивы: Научиться применять spread-оператор (оператор "расширения") для массивов. (122 КБ)
https://ru.hexlet.io/courses/js-arrays/lessons/spread-operator/theory_unit

20:51
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
20:51
_________________________________________
Немного разбора кода по 1 дз
есть вот такой кусочек кода
try {
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return console.log(err.message);
    });
    let contacts = JSON.parse(response);
    return contacts;
  } catch (err) {
    console.error(err.message);
  }
у тут применен стиль из колбек функций , async/await  и так же конструкция try/catch для отлова ошибок, - это избыточно.
Почему -
1)  Начнем с  if (err) return console.log(err.message); - тут спорная конструкция - console.log(err.message) - не может быть возвращен из  if  через директиву return, потому что будет выполнен, как только будет вызван, значит в return - ничего не попадет и в const response - будет присвоен - undefined. Итого, мы не получим ожидаемую ошибку, а получим в ответ undefined, который и вернём далее. Тут было бы правильней тогда просто вернуть ошибку if (err) return err.message;
Теперь у нас конструкция
try {
    const response = await fs.readFile(contactsPath, (err) => {
      if (err) return err.message;
    });
    let contacts = JSON.parse(response);
    return contacts;
  } catch (err) {
    console.error(err.message);
  }
2) fs.readFile(contactsPath, (err) => {
      if (err) return err.message;
    }); -  это колбек функция, потому что есть ожидание ответа, после того, как будет выполнена функция, и в функцию, которая возвращает значение, в данном примере мы ожидаем только ошибку - (err) => {
Но есть указание на директиву - await перед await fs.readFile - которая приведет к тому, что часть, которая относится к коллбек функции не будет выполнена и будет проигнорирована. Потому что если бы этот коллбек работал, то без явного возвращение из него значения response, в переменную const response ничего бы не присвоилось. То есть если бы тут работал коллбек, то функция должна была бы выглядеть вот так.
try {
    const response = await fs.readFile(contactsPath, (err, data) => {
      if (err) return err.message;
    return data;
    });
    let contacts = JSON.parse(response);
    return contacts;
  } catch (err) {
    console.error(err.message);
  }
Но по скольку происходит присвоение результата чтения файла в переменную -  const response = await fs.readFile(contactsPath, то это значит, что часть с колбеком просто игнорируется и значит обработка ошибки
 (err) => {
      if (err) return err.message;
    }
Никогда не будет вызвана и никогда не будет обрабатывать ошибку, и значит ее можно удалить. После сокращения наш код получится
try {
    const response = await fs.readFile(contactsPath);
    let contacts = JSON.parse(response);
    return contacts;
  } catch (err) {
    console.error(err.message);
  }
20:52
______________________________________________________________________
:рука_указывает_вправо: Начиная со второй домашней работы, добавьте меня, пожалуйста, в коллабораторы - мой ник на гит-хабе - NadyaHristuk :женщина-технолог:
Зачем меня добавлять в коллабораторы - такое условие по сдаче ваших работ по курсу Node.js - https://github.com/goitacademy/nodejs-homework
______________________________________________________________________
Как добавить в коллабораторы - заходим на сайт https://github.com/ - открываем нужный нам репозиторий, над кодом есть панель управления и крайняя справа клавиша - настройки (Settings) - дальше  - Manage access - вводим пароль - ищем большую зелененькую клавишу - "Invite a collaborator" - в появившейся всплывашке вводим мой ник - NadyaHristuk и нажимаем -   Add  to this repository (отредактировано) 

goitacademy/nodejs-homework
Stars
15
Last updated
7 days ago
Добавлено: GitHub
:+1:
2
:огонь:
1



Надежда
  14:26
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
3
Language
JavaScript
Добавлено: GitHub


Надежда
  14:31
Привет! Сегодня у нас с Вами практика! )))
Вопрос по практике - что будем делать на занятии?
Ответы на теоретичесские вопросы по теории и коду с дз
Поочередно кодим передавая экран от учиника к ученику, параллельно я могу отвечать на вопросы по коду, который мы делаем.
Разбираем вопросы, проблемы, ошибки в консоли из домашних работ.
Задавайте вопросы в ветке, и жду предложений по сегодняшней практике, что бы я успела подготовится.
Всем хорошего дня!
:+1:
2


1 ответ
4 мес. назадПосмотреть обсуждение


Надежда
  19:53
https://coursehunter.net/

CourseHunterCourseHunter
Учитесь, Блеать! - Видеокурсы для разработчиков
Ресурс видеоуроков программирования для front и back end разработчиков. Бери знания своего профиля у нас, ведь мы самые лучшие блеать. Серьезно. (84 КБ)
https://coursehunter.net/

:+1:
1



Надежда
  21:40
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

DEV CommunityDEV Community
Understanding MVC pattern in Nodejs
This is part two of the Test-driven Development with Nodejs, Express, Mongoose & Jest, in part on... (34 КБ)
https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn


ХабрХабр
MVC на чистом JavaScript
Шаблоны проектирования часто встраивают в популярные фреймворки. Например, шаблон MVC (Model-View-Controller, Модель-Представление-Контроллер) можно встретить буквально повсюду. В JavaScript трудно... (33 КБ)
https://habr.com/ru/company/ruvds/blog/333856/


ruseller.comruseller.com
Концепция MVC (Model-View-Controller: модель-вид-контроллер) очень часто упоминается в мире веб программирования в последние годы. Каждый, кто хоть как-то связан с разработкой веб приложений, так или иначе сталкивался с данным акронимом. Сегодня мы разберёмся, что такое - концепция MVC, и почему она стала популярной.

metanit.commetanit.com
Node.JS | Паттерн MVC. Контроллеры
Паттерн MVC в Node.js, основные компоненты, определение системы маршрутизации и контроллеров
21:42
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
:огонь:
1



Mykola Levkiv
  21:41
https://www.martinfowler.com/eaaCatalog/associationTableMapping.html


Mykola Levkiv
  21:48
А ось скрінкаст по базам (на українській) - https://www.youtube.com/watch?v=k0POra8FLjA&list=PL36T6vyW52SZ8SCbf6TBCV5OskHcH7d6k

YouTubeYouTube | Kolya Levkiv
1  Introduction to DB's 

:ура:
1



Надежда
  21:55
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


metanit.commetanit.com
Node.JS | Паттерн MVC. Контроллеры
Паттерн MVC в Node.js, основные компоненты, определение системы маршрутизации и контроллеров
21:56
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
21:58
_________________________________
Если  код весь подсвечивается красным и Еслинт ругался на двойные ковычки и ; ???
Ответ - В файле .eslintrc.js, в свойство rules дописываешь:
"quotes": [2, "double", { "avoidEscape": true }]


Надежда
  22:06
__________________________________________________
Большая просьба!!!___________________________________________
С 3 дз у Вас появится файл - .env и он находится в .gitignore. И не надо мне, в переживаниях, что я не смогу проверить дз, его заливать на гит, ок?
у меня честно тоже есть база на Аталасе, я могу спокойно создать свой .env в каждом вашем проекте со своими данными и я подключаюсь к своей чистой коллекции, каждый раз зачищаю. И спокойненько могу потестить ваш код ))
Меня же не интересует именно содержимое ВАШЕЙ конкретной базы. Мне надо что бы ваш код был работоспособный. Была правильная архитектура приложения, ну и что бы он был визуально "нормальный" (еслинт и т.д.)
Если меня что-то смущает в конкретной работе, то я стучусь к студенту в личку и прошу именно его содержимое .env файла, что бы подключится к его базе, но такое бывает редко, обычно только если есть какие-то ошибки, которые студент сам не может отловить, и я помогаю с решением ошибок
:+1:
1

22:09
__________________________________________________
:рука_указывает_вправо: У вас хорошо расписанный конспект, но если какой-то информации не хватает, то напишите под этим постом какой информации не хватает. :мегафон:То я могу, как к 1 дз написать может какую-то разъясняющую заметку.:мишень:
__________________________________________________ (отредактировано) 


Mykola Levkiv
  19:39
https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv

marketplace.visualstudio.commarketplace.visualstudio.com
DotENV - Visual Studio Marketplace
Extension for Visual Studio Code - Support for dotenv file syntax


Mykola Levkiv
  21:17
https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%89%D0%B8%D0%B9_%D1%80%D0%B5%D0%B3%D0%BB[…]D1%89%D0%B8%D1%82%D0%B5_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85

WikipediaWikipedia
Общий регламент по защите данных
Общий регламент защиты персональных данных, Общий регламент по защите данных, Генеральный регламент о защите персональных данных (англ. General Data Protection Regulation, GDPR; Постановление (Европейский Союз) 2016/679) — постановление Европейского Союза, с помощью которого Европейский парламент, Совет Европейского Союза и Европейская комиссия усиливают и унифицируют защиту персональных данных всех лиц в Европейском Союзе (ЕС). Постановление также направлено на экспорт данных из ЕС.
Рекомендуемые сокращения для публикаций:
ПД - Персональные Данные
ОПД - Обработка Персональных Данных
ПОПД - общие Правила Обработки Персональных ДанныхGDPR направлен прежде всего на то, чтобы дать гражданам контрол… Развернуть
21:19
https://ru.wikipedia.org/wiki/HMAC

WikipediaWikipedia
HMAC
HMAC (иногда расшифровывается как англ. hash-based message authentication code, код аутентификации (проверки подлинности) сообщений, использующий хеш-функции, или как англ. keyed-hash message authentication code, код аутентификации сообщений, использующий хеш-функции с ключом) — в информатике (криптографии), один из механизмов проверки целостности информации, позволяющий гарантировать то, что данные, передаваемые или хранящиеся в ненадёжной среде, не были изменены посторонними лицами (см. человек посередине). Механизм HMAC использует имитовставку (MAC), описан в RFC 2104, в стандартах организаций ANSI, IETF, ISO и NIST. MAC — стандарт, описывающий способ обмена данными и способ проверки цело… Развернуть
https://ru.wikipedia.org/wiki/HMAC



Mykola Levkiv
  21:19
https://portswigger.net/web-security/oauth/grant-types

portswigger.netportswigger.net
OAuth grant types | Web Security Academy
In this section, we'll cover the basics of the two most common OAuth grant types. If you're completely new to OAuth, we recommend reading this section ... (75 КБ)
https://portswigger.net/web-security/oauth/grant-types

21:20
https://portswigger.net/web-security/cross-site-scripting

portswigger.netportswigger.net
What is cross-site scripting (XSS) and how to prevent it? | Web Security Academy
In this section, we'll explain what cross-site scripting is, describe the different varieties of cross-site scripting vulnerabilities, and spell out how to ... (75 КБ)
https://portswigger.net/web-security/cross-site-scripting

21:20
https://portswigger.net/web-security/csrf

portswigger.netportswigger.net
What is CSRF (Cross-site request forgery)? Tutorial & Examples | Web Security Academy
In this section, we'll explain what cross-site request forgery is, describe some examples of common CSRF vulnerabilities, and explain how to prevent CSRF ... (75 КБ)
https://portswigger.net/web-security/csrf



Mykola Levkiv
  21:29
https://portswigger.net/web-security/sql-injection

portswigger.netportswigger.net
What is SQL Injection? Tutorial & Examples | Web Security Academy
In this section, we'll explain what SQL injection is, describe some common examples, explain how to find and exploit various kinds of SQL injection ... (75 КБ)
https://portswigger.net/web-security/sql-injection



Mykola Levkiv
  22:04
https://github.com/alucardpetrovich/goit-wallet-nestjs

alucardpetrovich/goit-wallet-nestjs
This is a "by default" backend for goit wallet student projects
Language
TypeScript
Last updated
a year ago
Добавлено: GitHub
22:07
https://crontab.guru/


Mykola Levkiv
  15:42
Ось, до речі, прикольний відос, що пояснює концепти криптографії. В одному моменті він оговорився, звичайно, бо для https шифрування використовуються і асиметричне і симетричне шифрування, проте все решта прям в точку)
https://youtu.be/NuyzuNBFWxQ

YouTubeYouTube | Fireship
7 Cryptography Concepts EVERY Developer Should Know 

:+1:
3



Mykola Levkiv
  19:34
https://webdriver.io/
https://www.npmjs.com/package/puppeteer

webdriver.iowebdriver.io
WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO
Next-gen browser and mobile automation test framework for Node.js

npmnpm
puppeteer
A high-level API to control headless Chrome over the DevTools Protocol. Latest version: 14.1.0, last published: 4 days ago. Start using puppeteer in your project by running npm i puppeteer. There are 4976 other projects in the npm registry using puppeteer.
19:36
https://github.com/alucardpetrovich/posts-comments-script

alucardpetrovich/posts-comments-script
Language
TypeScript
Last updated
3 months ago
Добавлено: GitHub


Надежда
  10:45
Мне лично интересен вопрос - есть ли вам что-то не понятное в конспекте - надо ли дописать какие-то пояснения по каким-то кускам теории из конспекта?

1 ответ
3 мес. назадПосмотреть обсуждение


Надежда
  10:45
Если есть вопросы по выполнению ДЗ - то пишите в личку с вопросами


Mykola Levkiv
  20:52
http://sergeyteplyakov.blogspot.com/2010/06/first-principles.html

sergeyteplyakov.blogspot.comsergeyteplyakov.blogspot.com
Пять принципов чистых тестов (F.I.R.S.T. Principles)
Многим разработчикам известны принципы проектирования, которые благодаря Роберту Мартину получили звучное название  S.O.L.I.D. Многим из э...


Mykola Levkiv
  21:58
https://www.npmjs.com/package/dataloader
https://www.npmjs.com/package/join-monster
https://www.npmjs.com/package/typeorm-graphql-joiner
https://typegraphql.com/docs/complexity.html

npmnpm
dataloader
A data loading utility to reduce requests to a backend via batching and caching.. Latest version: 2.1.0, last published: a month ago. Start using dataloader in your project by running npm i dataloader. There are 1111 other projects in the npm registry using dataloader.

npmnpm
join-monster
A GraphQL to SQL query execution layer for batch data fetching.. Latest version: 3.1.1, last published: 4 months ago. Start using join-monster in your project by running npm i join-monster. There are 14 other projects in the npm registry using join-monster.

npmnpm
typeorm-graphql-joiner
A helper to join TypeORM relations based on fields selected in a GraphQL query.. Latest version: 1.0.2, last published: 3 months ago. Start using typeorm-graphql-joiner in your project by running npm i typeorm-graphql-joiner. There are no other projects in the npm registry using typeorm-graphql-joiner.

typegraphql.comtypegraphql.com
Query complexity · TypeGraphQL
A single GraphQL query can potentially generate a huge workload for a server, like thousands of database operations which can be used to cause DDoS attacks. In order to limit and keep track of what each GraphQL operation can do, TypeGraphQL provides the option of integrating with Query Complexity tools like [graphql-query-complexity](https://github.com/ivome/graphql-query-complexity).
22:03
https://swagger.io/

swagger.io
API Documentation & Design Tools for Teams | Swagger
Simplify API development for users, teams, and enterprises with our open source and professional toolset. Find out how Swagger can help you and get started today.
22:08
https://www.npmjs.com/package/swagger-ui-express

npmnpm
swagger-ui-express
Swagger UI Express. Latest version: 4.4.0, last published: 6 days ago. Start using swagger-ui-express in your project by running npm i swagger-ui-express. There are 1196 other projects in the npm registry using swagger-ui-express.


Mykola Levkiv
  22:09
https://github.com/alucardpetrovich/goit-wallet-nestjs

alucardpetrovich/goit-wallet-nestjs
This is a "by default" backend for goit wallet student projects
Language
TypeScript
Last updated
a year ago
Добавлено: GitHub
22:09
https://docs.nestjs.com/

docs.nestjs.comdocs.nestjs.com
Documentation | NestJS - A progressive Node.js framework
Nest is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Progamming), FP (Functional Programming), and FRP (Functional Reactive Programming).


Mykola Levkiv
  22:44
https://www.instagram.com/anglophiles_community/
https://www.instagram.com/tash_english_teacher/


Надежда
  15:10
Привет! сегодня практика - в комментариях как всегда жду ваши вопросы/предложения/коментарии/идеи - что мы будем делать сегодня на практике, что бы если нужно, я успела подготовится

1 ответ
3 мес. назадПосмотреть обсуждение


Надежда
  22:19
https://github.com/NadyaHristuk/NodeJS_26/tree/master/lesson_5.2_Testing
Zip 

test.zip
Zip


:+1:
1



Надежда
  23:05
как у вас делишки с дз, я вижу все активизировались - есть какие-то вопросы? помощь нужна? чем могу помочь?
23:06
все что было сдано, стараюсь оперативно проверять. так что если что стучитесь, могу почти сразу зайти проверить, если надо
в условиях сдачи хвостов, не надо ждать проверки предыдущего дз, что бы сдать новое - это правило действует только во время обучения, сейчас немного другая ситуация. Что бы не затягивать время с проверкой можете выгружать сразу несколько дз (отредактировано) 
:+1:
1



Надежда
  12:41
Была рада с Вами работать! Вы классные!!
давайте оставаться на связи - https://www.linkedin.com/in/nadya-hristuk/
можно пытаться если что-то ооооочень надо писать в телеграмм, не факт что будет время на помочь, но попробовать всегда можете - @Bees_Quit
:обнимаю:
5





4 ответа
Последний ответ 3 мес. назадПосмотреть обсуждение


Надежда
  15:57
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
:огонь:
2

16:00
_________________________________________________
:мишень::рука_указывает_вправо:Список тем, которые спрашивают на собеседованиях на Node.js разработчика
https://docs.google.com/spreadsheets/d/1DAm9kUziEXw56CsZzEk0UsoucS_5RG5gMMNX-x-gmfc/edit#gid=379096805 - таблица с темами, и как часто это спрашивают.
Пул вопросов для обработки
21 вопрос по Node.js с ответами
Node.js вопросы на собеседовании
Топ 41 вопросов и ответов на собеседовании Node.Js, которые вам нужно знать в 2021 году
Вопросы с собеседований по JS уровня Middle и Senior | Techrocks
Вопросы на собеседовании Senior Node.JS разработчику
16:01
________________________________________
:мишень::рука_указывает_вправо: Печатаю с разрешения автора:
"Ivetta Dashkova
Ребят, кто переживает за английский. Да, почти в каждой вакансии будет написано требование Английский язык среднего уровня, помнится, 5 лет назад я искала секретаря в нашу  Киевскую юридическую компанию, там тоже нужен был английский)))угадайте сколько раз она пользовалась английским на рабочем месте - 0, ну ок, еще билеты на самолет покупала руководителям :нервный_смех: Потом я работала юристом в  IT-компании, угадайте знала ли я английский, при том что  некоторые договора были на английском. И тут был выход из ситуации , подтвержденный на законодательном уровне -  Международный договор должен быть изложен на 2 языках, поэтому официальный перевод мы заказывали у переводчиков, специализирующихся на переводе контрактов.
Теперь касательно моего свежего опыта работы разработчиком в зарубежной компании (в команде русскоговорящих разработчиков). По факту на английском проходят только совещания и то там рапортует Тимлид) есть презентации, которые при желании можно перевести просто через мобильное приложение, наведя камеру на экран монитора,  а так  - остальные члены команды на английском только здороваются в начале и прощаются в конце митинга. В моем случае, прям английский-английский понадобился только на первом совещании после официального трудоустройста) они на  английском рассказывали про компанию (наверное:смех_до_слез:) , а я потом рассказала немного о себе ( и если что команда разрабов страховала). Да , безусловно, после такого стресса я записалась на курсы разговорного английского 3 раза в неделю) но сказать, что отсутсвие разговорного английского мешает мне в работе - нет, а вот собеседование , не забывайте, проводит  HR, он может, действительно, зарубить на корню, но я думаю, что в данном случае  стоит свои недостатки превращать в пунктики Вашего саморазвития, мол что прямо сейчас вы очень замотивированы и активно изучаете английский :подмигивание: не сомневайтесь в себе, вы огонь-пожар, вы всего за год выучились новой профессии, в то время , как кто-то так и не решился пойти на курсы, кто-то бросил на полпути, а вы уже здесь, на Финише, вы победители! Не сдавайтесь!
Из ресурсов делюсь:
1) ютуб канал  https://www.youtube.com/channel/UC_3oKG5Szq-m6Xz-MjRZgpw английский язык по плейлистам, там есть плейлисты английский язык за 50 уроков(на каждый уровень английского всего 50 занятий(25 уроков и 25 практики)) , у этого препода есть еще и
2)приложение на телефон, годовая подписка 600грн всего. В комплексе хорошо работает, говорить уже не страшно)) теперь слушать страшно :смех_до_слез:
3) и в целом у него куча других плейлистов, откуда я включаю практические занятия  и начинаю мыть посуду и учить английский на фоне)))"

YouTubeYouTube
АНГЛИЙСКИЙ ЯЗЫК ПО ПЛЕЙЛИСТАМ
Наш Яндекс Дзен Канал https://zen.yandex.ru/id/62221d98cb2f0e139c801e43 Учим английский язык. На канале представлены уроки английского языка для разных уровней, тренируется разговорный английский для начинающих и продолжающих в рамках плейлистов. Вы также можете помочь проекту. Сейчас, в первую очередь, нужны значительные финансы на разработку качественных обучающих мобильных приложений по английскому и другим иностранным языкам и на дальнейшее их улучшение: Карта Сбербанка 4276380173716643 (Александр Олегович Бебрис) Яндекс Деньги: https://money.yandex.ru/to/41001677064557/1000
16:03
Забыла вам еще вот эти ссылочки накидать, так что исправляюсь!
:обнимаю:
3
:+1:
4








