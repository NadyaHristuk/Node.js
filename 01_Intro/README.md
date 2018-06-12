# Node.js_Intro
Проверяем версию -  node -v //получаем текущую версию
node 
console.log(‘Hello World’); 

Откройте ваш любимый редактор и создайте файл под названием helloworld.js. Мы хотим вывести строку «Hello world» в консоль, для этого пишем следующий код:
console.log("Hello World");
Сохраняем файл и выполняем его посредством Node.js:
node helloworld.js
Это должно вывести Hello World на наш терминал.

Файлы ввода/вывода с node.js
К счастью, Node.js сильно облегчает обработку содержания файла с помощью встроенного модуля filesystem (fs). Модуль fs имеет функцию readFile, которая берёт путь к файлу и обратный вызов. Обратный вызов будет исполнен, когда файл будет полностью прочитан. Данные файла попадают в форме типа Buffer, что является набором битов. 

hello.js
const fs = require('fs')

fs.readFile('hello.txt', 'utf8', (error, content) =>
  content
    .split('\n')
    .filter(line => line.includes('dog'))
    .forEach(line => console.log(line))
)

//hello.txt
fluffykins is a dragon
wolfbane is a dragon
kittylunch is a cat
karo is a dog
multidog is a dog

Ты можете интерактивно генерировать файл package.json с помощью команды npm init в терминале. После запуска команды вас попросят ввести некоторые данные, например имя вашего приложения, версию, описание и так далее. Не нужно беспокоиться, просто нажимайте Enter, пока не получите сформированный JSON и вопрос is it ok?. Нажмите Enter в последний раз и вуаля: ваш package.json был автоматически сгенерирован и помещен в папку вашего приложения.

// index.js
require('./app/server')

Вставьте этот код в файл server.js в каталоге /app.
module.exports.server = server

Чтобы проверить, всё ли вы сделали правильно, сохраните эти файлы, откройте терминал и введите npm start или node index.js.

