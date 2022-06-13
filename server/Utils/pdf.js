const PDFDocument = require("pdfkit");
const DB = require("../configs/db");

function buildPDF(user, dataCb, endCb) {
  const doc = new PDFDocument();
  doc.on("data", dataCb);
  doc.on("end", endCb);
  doc
    .font("Times-Roman")
    .fontSize(24)
    .text(`AGENCY TRAVEL INC.`, {
      align: "center",
    })
    .moveDown(1);
  doc
    .font("Times-Roman")
    .fontSize(18)
    .text(`Name: ${user.lname} ${user.mname} ${user.fname}`, {
      align: "center",
    })
    .moveDown(1);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Phone: ${user.phone}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Email: ${user.email}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Address: ${user.address}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Date of Birth: ${user.DOB}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Place of Birth: ${user.POB}`, {
      align: "left",
    })
    .moveDown(0.5);

  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Passport No: ${user.passNo}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Passport Expires: ${user.passExpire}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Location1: ${user.prefLocation1}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Location2: ${user.prefLocation2}`, {
      align: "left",
    })
    .moveDown(0.5);

  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Location3: ${user.prefLocation3}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Course 1: ${user.course1}`, {
      align: "left",
    })
    .moveDown(0.5);
  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Course 2: ${user.course2}`, {
      align: "left",
    })
    .moveDown(0.5);

  doc
    .font("Times-Roman")
    .fontSize(16)
    .text(`Preffered Course 3: ${user.course3}`, {
      align: "left",
    })
    .moveDown(0.5);

  doc.end();
}

module.exports = { buildPDF };
