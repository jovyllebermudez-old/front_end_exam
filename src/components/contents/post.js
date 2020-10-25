import React from "react";
import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  Link,
  // useParams,
} from "react-router-dom";
import Breadcrumbs from "../includes/breadcrumbs";
import Comments from "./comments";

export default class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    // this.removeFile = this.removeFile.bind(this);
    this.state = {
      title: "",
      image: "",
      content: "",
      date: "",
    };
    if (this.props.isNew) {
       this.state = JSON.parse(localStorage.getItem("post_create"));
       var today = new Date();
       var dd = String(today.getDate()).padStart(2, "0");
       var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
       var yyyy = today.getFullYear();

       today =yyyy+"."+ mm + "." + dd;
       this.setState({ date: today });

    }
    if(this.props.match){
      if (this.props.match.params.id) {
       this.state = JSON.parse(localStorage.getItem("posts"))[
         this.props.match.params.id
       ];
      }
    }
  }
  render() {
    console.log("mygoodnnees");
    console.log(this.state);
    // console.log("current state from post");
    // console.log(this.state.image);
    // console.log(localStorage.getItem("post_create"));
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });
    return (
      <React.Fragment>
        <Breadcrumbs title={this.state.title} />
        <div class="the_post">
          <div class="wrapper">
            <div class="post_container">
              <div class="wrapper2">
                <div class="edit_btn_div">
                  <Link
                    to={
                      this.props.isNew
                        ? "/post_create"
                        : "/post_edit/" + this.state.id
                    }
                  >
                    Edit Post
                  </Link>
                </div>
                <div class="post_date">
                  {this.state.date != "" ? this.state.date : "2019.10.20"}
                </div>
                <div class="post_content">
                  {this.state.title
                    ? this.state.title
                    : "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"}
                </div>
                <figure data-v-2bf341ea="">
                  <img
                    data-v-2bf341ea=""
                    alt="img"
                    src={
                      this.state.image
                        ? this.state.image
                        : window.location.origin +
                          "/assets/images/post_img1.jpg"
                    }
                  />
                </figure>
                <div class="post_datas">
                  <p data-v-2bf341ea="">
                    {this.state.content
                      ? this.state.content
                      : "ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります"}
                  </p>
                </div>
                <Comments id={this.props.match.params.id} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
