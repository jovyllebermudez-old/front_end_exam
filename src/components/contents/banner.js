import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Posts from "./posts";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.props.currentPath();
    // this.toggleClass = this.toggleClass.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.chooseSlide = this.chooseSlide.bind(this);
    this.state = {
      active: false,
      current_banner_image: 1,
      number_of_banner_image: 4,
    };
  }
  nextSlide() {
    let { current_banner_image, number_of_banner_image } = this.state;

    if (current_banner_image == number_of_banner_image)
      current_banner_image = 1;
    else current_banner_image = current_banner_image + 1;

    this.setState({ current_banner_image: current_banner_image });
  }
  prevSlide() {
    let { current_banner_image, number_of_banner_image } = this.state;

    if (current_banner_image == 1)
      current_banner_image = number_of_banner_image;
    else current_banner_image = current_banner_image - 1;

    this.setState({ current_banner_image: current_banner_image });
  }

  chooseSlide(chosen) {
    this.setState({ current_banner_image: chosen });
  }

  render() {
    return (
      <React.Fragment>
        <div class="banner">
          <div class="my_slider">
            <div class="slider_images">
              <img
                class={"bnr1 active fade-in" + this.state.current_banner_image}
                src={
                  "assets/images/bnr" + this.state.current_banner_image + ".png"
                }
                alt="image"
              />
              {/* <img class="bnr2" src="assets/images/bnr2.png" alt="image" /> */}
              {/* <img class="bnr3" src="assets/images/bnr3.png" alt="image" /> */}

              <div class="btn_navs">
                <ul>
                  <li
                    class={
                      this.state.current_banner_image == 1
                        ? "tab_bullet active fade-in1"
                        : "tab_bullet"
                    }
                    onClick={() => this.chooseSlide(1)}
                  ></li>
                  <li
                    class={
                      this.state.current_banner_image == 2
                        ? "tab_bullet active fade-in2"
                        : "tab_bullet"
                    }
                    onClick={() => this.chooseSlide(2)}
                  ></li>
                  <li
                    class={
                      this.state.current_banner_image == 3
                        ? "tab_bullet active fade-in3"
                        : "tab_bullet"
                    }
                    onClick={() => this.chooseSlide(3)}
                  ></li>
                  <li
                    class={
                      this.state.current_banner_image == 4
                        ? "tab_bullet active fade-in4"
                        : "tab_bullet"
                    }
                    onClick={() => this.chooseSlide(4)}
                  ></li>
                </ul>
              </div>
              <div class="brn_info">
                <p>
                  <span>サンプルテキスト</span>
                  <span>サンプル ルテキスト</span>
                  <span>サンプルテキスト</span>
                </p>
                <div class="date_cont"> 2019.06.19 </div>
              </div>
              <div class="page_div">
                <a onClick={this.prevSlide} class="arr_btn left-btn">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAcCAYAAACH81QkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABx0lEQVQ4jcXV2UsCQRwH8NnDI1zU5+4eQvPKpD/CUsmHInqof6vneukuIv0bOuiAoINuCSSCyNSH9UG378AYss3sqgT9YJx1ft/9MMuyu+RfyufzJTCWuwb8fv8ERhHDALTXXJc6ATDlMHpblvdLpVJWaROIY8qbAFpBl8ul2e7E4/GMOxwOCvSZe4Zh3DcajbRkA8QY0C8CKpXKnWwD5ATAA4AMBeh/SQBE2Q4GOMAj28Ftc00SAHQHgxzgCUCqFfiFaJoWUVU1LwLq9Xq6Wq3emHtSCxBmwBAHeAaQ4gG05CagKEpOALyIdvCDAAgBOJAkaZjTLzDgmlgUrkBNYh4R9C8BXBGbUnRdP3S73V84TnL6AfRGkdm1ROgPQkdOp/MTlzTFycTwfARqtdqOJUILoWNAH4CmzSGsRQGNIbNtiTDoBOF3nJTiQBH0wshsWSIMOkX4DSelOVAYvSgym5YIg84QLuKkDAcKoRdHZsMSYdA57swrDmc4UBC9BG7IuiVCC6ELhAs4zHLa9PZPIrPW1jvW6/UuybK8wuvhHdsjt4OUy+VVvAIWzet4rmYx6aSTwo4W6OeCfTLmSLeFk+fpIH9bhHwD577RP5CuxysAAAAASUVORK5CYII="
                    alt="left arrow"
                  />
                </a>
                <a onClick={this.nextSlide} class="arr_btn right-btn">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB0UlEQVQ4jcWV2UrDQBSGsxUKXb0VQVTcKLg9grdNVdBSeiEigogg4nN4IyIUKYiIiIhQxfY5BBcEFXd6401XlG7xH0kkjTOZiIgHDjPJf+abf2YyrfBnEQgEEsiR30JSwWBQQ2aRwz8ZKxodDDxCM27Sskg1l8udOgFJupNVC4REKzKNCYYcgxqNRlLTtBuK/gnzeDyDPNDX0nw+X48kSWlRFLspdS/VajVcLpfPbB2RKBaL13AWgbNbSl2by+Uizga4jkzO+nRnXZT6Z93ZORdkgmUA66TIT4CpVhgVRMLr9fbLspxmwWq1WrhUKl1wQSYYcdZBkR912CV5kOxAKLqq1+sqDuCBIrcTx5gsxHVkchZSFCVDBls1THJPJpOdgCqVyqvb7R5Ft9eqYdktOJg7xQkI12QXTYQhr+A+rnFBuId7aOI0DR/wcqFQWCd9kQPZh/UYA7IEyIbxrNhADgCJ0jRs8CIgCfM7kQE5BGSSAVnI5/Ob1vciBZICZIIBmQckSdOalobTOUYzJtBjDpAthtb0U3uCRmXUzeKItwWbMEBugN5oBTidGWzsjsAJ4669Y/1TFMi0E8i3wEZH9b8jze/3x4XfBGAxksL/hCB8AC/6tqafOAVsAAAAAElFTkSuQmCC"
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Posts state={this.props.state} loadMoreHandler={()=>this.props.loadMoreHandler()}/>
      </React.Fragment>
    );
  }
}
