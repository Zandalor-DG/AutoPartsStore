import React from "react";
import { connect } from "react-redux";
import CreateOrUpdateManufacturer from "./CreateOrUpdateManufacturer";
import {
  getAutoPartsCatalogManufacturer,
  postAutoPartsCatalogManufacturer,
  putAutoPartsCatalogManufacturer,
} from "../../../../../redux/autoPartsCatalogReducer";
import { withRouter } from "react-router-dom";
import Preloader from "../../../../common/Preloader/Preloader";

class CreateOrUpdateManufacturerCarContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <CreateOrUpdateManufacturer
            {...this.props}
            postAutoPartsCatalogManufacturer={
              this.props.postAutoPartsCatalogManufacturer
            }
            putAutoPartsCatalogManufacturer={
              this.props.putAutoPartsCatalogManufacturer
            }
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.manufacturerCar.isFetching,
  };
};

let WithUrlDataContainerComponent = withRouter(
  CreateOrUpdateManufacturerCarContainer
);

export default connect(mapStateToProps, {
  getAutoPartsCatalogManufacturer,
  postAutoPartsCatalogManufacturer,
  putAutoPartsCatalogManufacturer,
})(WithUrlDataContainerComponent);
