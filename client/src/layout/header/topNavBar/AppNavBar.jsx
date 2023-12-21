import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ROUTES from "../../../routes/routesModel";
import NavItem from "../../../routes/components/NavItem";
import NavBarLink from "../../../routes/components/NavBarLink";
import RightNavBar from "./right-navigation/RightNavBar";
import { useUser } from "../../../users/providers/UserProvider";

const AppNavBar = () => {
  const { user } = useUser();
  return (
    <Box sx={{ flexGrow: 1, height: "65px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#a41313" }}>
        <Toolbar>
          <NavBarLink to={ROUTES.ROOT}>
            {" "}
            <Box
              component="img"
              sx={{ height: 54, mr: 2 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
          </NavBarLink>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            <NavItem label="about" to={ROUTES.ABOUT} />
          </Typography>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            {user && <NavItem label="my scripts" to={ROUTES.MY_SCRIPTS} />}
          </Typography>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            {user && <NavItem label="all scripts" to={ROUTES.SCRIPTS} />}
          </Typography>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            {user && <NavItem label="my favorites" to={ROUTES.FAVORITES} />}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <RightNavBar />{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
