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
import { getAllUsers } from "../../services/UserService.jsx";
import { getPropSizeOptions } from "../../services/AllPostsService.jsx";
import { getBatterySizeOptions } from "../../services/AllPostsService.jsx";
import { addToFavorites } from "../../services/FavoritesService.jsx";

export const AllCards = ({ allPosts }) => {
  const [favoritedPosts, setFavoritedPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [propSizeOptions, setPropSizeOptions] = useState([]);
  const [batterySizeOptions, setBatterySizeOptions] = useState([]);

  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
    });

    getPropSizeOptions().then((options) => {
      setPropSizeOptions(options);
    });

    getBatterySizeOptions().then((options) => {
      setBatterySizeOptions(options);
    });
  }, []);

  const handleFavoriteButtonClick = async (postId) => {
    const userId = localStorage.getItem("propwish_user");

    await addToFavorites(userId, postId);
    setFavoritedPosts([...favoritedPosts, postId]);
  };

  const getUserIdToUsernameMap = (users) => {
    return users.reduce((map, user) => {
      map[user.id] = user.userName;
      return map;
    }, {});
  };

  const userIdToUsernameMatch = getUserIdToUsernameMap(allUsers);

  const getPropSizeOptionLabel = (propSizeOptionsId) => {
    const option = propSizeOptions.find(
      (option) => option.id === propSizeOptionsId
    );
    return option ? option.size : "";
  };

  const getBatterySizeOptionLabel = (batterySizeOptionsId) => {
    const option = batterySizeOptions.find(
      (option) => option.id === batterySizeOptionsId
    );
    return option ? option.size : "";
  };

  return allPosts.map((postObj) => {
    // console.log(postObj)

    return (
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
          component="img"
          src={postObj.imgUrl}
          title={postObj.droneName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postObj.droneName}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {userIdToUsernameMatch[postObj.userId] || "@Unknown User"}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {postObj.description}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Chip
              icon={<BatteryChargingFullIcon />}
              color="success"
              label={`Battery: ${batterySizeOptions.find((option) => option.id === postObj.batterySizeOptionsId)?.size || ""}`}
            />

            <Chip
              icon={<RotateLeftIcon />}
              color="info"
              label={`Prop: ${propSizeOptions.find((option) => option.id === postObj.propSizeOptionsId)?.size || ""}`}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            onClick={() => handleFavoriteButtonClick(postObj.id)}
          >
            Add to Favorites
          </Button>
        </CardActions>
      </Card>
    );
  });
};
