import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AutoPartsCatalog from './AutoPartsCatalog';
import {
  deleteAutoPartsCatalogManufacturer,
  getAutoPartsCatalogManufacturer,
} from '../../../redux/autoPartsCatalogReducer';
import { withRouter } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';

const AutoPartsCatalogContainer = props => {
  useEffect(() => {
    props.getAutoPartsCatalogManufacturer();
  }, []);

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <AutoPartsCatalog
          {...props}
          manufacturerCar={props.manufacturerCar}
          deleteAutoPartsCatalogManufacturer={props.deleteAutoPartsCatalogManufacturer}
        />
      )}
    </>
  );
};

let mapStateToProps = state => {
  return {
    manufacturerCar: state.manufacturerCar,
    isFetching: state.manufacturerCar.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    deleteAutoPartsCatalogManufacturer,
    getAutoPartsCatalogManufacturer,
  }),
  withRouter,
)(AutoPartsCatalogContainer);
