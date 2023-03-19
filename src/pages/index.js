import React from "react";

import Header from "../layouts/layout1/Header";
import Nav from "../layouts/layout1/Nav";

import Counter from "./../components/Counter";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header title="Index"></Header>
        <Nav></Nav>
        <div>
          <p> ini halaman index </p>
          <Counter number={3} exists></Counter>
          <Counter number={10}></Counter>
          <Counter number={7}></Counter>
        </div>
      </div>
    );
  }
}
