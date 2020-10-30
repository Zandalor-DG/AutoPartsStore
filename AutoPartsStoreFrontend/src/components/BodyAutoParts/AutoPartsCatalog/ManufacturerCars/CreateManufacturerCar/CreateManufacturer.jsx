import React from "react";
import CreateManufacturerForm from "../../../../FormProject/CreateManufacturerForms/CreateManufacturerForm";

const CreateManufacturer = (props) => {
  let onCreateManufacturerCar = (values) => {
    props.postAutoPartsCatalogManufacturer(props.nameElement);
  };

  return (
    <div>
      <CreateManufacturerForm onSubmit={onCreateManufacturerCar} />
    </div>
  );
};

export default CreateManufacturer;
