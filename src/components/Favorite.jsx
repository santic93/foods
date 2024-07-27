import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid, Paper } from '@mui/material';

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
  const favoritosArray = JSON.parse(localStorage.getItem('favorite'));
  console.log(favoritosArray);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Paper
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#eeeeee',
          flexDirection: 'row',
        }}
      >
        <Grid container spacing={2}>
          {favoritosArray?.length ? (
            favoritosArray?.map((favorite) => (
              <Grid item xs={12} sm={6} md={12}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    flexDirection: 'row',
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
              <Typography variant='h1'>Todavia no tiene favoritos</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
