import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Preloader from "../../common/Preloader/Preloader";
import ModelCars from './ModelCars';
import { setModelCars } from '../../../../redux/modelCarsReducer';
import { compose } from 'redux';

const ModelCarsContainer = React.memo(props => {
  useEffect(() => {
    props.getAutoPartsCatalogManufacturer();
  }, []);

  return (
    <>
      {/* {this.props.isFetching ? (
          <Preloader />
        ) : ( */}
      <ModelCars {...this.props} />
      {/* )} */}
    </>
  );
});

let mapStateToProps = state => {
  return {
    modelCars: state.modelCars,
    isFetching: state.modelCars.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    setModelCars,
  }),
  withRouter,
)(ModelCarsContainer);
