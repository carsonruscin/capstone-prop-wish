import { Box, Container } from '@mui/material'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet} from "react-router-dom"
import { NewPostPage } from '../components/new_post/NewPostPage.jsx'
import { NavBar } from '../components/nav/NavBar.jsx'

export const App = () => {
  return (
    <Container maxWidth="xlg">
      <NavBar />
      <Box
        sx={{ bgcolor: "#CFD8DC", height: "100vh" }}
        display="flex"
        justifyContent="space-around"
        alignItems='center'
      >
        <Routes>
          <Route path="/">
            <Route index element={<Outlet />} />
              <Route path="new_post" element={<NewPostPage />} />
          </Route>
        </Routes>
      </Box>
    </Container>
  );
};
