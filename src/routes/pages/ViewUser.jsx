//MUI:
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

//Redux:
import { getSingleUser } from '../../redux/actions';

//Hooks y params:
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Estado inicial:
const initialValue = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
};

//Component:
const ViewUser = () => {
  //Hook: useState
  const [state, setState] = useState(initialValue);

  //Desestructuro para obtener el id
  const { id } = useParams();

  const dispatch = useDispatch();

  //Desestructuro user del state
  const { user } = useSelector((state) => state.data);

  //Hook: useEffect()
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  return (
    <Card sx={{ maxWidth: 450, margin: 'auto', marginTop: 5 }}>
      <CardContent className="card-content">
        <Typography style={{ textAlign: 'center' }}>ID: {user.id} </Typography>
        <Typography style={{ textAlign: 'center' }}>Name: {user.name} </Typography>
        <Typography style={{ textAlign: 'center' }}>Last name: {user.lastName}</Typography>
        <Typography style={{ textAlign: 'center' }}>Email: {user.email} </Typography>
        <Typography style={{ textAlign: 'center' }}>Phone: {user.phone} </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">
          READ MORE...
        </Button>
      </CardActions>
    </Card>
  );
};

export default ViewUser;
