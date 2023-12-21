import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="Signup" to={ROUTES.SIGNUP} />
      <NavItem label="Login" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
