import { CreatePost } from "../create_post/CreatePost.jsx";
import { MyPosts } from "../my_posts/MyPosts.jsx";
import { Box } from "@mui/material";

export const NewPostPage = () => {
  return (
    <Box display='flex'>
      <CreatePost />
      <MyPosts />
    </Box>
  );
};