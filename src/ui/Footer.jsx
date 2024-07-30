import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar
      position='fixed'
      color='primary'
      component='footer'
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#263238',
      }}
    >
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Toolbar>
          <Typography
            variant='body1'
            color='inherit'
            sx={{ flexGrow: 1, fontWeight: 'bold', fontStyle: 'italic' }}
          >
            © 2024 Foods
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
