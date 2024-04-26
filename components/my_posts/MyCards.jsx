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
import { getAllPosts } from "../../services/AllPostsService.jsx";

export const MyCards = () => {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllCards(postsArray);
    });
  }, []);

  return allCards.map((postObj) => (
    <Card
      sx={{
        maxWidth: 300,
        flexGrow:'1',
        flexShrink: '0',
        flexBasis: '30%',
        flexWrap: 'wrap',
      }}
      key={postObj.id}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={postObj.img}
        title={postObj.aircraftName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postObj.aircraftName}
        </Typography>
        <Typography variant="body1">
            @Username
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postObj.description}
        </Typography>
        <Stack direction="row" spacing={2}>
            <Chip label='Prop Size' color="primary" />
            <Chip label='Battery Size' color="secondary" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium">Edit</Button>
        <Button size="medium">Delete</Button>
      </CardActions>
    </Card>
  ));
};