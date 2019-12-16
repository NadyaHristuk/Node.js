# Отправка электронной почты с помощью NodeMailer & Gmail

Пример с использованием Реакт - https://nodemailer.glitch.me/
email Send e-mails with Node.JS – easy as cake! http://nodemailer.com/


Отправка электронной почты в nodejs стала простой благодаря NodeMailer. 

Нам нужно будет обрабатывать маршрут, который мы отправляем, со стороны браузера. Например, если мы отправляем запрос POST при отправке формы. Вот пример простого fetch-запроса из клиента:

```javascript
// contact.jsx

sendEmail (name, email, message) {
  fetch('/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }
```

сначала установите nodemailer в своем приложении-узле.
```javascript
npm i nodemailer
```

после установки nodemailer необходимо подключение модуля к вашему основному файлу

```javascript
const nodemailer = require('nodemailer');
```
nodemailer это транспортный сервис, с помощью которого можно отправлять электронные письма. В этом примере я использую gmail.

```javascript
const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'youremail@address.com',
        pass: 'yourpassword'
    }
});
```

Мы использовали gmail в качестве нашего транспортного сервиса.

Следующим шагом является наш объект auth, в котором мы должны указать наш адрес электронной почты и пароль gmail, чтобы позволить nodemailer входить в систему и отправлять электронную почту, используя нашу учетную запись gmail.

Теперь нам нужен второй объект конфигурации, где мы будем настраивать наши данные электронной почты.

```javascript
const mailOptions = {
  from: 'sender@email.com', // sender address
  to: 'to@email.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};
```

Наиболее важными четырьмя вариантами являются: -

from: Отправитель электронной почты

to: Получатель письма

subject: содержимое письма

html: тут может быть поле текст

Перед отправкой электронной почты с помощью gmail вы должны разрешить незащищенным приложениям получать доступ к gmail, вы можете это сделать, перейдя в настройки Gmail. - https://myaccount.google.com/lesssecureapps

Как только менее небезопасные приложения включены, теперь nodemailer может использовать ваш gmail для отправки электронных писем.

Теперь последнее действие,используя метод sendMail, который фактически отправляет электронное письмо, предоставленный объектом транспортера, который мы создали выше.

```javascript
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
```

sendMail принимает два аргумента - mailOptions и функцию обратного вызова, которая будет вызываться при отправке почты. Функция обратного обрабатывает два случая - успешная отправка письма, и обработку ошибки.

Именно так мы отправляем электронные письма в nodejs, используя nodemailer и gmail.

```javascript
const nodemailer = require('nodemailer');

app.post('/send', function(req, res, next) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test-email@gmail.com',
      pass: 'test123'
    }
  })
}
  const mailOptions = {
    from: `${req.body.email}`,
    to: 'test-email@gmail.com',
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  })
})
```