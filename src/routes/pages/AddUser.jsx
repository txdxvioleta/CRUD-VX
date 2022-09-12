import React, { useState } from 'react';
import { addUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

//MUI:
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';

//Personalización de componentes:

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

//Estado inicial:
const initialValue = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
};

const AddUser = () => {
  //Hook: useState
  const [state, setState] = useState(initialValue);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Función que se ejecuta cuando se produce un cambio en los inputs:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(state));

    Swal.fire({
      icon: 'success',
      title: 'Added successfully',
      showConfirmButton: false,
      timer: 2400,
    });
    setTimeout(() => {
      navigate('/');
    }, 2400);
  };

  return (
    <Container>
      <Typography align="center" variant="h4">
        Add user
      </Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input autoFocus autoComplete="off" onChange={handleInputChange} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Last name</InputLabel>
        <Input autoComplete="off" onChange={handleInputChange} name="lastName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input autoComplete="off" onChange={handleInputChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone number</InputLabel>
        <Input autoComplete="off" onChange={handleInputChange} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
