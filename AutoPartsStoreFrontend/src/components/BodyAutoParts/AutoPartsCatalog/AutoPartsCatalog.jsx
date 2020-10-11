import React from "react";
import ModelCar from "./ModelCar/ModelCar";
import CreateModelCar from "./ModelCar/CreateModelCar/CreateModelCar";

const AutoPartsCatalog = (props) => {
  let state = props.autoPartsCatalog;
  let auto = state.carsModel.map((a) => (
    <ModelCar modelAuto={a.modelAuto} id={a.id} />
  ));

  return (
    <div className="autoPartsCatalog">
      {auto}
      <CreateModelCar
        newCreateModelCarElement={state.newCreateModelCarElement}
        addModelCarElement={props.addModelCarElement}
        updateModelCarElement={props.updateModelCarElement}
      />
    </div>
  );
};

export default AutoPartsCatalog;
