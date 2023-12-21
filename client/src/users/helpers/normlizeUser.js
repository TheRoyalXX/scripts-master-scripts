const normlizeUser = (user) => ({
  name: {
    firstName: user.firstName,
    lastName: user.lastName,
  },

  phone: user.phone,
  email: user.email,
  password: user.password,
  imageUrl:
    user.imageUrl ||
    "https://cdn.pixabay.com/photo/2018/07/22/10/24/trans-sexuality-3554250_640.jpg",
});
export default normlizeUser;
