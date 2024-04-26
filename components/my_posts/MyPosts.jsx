import { getMyPosts } from "../../services/MyPostsService.jsx";
import { MyCards } from "./MyCards.jsx";
import { Box, Typography } from "@mui/material"
import { Card, CardActions, CardContent, CardMedia, Button, } from "@mui/material"

export const MyPosts = () => {
  return (
    <Box
      height={700}
      width={1000}
      my={4}
      display="flex"
      flexWrap='wrap'
      flexDirection='row'
      justifyContent='space-around'
      gap={5}
      p={2}
      sx={{ 
        border: "2px solid #2979ff", 
        borderRadius: '5px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }}
    >
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
      <MyCards />
    </Box>
  );
};

