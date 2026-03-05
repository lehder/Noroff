import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "root",
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
const User = defineUser(sequelize);

sequelize.sync({ force: true });

export { sequelize, User };