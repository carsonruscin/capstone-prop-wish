import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const MyCards = ({ allPosts, handleEdit, handleDelete }) => {
  const [filteredCards, setFilteredCards] = useState([]);

  const userId = localStorage.getItem("propwish_user");
  const parsedUser = JSON.parse(userId);
  const loggedInUserId = parsedUser.id;
  const loggedInUsername = parsedUser.userName;

  // useEffect for filtering posts by userId to display only logged in users posts
  useEffect(() => {
    const filtered = allPosts.filter((card) => card.userId === loggedInUserId);
    setFilteredCards(filtered);
  }, [allPosts, loggedInUserId]);

  return filteredCards.map((postObj) => (
    <Card
      key={postObj.id}
      sx={{
        maxHeight: 375,
        maxWidth: 300,
        flexGrow: "0",
        flexShrink: "0",
        flexBasis: "33%",
        flexWrap: "wrap",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={postObj.imgUrl}
        title={postObj.droneName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postObj.droneName}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {loggedInUsername}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postObj.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            icon={<BatteryChargingFullIcon />}
            color="success"
            label={`Battery: ${postObj.batterySizeOption}`}
          />

          <Chip
            icon={<RotateLeftIcon />}
            color="info"
            label={`Prop: ${postObj.propSizeOption}`}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => handleEdit(postObj)}>
          Edit
        </Button>
        <Button size="medium" onClick={() => handleDelete(postObj.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  ));
};
