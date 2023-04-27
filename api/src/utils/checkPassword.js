const { AdminMethods } = require("../models/admin.model.js");
const bcrypt = require("bcrypt");
require("dotenv").config();

async function checkPassword(username, password) {
  const store = new AdminMethods();

  console.log(isPasswordValid);
  return isPasswordValid;
}

module.exports = { checkPassword };
