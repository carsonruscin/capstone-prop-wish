import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { getFavorites } from "../../services/FavoritesService.jsx";
import { getPostById } from "../../services/FavoritesService.jsx";
import { getUserById } from "../../services/UserService.jsx";
import { removeFromFavorites } from "../../services/FavoritesService.jsx";

export const FavCards = ({ favoriteCards, handleFavoritesUpdate }) => {
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

      handleFavoritesUpdate(favoritesWithUserData);
    });
  }, [loggedInUserId, handleFavoritesUpdate]);

  const handleRemoveFromFavorites = async (favObj) => {
    const removedFavId = await removeFromFavorites(favObj.id);
    if (removedFavId) {
      const updatedFavoriteCards = favoriteCards.filter(
        (card) => card.id !== removedFavId
      );
      onFavoritesUpdate(updatedFavoriteCards);
    }
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
        <Button size="medium" onClick={() => handleRemoveFromFavorites(favObj)}>Remove from Favorites</Button>
      </CardActions>
    </Card>
  ));
};
