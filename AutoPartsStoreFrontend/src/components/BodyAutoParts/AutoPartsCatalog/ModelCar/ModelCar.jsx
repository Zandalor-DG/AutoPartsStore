import React from "react";
import { NavLink } from "react-router-dom";

const ModelCar = (props) => {
  let path = "/cars/" + props.id;

  return (
    <div key={props.id} className="autoParts">
      <NavLink key={props.id} to={path}>
        {props.modelAuto + " "}
        {/* <Cars onModelCars={props.onModelCars} /> */}
      </NavLink>
    </div>
  );
};

export default ModelCar;
