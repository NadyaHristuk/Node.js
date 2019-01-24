const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT||3003;
app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname + '../frontend/build'))

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://bc7:123qwe@ds241489.mlab.com:41489/test_base');
const Message = require('./models/messageModel');
// const User = require('./models/userModel');
let usersOnline = [];

let online = 0;
io.on('connection', (client) => {
    //client.join('general'); 
    client.on('new-user', (user) => {
        console.log("User connected");
        console.log(++online);
        client.broadcast.emit("change-online", online);
        console.log(user);
        let allMes = Message.find().sort({addAt:1}).limit(5).lean();
        allMes        
        .exec(function(err,docs){
                if(err) throw err;
                console.log('Send massege from DB');
                client.emit('all-messages', docs);  //client.to('general').emit('all-messages', docs);
                // console.log(docs);
        });
    }); 
    
    client.on('send-user-name-to-online-DB', (user) => {
        usersOnline.push(user);
        // console.log(usersOnline)
        client.emit('get-user-name', usersOnline)
    })
      
    client.on("disconnect", () => {
        let a = usersOnline.filter(el => el.userId !== client.id);
        usersOnline = a;
        console.log(online > 1 ? --online : null);
        console.log(`Now in chat ${online} users.`);
        client.broadcast.emit("change-online", online);
        client.emit('get-user-name', usersOnline)
        });

    client.on("message", (message) => {      
        Message.create(message, err => {
            if(err) return console.error(err);
            client.broadcast.emit("new-message", message);
        })
    });
    client.on("deleteMessage", (messageId) => {
        Message.findOneAndDelete({frontId:messageId}, err => {
            if(err) throw err;
            console.log('Message del');
            client.broadcast.emit("messageWasDeleted", messageId);
        })
    });
    client.on("typing", (is) => {
        client.broadcast.emit("somebody-typing", is);
    })
    client.on("editMessage", (id, editMess) => {
        Message.findOneAndUpdate({frontId: id}, editMess, err => {
            if (err) throw err;
            console.log('Message succsessfully edit!')
            client.broadcast.emit("message-was-edited", editMess);
        })
    })
});


server.listen(PORT, () => (console.log(`server is running on ${PORT}`)));