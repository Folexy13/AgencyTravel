require("dotenv").config();

// Defining modules
const createError = require("http-errors");
const express = require("express");
const path = require("path");
// const DB = require("./configs/db");
const logger = require("morgan");
const Cors = require("cors");

// configuring routes
// const indexRouter = require("./routes/index");

// configuring the app
const app = express();
const port = process.env.PORT || 8080;

//Database
// DB.sequelize.sync();

// configuring app middlwares
app.use(logger("dev"));
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);


app.get('/',(req,res)=>{
res.json({response:"Here we are"})
})

// Defining the listening port
app.listen(port, () => console.log(`🦶 Now listening on localhost: ${port }🦶`));
module.exports = app;
