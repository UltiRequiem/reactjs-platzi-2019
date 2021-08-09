import React from "react";
import ReactDOM from "react-dom";

const app = (msg) => <h1> {msg}</h1>;

ReactDOM.render(app("Hello World"), document.getElementById("app"));
