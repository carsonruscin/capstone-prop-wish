import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { Login } from "../components/auth/Login.jsx";
import { Authorized } from "/views/Authorized.jsx";
import { ApplicationViews } from "../views/ApplicationViews.jsx";

export const App = () => {
  return (
    <Container maxWidth="xlg" sx={{ bgcolor: "#FAFAFA" }}>
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          height: "100vh",
          boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.5)",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <Authorized>
                <NavBar />
                <ApplicationViews />
              </Authorized>
            }
          />
        </Routes>
      </Box>
    </Container>
  );
};
