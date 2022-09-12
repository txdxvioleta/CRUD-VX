import { GET_USERS, DELETE_USER, ADD_USER, GET_SINGLE_USER } from './actionTypes';

//Estado inicial:
const initialState = {
  users: [],
  user: {},
  loading: true,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };

    case ADD_USER:
      return {
        ...state,
        loading: false,
      };

    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
