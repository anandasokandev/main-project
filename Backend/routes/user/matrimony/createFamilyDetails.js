var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.post("/", (req, res) => {
  let father_name = req.body.fathername;
  let father_occupation = req.body.fatheroccupation;
  let mother_name = req.body.mothername;
  let mother_occupation = req.body.motheroccupation;
  let brother = req.body.brother;
  let sister = req.body.sister;
  let login_id = req.body.login_id;

  console.log(father_occupation);
  

  if (
    !login_id ||
    !father_name ||
    !father_occupation ||
    !mother_name ||
    !mother_occupation
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const fetchFamilyDetails = `SELECT * FROM tblfamilydetails WHERE login_id = ?`;
  db.query(fetchFamilyDetails, [login_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (result.length === 0) {
      const familyQuery =
        "INSERT INTO tblfamilydetails (father_name, father_occupation, mother_name, mother_occupation, brother, sister, login_id) VALUES (?, ?, ?, ?, ?, ?, ?)";

      db.query(
        familyQuery,
        [
          father_name,
          father_occupation,
          mother_name,
          mother_occupation,
          brother,
          sister,
          login_id,
        ],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Failed to insert family details", error: err });
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
        message: "Family details already exist for this user",
      });
    }
  });
});

module.exports = router;
