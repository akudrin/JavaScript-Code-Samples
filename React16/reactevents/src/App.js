import React, { Component } from "react";
import { ThemeButton } from "./ThemeButton";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      counter: 0,
      theme: "info",
    };
  }

  handleEvent = (event, newTheme) => {
    event.persist();
    this.setState(
      {
        counter: this.state.counter + 1,
        theme: newTheme,
      },
      () => this.setState({ message: `${event.type}: ${this.state.counter}` })
    );
  };

  toggleCheckBox = (event) => {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  };

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`,
    });
  };

  render() {
    return (
      <div className="m-2">
        <div
          className={`h4 bg-${this.state.theme}
    text-white text-center p-2`}
        >
          {this.state.message}
        </div>
        <div className="text-center">
          <ThemeButton theme="primary" callback={this.selectTheme} />
          <ThemeButton theme="danger" callback={this.selectTheme} />
        </div>
      </div>
    );
  }
}
