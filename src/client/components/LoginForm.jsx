import React, {Component, PropTypes } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default class LoginForm extends  Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
          <Grid justify='center' alignContent='center' container>
                  <Typography variant="headline" component="h2">
                      Login
                  </Typography>
                  <Grid item style={this.props.style}>
                    <TextField
                        id="multiline-flexible"
                        label="Username"
                        rowsMax="1"
                        fullWidth={true}
                        error={this.props.error}
                        value={this.props.userName}
                        />
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth={true}
                        error={this.props.error}
                        value={this.props.password}
                        />
                    </Grid>

                    <Grid item>
                      <Button  style={{width: '100px'}} variant="raised">
                        Login
                      </Button>
                    </Grid>
            </Grid>
    );
  }
}

//LoginForm.propTypes = {
  //onSubmit: PropTypes.func.isRequired,
  //onChange: PropTypes.func.isRequired,
  //error: PropTypes.object.isRequired,
  //user: PropTypes.object.isRequired
//};
