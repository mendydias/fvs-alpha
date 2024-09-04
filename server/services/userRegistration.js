const db = require("../config/database");

function registerUser(user) {
  return db.saveUser(user);
}

module.exports = {
  registerUser,
};
