var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {

  let ageFrom = req.body.ageFrom;
  let ageTo = req.body.ageTo;
  let heightFrom = req.body.heightFrom;
  let heightTo = req.body.heightTo;
  let religion = req.body.religion;
  let caste = req.body.caste;
  let login_id = req.body.login_id;
  let profession = req.body.profession;
  let complexion = req.body.complexion;
  let education = req.body.education;
  let maritalstatus = req.body.maritalstatus;
  let gender = req.body.gender;
  let district = req.body.district;
  let disabilitycategory = req.body.disabilitycategory;
  let disabilitysubcategory = req.body.disabilitysubcategory;

  // Ensure all required fields are provided
  if (
    !login_id ||
    !ageFrom ||
    !ageTo ||
    !heightFrom ||
    !heightTo ||
    !religion ||
    !caste ||
    !profession ||
    !complexion ||
    !education ||
    !district ||
    !gender ||
    !maritalstatus ||
    !disabilitycategory ||
    !disabilitysubcategory
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const fetchPreference = `SELECT * FROM tblpreference WHERE login_id = ?`;

  db.query(fetchPreference, [login_id], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      return res.json({ 'message': 'Already Exists' });
    }
    if (result.length === 0) {
      const createPreference = `
        INSERT INTO tblpreference (login_id, age_from, age_to, height_from, height_to, religion, caste, marital_status, complexion, education, gender, district, profession, disability_id , disabilitysub_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      db.query(createPreference, [login_id, ageFrom, ageTo, heightFrom, heightTo, religion, caste, maritalstatus, complexion, education, gender, district, profession, disabilitycategory, disabilitysubcategory], (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Failed to insert preference details", error: err });
        }
        if (result.affectedRows > 0) {
          return res.status(201).json({ message: "Success" });
        } else {
          return res.status(400).json({ message: "Failed" });
        }
      });
    }
  });
});

module.exports = router;

