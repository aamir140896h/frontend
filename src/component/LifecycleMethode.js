import React from "react";

class LifecycleMethode extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("Mounting phase");
    // this.interval = setInterval(
    //   () => this.setState({ count: this.state.count + 1 }),
    //   1000
    // );
  }

  componentDidUpdate() {
    console.log("updating phase");
  }

  componentWillUnmount() {
    console.log("unmounting phase");
    // clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

export default LifecycleMethode;
