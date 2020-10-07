import React from "react";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  let path = "/relatedProducts/" + props.id;
  return (
    <div className="relatedProducts">
      <NavLink to={path}>{props.product}</NavLink>
    </div>
  );
};

export default Products;
