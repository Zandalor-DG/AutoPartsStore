import { connect } from "react-redux";
import AutoPartsCatalog from "./AutoPartsCatalog";
import {
  addModelCarElementCreator,
  updateModelCarElementCreator,
} from "../../../redux/autoPartsCatalogReducer";

let mapStateToProps = (state) => {
  return {
    autoPartsCatalog: state.autoPartsCatalog,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addModelCarElement: () => {
      dispatch(addModelCarElementCreator());
    },

    updateModelCarElement: (text) => {
      dispatch(updateModelCarElementCreator(text));
    },
  };
};

const AutoPartsCatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPartsCatalog);

export default AutoPartsCatalogContainer;
