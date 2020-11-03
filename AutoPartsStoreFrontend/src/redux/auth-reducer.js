import { accountAPI } from '../api/apiAccount';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  email: null,
  password: null,
  isAuth: false,
  isFetching: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (email, password) => ({
  type: SET_USER_DATA,
  data: { email, password },
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const postLoginUser = ({ email, password }) => dispatch => {
  accountAPI.postLoginUser({ email, password }).then(() => {
    dispatch(setAuthUserData({ email, password }));
    dispatch(toggleIsFetching(false));
  });
};

export const postRegisterUser = (email, password, confirmPasswordUser) => dispatch => {
  debugger;
  accountAPI.postRegisterUser(email, password, confirmPasswordUser).then(() => {
    dispatch(toggleIsFetching(false));
  });
};

export default authReducer;
