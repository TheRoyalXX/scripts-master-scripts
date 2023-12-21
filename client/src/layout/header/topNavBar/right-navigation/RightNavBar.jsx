import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useUser } from "../../../../users/providers/UserProvider";
import SearchBar from "../../../../components/SearchBar";

import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const RightNavBar = () => {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      {user && user.isAdmin && (
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          {user && <NavItem label="manage users" to={ROUTES.MANAGE_USERS} />}
        </Typography>
      )}
      <SearchBar />
      <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Box>
        {!user && <NotLogged />}
        {user && <Logged />}
      </Box>
    </>
  );
};

export default RightNavBar;
