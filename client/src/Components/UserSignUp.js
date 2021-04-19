import React, {Component} from "react";
import {Link} from "react-router-dom";
import Form from "./form";

export default class UserSignUp extends Component {
    state = {
        firstName:"",
        lastName:"",
        emailAddress:"",
        password:"",
        confirmPassword:""
    }

 render() {
  const{
        firstName,
        lastName,
        emailAddress,
        password,
        confirmPassword,
    } =this.state
    return (
        <div class="form--centered">
                <h2>Sign Up</h2>

        <Form 
       
          elements={() => ( 
            <React.Fragment>
              <input id="firstName" name="firstName" type="text" value=""/>
              <input id="lastName" name="lastName" type="text" value=""/>
              <input id="emailAddress" name="emailAddress" type="email" value=""/>
              <input id="password" name="password" type="password" value=""/>
              <input id="confirmPassword" name="confirmPassword" type="password" value=""/>
              <button class="button" type="submit">Sign Up</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button/button/>
            </React.Fragment>
          )} /> 
          <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
          </div>
    );
  }
  submit = () => {
     
    context.data.createUser(user)
     .then( errors => {
       if (errors.length) {
         this.setState({ errors });
       } else {
         console.log(`${username} is successfully signed up and authenticated!`);
       }
     })  
  .catch( err => { 
    console.log(err);
  }); 
  cancel = () => {
    this.props.history.push('/');
  }
  

export default UserSignUp;
