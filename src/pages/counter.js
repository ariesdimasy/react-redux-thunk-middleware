import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, Container } from "react-bootstrap";
import Nav from "./../layouts/layout1/Nav";
import Header from "./../layouts/layout1/Header";

import { increment, decrement } from "../redux/actions/counterAction";

export default function Counter() {
  const number = useSelector((state) => state.counterReducer.number);

  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Header title="Counter"></Header>
      <Nav></Nav>
      <Container>
        <Row style={{ margin: "20px 0", width: 300 }}>
          <Col>
            <Button type="primary" onClick={() => onDecrement()}>
              -
            </Button>
          </Col>
          <Col style={{ fontSize: 40 }}>{number}</Col>
          <Col>
            <Button type="primary" onClick={() => onIncrement()}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
