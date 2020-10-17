import React from "react";
import { NavLink } from "react-router-dom";
import SearchParts from "./Search/SearchParts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className="classHeader">
      <SearchParts
        newSearchText={props.newSearchText}
        dispatch={props.dispatch}
      />
      <ShoppingCart />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
