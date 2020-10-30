import React from "react";
import { connect } from "react-redux";
import CreateManufacturer from "../CreateManufacturerCar/CreateManufacturer";
import {
  getAutoPartsCatalogManufacturer,
  postAutoPartsCatalogManufacturer,
} from "../../../../../redux/autoPartsCatalogReducer";
import { withRouter } from "react-router-dom";
// import Preloader from "../../common/Preloader/Preloader";

class CreateManufacturerCarContainer extends React.Component {
  componentDidMount() {
    this.props.getAutoPartsCatalogManufacturer();
  }

  render() {
    return (
      <>
        {/* {this.props.isFetching ? (
          <Preloader />
        ) : ( */}
        <CreateManufacturer
          {...this.props}
          manufacturerCar={this.props.manufacturerCar}
          postAutoPartsCatalogManufacturer={
            this.props.postAutoPartsCatalogManufacturer
          }
        />
        {/* )} */}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    manufacturerCar: state.manufacturerCar,
    isFetching: state.manufacturerCar.isFetching,
  };
};

let WithUrlDataContainerComponent = withRouter(CreateManufacturerCarContainer);

export default connect(mapStateToProps, {
  getAutoPartsCatalogManufacturer,
  postAutoPartsCatalogManufacturer,
})(WithUrlDataContainerComponent);
