var createError = require("http-errors");
const { sequelize } = require("./models/index.js");
var express = require("express");
var passport = require("passport");
var session = require("express-session");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const registerRoute = require("./routes/register.js");
const postsRouter = require("./routes/posts.js");
const loginRouter = require("./routes/login.js");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "SuperDuperSecret",
  }),
);
app.use(passport.authenticate("session"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/register", registerRoute);
app.use("/posts", postsRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;