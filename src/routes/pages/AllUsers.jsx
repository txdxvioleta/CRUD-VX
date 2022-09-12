import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, deleteUser } from '../../redux/actions';
//Agregado 11/09 23:18
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/style.css';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

// Componente que renderiza la tabla con todos los usuarios:
const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  //Columnas estáticas para armar la tabla:
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130, sortable: false, disableColumnMenu: true },
    { field: 'lastName', headerName: 'Last name', width: 150, sortable: false, disableColumnMenu: true },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 140,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 210,
      sortable: false,
      headerAlign: 'center',

      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="outlined"
              style={{ marginRight: 3 }}
              color="success"
              component={Link}
              to={`/view/${cellValues.row.id}`}
            >
              View
            </Button>
            <Button
              variant="outlined"
              style={{ marginRight: 3 }}
              color="primary"
              component={Link}
              to={`/edit/${cellValues.row.id}`}
            >
              Edit
            </Button>
            <Button variant="outlined" color="error" onClick={(e) => handleDelete(e, cellValues.row.id)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  console.log(users);
  //Navigate:
  const navigate = useNavigate();

  //Carga de usuarios:
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  //Borrar usuario:
  const handleDelete = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      icon: 'error',
      allowEscapeKey: false,
      allowEnterKey: false,
      showDenyButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        return dispatch(deleteUser(id));
      }
    });
  };

  return (
    <>
      <div id="div-button-add">
        <Button color="primary" variant="contained" onClick={() => navigate('/add')}>
          ADD USER
        </Button>
      </div>
      <div style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2.2em' }}>
        <DataGrid
          columns={columns}
          rows={users}
          pageSize={6}
          rowsPerPageOptions={[6]}
          autoHeight
          disableColumnSelector
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default AllUsers;
