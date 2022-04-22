/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { Component } from "react";
import "./App.css";
import reactLogo from "./logo.svg";
let name = "Adam";
const city = "London";

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line

let error = "not a valid statement";

export default class extends Component {
  message = () => `Hello ${name} from ${city}`;
  render = () => (
    <div className="text-center">
      <h4 className="bg-primary text-white text-center p-3">
        {this.message()}
      </h4>
      <img src={reactLogo} alt="reactLogo" />
      <link rel="stylesheet" href={process.env.PUBLIC_URL + "/static.css"} />
      <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="reactLogo" />
    </div>
  );
}
