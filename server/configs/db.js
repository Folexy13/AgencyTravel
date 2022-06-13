require("dotenv").config();

//Imports
const fs = require("fs");
const path = require("path");
const { Sequelize, Op } = require("sequelize");

//Initizalizing and tweaking db
let db = {};
const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSERNAME,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DBDIALECT,
    // logging:false,

    // logging: (...msg) => console.log(msg)
  }
);

db.Op = Op;

// load models
fs.readdirSync(__dirname + "/../models/")
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(async function (file) {
    var model = sequelize.import(path.join(__dirname + "/../models/", file));
    sequelize, Sequelize;
    db[model.name] = model;
  });
Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

//Synchronizing DB
sequelize
  .sync()
  .then(async function () {
    console.info("connected to the database");
  })
  .catch(function (err) {
    console.error(err, "Something went wrong with the Database Update!");
  });

//Exports

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
