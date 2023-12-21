const normlizeScriptCard = (card) => {
  return {
    title: card.title,
    category: card.category,
    difficulty: card.difficulty,
    language: card.language,
    code: card.code,
    developer: card.developer,
    fullScriptLink: card.fullScriptLink,
  };
};

export default normlizeScriptCard;
