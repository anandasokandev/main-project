var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

const getCurrentTimestampWithTime = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (01-12)
  const day = String(date.getDate()).padStart(2, '0'); // Get day (01-31)
  const hours = String(date.getHours()).padStart(2, '0'); // Get hours (00-23)
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes (00-59)
  const seconds = String(date.getSeconds()).padStart(2, '0'); // Get seconds (00-59)
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

router.put("/", (req, res, next) => {
  const { disabilitycategory, disabilitysubcategory, percent, login_id } = req.body;

  // Get the current timestamp
  const updatedTime = getCurrentTimestampWithTime();

  // SQL query to update the disability details
  const updateDisabilityQuery = `UPDATE tbluser SET disability_category = ?, disability_sub_category = ?, percent = ?, updated_at = ? WHERE login_id = ?`;

  // Execute the query
  db.query(
    updateDisabilityQuery,
    [disabilitycategory, disabilitysubcategory, percent, updatedTime, login_id],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (result.affectedRows > 0) {
        return res.json({ message: "Success" });
      } else {
        return res.status(404).json({ message: "User not found or no changes made" });
      }
    }
  );
});

module.exports = router;
