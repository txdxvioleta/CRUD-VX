//MUI:
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../../redux/actions';
import Swal from 'sweetalert2';

//Personalización de componentes:
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  //Hook: useState
  const [state, setState] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  //Recupero el id mediante el uso de params:
  const { id } = useParams();

  //Desestructuro user del state
  const { user } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hook: useEffect()
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  //Verifico si está definido user:
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  //Función que se ejecuta cuando se produce un cambio en los inputs:
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //Función que se ejecuta al presionar el botón de 'add':
  const handleSubmit = (e) => {
    e.preventDefault();
    //Alertas:
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Update successfully',
          showConfirmButton: false,
          timer: 2400,
        });
        return dispatch(updateUser(state, id));
      }
      
    });
    setTimeout(() => {
      navigate('/');
    }, 2400);
  };

  return (
    <>
      <Container>
        <Typography align="center" variant="h4">
          Edit user
        </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            autoFocus
            autoComplete="off"
            onChange={handleInputChange}
            name="name"
            value={state.name || ''}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Last name</InputLabel>
          <Input
            autoComplete="off"
            onChange={handleInputChange}
            name="lastName"
            value={state.lastName || ''}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input autoComplete="off" onChange={handleInputChange} name="email" value={state.email || ''} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone number</InputLabel>
          <Input autoComplete="off" onChange={handleInputChange} name="phone" value={state.phone || ''} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Edit user
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
