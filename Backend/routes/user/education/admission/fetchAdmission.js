var express = require("express");
var router = express.Router();
const db = require("../../../../database/db");

router.use(express.json());

router.get("/", (req, res, next) => {
  let login_id = req.query.loginid;
  const fetchAdmission = 'SELECT * FROM tbladmissionform WHERE login_id = ?';
  
  db.query(fetchAdmission, [login_id], (err, result) => {
    if (err) {
      console.error(err); // Log the error for debugging purposes
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    
    if (result.length > 0) {
      return res.json({ message: 'Already Submitted' });
    } else {
      return res.json({ message: 'Form not submitted yet' });
    }
  });
});

module.exports = router;
