import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
        data: [],
        secret: ''        
    }

    handlerChange = (evt) => {       
        this.setState({
            [evt.target.name]: evt.target.value,
        }) 
    }

    componentDidMount(){
        axios.get('http://localhost:3000/')
            .then(res => {
                this.setState({
                data: res.data,
            })
        })
            .catch(err=> console.log(err))
    }  

    funcPostData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login',{
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            this.setState({
                data: res.data,
                email: '',
                password: ''
            })
            .catch(err=> console.log(err))
        })
    }

    funcGetSecret = () =>{
        axios.get('http://localhost:3000/secret')
            .then(res => {
                this.setState({
                secret: res.data,
            })
        })
            .catch(err=> console.log(err))
    }
    

   
    render() {
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{
                    maxWidth: 450
                }}>
                    <Header as='h2' icon color='green' textAlign='center'>
                        <Icon name='user circle' color='green'/>
                        Login to Chat
                    </Header>
                    <Form size='large' onSubmit={this.props.funcLogin}>
                        <Segment stacked>
                            
                                                    <Form.Input 
                            fluid
                            name='email'
                            icon='mail'
                            iconPosition='left'
                            placeholder="Enter email"
                            type='email'
                            onChange={this.handlerChange}
                            value={this.state.name}
                            required
                            autoFocus
                            />

                            <Form.Input
                            fluid
                            name='password'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={this.handlerChange}
                            value={this.state.password}
                            required
                            />

                            <Button type='submit' color='green' fluid size='large'>
                                Login
                            </Button>

                        </Segment>                 
                    </Form>

                    {this.props.error &&
                        <Message>
                        {this.props.data}
                        </Message> }

                        <Button onClick={this.funcGetSecret} type='submit' color='green' fluid size='large'>
                                Secret
                            </Button>
                    {this.props.secret  && 
                        <Message>
                            {this.props.secret}                           
                        </Message>
                   }

                        <Message>
                            Don't have an account?
                            <Button color='green' fluid onClick={this.props.anotherModal}> Registration</Button>
                        </Message>      

                            {/* <Button onClick={this.props.anotherModal} color='green' fluid size='large'>
                                Registration
                            </Button> */}
                </Grid.Column>        
            </Grid>
        );
    }
}

export default Login;