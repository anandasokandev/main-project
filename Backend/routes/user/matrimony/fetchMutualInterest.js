var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res) => {

    var { login_id } = req.query

  const fetchInterest = `SELECT 
    a.login_id AS first_login_id,     
    b.login_id AS second_login_id,    
    u.*,                              
    p.*                                
FROM tblinterest a
JOIN tblinterest b
  ON a.login_id = b.interest_loginid
  AND a.interest_loginid = b.login_id  
INNER JOIN tbluser u 
  ON u.login_id = b.interest_loginid  
INNER JOIN tblprofile p 
  ON p.login_id = b.interest_loginid
WHERE a.login_id < b.login_id;      

`;

  db.query(fetchInterest, (err, result) => {
    if (err) {
      console.error("Database error:", err); // Log the error for debugging
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      // No result found
      return res.json({ message: "No interests found for the given login_id" });
    }

    if (result.length > 0) {
      // Record found
      return res.json({ message: "Interests found", data: result });
    }
  });
});

module.exports = router;
