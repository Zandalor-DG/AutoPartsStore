import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, postRegisterUser } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import RegisterAccount from './RegisterAccount';

const RegisterAccountContainer = props => {
  return <RegisterAccount {...props} postRegisterUser = {props.postRegisterUser} />;
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
    setAuthUserData,
    postRegisterUser,
  }),
  withRouter,
)(RegisterAccountContainer);
