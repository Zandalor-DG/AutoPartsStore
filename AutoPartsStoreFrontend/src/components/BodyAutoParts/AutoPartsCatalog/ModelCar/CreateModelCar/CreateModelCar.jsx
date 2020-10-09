import React from "react";
import {
  updateModelCarElementCreator,
  addModelCarElement,
} from "../../../../../redux/Store.js";

const CreateModelCar = (props) => {
  let newCreateModelCarElement = React.createRef();
  let createModelCar = () => {
    props.dispatch(addModelCarElement());
  };

  let onCreateChange = () => {
    let text = newCreateModelCarElement.current.value;
    // //props.updateNewPostText(text);
    // //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateModelCarElementCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onCreateChange}
          ref={newCreateModelCarElement}
          value={props.newCreateModelCarElement}
        />
        <button onClick={createModelCar}>Create Model Car</button>
      </div>
    </div>
  );
};

export default CreateModelCar;
