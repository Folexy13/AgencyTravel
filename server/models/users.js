module.exports = function (sequelize, Sequelize) {
  var Users = sequelize.define(
    "users",
    {
      phone: {
        type: Sequelize.UUID,
      },
      lname: {
        type: Sequelize.STRING,
      },
      fname: {
        type: Sequelize.STRING,
      },
      mname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
      },
      DOB: {
        type: Sequelize.STRING,
      },
      POB: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      studyCountry: {
        type: Sequelize.STRING,
      },
      passNo: {
        type: Sequelize.STRING,
      },
      passExpire: {
        type: Sequelize.STRING,
      },
      Passport: {
        type: Sequelize.STRING,
      },
      Degree: {
        type: Sequelize.STRING,
      },
      Transcript: {
        type: Sequelize.STRING,
      },
      Statement: {
        type: Sequelize.STRING,
      },
      CV: {
        type: Sequelize.STRING,
      },
      educationLevel: {
        type: Sequelize.STRING,
      },
      marriageCert: {
        type: Sequelize.STRING,
      },
      nursingCert: {
        type: Sequelize.STRING,
      },
      workExp: {
        type: Sequelize.STRING,
      },
      IELT: {
        type: Sequelize.STRING,
      },
      WAECCert: {
        type: Sequelize.STRING,
      },
      Other: {
        type: Sequelize.STRING,
      },
      whenandwhyRefusedVisa: {
        type: Sequelize.STRING,
      },
      // chooseLocationForMe: {
      //   type: Sequelize.STRING,
      // },
      refusedVisa: {
        type: Sequelize.STRING,
      },
      prefLocation1: {
        type: Sequelize.STRING,
      },
      prefLocation2: {
        type: Sequelize.STRING,
      },
      prefLocation3: {
        type: Sequelize.STRING,
      },
      course1: {
        type: Sequelize.STRING,
      },
      course2: {
        type: Sequelize.STRING,
      },
      course3: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Users;
};
