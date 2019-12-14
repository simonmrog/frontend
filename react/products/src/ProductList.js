import React from "react";

import Product from "./Product";

const ProductList = (props) => {

  return (
    <div>
      <Product name="iPhone" price={121} totalCash={props.totalCash}/>
      <Product name="Huawei" price={50} totalCash={props.totalCash}/>
      <Product name="Samsung" price={78} totalCash={props.totalCash}/>
    </div>
  );
}

export default ProductList;