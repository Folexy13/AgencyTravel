require("dotenv").config();

// Defining modules
const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const DB = require("./configs/db");
const expressLayouts = require("express-ejs-layouts");
const logger = require("morgan");
const Cors = require("cors");

// configuring routes
const indexRouter = require("./server/routes");

// configuring the app
const app = express();
const port = process.env.PORT || 8080;

//Database
// DB.sequelize.sync();

//Views middleware
app.use(expressLayouts);
app.set("layout", "./layouts/dashboard");
app.set("views", __dirname + "/server/views");
app.set("view engine", "ejs");
app.set("layout index", false);
app.set("layout payment", false);
app.set("layout error", false);

// configuring app middlwares
app.use(logger("dev"));
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/server/public")));

app.use("/", indexRouter);
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
  res.render("error", {
    title: "Page Not Found",
    error: err.message,
    layout: "error",
  });
});

// Defining the listening port
app.listen(port, () => console.log(`🦶 Now listening on localhost: ${port}🦶`));
module.exports = app;
