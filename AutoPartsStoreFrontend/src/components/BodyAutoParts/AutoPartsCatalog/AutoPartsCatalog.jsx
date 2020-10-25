import React from "react";
import Manufacturer from "./ManufacturerCars/Manufacturer";
import CreateManufacturer from "./ManufacturerCars/CreateManufacturerCar/CreateManufacturer";

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
      <CreateManufacturer
        nameElement={state.nameElement}
        updateModelCarName={props.updateModelCarName}
        postAutoPartsCatalogManufacturer={
          props.postAutoPartsCatalogManufacturer
        }
      />
    </div>
  );
};

export default AutoPartsCatalog;
