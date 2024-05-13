import { useState } from "react";
import { Box } from "@mui/material";
import { FavCards } from "./FavCards.jsx";

export const MyFavorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const handleFavoritesUpdate = (updatedFavoriteCards) => {
    setFavoriteCards(updatedFavoriteCards);
  };

  return (
    <Box
      height={1000}
      width={2000}
      my={12}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      alignContent="flex-start"
      gap={5}
      p={2}
      sx={{
        border: "2px solid #FAFAFA",
        borderRadius: "5px",
        boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.5)',
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <FavCards favoriteCards={favoriteCards} handleFavoritesUpdate={handleFavoritesUpdate} />
    </Box>
  );
};