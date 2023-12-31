// reducers/authReducer.js

import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null, errors: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    case actionType.AUTH_ERROR:
      return { ...state, errors: action.data, loading: false };
    default:
      return state;
  }
};

export default authReducer;
