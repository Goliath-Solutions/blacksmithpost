
import React from 'react';
import {Component} from 'react';


class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

/*
handleClick(event){
  var apiBaseUrl = "http://localhost:4000/api/";
  var self = this;
  var payload={
    "email":this.state.username,
    "password":this.state.password
  }
  axios.post(apiBaseUrl+'login', payload)
  .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    var uploadScreen=[];
    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else if(response.data.code == 204){
     console.log("Username password do not match");
      alert("username password do not match")
    }
    else{
     console.log("Username does not exists");
     alert("Username does not exist");
    }
  })
   .catch(function (error) {
     console.log(error);
   });
  }
  */
render() {
    return (
        <div className="container">

      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
    );
  }
}


export default Login;