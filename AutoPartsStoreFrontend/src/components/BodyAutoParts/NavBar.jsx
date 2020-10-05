import React from "react";
import { NavLink } from "react-router-dom";
import c from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={c.navBar}>
      <div className={c.item}>
        <NavLink to="/autoPartsStore" activeClassName={c.activeLink}>
          Каталог авто запчастей
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/relatedProducts" activeClassName={c.activeLink}>
          Сопутствующие товары
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
