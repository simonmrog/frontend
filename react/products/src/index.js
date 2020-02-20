"use strict";

import React from "react";
import ReactDOM from "react-dom";

class Product extends React.Component {

  render () {
    return (
      <div>
        <p>Android - $199</p>
        <button onClick={this.buy}>Buy</button>
      </div>
    );
  }

  buy () {
    alert ("you bought an android");
  }
}

ReactDOM.render (<Product />, document.querySelector ("#app"));