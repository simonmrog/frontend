import React from "react";

class Product extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      quantity: 0,
      name: this.props.name,
      price: this.props.price,
    };
  }

  handleButton = () => {
    this.setState ({
      quantity: this.state.quantity + 1, 
      total: this.state.price * this.state.quantity
    }, () => {
        this.props.totalCash (this.state.price);
      }
    );
  }

  render () {

    return (
      <div>
        <p>{this.state.name} -${this.state.price}</p>
        <button onClick={this.handleButton}>Buy</button>
        <h3>Quantity: {this.state.quantity} item(s)</h3>
        <hr />
      </div>
    );
  }

}

export default Product;