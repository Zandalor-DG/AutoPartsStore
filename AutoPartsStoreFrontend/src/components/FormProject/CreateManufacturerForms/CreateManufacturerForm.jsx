import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateManufacturerForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"input"}
        placeholder="Enter name manufacturer"
        name="createOrUpdatedManufacturer"
      />
      <button>Create Model Car</button>
    </form>
  );
};

export default reduxForm({ form: "createOrUpdatedManufacturerCarForm" })(
  CreateManufacturerForm
);
