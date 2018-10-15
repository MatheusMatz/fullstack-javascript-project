import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import stylesLogin from '../stylesheet/loginStyle';

import LoginForm from '../components/LoginForm.jsx';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error : false,
      username : '',
      password : ''
    };
  }


  render(){
      return(
          <Paper style={stylesLogin.paper} elevation={15}>
              <LoginForm userName = {this.state.username} 
                         password = {this.state.password} 
                         error = {this.state.error} 
                         style = {stylesLogin.textField}/>
                         
          </Paper>
      );
  }
}
