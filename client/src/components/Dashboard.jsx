import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar } from "@mui/material";
import { removeToken } from "../users/services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useUser } from "../users/providers/UserProvider";
import useUsers from "../users/hooks/useUsers";

const Dashboard = ({ src }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleGetUser } = useUsers();

  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = useUser();
  const userId = user._id;

  const handelGetMyProfile = () => {
    setAnchorEl(null);
    navigate(`${ROUTES.PROFILE}/${userId}`);
  };

  const handleLogOut = async () => {
    try {
      setAnchorEl(null);
      removeToken();
      handleGetUser();
      navigate(ROUTES.ROOT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: 10 }}
      >
        <Avatar src={src} alt="user_image" />
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handelGetMyProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Dashboard;
