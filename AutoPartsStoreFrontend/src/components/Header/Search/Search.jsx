import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/Store";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let search = () => {
    //props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    // let text = newPostElement.current.value;
    // //props.updateNewPostText(text);
    // //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Поиск по сайту"
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default MyPosts;
