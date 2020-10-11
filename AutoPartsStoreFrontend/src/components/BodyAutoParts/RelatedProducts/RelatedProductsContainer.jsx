import { connect } from "react-redux";
import RelatedProducts from "./RelatedProducts";
import {
  addProductElementCreator,
  updateProductElementCreator,
} from "../../../redux/relatedProductsReducer";

let mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addProductElement: () => {
      dispatch(addProductElementCreator());
    },

    updateProductElement: (text) => {
      dispatch(updateProductElementCreator(text));
    },
  };
};

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedProducts);

export default RelatedProductsContainer;
