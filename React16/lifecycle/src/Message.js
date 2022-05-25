import React, { Component } from "react";
import { ActionButton } from "./ActionButton";
//document.getElementById("messageDiv").classList.add("bg-info")
export class Message extends Component {
  render() {
    console.log(`Render Message Component `);
    return (
      <div>
        <ActionButton theme="primary" {...this.props} />
        <div id="messageDiv" className="h5 text-center p-2">
          {this.props.message}
        </div>
      </div>
    );
  }
}
