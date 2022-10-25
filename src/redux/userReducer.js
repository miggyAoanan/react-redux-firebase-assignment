import * as types from "./actionTypes";

const initialState = {
  users: {},
  loading: false,
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.GET_USERS_START:
    case types.ADD_USER_START:
    case types.DELETE_USER_START:
    case types.EDIT_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_USER_SUCCESS:
    case types.ADD_USER_SUCCESS:
    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_USER_FAIL:
    case types.ADD_USER_FAIL:
    case types.EDIT_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default userReducer;
