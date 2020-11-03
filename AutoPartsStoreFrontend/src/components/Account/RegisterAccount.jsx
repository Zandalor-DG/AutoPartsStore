import React from 'react';
import { NavLink } from 'react-router-dom';
import RegisterForm from '../FormProject/RegisterForm/RegisterForm';

const RegisterAccount = props => {
  const onRegisterNewUser = ({ emailNewUser, passwordNewUser, confirmPasswordNewUser }) => {
    if (passwordNewUser !== confirmPasswordNewUser) {
      alert('Jopa');
    }

    props.postRegisterUser(emailNewUser, passwordNewUser, confirmPasswordNewUser);
  };

  return (
    <div>
      <h2>Регистрация</h2>

      <NavLink to="/Login">Войти</NavLink>
      <br />
      <br />
      <br />
      <RegisterForm onSubmit={onRegisterNewUser} />
    </div>
  );
};

export default RegisterAccount;
