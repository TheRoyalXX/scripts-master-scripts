import {
  Button,
  CardActions,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUser } from "../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import useCards from "../hooks/useCards";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import ShareToSocialMedia from "../../components/ShareToSocialMedia";
import { styled } from "@mui/material/styles";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "sticky",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export const CardAction = ({ cardUserId, cardId, onDelete, cardLikes }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { handleGetCards, handleLikeCard } = useCards();
  const { user } = useUser();
  const [isLike, setLike] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDelete = () => {
    handleDialog();
    onDelete(cardId);
  };

  const handleLike = async () => {
    await handleLikeCard(cardId);
    setLike((prev) => !prev);
  };
  return (
    <>
      <CardActions sx={{ mt: 8 }}>
        <Button
          size="small"
          onClick={() => navigate(`${ROUTES.SCRIPT_PAGE}/${cardId}`)}
        >
          View Full Source
        </Button>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon
            sx={{
              color: isLike ? "red" : "",
            }}
          />
        </IconButton>

        {user && (user.isAdmin || user._id === cardUserId) && (
          <IconButton
            aria-label="delete project"
            onClick={() => handleDialog("open")}
          >
            <DeleteIcon />
          </IconButton>
        )}
        {user && user._id === cardUserId && (
          <IconButton
            aria-label="edit project"
            onClick={() => navigate(`${ROUTES.EDIT_SCRIPT}/${cardId}`)}
          >
            <EditIcon />
          </IconButton>
        )}

        {/* /* share */}
        <StyledSpeedDial
          sx={{ position: "sticky" }}
          ariaLabel="SpeedDial playground example"
          icon={<ShareIcon />}
        >
          <SpeedDialAction
            icon={
              <ShareToSocialMedia
                url={`http://localhost:3000${ROUTES.SCRIPT_PAGE}/${cardId}`}
              />
            }
          />
        </StyledSpeedDial>

        {/* ########################### */}
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDelete}
      />
    </>
  );
};
