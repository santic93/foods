import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

import { Box, Button, Grid, Paper, Stack } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Favorite() {
  const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
  const [favoritos, setFavoritos] = React.useState(() => {
    // Inicializar desde localStorage
    const favoritosGuardados = localStorage.getItem('favoritos');
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });
  const [info, setInfo] = React.useState({});
  const handleClick = (cat) => {
    let nuevosFavoritos;
    if (favoritos.some((fav) => fav.idMeal === cat.idMeal)) {
      // Eliminar de favoritos
      nuevosFavoritos = favoritos.filter((fav) => fav.idMeal !== cat.idMeal);
    } else {
      // Agregar a favoritos
      nuevosFavoritos = [...favoritos, cat];
    }
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };
  const handleDelete = () => {
    localStorage.removeItem('favoritos');
    setFavoritos([]);
  };
  return (
    <div style={{}}>
      <Typography
        variant='h2'
        component='h3'
        sx={{
          textAlign: 'center',
          fontStyle: 'italic',
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          textShadow: '1px 1.5px 1px white',
          letterSpacing: '5px',
          color: '#3f51b5',
        }}
      >
        Favoritos
      </Typography>
      <Stack
        direction='row'
        spacing={2}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant='outlined'
          startIcon={<DeleteIcon />}
          color='error'
          disabled={!favoritosGuardados}
          onClick={handleDelete}
        >
          Delete all favorites
        </Button>
      </Stack>
      <Box
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Grid container spacing={2}>
          {favoritosGuardados?.length ? (
            favoritosGuardados?.map((favorite) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: '50%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CardHeader title={favorite.strMeal} />
                  <CardMedia
                    component='img'
                    height='194'
                    image={favorite.strMealThumb}
                    alt={favorite.strMeal}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <IconButton
                      aria-label='favorite'
                      onClick={() => handleClick(favorite)}
                    >
                      <FavoriteIcon
                        sx={{
                          color: favoritos.some(
                            (fav) => fav.idMeal === favorite.idMeal
                          )
                            ? '#ba000d'
                            : '',
                        }}
                      />
                    </IconButton>
                  </div>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              sx={{
                width: '100%',
                maxWidth: 500,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant='h2'>Todavia no tiene favoritos</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}
