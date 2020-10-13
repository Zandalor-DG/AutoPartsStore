import { connect } from "react-redux";
import AutoPartsCatalog from "./AutoPartsCatalog";
import {
  addModelCarElement,
  updateModelCarElement,
} from "../../../redux/autoPartsCatalogReducer";

let mapStateToProps = (state) => {
  return {
    autoPartsCatalog: state.autoPartsCatalog,
  };
};

const AutoPartsCatalogContainer = connect(
  mapStateToProps,
  { addModelCarElement, updateModelCarElement }
)(AutoPartsCatalog);

export default AutoPartsCatalogContainer;
