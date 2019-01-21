const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT||3003;
app.use(cors());
app.options('*', cors());

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://bc7:123qwe@ds241489.mlab.com:41489/test_base');
const Message = require('./schema');

let online = 0;
io.on('connection', (client) => {    
        console.log("User connected");
        let allMes = Message.find();
        allMes.exec(function(err,docs){
                if(err) throw err;
                console.log('Send massege from DB');
                client.broadcast.emit('all-messages', docs);
                console.log(docs);
        }            
        console.log(++online);   
    client.broadcast.emit("change-online", online);
    client.on("disconnect", () => {
        console.log(--online);
        client.broadcast.emit("change-online", online);
        });
    client.on("message", (message) => { 
        // message.author=client.id;        
                     
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
            if (err) throw err
            console.log('Message succsessfully edit!')
            client.broadcast.emit("message-was-edited", editMess);
        })
    })
});

server.listen(PORT, () => (console.log(`server is running on ${PORT}`)));