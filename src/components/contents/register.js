import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  Redirect,
} from "react-router-dom";
import Posts from "./posts";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleRegister(event) {
    // alert('A name was submitted: ');
    event.preventDefault();
    this.props.handleLogin();
    // this.props.handleLogin.handleLogin();
    // localStorage.setItem("isLogged", "yes");
    // console.log(localStorage.getItem("isLogged"));
    // return <h1>asd</h1>;
    // <Redirect to="/" />;
  }

  render() {
    // console.log(this.props.handleLogin);
    if (this.props.isLogged == "yes") return <Redirect to="/" />;

    return (
      <React.Fragment>
        {/* <form onSubmit={this.handleRegister}>
          email
          <input />
          <br />
          password
          <input />
          <br />
          Confirm Password
          <input />
          <br />
          <button>Login</button>
          <br />
          Already have an account?
          <Link to="/login">LOGIN HERE</Link>
        </form> */}

        <div class="banner" id="login_cont">
          <div class="form_cont">
            <form onSubmit={this.handleRegister}>
              <h2>Register</h2>
              <div class="frm_group">
                <label for="">Email</label>
                <input name="username" type="email" required />
              </div>
              <div class="frm_group">
                <label for="">Password</label>
                <input name="password" type="password" required />
              </div>
              <div class="frm_group">
                <label for="">Confirm Password</label>
                <input name="confirm_password" type="password" required />
              </div>
              <button type="submit" class="login_btn">
                Login
              </button>
              <div class="login_frm_ftr">
                <span>
                  Already have an account?
                  {/* <router-link to="register">Register Here</router-link> */}
                  <Link to="/login">LOGIN HERE</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <Posts
          state={this.props.state}
          loadMoreHandler={() => this.props.loadMoreHandler()}
        />
      </React.Fragment>
    );
  }
}