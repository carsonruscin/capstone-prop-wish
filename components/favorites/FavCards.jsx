import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Stack,
  } from "@mui/material";
  import { Box, Typography } from "@mui/material";
  import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
  import RotateLeftIcon from '@mui/icons-material/RotateLeft';
  import { useState, useEffect } from "react";
  import { getFavorites } from "../../services/FavoritesService.jsx";
  
  export const FavCards = () => {
    const [favoriteCards, setFavoriteCards] = useState([]);
  
    useEffect(() => {
      getFavorites().then((favoritesArray) => {
        setFavoriteCards(favoritesArray);
      });
    }, []);
  
    return favoriteCards.map((favObj) => (
      <Card
        key={favObj.id}
        sx={{
          maxWidth: 400,
          flexGrow:'1',
          flexShrink: '0',
          flexBasis: '20%',
        }}
      >
        <CardMedia
          sx={{ height: 150 }}
          image={favObj.post.imgUrl}
          title={favObj.post.droneName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {favObj.post.droneName}
          </Typography>
          <Typography variant="body1">
            {favObj.user.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {favObj.post.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Remove from Favorites</Button>
        </CardActions>
      </Card>
    ));
  };