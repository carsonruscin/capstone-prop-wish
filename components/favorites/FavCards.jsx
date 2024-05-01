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
          title={favObj.post.aircraftName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {favObj.post.aircraftName}
          </Typography>
          <Typography variant="body1">
            {favObj.user.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {favObj.post.description}
          </Typography>
          <Stack direction="row" spacing={2}>
              <Chip label={favObj.post.propSizeOptionId} color="primary" />
              <Chip label={favObj.post.batterySizeOptionId} color="secondary" />
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="medium">Remove from Favorites</Button>
        </CardActions>
      </Card>
    ));
  };