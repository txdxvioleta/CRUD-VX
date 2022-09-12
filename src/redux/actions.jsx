import axios from 'axios';
import { GET_USERS, DELETE_USER, ADD_USER, GET_SINGLE_USER, UPDATE_USER } from './actionTypes';

//URL:
const API_URL = 'http://localhost:3001/users/';

//Acciones:
const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: DELETE_USER,
});

const userAdded = () => ({
  type: ADD_USER,
});

const userUpdated = () => ({
  type: UPDATE_USER,
});

const getUser = (user) => ({
  type: GET_SINGLE_USER,
  payload: user,
});

/****************************************************************/
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${API_URL}`)
      .then((resp) => {
        //console.log('resp', resp);
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API_URL}${id}`)
      .then((resp) => {
        console.log('resp', resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${API_URL}`, user)
      .then((resp) => {
        console.log('resp', resp);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${API_URL}${id}`)
      .then((resp) => {
        console.log('resp', resp);
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${API_URL}${id}`, user)
      .then((resp) => {
        console.log('resp', resp);
        dispatch(userUpdated());
      })
      .catch((error) => console.log(error));
  };
};
