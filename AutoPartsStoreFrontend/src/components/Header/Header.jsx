import React from "react";
import SearchParts from "./Search/SearchParts";

const Header = (props) => {
  return (
    <div className="header">
      <SearchParts
        newSearchText={props.newSearchText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Header;
