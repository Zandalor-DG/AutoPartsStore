import React from "react";
import { Field, reduxForm } from "redux-form";

let CreateManufacturerForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="createOrUpdatedManufacturer">Manufacturer Car:</label>
      <br />
      <Field
        component="input"
        type="text"
        placeholder="Enter name manufacturer"
        name="createOrUpdatedManufacturer"
      />
      <button>Create Model Car</button>
    </form>
  );
};

CreateManufacturerForm = reduxForm({
  form: "createOrUpdatedManufacturerCarForm",
})(CreateManufacturerForm);

export default CreateManufacturerForm;
