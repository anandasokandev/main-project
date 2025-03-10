var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.post("/", (req, res) => {
  let shortbio = req.body.shortbio;
  let aboutme = req.body.aboutme;
  let login_id = req.body.login_id;

  if (
    !login_id ||
    !shortbio ||
    !aboutme
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const fetchBioDetails = `SELECT * FROM tblbiodetails WHERE login_id = ?`;
  db.query(fetchBioDetails, [login_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      const familyQuery =
        "INSERT INTO tblbiodetails (about_me, bio, login_id) VALUES (?, ?, ?)";

      db.query(
        familyQuery,
        [
          aboutme,
          shortbio,
          login_id,
        ],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Failed to insert bio details", error: err });
          }
          if (result.affectedRows > 0) {
            return res.status(201).json({ message: "Success" });
          } else {
            return res.status(400).json({ message: "Failed" });
          }
        }
      );
    } else {
      return res.json({
        message: "Bio details already exist for this user",
      });
    }
  });
});

module.exports = router;
