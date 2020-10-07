import React from "react";
import ModelCar from "./ModelCar/ModelCar";

const AutoPartsCatalog = (props) => {
  let auto = props.autoPartsCatalog.modelCars.map((a) => (
    <ModelCar modelAuto={a.modelAuto} id={a.id} cars={a.cars} />
  ));

  return <div className="autoPartsCatalog">{auto}</div>;
};

export default AutoPartsCatalog;
