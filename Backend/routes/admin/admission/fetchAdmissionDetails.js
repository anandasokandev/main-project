var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res, next) => {
  var fromDate = req.query.fromDate;
  var toDate = req.query.toDate;
  var status = req.query.status;

  // Correct the typo in SQL query
  const fetchAdmission = `SELECT * FROM tbladmissionform af INNER JOIN tbluser u ON af.login_id = u.login_id 
  INNER JOIN tblcourse c ON c.course_id = af.course_id 
  WHERE af.submission_date >= ? AND af.submission_date <= ? AND af.form_status = ?`;

  db.query(fetchAdmission, [fromDate, toDate, status], (err, result) => {
    if (err) {
      
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.json({ message: "Failed" });
    }

   
    res.json(result);
  });
});

module.exports = router;
