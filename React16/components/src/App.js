import React from "react";
import { Summary } from "./Summary";
let names = ["Bob", "Alice", "Dora"];
export default function App() {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name}>
            <Summary index={index} name={name} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
