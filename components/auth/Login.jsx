import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../services/UserService.jsx";

export const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const username = window.prompt("Please enter your username");

    if (username) {
      getUserByUsername(username).then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "propwish_user",
            JSON.stringify({
              id: user.id,
              userName: user.userName,
            })
          );
          navigate("/all_posts");
        } else {
          window.alert("Invalid login");
        }
      });
    } else {
      window.alert("Username cannot be empty");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('src/assets/images/pexels-drone-in-field.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gap={75}
        my={25}
      >
        <Typography variant="h1" fontFamily="Permanent Marker" color="white">
          Prop Wish
        </Typography>
        <Button
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={handleLogin}
          color="info"
          sx={{ minWidth: "150px" }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
