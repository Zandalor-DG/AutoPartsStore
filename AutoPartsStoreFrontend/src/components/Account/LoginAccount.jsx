import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../FormProject/LoginForm/LoginForm';

const LoginAccount = props => {
  const onLoginNewUser = ({ loginUser, passwordUser }) => {
    props.postLoginUser({ loginUser, passwordUser });
  };

  return (
    <div>
      <h2>Вход на сайт</h2>

      <NavLink to="/Register">Регистрация</NavLink>
      <br />
      <br />
      <br />
      <LoginForm onSubmit={onLoginNewUser} />
    </div>
  );
};

export default LoginAccount;
