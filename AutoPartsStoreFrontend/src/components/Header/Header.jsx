import React from "react";
import SearchParts from "./Search/SearchParts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SigInSigUp from "./SigIn/SigInSigUp";

const Header = (props) => {
  return (
    <div className="header">
      <SigInSigUp />
      <SearchParts
        newSearchText={props.newSearchText}
        dispatch={props.dispatch}
      />
      <ShoppingCart />
    </div>
  );
};

export default Header;
