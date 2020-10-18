import React from "react";
import ModelCar from "./ModelCar/ModelCar";
//import Preloader from "../../common/Preloader/Preloader";
import CreateModelCar from "./ModelCar/CreateModelCar/CreateModelCar";

const AutoPartsCatalog = (props) => {
  // if (!props.autoPartsCatalog) {
  //   debugger;
  //   return <Preloader />;
  // }

  let state = props.autoPartsCatalog;
  let auto = state.manufacturerCar.map((a) => (
    <ModelCar modelAuto={a.manufacturer} id={a.id} />
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
