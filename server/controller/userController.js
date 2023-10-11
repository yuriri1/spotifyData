const userData = require("../database/MyData/Userdata.json");
const userIdentity = require("../database/MyData/Identity.json");

const {
  userAccountCreation,
  userName,
  userPhoto,
} = require("../services/user");

class UserController {
  static async getAccountCreation(req, res) {
    const accountCreation = userAccountCreation(userData);
    res.status(200).json(accountCreation);
  }

  static async getUserName(req, res) {
    const name = userName(userIdentity);
    res.status(200).json(name);
  }

  static async getUserPhoto(req, res) {
    const photo = userPhoto(userIdentity);
    res.status(200).json(photo);
  }
}

module.exports = UserController;
