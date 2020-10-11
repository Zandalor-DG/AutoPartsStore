import React from "react";
import c from "./CreateRelatedProduct.module.css";

const CreateRelatedProduct = (props) => {
  let newRelatedProductElement = props.newRelatedProductElement;

  let onCreateRelatedProductClick = () => {
    props.addProductElement();
  };

  let onCreateChange = (e) => {
    let text = e.target.value;
    props.updateProductElement(text);
  };

  return (
    <div>
      <div>
        <label htmlFor="createOrUpdatedRelatedProduct">
          Enter a new or update name related product:
        </label>
        <br />
        <input
          className={c.nameFF}
          type="text"
          id="createOrUpdatedRelatedProduct"
          placeholder="Enter your message"
          onChange={onCreateChange}
          value={newRelatedProductElement}
        />
        <button onClick={onCreateRelatedProductClick}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateRelatedProduct;
