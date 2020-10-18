import React from "react";
import { connect } from "react-redux";
import AutoPartsCatalog from "./AutoPartsCatalog";
import {
  addModelCarElement,
  setAutoPartsCatalog,
  toggleIsFetching,
} from "../../../redux/autoPartsCatalogReducer";
import { withRouter } from "react-router-dom";
import { autoPartsCatalogAPI } from "../../../api/api";
import Preloader from "../../common/Preloader/Preloader";

class AutoPartsCatalogContainer extends React.Component {
  componentDidMount() {
    autoPartsCatalogAPI.getAutoPartsStoreCatalogManufacturer().then((data) => {
      this.props.setAutoPartsCatalog(data);
      this.props.toggleIsFetching(false);
    });
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
    setAutoPartsCatalog,
    toggleIsFetching,
  }
)(WithUrlDataContainerComponent);
