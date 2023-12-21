import React, { useEffect } from "react";
import { Card, CardMedia, Container, Typography } from "@mui/material";
import Cards from "../cards/Cards";
import cards from "../cards/cardsInitialData";
import useCards from "../cards/hooks/useCards";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { useUser } from "../users/providers/UserProvider";
import ScriptsPage from "./ScriptsPage";

const HomePage = () => {
  const { isLoading, handleGetCards, handleDeleteCard, value } = useCards();
  const { error, cards, filteredCards } = value;
  const { user } = useUser();
  const onDeletCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <>
      <Container>
        {" "}
        <Card>
          <div style={{ position: "relative" }}>
            <CardMedia
              style={{ height: "300px", fill: "ActiveBorder" , boxShadow: "black 20px 20px 5px" }}
              component="img"
              image={
                "https://as2.ftcdn.net/v2/jpg/05/12/09/75/1000_F_512097593_fLvAQrpcigP1ozHjsV7aAauxVUYvG4vZ.jpg"
              }
              title="home page image"
              alt="Phome page image"
            />
            <div
              style={{
                position: "absolute",
                color: "black",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {" "}
              <span style={{ fontFamily: "caveat", fontSize: 35, color: "white", textShadow: "black 5px 5px 5px"}}>
              IM JUST TESTING THIS TITLTE{" "}<br></br>
              </span>{" "}
              <span style={{ fontFamily: "caveat", fontSize: 30, color: "white", textShadow: "black 5px 5px 5px"}}>
                THIS BANNER IS PURE HTML / CSS using react{" "}<br></br>
              </span>{" "}
              <span style={{ fontFamily: "caveat", fontSize: 25, color: "white", textShadow: "black 5px 5px 5px"}}>
                WELCOME TO MY SHITTY WEBSITE{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </Card>
        <Typography sx={{ backgroundColor: "yellowgreen", mt: 3 }}>
          <span style={{ fontFamily: "fantasy", fontSize: 20 }}>
            {user
              ? "Go to MY SCRIPTS to create your own script"
              : "Login to create your own script"}
          </span>
        </Typography>
        {isLoading && <Spinner />}
        {error && <Error errorMessage={error} />}
        {cards && !cards.length && (
          <p> there is no cards in the database . Please login or add one</p>
        )}
        {cards && filteredCards && !!cards.length && (
          // <Cards onDelete={onDeletCard} cards={filteredCards} />
          <ScriptsPage />
        )}
      </Container>
    </>
  );
};

export default HomePage;
