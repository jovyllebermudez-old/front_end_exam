import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// import { createStore } from "redux";
import "./css/style.css";
import "./css/media.css";
import "./css/animation.css";
import "./css/my_style.css";

// import Home from "./components/contents/home";
import Login from "./components/contents/login"
import Register from "./components/contents/register"
import Post from "./components/contents/post";
import PostCreate from "./components/contents/post_create";
import PostEdit from "./components/contents/post_edit";
import Header from "./components/includes/header";
import Banner from "./components/contents/banner";
// import Posts from "./components/contents/posts";
import Footer from "./components/includes/footer";

import { initial_posts } from "./initial_posts";

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.loadMoreHandler = this.loadMoreHandler.bind(this);
    this.state = {
      isLogged: "no",
      currentPath: "/",
      email: "",
      password: "",
      loadMore: "no",
    };
    if (localStorage.getItem("posts")) {
      // localStorage.setItem("posts", JSON.stringify(initial_posts));
    } else {
      localStorage.setItem("posts", JSON.stringify(initial_posts));
    }
  }

  loadMoreHandler() {
    // localStorage.setItem("isLogged", "no");
    this.setState({ loadMore: "yes" });
  }
  handleLogout() {
    // localStorage.setItem("isLogged", "no");
    this.setState({ isLogged: "no" });
  }

  handleLogin() {
    // alert('login');
    this.setState({ isLogged: "yes" });
    // localStorage.setItem("isLogged", "no");
  }
  handleChange(event) {
    this.setState({ [event.target.type]: event.target.value });
    // console.log(event.target.type);
    // console.log(event.target.value);
  }

  render() {
    console.log("Initial_posts");
    console.log(initial_posts);
    return (
      <Router>
        <div class="wrapper">
          <Header
            handleLogout={this.handleLogout}
            isLogged={this.state.isLogged}
            currentPath={this.state.currentPath}
          />
          <main class="container">
            <Switch>
              <Route exact path="/">
                <Banner
                  state={this.state}
                  loadMoreHandler={() => this.loadMoreHandler()}
                  currentPath={() => this.setState({ currentPath: "/" })}
                />
              </Route>
              <Route path="/login">
                <Login
                  handleLogin={this.handleLogin}
                  isLogged={this.state.isLogged}
                  state={this.state}
                  currentPath={() => this.setState({ currentPath: "/login" })}
                  handleChange={this.handleChange}
                  loadMoreHandler={() => this.loadMoreHandler()}
                />
              </Route>
              <Route path="/register">
                <Register
                  state={this.state}
                  handleLogin={this.handleLogin}
                  isLogged={this.state.isLogged}
                  loadMoreHandler={() => this.loadMoreHandler()}
                />
              </Route>
              <Route path="/post/:id" render={(props) => <Post {...props} />} />
              <Route path="/post_new">
                <Post isNew="yes" />
              </Route>
              <Route path="/post_create">
                <PostCreate />
              </Route>
              <Route
                path="/post_edit/:id"
                render={(props) => <PostEdit {...props} />}
              />
            </Switch>
            {/* <Posts /> */}
          </main>

          <Footer />
        </div>

        {/* <Header
          handleLogout={this.handleLogout}
          isLogged={this.state.isLogged}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login
              handleLogin={this.handleLogin}
              isLogged={this.state.isLogged}
            />
          </Route>
          <Route path="/register">
            <Register
              handleLogin={this.handleLogin}
              isLogged={this.state.isLogged}
            />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/post_create">
            <PostCreate />
          </Route>
          <Route path="/post_edit">
            <PostEdit />
          </Route>
        </Switch>
        <Footer /> */}
      </Router>
    );
  }
}
