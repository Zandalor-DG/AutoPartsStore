import React from "react";
import Products from "./Products/Products";
import CreateRelatedProduct from "./CreateRelatedProduct/CreateRelatedProduct";

const RelatedProducts = (props) => {
  let state = props.relatedProducts;
  let relatedProduct = state.products.map((a) => (
    <Products product={a.product} id={a.id} />
  ));

  return (
    <div className="relatedProduct">
      {relatedProduct}
      <CreateRelatedProduct
        newRelatedProductElement={state.newRelatedProductElement}
        addProductElement={props.addProductElement}
        updateProductElement={props.updateProductElement}
      />
    </div>
  );
};

export default RelatedProducts;
