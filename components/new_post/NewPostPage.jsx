import { CreatePost } from "../create_post/CreatePost.jsx";
import { MyPosts } from "../my_posts/MyPosts.jsx";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/AllPostsService.jsx";
import { getPropSizeOptions } from "../../services/AllPostsService.jsx";
import { getBatterySizeOptions } from "../../services/AllPostsService.jsx";
import { deletePost } from "../../services/AllPostsService.jsx";

export const NewPostPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [posts, propSizeOptions, batterySizeOptions] = await Promise.all([
          getAllPosts(),
          getPropSizeOptions(),
          getBatterySizeOptions(),
        ]);

        const postsWithSizeOptions = posts.map((post) => {
          const propSizeOption = propSizeOptions.find(
            (option) => option.id === post.propSizeOptionsId
          );
          const batterySizeOption = batterySizeOptions.find(
            (option) => option.id === post.batterySizeOptionsId
          );

          return {
            ...post,
            propSizeOption: propSizeOption?.size || "",
            batterySizeOption: batterySizeOption?.size || "",
          };
        });

        setAllPosts(postsWithSizeOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Trigger state change and re-render when new post is added to all posts
  const addedNewPost = (newPost) => {
    setAllPosts([...allPosts, newPost]);
  };

  const handleEdit = (post) => {
    setEditPost(post);
    console.log(post);
  };

  const handleClearEdit = () => {
    setEditPost(null);
  };

  const handleDelete = (post) => {
    deletePost(post);
    console.log(post);
  };

  return (
    <Box display="flex" my={30}>
      {editPost ? (
        <CreatePost
          addNewPost={addedNewPost}
          initialPost={editPost}
          handleClearEdit={handleClearEdit}
        />
      ) : (
        <>
          <CreatePost addedNewPost={addedNewPost} />
          <MyPosts
            allPosts={allPosts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
    </Box>
  );
};
