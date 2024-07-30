import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';

export const ListIngredients = ({ food }) => {
    const ingredients = Array.from({ length: 20 }, (_, i) => ({
        ingredient: food[`strIngredient${i + 1}`].trim(),
        measure: food[`strMeasure${i + 1}`].trim(),
      })).filter(item => item.ingredient); // Filtra ingredientes no vacíos
    
  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
      '& ul': { padding: 0 },
    }}
    subheader={<li />}
  >
    {ingredients.map((item, index) => (
      <li key={index}>
        <ul>
          <ListItem>
            <ListItemText primary={`${item.measure} ${item.ingredient}`} />
          </ListItem>
        </ul>
      </li>
    ))}
  </List>
  );
};
