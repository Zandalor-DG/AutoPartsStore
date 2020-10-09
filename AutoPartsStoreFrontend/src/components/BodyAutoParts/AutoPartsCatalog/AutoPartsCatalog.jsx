import React from "react";
import ModelCar from "./ModelCar/ModelCar";
import { NavLink } from "react-router-dom";

const AutoPartsCatalog = (props) => {
  let auto = props.autoPartsCatalog.carsModel.map((a) => (
    <ModelCar modelAuto={a.modelAuto} id={a.id} />
  ));

  let pathCreateModelCar = "/createModelCar";

  return (
    <div className="autoPartsCatalog">
      {auto}
      <NavLink to={pathCreateModelCar}>создать модель </NavLink>
    </div>
  );
};

export default AutoPartsCatalog;
