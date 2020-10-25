import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  Redirect,
  Link,
} from "react-router-dom";

import "../../css/post_edit.css";

export default class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.removeFile = this.removeFile.bind(this);
    this.state = {
      title: "",
      image: "",
      content: "",
    };
    if (localStorage.getItem("post_create")) {
       this.state = JSON.parse(localStorage.getItem("post_create"));
    }
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  // };

  handleChange(event) {
    if (event.target.name == "image") {
      this.setState(
        {
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
        () => {
          localStorage.setItem("post_create", JSON.stringify(this.state));
        }
      );
    } else {
      this.setState({ [event.target.name]: event.target.value }, () => {
        localStorage.setItem("post_create", JSON.stringify(this.state));
      });
    }
    // console.log(this.state);
    // console.log(event.target.name);
    // console.log(event.target.type);
    // console.log(event.target.value);
  }
  removeFile(){
    this.setState({image:""});
  }
  render() {
    console.log("current stateSSSS");
    console.log(this.state);
    console.log(JSON.parse(localStorage.getItem("post_create")));
    return (
      <div class="create_post">
        <div class="wrapper">
          <div class="post_container">
            <div class="wrapper2">
              <div class="btn_container">
                <Link to="/post_new">Save Post</Link>
                <Link to="/">Cancel</Link>
              </div>
              <div class="form_post_cont">
                <div class="dates">2019.10.20</div>
                <textarea
                  value={this.state.title}
                  name="title"
                  onChange={this.handleChange}
                  placeholder="Title"
                />
                {/* <textarea
                  data-v-761d7744=""
                  name="title"
                  placeholder="Title"
                ></textarea> */}
                <div class="file_container">
                  <div class="file-wrapper">
                    <input
                      required
                      ref="file"
                      type="file"
                      name="image"
                      accept="image/*"
                      id="file-input"
                      onChange={this.handleChange}
                    />
                    <label for="file-input">Upload Image</label>
                    {this.state.image != "" ? (
                      <span
                        onClick={() => this.removeFile()}
                        class="remove_file"
                      >
                        Remove
                      </span>
                    ) : null}

                    <figure class="fig_pic">
                      {this.state.image != "" ? (
                        <img src={this.state.image} alt="img" />
                      ) : null}
                    </figure>
                  </div>
                </div>
                {/* <textarea
                  data-v-761d7744=""
                  id="post_data"
                  name="content"
                  placeholder="content"
                ></textarea> */}
                <textarea
                  value={this.state.content}
                  name="content"
                  onChange={this.handleChange}
                  placeholder="Content"
                />
              </div>
              <div id="comments">
                <div class="wrapper">
                  <div class="comments_cont">
                    <div class="wrapper2">
                      <h2 data-v-0d061477="">Comments</h2>
                      <div class="comment_con">
                        <div class="comment_sect">
                          <p data-v-0d061477="">asdsad</p>
                          <div class="comment_date"> 27 minutes Ago </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="comment_form">
                    <form action="">
                      <textarea
                        data-v-0d061477=""
                        required="required"
                        placeholder="Write Comment"
                      ></textarea>
                      <div class="btn_container">
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}