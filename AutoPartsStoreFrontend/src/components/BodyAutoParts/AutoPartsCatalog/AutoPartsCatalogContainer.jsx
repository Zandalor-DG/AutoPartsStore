import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AutoPartsCatalog from './AutoPartsCatalog';
import {
  getAutoPartsCatalogManufacturer,
  postAutoPartsCatalogManufacturer,
} from '../../../redux/autoPartsCatalogReducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';

const AutoPartsCatalogContainer = (props) => {
  useEffect(() => {
    props.getAutoPartsCatalogManufacturer();
  }, [props.manufacturerCar]);

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <AutoPartsCatalog
          {...props}
          manufacturerCar={props.manufacturerCar}
          updateModelCarName={props.updateModelCarName}
          deleteAutoPartsCatalogManufacturer={props.deleteAutoPartsCatalogManufacturer}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    manufacturerCar: state.manufacturerCar,
    isFetching: state.manufacturerCar.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    getAutoPartsCatalogManufacturer,
    postAutoPartsCatalogManufacturer,
  }),
  withRouter,
)(AutoPartsCatalogContainer);
