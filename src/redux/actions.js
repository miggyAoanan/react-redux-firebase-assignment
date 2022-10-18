import * as types from "./actionTypes";

import firebaseDb from "../firebase";

const getUsersStart = () => ({
  type: types.GET_USERS_START,
});

const getUsersSuccess = (users) => ({
  type: types.GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFail = () => ({
  type: types.GET_USERS_FAIL,
});

const addUserStart = () => ({
  type: types.ADD_USER_START,
});

const addUserSuccess = () => ({
  type: types.ADD_USER_SUCCESS,
});

const addUserFail = () => ({
  type: types.ADD_USER_FAIL,
});

const editUserStart = () => ({
  type: types.EDIT_USER_START,
});

const editUserSuccess = () => ({
  type: types.EDIT_USER_SUCCESS,
});

const editUserFail = () => ({
  type: types.EDIT_USER_FAIL,
});


const deletetUserStart = () => ({
  type: types.DELETE_USER_START,
});

const deleteUserSuccess = () => ({
  type: types.DELETE_USER_SUCCESS,
});

const deletetUserFail = () => ({
  type: types.DELETE_USER_FAIL,
});

export const getUsers = () => {
  return function (dispatch) {
    dispatch(getUsersStart());
    firebaseDb.child("users").on("value", (snapshot) => {
      try {
        if (snapshot.val() !== null) {
          dispatch(getUsersSuccess(snapshot.val()));
        } else {
          dispatch(getUsersSuccess({}));
        }
      } catch (error) {
        dispatch(getUsersFail(error));
      }
    });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    dispatch(addUserStart());
    firebaseDb.child("users").push(user, (err) => {
      dispatch(addUserSuccess())
      if (err) {
        dispatch(addUserFail(err))
      }
    });
  };
};

export const editUser = (user, id) => {
  return function (dispatch) {
    dispatch(editUserStart());
    firebaseDb.child(`users/${id}`).set(user, (err) => {
      dispatch(editUserSuccess())
      if (err) {
        dispatch(editUserFail(err))
      }
    });
  };
};


export const deleteUser = (id) => {
  return function (dispatch) {
    dispatch(deletetUserStart());
    firebaseDb.child(`users/${id}`).remove((err) => {
      deleteUserSuccess();
      if (err) {
        dispatch(deletetUserFail(err));
      }
    });
  };
};
