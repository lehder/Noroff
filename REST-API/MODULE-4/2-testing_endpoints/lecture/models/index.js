const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "Odisea220977",
    dialect: "mysql",
    database: "library",

});

const Book = sequelize.define("book", {
    title: DataTypes.STRING,

})

sequelize.sync({ alter: true });

module.exports = { sequelize, Book };

