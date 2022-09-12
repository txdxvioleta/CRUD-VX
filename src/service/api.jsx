/*
* 1) Cambiar nombre del endpoint 'users' por 'employees'

*/
import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

//POST:
export const addUser = async (data) => await axios.post(API_URL, data);

//GET ALL USERS:
export const getUsers = async () => await axios.get(API_URL);

//GET (FOR ID):
export const getUser = async (data) => await axios.get(`${API_URL}/${data}`);

//PUT:
export const editUser = async (data, id) => await axios.put(`${API_URL}/${id}`, data);

//DELETE:
export const deleteUser = async (id) => await axios.delete(`${API_URL}/${id}`);
