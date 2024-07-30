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

export const RandomMeals = ({ details }) => {
  const { aleatorie, aleatorieCat } = useAleatorieCategorie();
  useEffect(() => {
    aleatorieCat();
  }, []);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      position={'relative'}
      minHeight={'100vh'}
      display='flex'
      flexWrap='wrap'
      alignItems='center'
      justifyContent='center'
      textAlign={'center'}
      p={2}
    >
      {details ? (
        <>
          {details?.map((food) => (
            <Card sx={{ maxWidth: 345, m: 2 }} key={food.idMeal}>
              <CardMedia
                component='img'
                height='140'
                image={food.strMealThumb}
                alt={food.strMeal}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {food.strMeal}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
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
                  <Button size='small' onClick={() => aleatorieCat()}>
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
      ) : (
        <>
          {aleatorie?.map((food) => (
            <Card sx={{ maxWidth: 345, m: 2 }} key={food.idMeal}>
              <CardMedia
                component='img'
                height='140'
                image={food.strMealThumb}
                alt={food.strMeal}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {food.strMeal}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
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
                  <Button size='small' onClick={() => aleatorieCat()}>
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
      )}
    </Box>
  );
};
