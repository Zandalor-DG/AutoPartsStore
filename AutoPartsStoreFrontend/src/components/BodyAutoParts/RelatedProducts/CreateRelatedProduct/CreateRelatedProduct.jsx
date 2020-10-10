import React from "react";
import {
  addProductElementCreator,
  updateProductElementCreator,
} from "../../../../redux/relatedProductsReducer";
import c from "./CreateRelatedProduct.module.css";

const CreateRelatedProduct = (props) => {
  let newRelatedProductElement = props.newRelatedProductElement;

  let onCreateModelCarClick = () => {
    props.dispatch(addProductElementCreator());
  };

  let onCreateChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateProductElementCreator(text));
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
        <button onClick={onCreateModelCarClick}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateRelatedProduct;
