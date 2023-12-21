import { useCallback, useEffect, useMemo, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../service/cardApiService";
import normlizeScriptCard from "../helpers/normlizeScriptCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import { useUser } from "../../users/providers/UserProvider";

const useCards = () => {
  const { user } = useUser();
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [isLike, setLike] = useState(null);
  const [filteredCards, setFilter] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useAxios();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) ||
            String(card.title).includes(query) ||
            String(card.language).includes(query) ||
            String(card.difficulty).includes(query) ||
            String(card.user_id.email).includes(query) ||
            String(card.user_id.name.firtName).includes(query) ||
            String(card.user_id.name.lastName).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = await cards.filter(
        (card) => !!card.likes.find((_id) => _id === user._id)
      );

      requestStatus(false, null, favCards, null);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const normlizedCard = normlizeScriptCard(cardFromClient);
      const card = await createCard(normlizedCard);
      requestStatus(false, null, null, card);
      navigate(ROUTES.MY_SCRIPTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      navigate(ROUTES.MY_SCRIPTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await deleteCard(cardId);
      requestStatus(false, null, null, card);
    } catch (error) {}
    requestStatus(false, error, null);
  };

  const handleLikeCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await changeLikeStatus(cardId);
      setLike((prev) => !prev);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filteredCards };
  }, [isLoading, cards, card, error, filteredCards]);

  return {
    setLoading,
    setFilter,
    isLike,
    value,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleGetFavCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
