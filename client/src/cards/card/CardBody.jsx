import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardBody = ({ card }) => {
  return (
    <>
      <CardContent>
        {" "}
        <Typography
          variant="span"
          sx={{ mb: 1.5, display: "flex", justifyContent: "left" }}
          color="text.secondary"
        >
          <CardMedia
            sx={{ mr: 2, mb: 0.5, height: 35, width: 35, borderRadius: 4 }}
            image={card.user_id.imageUrl}
          >
            {" "}
          </CardMedia>
          {card.user_id.name.firstName + " " + card.user_id.name.lastName}{" "}
        </Typography>{" "}
        <Typography
          variant="h4"
          sx={{ mt: -2, fontSize: 28 }}
          color="text.secondary"
          gutterBottom
        >
          <span
            style={{
              textDecorationLine: "underline",
            }}
          >
            Script Title:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.title}
          </span>{" "}
        </Typography>
        <Typography variant="h5" component="div">
          <span
            style={{
              textDecorationLine: "underline",
            }}
          >
            Code Category:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.category}
          </span>{" "}
        </Typography>
        <Typography>
          <span
            style={{
              textDecorationLine: "underline",
            }}
          >
            Difficulty:
          </span>{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
          >
            {card.difficulty}
          </span>{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{ wordWrap: "break-word", maxHeight: "30px" }}
        >
          <Typography variant="span" sx={{ fontSize: 15, fontWeight: "bold" }}>
            {" "}
            <span
              style={{
                textDecorationLine: "underline",
              }}
            >
              Code Publisher:
            </span>{" "}
            <Typography
              sx={{
                maxHeight: "15vh",
                overflow: "hidden",
              }}
            >
              {" "}
              {card.developer}
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
    </>
  );
};

export default CardBody;
