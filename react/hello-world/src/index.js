// IMPORT THE REACT AND REACTDOM LIBRARIES
import React from "react";
import ReactDOM from "react-dom";

// CREATE A REACT COMPONENT
const App = function () {
   return (<div>Hello World!</div>);
};

// TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render (<App />, document.querySelector ("#root"));