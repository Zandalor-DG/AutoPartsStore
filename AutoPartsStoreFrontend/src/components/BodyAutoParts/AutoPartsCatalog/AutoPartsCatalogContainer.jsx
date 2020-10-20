import React from "react";
import { connect } from "react-redux";
import AutoPartsCatalog from "./AutoPartsCatalog";
import {
  addModelCarElement,
  getAutoPartsCatalogManufacturer,
} from "../../../redux/autoPartsCatalogReducer";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

class AutoPartsCatalogContainer extends React.Component {
  componentDidMount() {
    this.props.getAutoPartsCatalogManufacturer();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <AutoPartsCatalog
            {...this.props}
            autoPartsCatalog={this.props.autoPartsCatalog}
          />
        )}
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

let WithUrlDataContainerComponent = withRouter(AutoPartsCatalogContainer);

export default connect(
  mapStateToProps,
  {
    addModelCarElement,
    getAutoPartsCatalogManufacturer,
  }
)(WithUrlDataContainerComponent);
