import React from "react";
import c from "./CreateManufacturer.module.css";

const CreateManufacturer = (props) => {
  let nameElement = props.nameElement;
  let onCreateModelCarClick = () => {
    props.postAutoPartsCatalogManufacturer(props.nameElement);
  };

  let onCreateChange = (e) => {
    let text = e.target.value;
    props.updateModelCarName(text);
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
          placeholder="Enter name manufacturer"
          onChange={onCreateChange}
          value={nameElement}
        />
        <button onClick={onCreateModelCarClick}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateManufacturer;
