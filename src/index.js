import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import DataTable from "./DataTable";
import React from "react";

const greetingMessage = <div>Hello React Workshop!</div>;

//ReactDom.render(greetingMessage, document.getElementById("root"));

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<DataTable />);
