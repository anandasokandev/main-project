var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.post("/", (req, res, next) => {
  
  const {
    age_from,
    age_to,
    religion,
    caste,
    height_from,
    height_to,
    profession,
    complexion,
    education,
    district,
    gender ,
    disability_id,
    disabilitysub_id
  } = req.body;

  console.log("Filters:", req.body);
  

  if (
    !age_from ||
    !age_to ||
    !religion ||
    !caste ||
    !height_from ||
    !height_to ||
    !profession ||
    !complexion ||
    !education ||
    !district ||
    !gender ||
    !disability_id ||
    !disabilitysub_id
  ) {
    return res.json({ message: "All fields are required." });
  }

  if (
    isNaN(age_from) ||
    isNaN(age_to) ||
    isNaN(height_from) ||
    isNaN(height_to)
  ) {
    return res
      .status(400)
      .json({ message: "Age, height, and weight must be valid numbers." });
  }

  console.log("Filters:", req.body);

  const findPartner = `
        SELECT * FROM tbllogin l INNER JOIN tbluser u ON l.login_id = u.login_id 
        INNER JOIN tblprofile p ON p.login_id = u.login_id
         WHERE l.status = 'Approved' AND l.role = 'user' AND p.age >= ? AND p.complexion = ?
          AND p.age <= ? AND p.religion = ? AND p.caste = ? AND p.height >= ? AND p.height <= ? 
          AND p.occupation = ? AND p.education = ? AND u.district = ? AND u.gender = ? AND u.disability_category = ?
          AND u.disability_sub_category = ?
         `;

  db.query(
    findPartner,
    [
      age_from,
      complexion,
      age_to,
      religion,
      caste,
      height_from,
      height_to,
      profession,
      education,
      district,
      gender,
      disability_id,
      disabilitysub_id
    ],
    (err, result) => {
      if (err) {
        throw err;
      }

      console.log("Query Result:", result);

      if (result.length === 0) {
        return res.json({ message: "Failed" });
      }

      return res.status(200).json(result);
      
      
    }
    
  );
});

module.exports = router;
