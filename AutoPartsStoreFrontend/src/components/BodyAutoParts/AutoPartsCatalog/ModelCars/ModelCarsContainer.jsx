import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import Preloader from "../../common/Preloader/Preloader";
import ModelCars from "./ModelCars";
import { setModelCars } from "../../../../redux/modelCarsReducer";

class ModelCarsContainer extends React.Component {
  componentDidMount() {
    this.props.getAutoPartsCatalogManufacturer();
  }

  render() {
    return (
      <>
        {/* {this.props.isFetching ? (
          <Preloader />
        ) : ( */}
        <ModelCars {...this.props} />
        {/* )} */}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    autoPartsCatalog: state.autoPartsCatalog,
    isFetching: state.autoPartsCatalog.isFetching,
  };
};

let WithUrlDataContainerComponent = withRouter(ModelCarsContainer);

export default connect(mapStateToProps, {
  setModelCars,
})(WithUrlDataContainerComponent);
