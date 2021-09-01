import { fetchUser as fetchUserService } from "../api/userApi";

const {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} = require("./types");

export const fetchUser = username => {
  return dispatch => {
    dispatch(fetchUserRequest());
    fetchUserService(username)
      .then(user => {
        dispatch(fetchUserSuccess(user));
      })
      .catch(err => {
        dispatch(fetchUserFailed(err.data.message));
      });
  };
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const fetchUserFailed = error => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};
