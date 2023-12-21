import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpokeIcon from "@mui/icons-material/Spoke";
import { Box, Typography } from "@mui/material";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";

const Footer = () => {
  const [value, setValue] = useState("recents");
  const navigate = useNavigate();
  const { user } = useUser();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        backgroundColor: "#a41313",
      }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          bottom: 0,
        }}
      >
        {user && (
          <BottomNavigation
            showLabels
            sx={{ width: "100%", backgroundColor: "#f9c1e3" }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Liked Scripts"
              value="Liked Scripts"
              icon={<FavoriteIcon />}
              onClick={() => navigate(ROUTES.FAVORITES)}
            />

            <BottomNavigationAction
              label="My Scripts"
              value="my scripts"
              icon={<FolderIcon />}
              onClick={() => navigate(ROUTES.MY_SCRIPTS)}
            />
          </BottomNavigation>
        )}
      </Box>{" "}
      <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
              >
        <p>&copy; Itay Reizel- HackerU - raizelms@gmail.com </p>
      </Typography>
    </Box>
  );
};

export default Footer;
