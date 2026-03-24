const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
});

const Album = sequelize.define("album", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
console.log("undefined", process.env.NODE_ENV);

if (process.env.NODE_ENV !== "test") {
  sequelize.sync({ alter: true });
}

module.exports = { sequelize, Album };
