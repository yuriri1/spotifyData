const userAccountCreation = (user) => {
  return user.creationTime;
};

const userName = (user) => {
  return user.displayName;
};

const userPhoto = (user) => {
  return user.imageUrl;
};

module.exports = {
  userAccountCreation,
  userName,
  userPhoto,
};
