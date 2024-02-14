const mongodb = require("mongodb");
const userModel = require("../models/userModel");

const findUserByUsername = async (username) => {
  const user = await userModel.findOne({ username });
  if (!user) {
    return;
  }
  return user;
};
function generateRandomPassword() {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

const PayAmount = (amount, balance) => {
  if (amount > balance) {
    return "Insuficient balance please first add money to your account";
  }
};

module.exports = { findUserByUsername, generateRandomPassword, PayAmount };
