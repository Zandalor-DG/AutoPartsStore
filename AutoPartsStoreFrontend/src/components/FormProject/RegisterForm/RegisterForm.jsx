import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RegisterForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="emailNewUser">Введите Email</label>
      <br />
      <Field component="input" type="text" placeholder="Enter email" name="emailNewUser" />

      <label htmlFor="passwordNewUser">Введите пароль</label>
      <br />
      <Field
        component="input"
        type="password"
        placeholder="Enter name manufacturer"
        name="passwordNewUser"
      />

      <label htmlFor="ConfirmPasswordNewUser">Повторите пароль</label>
      <br />
      <Field
        component="input"
        type="password"
        placeholder="Enter name manufacturer"
        name="confirmPasswordNewUser"
      />

      <button>Register</button>
    </form>
  );
};

export default RegisterForm = reduxForm({
  form: 'registerForm',
})(RegisterForm);
