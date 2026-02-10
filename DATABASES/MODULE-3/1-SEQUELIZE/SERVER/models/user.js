import { DataTypes } from "sequelize";

export function defineUser(sequelize) {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  return User;
}