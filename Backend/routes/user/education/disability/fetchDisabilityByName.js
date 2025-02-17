var express = require("express");
var router = express.Router();
var db = require('../../../../database/db');

router.use(express.json());

router.get("/", (req, res, next) => {
  const id = req.query.id; // Get login_id from the request query

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

    if (result.length === 0) {
      // If no user found
      return res.status(404).json({
        message: "No user found with the provided login_id",
      });
    }

    const user = result[0]; // Access the first row of the result

    // Check if either disability category or sub-category is null
    if (
      user.disability_category === null ||
      user.disability_sub_category === null
    ) {
      return res.status(400).json({
        message: "Disability category or sub-category is missing",
      });
    }

    // Fetch the disability category and sub-category details
    const fetchNameQuery = `
      SELECT dc.disability_category , dsc.sub_category_name FROM tbluser u
      INNER JOIN disabilitysubcategories dsc ON u.disability_sub_category = dsc.id
      INNER JOIN disabilitycategories dc ON dc.id = u.disability_category
      WHERE u.login_id = ?
    `;

    db.query(fetchNameQuery, [id], (err, result1) => {
      if (err) {
        console.error("Error fetching disability details:", err);
        return res.status(500).json({
          message: "Error fetching disability details",
          error: err,
        });
      }

      if (result1.length > 0) {
        return res.json(result1); // Return the disability details if found
      } else {
        return res.status(404).json({
          message: "Disability details not found for the user",
        });
      }
    });
  });
});

module.exports = router;
