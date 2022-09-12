//MUI:
import { AppBar, Toolbar, styled } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const CodeIcon = styled(CodeOutlinedIcon)`
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <HomeRoundedIcon />
        </NavLink>
        <CodeIcon />
        <span style={{ padding: '5px' }}>Gonzalo Caram</span>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
