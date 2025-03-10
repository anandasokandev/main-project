var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res) => {
  let login_id  = req.query.login_id;

  if (!login_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const fetchBioDetails = `SELECT * FROM tblbiodetails WHERE login_id = ?`;
  
  db.query(fetchBioDetails, [login_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
        return res.json({ message: "Not Found" });
    } else {
      return res.json({ message: "Already exists", data: result });
    }
  });
});

module.exports = router;
