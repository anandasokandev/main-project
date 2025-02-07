var express = require("express");
var router = express.Router();
const db = require("../../../../database/db");

router.use(express.json());

router.get("/", (req, res, next) => {
  
  const id = req.query.id; // Get login_id from the request body

  console.log(id);
  

  // Check if login_id is provided
  if (!id) {
    return res.status(400).json({
      message: "login_id is required",
    });
  }

  // Log the id for debugging (can be removed later in production)
  console.log(`Fetching disability details for user: ${id}`);

  // Fetch the disability details for the user
  const fetchDisabilityByUser = "SELECT * FROM tbluser WHERE login_id = ?";

  db.query(fetchDisabilityByUser, [id], (err, result) => {
    if (err) {
      console.error("Error fetching user disability data:", err);
      return res.status(500).json({
        message: "Database query failed",
        error: err,
      });
    }

    // If no user found
    if (result.length === 0) {
      return res.status(404).json({
        message: "No user found with the provided login_id",
      });
    }

    const user = result[0]; // Access the first row of the result

    // Check if either disability category or sub-category is null or empty
    if (user.disability_category === 'null' || user.disability_sub_category === 'null') {
      return res.status(400).json({
        message: "Disability category or sub-category is missing",
      });
    }

    // If the disability category and sub-category are valid, return the information
    return res.status(200).json({
      message: "User disability details fetched successfully",
      disabilityDetails: {
        disability_category: user.disability_category,
        disability_sub_category: user.disability_sub_category,
        percent: user.percent,
      },
    });
  });
});

module.exports = router;
