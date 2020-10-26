import React from "react";
import { NavLink } from "react-router-dom";

const Manufacturer = (props) => {
  let path = "/manufacturer/" + props.id;

  return (
    <div className="autoParts">
      <NavLink to={path}>{props.modelAuto + " "}</NavLink>
      <NavLink to={`/manufacturerUpdate/${props.id}`}>Update</NavLink>
    </div>
  );
};

export default Manufacturer;
