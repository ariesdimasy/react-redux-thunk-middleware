import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  // mounting => sebelum render
  componentDidMount() {
    this.setState({
      counter: this.props.number, // <--- string
    });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div
        style={{
          marginLeft: 20,
          border: "1px solid black",
          display: "inline-block",
          width: 100,
          padding: 10,
        }}
      >
        {this.props.exists ? (
          <h2>
            <button
              style={{ marginRight: 10 }}
              onClick={() => this.decrement()}
            >
              {" "}
              -{" "}
            </button>
            {this.state.counter}
            <button style={{ marginLeft: 10 }} onClick={() => this.increment()}>
              {" "}
              +{" "}
            </button>
          </h2>
        ) : (
          <p> NGAPAIN ? </p>
        )}
      </div>
    );
  }
}

export default Counter;
