import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Nav from "./Components/Nav";


const App = () => {
  return (
    <div className="bg">
      <Nav />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)