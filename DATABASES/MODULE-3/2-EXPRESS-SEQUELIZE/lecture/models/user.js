const { DataTypes } = require("sequelize");

function defineUser(sequelize) {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
}

module.exports = {
  defineUser,
};
