import React from "react";
import {
  updateModelCarElementCreator,
  addModelCarElementCreator,
} from "../../../../../redux/autoPartsCatalogReducer";
import c from "./CreateModelCar.module.css";

const CreateModelCar = (props) => {
  let newCreateModelCarElement = props.newCreateModelCarElement;

  let onCreateModelCarClick = () => {
    props.dispatch(addModelCarElementCreator());
  };

  let onCreateChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateModelCarElementCreator(text));
  };

  return (
    <div>
      <div>
        <label htmlFor="createOrUpdatedModelCar">
          Enter a new or update name model car:
        </label>
        <br />
        <input
          className={c.nameFF}
          type="text"
          id="createOrUpdatedModelCar"
          placeholder="Enter your message"
          onChange={onCreateChange}
          value={newCreateModelCarElement}
        />
        <button onClick={onCreateModelCarClick}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateModelCar;
