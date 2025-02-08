var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res, next) => {
  var login_id = req.query.login_id;
  var admission_id = req.query.admission_id;

  const fetchAdmission =
    "SELECT * FROM tbladmissionform af INNER JOIN tbluser u ON af.login_id = u.login_id INNER JOIN tblcourse c ON c.course_id = af.course_id INNER JOIN tbldepartment d ON d.dept_id = c.department_id INNER JOIN disabilitysubcategories dsc ON dsc.id = u.disability_sub_category INNER JOIN disabilitycategories dc ON dc.id = dsc.disability_category_id WHERE af.admission_id = ? AND af.login_id = ?";

  // Execute the query with parameters
  db.query(fetchAdmission, [admission_id, login_id], (err, result) => {
    if (err) {
      // Handle the error by sending a response with the error message
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.json({ message: "Failed" });
    }

    if (result.length > 0) {
      return res.json(result);
    }
  });
});

module.exports = router;
