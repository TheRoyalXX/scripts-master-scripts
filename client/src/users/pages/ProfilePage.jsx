import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import EditIcon from "@mui/icons-material/Edit";
import useUsers from "../hooks/useUsers";
import Spinner from "../../components/Spinner";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import EditProfile from "../components/EditProfile";

const ProfilePage = () => {
  const { handleGetUser, isLoading, error } = useUsers();
  const navigate = useNavigate();
  const { user } = useUser();
  const { userId } = useParams();
  const [isShown, setIsShown] = useState(false);

  const handleClickOnEdit = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  useEffect(() => {
    handleGetUser(userId);
  }, []);

  if (!isLoading && !user) return <Navigate replace to={ROUTES.SCRIPTS} />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignItems: "center",
      }}
    >
      {isLoading && <Spinner />}
      {error && console.log(error)}
      {!isLoading && user && (
        <Card sx={{ minWidth: 345, minHeight: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={user.imageUrl}
          />
          <CardContent>
            {!isShown && (
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name.firstName + " " + user.name.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.phone}
                </Typography>
              </Box>
            )}

            {isShown && <EditProfile />}
          </CardContent>
          <CardActions>
            {user && (
              <IconButton
                aria-label="edit user"
                // onClick={() => navigate(`${ROUTES.EDIT_SCRIPT}/${userId}`)}
                onClick={handleClickOnEdit}
              >
                <EditIcon />
              </IconButton>
            )}
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default ProfilePage;
