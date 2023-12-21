const normlizeUser = (rawUser) => {
  const name = { ...rawUser.name };
  const image = {
    ...rawUser.image,
    url: rawUser.imageUrl,
  };

  const user = {
    ...rawUser,
    name,
    image,
  };
  return user;
};

module.exports = normlizeUser;
