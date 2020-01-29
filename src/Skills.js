import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="topic">SKILLS</h1>
        <div className="category">
          <h2 className="subtitle">Languages</h2>
          <div className="language">
            <img src={require('./assets/images/js.png')} alt="" />
            <span className="techName">Javascript</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/php.png')} alt="" />
            <span className="techName">PHP</span>
          </div>
        </div>
        <div className="category">
          <h2 className="subtitle">Frontend Tools</h2>
          <div className="language">
            <img src={require('./assets/images/html.png')} alt="" />
            <span className="techName">HTML5</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/css.png')} alt="" />
            <span className="techName">CSS3</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/bootstrap.png')} alt="" />
            <span className="techName">Bootstrap</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/react.png')} alt="" />
            <span className="techName">React.js</span>
          </div>
        </div>
        <div className="category">
          <h2 className="subtitle">Database</h2>
          <div className="language">
            <img src={require('./assets/images/mysql.png')} alt="" />
            <span className="techName">MySQL</span>
          </div>
        </div>
        <div className="category">
          <h2 className="subtitle">Frameworks</h2>
          <div className="language">
            <img src={require('./assets/images/angularjs.png')} alt="" />
            <span className="techName">AngularJS</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/codeigniter.png')} alt="" />
            <span className="techName">CodeIgniter</span>
          </div>
        </div>
        <div className="category">
          <h2 className="subtitle">Version Control</h2>
          <div className="language">
            <img src={require('./assets/images/github.png')} alt="" />
            <span className="techName">GitHub</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/svn.png')} alt="" />
            <span className="techName">SVN</span>
          </div>
        </div>
        <div className="category">
          <h2 className="subtitle">Operating Systems</h2>
          <div className="language">
            <img src={require('./assets/images/mac.png')} alt="" />
            <span className="techName">MacOS</span>
          </div>
          <div className="language">
            <img src={require('./assets/images/ubuntu.png')} alt="" />
            <span className="techName">Ubuntu</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
