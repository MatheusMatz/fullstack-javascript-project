import React, {Component, PropTypes } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class SignUpForm extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Grid justify='center' alignContent='center' container>
            
            <Typography variant="headline" component="h2">
                Cadastrar-se
            </Typography>
            
            <Grid item style={this.props.style}>
              
              <TextField
                  id="multiline-flexible"
                  label="Username"
                  rowsMax="1"
                  fullWidth={true}
                  error={this.props.error}
                  value={this.props.userName}/>
                
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth={true}
                  error={this.props.error}
                  value={this.props.password}/>
                  
                <TextField
                  id="email-input"
                  label="Email"
                  type="email"
                  margin="normal"
                  fullWidth={true}
                  error={this.props.error}
                  value={this.props.email}/>

              </Grid>

              <Grid item>
                <Button  style={{width: '100px'}} variant="raised">
                  Cadastrar
                </Button>
              </Grid>
      </Grid>
        );
    }
}