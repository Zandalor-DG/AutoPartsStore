import React from "react";
import Products from "./Products/Products";

const RelatedProducts = (props) => {
  let relatedProduct = props.relatedProducts.products.map((a) => (
    <Products product={a.product} id={a.id} />
  ));

  return <div className="relatedProduct">{relatedProduct}</div>;
};

export default RelatedProducts;
