# Руководство по кросс-доменным запросам (CORS)

Обычно запрос XMLHttpRequest может делать запрос только в рамках текущего сайта. При попытке использовать другой домен/порт/протокол – браузер выдаёт ошибку.

Существует современный стандарт XMLHttpRequest, он ещё в состоянии черновика, но предусматривает кросс-доменные запросы и многое другое.

Большинство возможностей этого стандарта уже поддерживаются всеми браузерами, но увы, не в IE9-.

Впрочем, частично кросс-доменные запросы поддерживаются, начиная с IE8, только вместо XMLHttpRequest нужно использовать объект XDomainRequest.

Cross-Origin Resource Sharing (CORS) — механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя получать разрешения на доступ к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент. Говорят, что агент пользователя делает запрос с другого источника (cross-origin HTTP request), если источник текущего документа отличается от запрашиваемого ресурса доменом, протоколом или портом.

Пример cross-origin запроса: HTML страница, обслуживаемая сервером с http://domain-a.com, запрашивает <img> src по адресу http://domain-b.com/image.jpg. Сегодня многие страницы загружают ресурсы вроде CSS-стилей, изображений и скриптов с разных доменов, соответствующих разным сетям доставки контента (Content delivery networks, CDNs).

В целях безопасности браузеры ограничивают cross-origin запросы, инициируемые скриптами. Например, XMLHttpRequest и Fetch API следуют политике одного источника (same-origin policy). Это значит, что web-приложения, использующие такие API, могут запрашивать HTTP-ресурсы только с того домена, с которого были загружены, пока не будут использованы CORS-заголовки.

![](CORS_principle.png)

Механизм CORS поддерживает кросс-доменные запросы и передачу данных между браузером и web-серверами по защищенному соединению. Современные браузеры используют CORS в API-контейнерах, таких как XMLHttpRequest или Fetch, чтобы снизить риски, присущие запросам с других источников.

Для работы с кросс-доменными запросами используем библиотеку - Cors

сначала установите Cors в своем приложении.
```javascript
npm i cors
```

после установки cors необходимо подключение модуля к вашему основному файлу

```javascript
const cors = require('cors');
```
И теперь надо передать функции из приложения cors к нашему экземпляру Express с помощью директивы .use
Простой вариант использования модуля для всех маршрутов (Enable All CORS Requests)

```javascript
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

или вот такой вариант, с расширенными настройками


```javascript
var allowCrossDomain = function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

app.use(allowCrossDomain); // plumbing it in as middleware
```

