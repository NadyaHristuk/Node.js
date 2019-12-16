import React, { Component } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import ModalLogin from './Modal/ModalLogin';
import socket from "socket.io-client";
import moment from 'moment';
window.socket = socket(window.location.origin, {
  path: "/chat/"
}, {transports: ['websocket']});

class App extends Component {

  state = {
    modal: true,
    user: '',
    error: false,
    online: 0,
    messages: [],
    usersOnline: [],
  }

  toggleModal = () => {
    if (this.state.user) {
        this.setState(prev => ({
          modal: false
        }))
    } else {
        this.setState(prev => ({
          messages: [...prev.messages, {time: moment().format('LTS'), user: 'Admin', content: 'Sorry, can\'t load previos messages'}],
          modal: false,
        }))
    }
  }

  handlerChange = (e) => {
    let name = e.target.value
    this.setState({
      loginName: name
    })
  }

  onClick = () => {
    // this.uniqueNames(this.state.messages)
    this.toggleModal()
    let obj = {
      userName: this.state.user,
      userId: this.state.userId,
    }
    window.socket.emit('send-user-name-to-online-DB', obj)
  }

  render() {
    const {modal, loginName} = this.state;
    return (
      <div className="App">
      {modal ? 
      <ModalLogin modal={modal} handlerChange={this.handlerChange} loginName={loginName} toggleModal={this.toggleModal}/> 
      : <Chat loginName={loginName}/>}
      </div>
    );
  }
}

export default App;
