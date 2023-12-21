const normlizeUserFromGoogle = (user) => ({
  name: {
    firstName: user.given_name,
    lastName: user.family_name,
  },

  phone: user.phone || "0500000000",
  email: user.email,
  password: user.password || "google password",
  imageUrl:
    user.picture ||
    "https://cdn.pixabay.com/photo/2018/07/22/10/24/trans-sexuality-3554250_640.jpg",
  isAdmin: false,
  isBusiness: true,
});
export default normlizeUserFromGoogle;
