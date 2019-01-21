import React, { Component } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import ModalLogin from './Modal/ModalLogin';

class App extends Component {

  state = {
    modal: false,
    loginName: '',
  }

  toggleModal = () => {
    this.setState(prev =>({
      modal: !prev.modal
    }))
  }

  handlerChange = (e) => {
    let name = e.target.value
    this.setState({
      loginName: name
    })
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
