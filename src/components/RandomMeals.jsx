import React, { useEffect, useState } from 'react';
import { useAleatorieCategorie } from '../hooks/useAleatorieCategorie';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from '@mui/material';
import { Image, Padding } from '@mui/icons-material';
import { ListIngredients } from './ListIngredients';
import { Link } from 'react-router-dom';

export const RandomMeals = ({ details: initialDetails }) => {
  const { aleatorie, aleatorieCat } = useAleatorieCategorie();
  const [change, setChange] = useState(false);
  const [details, setDetails] = useState(initialDetails || []);
  useEffect(() => {
    if (initialDetails && initialDetails.length > 0) {
      setDetails(initialDetails);
    }
  }, [initialDetails]);

  useEffect(() => {
    aleatorieCat();
  }, [change]);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChangeMeal = () => {
    setDetails([]); // Limpia details
    setChange((prev) => !prev);
  };
  const mealsToRender = details.length ? details : aleatorie;

  return (
    <>
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
        Random
      </Typography>
      <Box
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <>
          {mealsToRender?.map((food) => (
            <Card
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                margin: 2,
                flexDirection: 'row',
                 maxWidth: 350,
                 m: 2,
                // display: 'flex',
                // flexWrap: 'wrap',
                // flexDirection: 'column',
                // p: 2,
                // maxHeight: 450,
              }}
              key={food.idMeal}
            >
              <CardMedia
                component='img'
                height='150'
                image={food.strMealThumb}
                alt={food.strMeal}
              />
              <CardContent
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxHeight: 200,
                  overflow: 'auto',
                  textAlign: 'center',
                }}
              >
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  {food.strMeal}
                </Typography>
                <Typography
                  variant='body2'
                  color='#ab003c'
                  sx={{ fontWeight: 'bold' }}
                >
                  {food.strInstructions}
                </Typography>
                {expanded && <ListIngredients food={food} />}
              </CardContent>

              <CardActions>
                <ButtonGroup variant='outlined' aria-label='Basic button group'>
                  <Button size='small'>
                    <a
                      href={food.strYoutube}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      Watch on YouTube
                    </a>
                  </Button>
                  <Button size='small' onClick={handleChangeMeal}>
                    Change food
                  </Button>
                  {expanded ? (
                    <Button size='small' onClick={handleExpandClick}>
                      Viewing Ingredients
                    </Button>
                  ) : (
                    <Button
                      size='small'
                      onClick={handleExpandClick}
                      sx={{ padding: 2.5 }}
                    >
                      Ingredients
                    </Button>
                  )}
                </ButtonGroup>
              </CardActions>
            </Card>
          ))}
        </>
      </Box>
    </>
  );
};
