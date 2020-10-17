import React from "react";
import { NavLink } from "react-router-dom";

const RegisterAccount = (props) => {
  return (
    <div>
      <h2>Регистрация</h2>

      <NavLink to="/Login">Войти</NavLink>

      <form>
        <div>
          <div>
            <label>Введите Email</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Введите пароль</label>
            <br />
            <input type="password" />
          </div>
          <div>
            <label asp-for="ConfirmPassword">Повторите пароль</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <input type="submit" value="Войти" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterAccount;
