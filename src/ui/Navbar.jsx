import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Avatar,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const pages = ['Favorites', 'Random Meals']; 


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position='static' sx={{ backgroundColor: '#607d8b' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <LanguageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <NavLink
            to='/'
            style={{ textDecoration: 'none', color: '#cfd8dc' }}
          >
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Foods of the world
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={`/${page.replace(' ', '')}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography textAlign='center'>{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NavLink
            to='/'
            style={{ textDecoration: 'none', color: '#cfd8dc' }}
          >
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Meals
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page.replace(' ', '')}`}
                style={{ textDecoration: 'none', color: '#cfd8dc' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#cfd8dc', display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
