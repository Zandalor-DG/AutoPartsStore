import { connect } from "react-redux";
import RelatedProducts from "./RelatedProducts";
import {
  addProductElement,
  updateProductElement,
} from "../../../redux/relatedProductsReducer";

let mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
  };
};

const RelatedProductsContainer = connect(
  mapStateToProps,
  {
    addProductElement,
    updateProductElement,
  }
)(RelatedProducts);

export default RelatedProductsContainer;
