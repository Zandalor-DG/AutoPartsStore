import React from "react";
import {
  updateSearchTextActionCreator,
  addSearchAction,
} from "../../../redux/store";

const SearchParts = (props) => {
  let newSearchElement = React.createRef();

  let search = () => {
    props.dispatch(addSearchAction());
  };

  let onSearchChange = () => {
    let text = newSearchElement.current.value;
    // //props.updateNewPostText(text);
    // //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateSearchTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Поиск по сайту"
          onChange={onSearchChange}
          ref={newSearchElement}
          value={props.newSearchText}
        />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default SearchParts;
