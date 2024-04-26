import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.5)' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        centered
      >
        <LinkTab label="All Posts" href="/all_posts" />
        <LinkTab label="My Favorites" href="/favorites" />
        <LinkTab label="New Post" href="/new_post" />
      </Tabs>
    </Box>
  );
}