const mapToUserModel = (user) => {
  return {
    firstName: user.name.firstName,
    lastName: user.name.lastName,
    phone: user.phone,
    imageUrl: user.imageUrl,
  };
};

export default mapToUserModel;
