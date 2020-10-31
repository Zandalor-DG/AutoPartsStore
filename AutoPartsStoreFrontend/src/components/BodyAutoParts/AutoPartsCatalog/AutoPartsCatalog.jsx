import React from "react";
import Manufacturer from "./ManufacturerCars/Manufacturer";
import CreateOrUpdateManufacturerCarContainer from "./ManufacturerCars/CreateOrUpdateManufacturerCar/CreateOrUpdateManufacturerCarContainer";

const AutoPartsCatalog = (props) => {
  let state = props.manufacturerCar;
  let auto = state.manufacturerCar.map((a) => (
    <span key={a.id}>
      <Manufacturer modelAuto={a.manufacturer} id={a.id} />
    </span>
  ));

  return (
    <div className="autoPartsCatalog">
      {auto}
      <CreateOrUpdateManufacturerCarContainer />
    </div>
  );
};

export default AutoPartsCatalog;
