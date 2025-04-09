import React, { Component } from "react";

export class ClassComponentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentDidMount() {
    this.setState({ number: 1 });
    console.log(this.state.number);
    this.setState({ number: 2 });
    console.log(this.state.number);
    this.setState({ number: 3 });
    console.log(this.state.number);
  }

  render() {
    return <div>{this.state.number}</div>;
  }
}

export default ClassComponentQuestion;
