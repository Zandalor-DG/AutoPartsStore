import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, postLoginUser } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import LoginAccount from './LoginAccount';

const LoginAccountContainer = props => {
  return <LoginAccount {...props} postLoginUser = {props.postLoginUser} />;
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
    setAuthUserData,
    postLoginUser,
  }),
  withRouter,
)(LoginAccountContainer);
