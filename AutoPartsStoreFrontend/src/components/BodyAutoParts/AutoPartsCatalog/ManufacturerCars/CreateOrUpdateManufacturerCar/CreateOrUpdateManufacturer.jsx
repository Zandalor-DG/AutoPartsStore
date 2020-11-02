import React from 'react';

//import { Redirect } from 'react-router-dom';
import CreateManufacturerForm from '../../../../FormProject/CreateManufacturerForms/CreateManufacturerForm';

const CreateOrUpdateManufacturer = props => {
  debugger;
  let manufacturerId = Number(props.match.params.manufacturerId);

  let onCreateManufacturerCar = values => {
    if (!manufacturerId) {
      props.postAutoPartsCatalogManufacturer(values.createOrUpdatedManufacturer);
    } else {
      props.putAutoPartsCatalogManufacturer(values.createOrUpdatedManufacturer, manufacturerId);
    }
  };

  return (
    <div>
      <CreateManufacturerForm onSubmit={onCreateManufacturerCar} />
    </div>
  );
};

export default CreateOrUpdateManufacturer;
