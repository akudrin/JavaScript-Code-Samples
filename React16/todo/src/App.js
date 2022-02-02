import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam",
    });
  };
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">To Do List</h4>
        {this.state.userName}'s To Do List
        <button className="btn btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>
      </div>
    );
  }
}
