var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res) => {

  let { login_id } = req.query;

  if (!login_id ) {
    return res.status(400).json({ message: "Missing required fields: login_id " });
  }

  console.log(login_id);
  

  const fetchInterest = `SELECT * FROM tbllogin l 
                         INNER JOIN tbluser u ON l.login_id = u.login_id
                         INNER JOIN tblprofile p ON p.login_id = l.login_id 
                         INNER JOIN tblinterest i ON i.login_id = p.login_id 
                         WHERE i.interest_loginid = ?`;

  db.query(fetchInterest, [login_id], (err, result) => {
    if (err) {
      
      return res.status(500).json({ message: "Database error", error: err });
    }

    // Check the result
    if (result.length === 0) {
      // If no result found
      return res.json({ message: "Not Found" });
    } 
    
    if(result.length > 0){
      // If the record exists
      return res.json({ message: "Interest found" , data: result});
    }
  });
});

module.exports = router;
