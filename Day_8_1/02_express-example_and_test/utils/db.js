const mongoose = require("mongoose");

mongoose.connect('mongodb://vladxxxturbo2:neturbo2@ds235169.mlab.com:35169/vegetables');
 // mongodb://юзер:пароль@хост:порт/имя_бд
mongoose.connection.on('error', (e) => {
    console.log("CHECK YOUR DATABASE!");
    console.log(e);
});
mongoose.connection.once('open', () => {
    console.log("DB IS STARTED!");
});