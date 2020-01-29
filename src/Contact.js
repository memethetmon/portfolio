import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="topic">CONTACT</h1>
        <div className="contact">
          <img className="contactImg" src={require('./assets/images/email.png')} alt="Email" />
          <a className="contactInfo" href={'mailto:memethetmon@yahoo.com'}>memethetmon@yahoo.com</a>
        </div>
        <div className="contact">
          <img className="contactImg" src={require("./assets/images/github.png")} alt="" />
          <a className="contactInfo" target="_blank" href={"https://github.com/memethetmon"}>https://github.com/memethetmon</a>
        </div>
        <div className="contact">
          <img className="contactImg" src={require("./assets/images/linkedin.png")} alt="" />
          <a className="contactInfo" target="_blank" href={"https://www.linkedin.com/in/memethetmon"}>www.linkedin.com/in/memethetmon</a>
        </div>
      </div>
    );
  }
}

export default Contact;
