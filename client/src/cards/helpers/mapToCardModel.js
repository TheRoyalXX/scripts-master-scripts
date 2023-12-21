const mapToCardModel = (card) => {
  return {
    title: card.title,
    category: card.category,
    difficulty: card.difficulty,
    language: card.language,
    code: card.code,
    developer: card.developer,
    fullScriptLink: card.fullScriptLink,
    user_id: card.user_id._id,
    userFirstName: card.user_id.name.firstName,
    userLastName: card.user_id.name.lastName,
    userImage: card.user_id.imageUrl,
    userEmail: card.user_id.email,
  };
};

export default mapToCardModel;
