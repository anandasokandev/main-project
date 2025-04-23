const express = require("express");
const router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.post("/", (req, res, next) => {
  const { newpassword, login_id } = req.body;

  const passwordQuery = `UPDATE tbllogin SET password = ? WHERE login_id = ?`;
  db.query(passwordQuery, [newpassword, login_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows >= 1) {
      return res.json({ message: "Success" });
    } else {
      return res.status(404).json({ message: "User not found or no change made" });
    }
  });
});

module.exports = router;
