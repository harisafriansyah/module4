import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/categories">Categories</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
