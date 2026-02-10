import { Sequelize } from "sequelize";
import { defineUser } from "./user.js";
import { definePost } from "./post.js";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "root",
  database: "blog_db",
  dialect: "mysql",
});
const User = defineUser(sequelize);
const Post = definePost(sequelize);

User.hasMany(Post);
Post.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});

sequelize.sync({ alter: true });

export { sequelize, User, Post };