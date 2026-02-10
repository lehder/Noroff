import { DataTypes } from "sequelize";

export function definePost(sequelize) {
  const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });
  return Post;
}