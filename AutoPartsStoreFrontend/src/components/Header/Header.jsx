import React from "react";
import SearchParts from "./Search/SearchParts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SigInSigUp from "./SigIn/SigInSigUp";

const Header = (props) => {
  return (
    <header className="classHeader">
      <SigInSigUp />
      <SearchParts
        newSearchText={props.newSearchText}
        dispatch={props.dispatch}
      />
      <ShoppingCart />
    </header>
  );
};

export default Header;
