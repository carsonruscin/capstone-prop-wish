import { MyCards } from "./MyCards.jsx";
import { Box } from "@mui/material";

export const MyPosts = ({ allPosts, handleEdit, handleDelete }) => {

  return (
    <Box
      height={700}
      width={1000}
      my={4}
      mx={4}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      gap={5}
      p={2}
      sx={{
        border: "2px solid #FAFAFA",
        borderRadius: "5px",
        boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.5)",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <MyCards
        allPosts={allPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Box>
  );
};
