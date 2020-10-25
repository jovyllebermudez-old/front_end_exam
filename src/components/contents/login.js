import React from "react";
import { Link, Redirect } from "react-router-dom";
import Posts from "./posts";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.props.currentPath();
  }
  // handleLogin(event) {
  //   // alert('A name was submitted: ');
  //   event.preventDefault();
  //   this.props.handleLogin();
  //   // this.props.handleLogin.handleLogin();
  //   // localStorage.setItem("isLogged", "yes");
  //   // console.log(localStorage.getItem("isLogged"));
  //   // return <h1>asd</h1>;
  //   // <Redirect to="/" />;
  //   this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    // console.log(this.state);
    if (this.props.isLogged == "yes") return <Redirect to="/" />;

    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={this.handleLogin}>
    //     email
    //     <input />
    //     <br />
    //     password
    //     <input />
    //     <br />
    //     <button>Login</button>
    //     <br />
    //     No account yet?
    //     <Link to="/register">REGISTER HERE</Link>
    //   </form>
    //   <Posts />
    // </div>

    return (
      <React.Fragment>
        <div class="banner" id="login_cont">
          <div class="form_cont">
            <form onSubmit={this.props.handleLogin}>
              <h2>Login</h2>
              {/* <div class="err" v-if="err != ''">
              {{ err }}
            </div> */}
              <div class="frm_group">
                <label for="">Email</label>
                <input
                  type="email"
                  value={this.props.state.email}
                  onChange={this.props.handleChange}
                />
              </div>
              <div class="frm_group">
                <label for="">Password</label>
                <input
                  type="password"
                  value={this.props.state.password}
                  onChange={this.props.handleChange}
                />
              </div>
              <button type="submit" class="login_btn">
                Login
              </button>
              <div class="login_frm_ftr">
                <span>
                  No account yet?
                  {/* <router-link to="register">Register Here</router-link> */}
                  <Link to="/register">REGISTER HERE</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        {/* <div id="login_cont">
          <div class="form_cont">
            <form action="#">
              <h2 >Login</h2>
              <div class="frm_group">
                <label for="">
                  Email
                </label>
                <input type="email" required="required" />
              </div>
              <div class="frm_group">
                <label for="">
                  Password
                </label>
                <input type="password" required="required" />
              </div>
              <button type="submit" class="login_btn">
                Login
              </button>
              <div class="login_frm_ftr">
                <span>
                  No account yet?
                  <a href="#/register" class="">
                    Register Here
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div> */}
        <Posts
          state={this.props.state}
          loadMoreHandler={() => this.props.loadMoreHandler()}
        />
      </React.Fragment>
    );
  }
}
