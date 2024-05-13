import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getFavorites } from "../../services/FavoritesService.jsx";
import { getPostById } from "../../services/FavoritesService.jsx";
import { getUserById } from "../../services/UserService.jsx";
import { removeFromFavorites } from "../../services/FavoritesService.jsx";

export const FavCards = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const userId = localStorage.getItem("propwish_user");
  const parsedUser = JSON.parse(userId);
  const loggedInUserId = parsedUser.id;

  useEffect(() => {
    getFavorites(loggedInUserId).then(async (favoritesArray) => {
      const favoritesWithUserData = await Promise.all(
        favoritesArray.map(async (favObj) => {
          const postData = await getPostById(favObj.postId);
          const userData = await getUserById(postData.userId);
          return { ...favObj, postData, userData };
        })
      );

      setFavoriteCards(favoritesWithUserData);
    });
  }, [loggedInUserId]);

  const handleRemoveFromFavorites = (post) => {
    removeFromFavorites(post);
    console.log(post);
  };

  return favoriteCards.map((favObj) => (
    <Card
      key={favObj.id}
      sx={{
        maxWidth: 400,
        flexGrow: "1",
        flexShrink: "0",
        flexBasis: "20%",
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
        <Typography variant="body1">{favObj.userData.userName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {favObj.post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => handleRemoveFromFavorites(favObj.id)}>Remove from Favorites</Button>
      </CardActions>
    </Card>
  ));
};
