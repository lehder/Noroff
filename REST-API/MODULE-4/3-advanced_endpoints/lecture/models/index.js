const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  database: "cddb",
  username: "root",
  password: "root",
  dialect: "mysql",
});

const Album = sequelize.define("album", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ alter: true });

module.exports = { sequelize, Album };
