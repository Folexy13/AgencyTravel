require("dotenv").config();

// let PayStack = require("paystack-node");
const express = require("express");
// const DB = require("../configs/db");
// const request = require("request");
const router = express.Router();
// const pdf = require("../Utils/pdf");
const _ = require("lodash");
// const cloudinary = require("../Utils/cloudinary");
// const upload = require("../Utils/multer");
const fs = require("fs");
// const { initializePayment, verifyPayment } =require("../Utils/payment")(request);
const imgFile = [
  "Passport",
  "Degree",
  "Transcript",
  "Statement",
  "CV",
  "marriageCert",
  "nursingCert",
  "IELT",
  "WAECCert",
  "WAECCard",
];
router.get("/", (req, res, next) => {
  const messages = req.query.status;

  let message =
    messages === "successful"
      ? "Your payment was Successful"
      : typeof messages !== "undefined"
      ? "Your payment was Declined"
      : "";
  res.render("index", {
    layout: "index",
    message: `${message}`,
  });
});
router.get("/applications", async (req, res, next) => {
  // const allUsers= await DB.users.findAll();
  const users = [
    {
      id: 1,
      fname: "Opeyemi",
      lname: "Aluko",
      mname: "Folajimi",
      phone: "07067903042",
      email: "abc@gmail.com",
      passNo: "12344",
    },
  ];
  res.render("admin", { users: users, title: "User Applications" });
});

router.get("/make-payment", (req, res) => {
  res.render("payment", { title: "Make payment", layout: "payment" });
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});
router.get("/list-of-users", async (req, res) => {
  // const allUsers= await DB.users.findAll();
  const users = [
    {
      id: 1,
      fname: "Opeyemi",
      lname: "Aluko",
      mname: "Folajimi",
      phone: "07067903042",
      email: "abc@gmail.com",
      passNo: "12344",
    },
  ];
  res.render("user", { title: "User Management", users: users });
});
router.get("/payment-report", async (req, res) => {
  res.render("paymentReport", { title: "Payment Report" });
});

router.get("/user-profle/:id", async (req, res) => {
  const userID = req.params.id;
  const user = await DB.users.findOne({ where: { id: userID } });

  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment;filename=${user.lname}.pdf`,
  });
  pdf.buildPDF(
    user,
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

// router.post("/register", upload.any(imgFile), async (req, res) => {
//   const uploader = async (path) => await cloudinary.uploads(path, "Images");
//   if ((req.method = "POST")) {
//     const urls = [];
//     const files = req.files;
//     for (const file of files) {
//       const { path } = file;
//       const newPath = await uploader(path);
//       urls.push(newPath);
//       fs.unlinkSync(path);
//     }
//     const data = {
//       phone: req.body.phone,
//       lname: req.body.lname,
//       fname: req.body.fname,
//       mname: req.body.mname,
//       email: req.body.email,
//       adress: req.body.adress,
//       DOB: req.body.DOB,
//       POB: req.body.POB,
//       location: req.body.location,
//       studyCountry: req.body.studyCountry,
//       passNo: req.body.passNo,
//       passExpire: req.body.passExpire,
//       workExp: req.body.workExp,
//       Other: req.body.Other,
//       whenandwhyRefusedVisa: req.body.whenandwhyRefusedVisa,
//       chooseLocationForMe: req.body.chooseLocationForMe,
//       refusedVisa: req.body.phone,
//       prefLocation1: req.body.prefLocation1,
//       prefLocation2: req.body.prefLocation2,
//       prefLocation3: req.body.prefLocation3,
//       course1: req.body.course1,
//       course2: req.body.course2,
//       course3: req.body.course3,
//       // Passport: urls[0].url,
//       // Degree: urls[1].url,
//       // Transcript: urls[2].url,
//       // Statement: urls[3].url,
//       // CV: urls[4].url,
//       // marriageCert: urls[5].url,
//       // nursingCert: urls[6].url,
//       // IELT: urls[7].url,
//       // WAECCert: urls[8].url,
//       // WAECCard: urls[9].url,
//     };
//     await DB.users.create(data);
//     res.status(200).json({
//       messages: "Upload successfully",
//       data: data,
//     });
//   } else {
//     res.status(405).json({
//       err: `${req.method} method not allowed`,
//     });
//   }
// });

router.post("/make-payment", async (req, res) => {
  console.log(req);
  const form = _.pick(req.body, ["amount", "email", "full_name"]);
  form.metadata = {
    full_name: form.full_name,
  };
  form.amount *= 100;
  initializePayment(form, (error, body) => {
    if (error) {
      //handle errors
      console.log(error);
      return;
    }
    response = JSON.parse(body);
    // res.redirect(response.data.authorization_url);
    res.json({ response: response });
  });
});

router.get("/edit-user/:id", async (req, res, next) => {
  const userID = req.params.id;
  const isUser = await DB.users.findOne({ where: { id: userID } });
  if (!isUser)
    return req.json({
      status: 403,
      message: "User fetched failed",
      response: `User with id ${userID} does not exist`,
    });
  res.send("Hurray");
});
router.delete("remove-user", (req, res) => {
  re;
});
module.exports = router;
