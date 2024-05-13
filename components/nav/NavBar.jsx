import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const samePageLinkNavigation = (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
};

const LinkTab = (props) => {
  return (
    <Tab
      component={Link}
      to={props.href}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
};

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export const NavBar = () => {
  const [value, setValue] = useState(0);

  const location = useLocation()

  useEffect(() => {
    const path = location.pathname;
    if (path === '/all_posts') {
      setValue(0);
    } else if (path === '/favorites') {
      setValue(1);
    } else if (path === '/new_post') {
      setValue(2);
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      sx={{
        width: "100%",
        boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.5)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        centered
      >
        <LinkTab label="All Posts" to="/all_posts" />
        <LinkTab label="My Favorites" to="/favorites" />
        <LinkTab label="New Post" to="/new_post" />
      </Tabs>
      <Box display="flex" alignItems="center" mx={3}>
        {localStorage.getItem("propwish_user") ? (
          <Button
            href="#"
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={() => {
              localStorage.removeItem("propwish_user");
              window.location.href = "/login"
            }}
          >
            Logout
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
