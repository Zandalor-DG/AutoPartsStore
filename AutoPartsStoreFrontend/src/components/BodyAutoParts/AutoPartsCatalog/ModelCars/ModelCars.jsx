import React from "react";
import ModelCar from "./ModelCar/ModelCar";
// import Preloader from "../../common/Preloader/Preloader";
import CreateModelCar from "./ModelCar/CreateModelCar/CreateModelCar";
// import { NavLink } from "react-router-dom";

const ModelCars = (props) => {
  let state = props.modelCars;
  let auto = state.manufacturerCar.map((a) => (
    <ModelCar modelAuto={a.manufacturer} id={a.id} />
  ));

  return (
    <div className="autoPartsCatalog">
      {auto}
      <CreateModelCar
        newCreateModelCarElement={state.newCreateModelCarElement}
        addModelCarElement={props.addModelCarElement}
        updateModelCarName={props.updateModelCarName}
        postAutoPartsCatalogManufacturer={
          props.postAutoPartsCatalogManufacturer
        }
      />
    </div>
  );
};

export default ModelCars;
