import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material';
import { useAllCategories } from '../hooks/useAllCategories';
import { useEffect, useState } from 'react';
import { useNameCategorie } from '../hooks/useNameCategorie';
import { Link, NavLink } from 'react-router-dom';
import { Categorie } from './Categorie';
import { useTranslation } from 'react-i18next';
export const Categories = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { categories, categoriesFood } = useAllCategories();
  //const { categorie, categorieName } = useNameCategorie();
  useEffect(() => {
    categories();
    //categorie('Seafood');
  }, []);

  return (
    <div style={{ flexGrow: 1 }}>
      <Box
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          //backgroundColor: '#eeeeee',
        }}
      >
        <h3
          style={{
            fontSize: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 3,
            color: '#2e7d32',
          }}
        >
          All categories
        </h3>
        <Grid container spacing={2}>
          {categoriesFood?.map((cat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                style={{
                  padding: 16,
                  textAlign: 'center',
                  height: 300, // Asegura un tamaño fijo para todas las cards
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Asegura que el contenido esté distribuido equitativamente
                }}
              >
                <Link
                  to={`categorie/${cat.strCategory}`}
                  style={{ textDecoration: 'none' }}
                >
                  <ButtonBase
                    style={{ width: 128, height: 128, margin: 'auto' }}
                  >
                    <img
                      style={{
                        maxWidth: '170%',
                        // maxHeight: '100%',
                      }}
                      alt={cat.strCategory}
                      src={cat.strCategoryThumb}
                    />
                  </ButtonBase>
                  <Box
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Typography
                      variant='subtitle1'
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        letterSpacing: 2,
                        fontSize: 20,
                        color: '#2e7d32',
                        '&:hover': {
                          color: '#8bc34a', // Color cuando se hace hover
                          cursor: 'pointer', // Cambia el cursor a pointer
                        },
                      }}
                    >
                      {/* {t(cat.strCategory)} */}
                      {cat.strCategory}
                    </Typography>
                  </Box>
                </Link>
                <small>
                  <b
                    style={{
                      color: hoveredIndex === index ? '#2e7d32' : 'inherit',
                    }}
                  >
                    {hoveredIndex === index &&
                      'Click here for more information'}
                  </b>
                </small>
                <div
                  style={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    textOverflow: 'ellipsis',
                    height: 100, // Ajusta la altura según tus necesidades
                  }}
                >
                  <Typography variant='body2' sx={{ fontWeight: 'bolder' }}>
                    {cat.strCategoryDescription}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
