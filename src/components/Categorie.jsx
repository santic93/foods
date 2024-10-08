import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNameCategorie } from '../hooks/useNameCategorie';
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
export const Categorie = () => {
  const pat = useParams();
  const { categorie, categorieName } = useNameCategorie();
  useEffect(() => {
    categorie(pat.id);
  }, []);

  const [favoritos, setFavoritos] = useState(() => {
    // Inicializar desde localStorage
    const favoritosGuardados = localStorage.getItem('favoritos');
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });
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

  return (
    <div style={{ flexGrow: 1 }}>
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
        {pat.id}
      </Typography>
      <Box
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: '#c5cae9',
        }}
      >
        <Grid container spacing={2}>
          {categorieName?.map((cat, index) => (
            <Grid item xs={12} sm={6} md={4} key={cat.idMeal}>
              <Card
                sx={{
                  // width: 345,
                  // height: 400,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={cat.strMealThumb}
                  alt={cat.strMeal}
                />
                <CardContent
                  style={{
                    flexGrow: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                  >
                    {cat.strMeal}
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <IconButton
                      aria-label='favorite'
                      onClick={() => handleClick(cat)}
                    >
                      <FavoriteIcon
                        sx={{
                          color: favoritos.some(
                            (fav) => fav.idMeal === cat.idMeal
                          )
                            ? '#ba000d'
                            : '',
                        }}
                      />
                    </IconButton>
                    <Link
                      to={`info/${cat.strMeal}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton aria-label='info'>
                        <InfoIcon />
                      </IconButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
