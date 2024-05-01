import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from "@mui/material"
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/AllPostsService.jsx";
import { addToFavorites } from "../../services/FavoritesService.jsx";

export const AllCards = () => {
  const [allCards, setAllCards] = useState([]);
  const [favoritedPosts, setFavoritedPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllCards(postsArray);
    });
  }, []);

  const handleFavoriteButtonClick = async (postId) => {
    const userId = localStorage.getItem('propwish_user')

    await addToFavorites(userId, postId)
    setFavoritedPosts([...favoritedPosts, postId])
};

  return allCards.map((postObj) => (
    <Card
      sx={{
        maxWidth: 400,
        flexGrow: "1",
        flexShrink: "0",
        flexBasis: "20%",
      }}
      key={postObj.id}
    >
      <CardMedia
        sx={{ height: 150 }}
        image={postObj.imgUrl}
        title={postObj.aircraftName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postObj.aircraftName}
        </Typography>
        <Typography variant="body1">{postObj.userId}</Typography>
        <Typography variant="body2" color="text.secondary">
          {postObj.description}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip label="Prop Size" color="primary" />
          <Chip label="Battery Size" color="secondary" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => handleFavoriteButtonClick(postObj.id)}>
          Add to Favorites
        </Button>
      </CardActions>
    </Card>
  ));
};

