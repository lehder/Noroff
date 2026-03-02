const { DataTypes } = require("sequelize");

function definePost(sequelize) {
  const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });
  return Post;
}

module.exports = {
  definePost,
};