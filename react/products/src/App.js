import React from "react";

import ProductList from "./ProductList";

class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {total: 0};
  }

  totalCash = (price) => {
    this.setState ({total: this.state.total + price});
  }

  render () {

    return (
      <div>
        <ProductList totalCash={this.totalCash}/>
        <h1>Total Cash: {this.state.total}</h1>
      </div>
    );
  }

}

export default App;