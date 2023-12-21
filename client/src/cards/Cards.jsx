import { Grid } from "@mui/material";
import React from "react";
import Card from "./card/Card";

const Cards = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards
        .filter((card) => card.user_id)
        .map((card) => (
          <Grid item xs={12} key={card._id}>
            <Card card={card} onDelete={onDelete} onLike={onLike} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Cards;
