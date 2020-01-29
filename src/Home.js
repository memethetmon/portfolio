import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="background">
        <div id="bio">
          <img src={require('./assets/images/profilePic.jpg')} alt="Profile Pic"/>
          <h1>Hello, I am Me Me Thet Mon.</h1>
          <h2>I love creating beautiful and accessible websites.</h2>
        </div>
      </div>
    );
  }
}

export default Home;
