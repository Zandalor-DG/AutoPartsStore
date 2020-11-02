import React from "react";
import Manufacturer from "./ManufacturerCars/Manufacturer";
import CreateOrUpdateManufacturerCarContainer from "./ManufacturerCars/CreateOrUpdateManufacturerCar/CreateOrUpdateManufacturerCarContainer";

const AutoPartsCatalog = (props) => {
  let state = props.manufacturerCar;
  let auto = state.manufacturerCar.map((a) => (
    <span>
      <Manufacturer
        {...props}
        modelAuto={a.manufacturer}
        id={a.id}
        deleteAutoPartsCatalogManufacturer={props.deleteAutoPartsCatalogManufacturer}
      />
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
