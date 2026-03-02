const { Sequelize, DataTypes } = require("sequelize");
const { definePost } = require("./post.js");
const { defineUser } = require("./user.js");
const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "Odisea220977",
  database: "blog_db",
  dialect: "mysql",
});

const Post = definePost(sequelize);
const User = defineUser(sequelize);
User.hasMany(Post);
Post.belongsTo(User);
sequelize.sync({ alter: true });

module.exports = { sequelize, Post, User };