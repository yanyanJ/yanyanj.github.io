import React, { Component } from "react";
import "./mainPage.css"

import Video from "../../videos/whiteFlowers.mp4";

const content = (currentView) => {
  switch (currentView) {
    case "mainView":
    return(
      <div className="loadingWindow">
      <video className="videoWindow" playsInline autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="myName">
      Yanyan :)
      </div>
      </div>
    );
    case "blogView":
      return (
        <div className="blogView">
          <div className="blogViewText">
            <h2> A little poem </h2>
            <br/>
            To move, to breathe, to fly, to float, <br/>
            To gain all while you give, <br/>
            To roam the roads of lands remote, <br/>
            To travel is to live. <br/>
            <br/>
            - Hans Christian Anderson
            <br/>
            <br/>
            <h2> What makes me 'me'?</h2>
              <br/>
              I have been asking this questions many times <br/>
              through out my teens. Now, in my twenties and <br/>
              I still have not figured it out.<br/>
              <br/>
              I like trying new things
              and experimenting with new ideas. <br/>
              <br/>
              I have always like the idea that someday I will <br/>
              feel truly content by becoming really good at this one thing <br/>
              but from my life experience so far, <br/>
              it seems that what makes me truly happy is <br/>
              having the possibilities <br/>
              and oppotunities to explore the unknown world. <br/>
            <br/>
            <h2> 回想 </h2>
            <br/>
            記得小時候，很愛讀台灣作家三毛的小說。<br/>
            當時，經常會想像自己長大以後也會當作家，<br/>
            會周遊世界，會分享自己的感受。<br/>
            <br/>
            Yanyan
          </div>
        </div>
      );
    case "aboutView":
      return (
        <div className="aboutView">
          <div className="aboutViewText">
            <h2> About the site </h2>
              <br/>
              The plan is to use this place to keep a record of things <br/>
              that I found interesting over the time and <br/>
              also as a place to note down my thoughts. <br/>
              <br/>
              It is work in progress ... <br/>
              <br/>
              Yanyan
          </div>
        </div>
      );
  }
};

export default class MainPage extends Component {

  constructor(props){
    super(props);
    this.state = {currentview:"mainView"};
  }
  render () {
    return (
      <div className="mainPage">
        <div className="tabs">
          <div className="about" onClick={() => this.setState({ currentview: "aboutView" })}>About</div>
          <div className="blog" onClick={() => this.setState({ currentview: "blogView" })}>Blog</div>
        </div>
        {content(this.state.currentview)}
      </div>
    );
  };
}
