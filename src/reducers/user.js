import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../actions/types";

const initialState = {
  info: null,
  isLoading: false,
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return {
        info: null,
        isLoading: true,
        error: "",
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        info: action.payload,
        isLoading: false,
        error: "",
      };
    }
    case FETCH_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
