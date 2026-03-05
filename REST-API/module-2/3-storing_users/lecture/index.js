import crypto from "crypto";
const user = {
  email: "admin@admin.com",
  password: "DO NOT SAVE PASSWORDS AS TEXT",
  hashedPassword: "VVB7ByG8LHLVuvUxE6csetn39Xgy12DefdExqFeIQEc=",
  salt: "q1nuqTU3fyTKOrjfOezf5xd8VgQolWt7V5P5aNwcXDc=",
};

console.log(crypto.createHash("sha256").update("password").digest("base64"));
console.log(crypto.createHash("sha256").update("password").digest("base64"));
console.log(crypto.randomBytes(32).toString("base64"));

// Validating credentials
function loginUser(password) {
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password + user.salt)
    .digest("base64");

  if (hashedPassword === user.hashedPassword) {
    console.log("correct password");
  }
}

// Better function for "production"
crypto.pbkdf2(
  passwordFromUser,
  saltInDatabaseForUser,
  500000,
  32,
  "sha256",
  (err, data) => {},
);