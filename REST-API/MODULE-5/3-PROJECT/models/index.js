const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "Odisea220977",
    database: "steam_db",
    dialect: "mysql",
});

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    hashedPassword: {
            type: DataTypes.STRING,
             allowNull: false,
      },
    salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user"),
        allowNull: false,
        
      }
});

sequelize.sync({ force: true });
module.exports = { sequelize, User };