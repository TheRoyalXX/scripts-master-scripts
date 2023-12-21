import React from "react";
import MuiCard from "@mui/material/Card";
import { Box } from "@mui/material";
import { func } from "prop-types";
import { CardAction } from "./CardAction";
import CardBody from "./CardBody";

const Card = ({ card, onDelete, onLike }) => {
  return (
    <Box sx={{ mt: 8 }}>
      <MuiCard sx={{ minWidth: 275, minHeight: "20vh" }}>
        <CardBody card={card} />

        <CardAction
          onDelete={onDelete}
          cardId={card._id}
          cardUserId={card.user_id?._id}
          onLike={onLike}
          cardLikes={card.likes}
        />
      </MuiCard>
    </Box>
  );
};

Card.propTypes = {
  onDelete: func.isRequired,
};

export default Card;
