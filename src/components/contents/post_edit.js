import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  Link,
  Redirect,
} from "react-router-dom";

import "../../css/post_edit.css";

export default class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.removeFile = this.removeFile.bind(this);
    // console.log("this.props.match.params.id");
    // console.log(this.props.match.params.id);
    // console.log(localStorage.getItem("posts"));
    let matched_data = JSON.parse(localStorage.getItem("posts"))[
      this.props.match.params.id
    ];
    this.state = {
      // id: "this.props.match.params.id",
      // title: "matched_data.title",
      // image: "matched_data.image",
      // content: "matched_data.content",
      id: this.props.match.params.id,
      title: matched_data.title,
      image: matched_data.image,
      content: matched_data.content,
      // posts: "",
      posts: JSON.parse(localStorage.getItem("posts")),
      isUpdateDone: "no",
      showPrompt: "no",
    };
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  // };
  savePost() {
    // alert();
    let temp_posts = this.state.posts;
    temp_posts[this.state.id] = {
      id: this.state.id,
      title: this.state.title,
      image: this.state.image,
      content: this.state.content,
    };
    localStorage.setItem("posts", JSON.stringify(temp_posts));
    // console.log("kani to be saved");
    // console.log(temp_posts);
    this.setState({ isUpdateDone: "yes" });
  }
  cancelPrompt() {
    this.setState({ showPrompt: "yes" });
  }
  isSureToggle(param) {
    if (param=="no")
      this.setState({ showPrompt: "no" });
  }
  handleChange(event) {
    if (event.target.name == "image") {
      this.setState(
        {
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
        () => {
          // localStorage.setItem("post_create", JSON.stringify(this.state));
        }
      );
    } else {
      this.setState({ [event.target.name]: event.target.value }, () => {
        // localStorage.setItem("post_create", JSON.stringify(this.state));
      });
    }
    // console.log(this.state);
    // console.log(event.target.name);
    // console.log(event.target.type);
    // console.log(event.target.value);
  }
  removeFile() {
    this.setState({ image: "" });
  }
  render() {
    if (this.state.isUpdateDone == "yes") {
      return <Redirect to={"/post/" + this.state.id} />;
    }
    console.log("current xxxxxx");
    console.log(this.state);
    console.log(JSON.parse(localStorage.getItem("post_create")));
    return (
      <div class="create_post">
        <div class="wrapper">
          <div class="post_container">
            <div class="wrapper2">
              <div class="btn_container">
                <a onClick={() => this.savePost()} href="javascript:;">
                  Save Post
                </a>
                <a onClick={() => this.cancelPrompt()} href="javascript:;">
                  Cancel
                </a>
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
                  // class="post_content"
                  id="post_data"
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
        {this.state.showPrompt == "yes" ? (
          <div class="pre_loader">
            <div class="pre_cont">
              <span class="pre_text">Are you sure to discard?</span>
              <div class="btn_confirm">
                <button><Link to={"/"}>Yes</Link></button>
                <button onClick={() => this.isSureToggle("no")}>No</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
