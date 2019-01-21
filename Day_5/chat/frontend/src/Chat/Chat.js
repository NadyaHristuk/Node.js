import React, { Component } from 'react';
import { Container, MessageHeader, Segment, Comment, Input, Button, Header, Icon} from 'semantic-ui-react';
import moment from 'moment';
import socket from "socket.io-client";
import uuid from "uuid/v4";
import axios from "axios";
window.socket = socket(window.location.origin, {
    path: "/chat/"
}, {transports: ['websocket']});
// const socket = io('http://localhost:3000', {transports: ['websocket']});;

class Chat extends Component {
    state = {
        online: 1,
        input:'',
        messages:[],
        newMessage: true,
        editMessage: {}
    }

    componentDidMount(){      

        window.socket.on("all-messages", (docs) => {
            console.log(docs);
            this.setState({
                messages: [...docs]
            })
        })

        window.socket.on("change-online", (online) => {
            this.setState({
                online: online
            })
        })
       
        window.socket.on("messageWasDeleted", messageId =>
            this.setState(prev => ({
                messages: prev.messages.filter(el => el.frontId !== messageId)
            }))
        )

        window.socket.on("new-message", (message) => {
            // this.props.getMessage(message);
            this.setState (prev => ({
                messages: [...prev.messages, message],
            }))
        });

        window.socket.on("message-was-edited", (editMess) => {
            this.setState(prev =>({
                messages: prev.messages.map(el => el.frontId === editMess.frontId ? editMess : el)
            }))
        });
    }
    

    handlerChange=(e)=>{
      this.setState({
          input:e.target.value
      })
    }

    recMessage=()=>{
        if (this.state.newMessage) {
            let content = {
                time: moment().format('LTS'),
                message:this.state.input,
                author: this.props.loginName,
                frontId: uuid(),
            }
            this.setState(prev =>({
                messages:[...prev.messages,content],
                input: '',
            }))
            window.socket.emit("message", content);      
         } else {
             let editMess = {...this.state.editMessage, message: this.state.input}
             // console.log(mess)
             this.setState(prev =>({
                 messages: prev.messages.map(el => el.frontId === editMess.frontId ? editMess : el),
                 newMessage: true,
                 editMessage: {},
                 input: '',
             }))
             window.socket.emit("editMessage", editMess.frontId, editMess);    
         }               
    }


    deleteMessage = e =>{
        let messageId = e.target.id;
        // console.log(messageId);
        socket.emit("deleteMessage", messageId);
        this.setState(prev => ({
            messages: prev.messages.filter(el => el.frontId !== messageId)
        }))
    }

    editMessage = (e) => {
        let id = e.target.id
        console.log(id)
        let message = this.state.messages.find(el => el.frontId === id)
        console.log(message)
        this.setState({
            input: message.message,
            newMessage: false,
            editMessage: message,
        })
    }

    

  render() {
      const {input , messages}= this.state;
    return (
      <div className='container'>
        <Container fluid>

        <MessageHeader/>
           <Segment>

           <Segment clearing>
                <Header 
                fluid='true'
                as='h2'
                floated='left'
                style={{
                    marginBottom: 0
                }}>
                <Header.Subheader>
                    Our Chat / Online Users: {this.state.online}
                </Header.Subheader>
                </Header>
            </Segment>

             <Comment.Group className='messages'>
             {messages.map( el =>
                 <Comment key={el.frontId}>
                 <Comment.Avatar/>
                 <Comment.Content>
                     <Comment.Author as='a'>
                        {el.author}
                     </Comment.Author>
                     <Comment.Metadata>
                        {el.time}
                     </Comment.Metadata>
                  <Comment.Text>{el.message}</Comment.Text>
                  {this.props.loginName===el.author?                  
                  <Comment.Actions>
                  <Comment.Action onClick={this.deleteMessage} id={el.frontId}><Icon id={el.frontId} name='delete'/>Delete</Comment.Action>
                  <Comment.Action onClick={this.editMessage} id={el.frontId}><Icon id={el.frontId} name='edit'/>Edit</Comment.Action>
                  </Comment.Actions>
                  : null}
                 </Comment.Content>
             </Comment>)}

             </Comment.Group>
           </Segment>


           <Segment className='message__form'>
                <Input
                    fluid
                    name='message'
                    style={{
                        marginBottom: '.7rem'
                    }}
                    label={<Button icon='add'/>}
                    labelPosition='left'
                    placeholder='Write your message'
                    onChange={this.handlerChange}
                    value={this.state.input}
                   />
                <Button.Group icon widths='2'>
                    <Button color='orange' content='Add Reply' labelPosition='left' icon='edit' onClick={this.recMessage} />
                    {/* <Button color='teal' content='Upload media' labelPosition='right' icon='cloud upload' onClick={this.toggleModal}/> */}
                </Button.Group>
            </Segment>



        </Container>
      </div>
    )
  }
}

export default Chat
