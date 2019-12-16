# Отправка электронной почты с помощью NodeMailer & Gmail

Отправка электронной почты в nodejs стала простой благодаря NodeMailer. 

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

html: все волшебство происходит здесь

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
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
```