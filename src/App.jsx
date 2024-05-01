import { Box, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet} from "react-router-dom"
import { NavBar } from '../components/nav/NavBar.jsx'
import { Login } from '../components/auth/Login.jsx'
import { Authorized } from "/views/Authorized.jsx"
import { ApplicationViews } from '../components/views/ApplicationViews.jsx'

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
          <Route path='/login' element={<Login />}/>

          <Route path='*' element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }/>
        </Routes>
      </Box>
    </Container>
  );
};
