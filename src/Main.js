import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({showMenu: true});
  }

  closeMenu() {
    this.setState({showMenu: false});
  }

  render() {
    var menu;
    if(this.state.showMenu) {
      menu = this.closeMenu;
    } else {
      menu = this.showMenu;
    }
    return (
      <div>
        <a className="navMenu" onClick={menu}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </a>

        {
          this.state.showMenu
          ? (
            <ul className="menu" onClick={menu}>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          )
          : (
            null
          )
        }
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Menu />
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
