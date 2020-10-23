import React from "react";
import c from "./CreateManufacturer.module.css";

const CreateManufacturer = (props) => {
  let newCreateModelCarElement = props.newCreateModelCarElement;
  let onCreateModelCarClick = () => {
    props.postAutoPartsCatalogManufacturer(props.newCreateModelCarElement);
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
          placeholder="Enter your message"
          onChange={onCreateChange}
          value={newCreateModelCarElement}
        />
        <button onClick={onCreateModelCarClick}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateManufacturer;
