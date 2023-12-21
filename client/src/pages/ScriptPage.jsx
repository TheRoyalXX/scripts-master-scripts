import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BasicTabs from "../components/BasicTabs";
import useCards from "../cards/hooks/useCards";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import ShareToSocialMedia from "../components/ShareToSocialMedia";
import { capitalizeFirst } from "../cards/helpers/capitalizeFirst";

const url = window.location.href;

const ScriptPage = () => {
  const id = useParams();
  const cardId = id.cardId;
  const { handleGetCard, value } = useCards();
  const { card, isLoading, error } = value;
  useEffect(() => {
    handleGetCard(cardId);
  }, []);

  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {card && !card && (
        <p> there are no cards in the database that match the request</p>
      )}
      {card && (
        <Box>
          {" "}
          <Typography variant="h2">{capitalizeFirst(card.title)}</Typography>
          <Typography variant="h6"> {card.developer}</Typography>
          <Typography sx={{ color: "GrayText" }} variant="h6">
            {card.category} | {card.difficulty}
          </Typography>{" "}
          <Typography mt={1}>
            {" "}
            <ShareToSocialMedia url={url} />
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar src={card.user_id.imageUrl} alt="profile image" />
            <Typography>{card.user_id.email}</Typography>
          </Stack>
          <Container>
            <BasicTabs
              category={card.category}
              difficulty={card.difficulty}
              code={card.code}
            />
          </Container>
        </Box>
      )}
    </Container>
  );
};

export default ScriptPage;
