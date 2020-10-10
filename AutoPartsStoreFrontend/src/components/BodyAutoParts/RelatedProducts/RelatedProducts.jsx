import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products/Products";

const RelatedProducts = (props) => {
  let relatedProduct = props.relatedProducts.products.map((a) => (
    <Products product={a.product} id={a.id} />
  ));

  let pathCreatedRelatedProduct = "/createRelatedProduct";

  return (
    <div className="relatedProduct">
      {relatedProduct}
      <NavLink to={pathCreatedRelatedProduct}>создать модель </NavLink>
    </div>
  );
};

export default RelatedProducts;
