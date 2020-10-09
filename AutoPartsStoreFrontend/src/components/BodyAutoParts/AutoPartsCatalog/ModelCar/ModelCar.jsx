import React from "react";
import { NavLink } from "react-router-dom";

const ModelCar = (props) => {
  let path = "/autoPartsStore/" + props.id;

  return (
    <div key={props.id} className="autoParts">
      <NavLink key={props.id} to={path}>
        {props.modelAuto + " "}
      </NavLink>
    </div>
  );
};

export default ModelCar;
