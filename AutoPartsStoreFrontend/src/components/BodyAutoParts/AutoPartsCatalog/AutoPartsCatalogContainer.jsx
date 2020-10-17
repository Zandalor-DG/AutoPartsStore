import React from "react";
import { connect } from "react-redux";
import AutoPartsCatalog from "./AutoPartsCatalog";
import {
  addModelCarElement,
  updateModelCarElement,
  setAutoPartsCatalog,
} from "../../../redux/autoPartsCatalogReducer";
import { withRouter } from "react-router-dom";
import axios from "axios";

class AutoPartsCatalogContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://localhost:44370/api/ManufacturerCars/`)
      .then((response) => {
        this.props.setAutoPartsCatalog(response.data);
      });
  }

  render() {
    return (
      <AutoPartsCatalog
        {...this.props}
        autoPartsCatalog={this.props.autoPartsCatalog}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    autoPartsCatalog: state.autoPartsCatalog,
  };
};

let WithUrlDataContainerComponent = withRouter(AutoPartsCatalogContainer);

export default connect(
  mapStateToProps,
  { addModelCarElement, updateModelCarElement, setAutoPartsCatalog }
)(WithUrlDataContainerComponent);
