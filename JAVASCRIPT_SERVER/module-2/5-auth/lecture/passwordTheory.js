import crypto from "crypto";

const users = [
  {
    username: "admin",
    password:
      "0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e",
  },
  {
    username: "user",
    salt: "random",

    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
  },
  {
    username: "user2",
    salt: "text",
    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
  },
];

// How could users with the same password get different hashes to protect data

const inputUsername = "admin";
const inputPassword = "password";

// create a function to check if the input is "valid"

function authenticateUser() {
  const filteredUsers = users.filter((user) => {
    if (user.username === inputUsername) {
      return true;
    } else {
      return false;
    }
  });
  if (filteredUsers.length) {
    if (filteredUsers[0].password === inputPassword) {
      console.log("valid");
      return;
    }
  }
  console.log("invalid");
}
/* authenticateUser();
 */
const hashedPassword = crypto
  .createHash("sha256")
  .update("password" + users[2].salt)
  .digest("hex");
console.log(hashedPassword);
