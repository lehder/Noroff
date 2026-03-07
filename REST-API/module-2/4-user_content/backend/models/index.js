import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "Odisea220977",
  dialect: "mysql",
  database: "auth_db",
});
function defineUser(sequelize) {
  const User = sequelize.define("User", {
    email: { type: DataTypes.STRING, unique: true },
    hashedPassword: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: false },
  });
  return User;
}
function definePost(sequelize) {
  const Post = sequelize.define("Post", {
    content: DataTypes.STRING,
  });
  return Post;
}

const User = defineUser(sequelize);
const Post = definePost(sequelize);

Post.belongsTo(User);
User.hasMany(Post);

sequelize.sync({ force: true });

export { sequelize, User, Post };