import { Box, Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";

import Spinner from "../components/Spinner";
import Error from "../components/Error";
import useCards from "../cards/hooks/useCards";

const ScriptsPage = () => {
  const { value, handleGetCards, handleDeleteCard, setFilter } = useCards();
  const { isLoading, error, cards, filteredCards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  const handleChooseCategory = (category) => {
    const result = cards.filter((card) => card.difficulty === category);
    setFilter(result);
  };

  return (
    <>
      {" "}
      <Typography variant="h2" color="initial" fontSize="40px">
        Select Code Difficulty:
      </Typography>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 55,
            },
          }}
        >
          <Card onClick={() => handleGetCards()}>
            {" "}
            <Typography sx={{ fontSize: 25, mt: 1 }} color="text.secondary">
              ALL
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("easy")}>
            {" "}
            <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.secondary">
              Easy
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("medium")}>
            {" "}
            <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.secondary">
              Medium
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("hard")}>
            {" "}
            <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.secondary">
              Hard
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("expert")}>
            {" "}
            <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.secondary">
              Expert
            </Typography>
          </Card>
          <Card onClick={() => handleChooseCategory("insane")}>
            {" "}
            <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.secondary">
            Insane
            </Typography>
          </Card>
        </Box>

        {isLoading && <Spinner />}
        {error && <Error errorMessage={error} />}
        {cards && !cards.length && (
          <p> there are no cards in the database that match the request</p>
        )}
        {!isLoading && cards && filteredCards && !!cards.length && (
          <Cards onDelete={onDeleteCard} cards={filteredCards} />
        )}
      </Container>
    </>
  );
};

export default ScriptsPage;
