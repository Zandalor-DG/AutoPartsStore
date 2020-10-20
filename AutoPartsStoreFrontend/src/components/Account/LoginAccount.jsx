import React from "react";
import { NavLink } from "react-router-dom";

const LoginAccount = (props) => {
  return (
    <div>
      <h2>Вход на сайт</h2>

      <NavLink to="/Register">Регистрация</NavLink>

      <form>
        <div>
          <div>
            <label>Введите Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Введите пароль</label>
            <input type="password" />
          </div>
          <div>
            <input type="submit" value="Войти" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginAccount;
