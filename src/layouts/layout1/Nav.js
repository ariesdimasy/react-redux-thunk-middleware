import React from "react";

import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <div className="nav-item">
          <a href="/">Home</a>
        </div>
        <div className="nav-item">
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-item">
          <a href="/posts">Posts</a>
        </div>
        <div className="nav-item">
          <a href="/counter">Counter Redux</a>
        </div>
      </div>
    );
  }
}
