import { Box, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet} from "react-router-dom"
import { NewPostPage } from '../components/new_post/NewPostPage.jsx'
import { AllPosts } from '../components/all_posts/AllPosts.jsx'
import { NavBar } from '../components/nav/NavBar.jsx'
import { MyFavorites } from '../components/favorites/MyFavorites.jsx'

export const App = () => {
  return (
    <Container maxWidth="xlg" sx={{bgcolor: '#FAFAFA'}}>
      <NavBar />
      <Box
        sx={{ bgcolor: "#FAFAFA", height: "100vh", boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.5)' }}
        display="flex"
        flexDirection='row'
        justifyContent="space-around"
        alignItems='center'
      >
        <Routes>
          <Route path="/">
            <Route index element={<Outlet />} />
            <Route path="all_posts" element={<AllPosts />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="new_post" element={<NewPostPage />} />
          </Route>
        </Routes>
      </Box>
    </Container>
  );
};
