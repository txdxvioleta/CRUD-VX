//React router dom:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import components:
import NavBar from '../components/NavBar';
import AllUsers from './pages/AllUsers';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import NotFound from './pages/NotFound';

//Routes:
const RouteElements = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/view/:id" element={<ViewUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteElements;
