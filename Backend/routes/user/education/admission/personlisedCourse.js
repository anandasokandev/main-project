var express = require("express");
var router = express.Router();
const db = require("../../../../database/db");

router.use(express.json());

router.post("/", (req, res, next) => {

  let course_id = req.body.courses;
  let disability_id = req.body.disabilities;


  console.log(course_id);
  console.log(disability_id);
  
  

  // First query to check if there's a match in the tblcoursematching table
  const fetchPersonalizedCourse =
    "SELECT * FROM tblcoursematching WHERE course_id IN ( ? ) AND disability_subcategory_id = ?";

  db.query(
    fetchPersonalizedCourse,
    [course_id, disability_id],
    (err, result) => {
      if (err) throw err;

      // If no matching results are found
      if (result.length === 0) {
        return res.send({
          message: "No personalized course found",
        });
      }

      // Fetch detailed information by joining multiple tables
      const fetchDetails =
        "SELECT c.course_id, c.course_name, c.description, d.dept_name " +
        "FROM tblcoursematching cm " +
        "INNER JOIN tblcourse c ON cm.course_id = c.course_id " +
        "INNER JOIN disabilitysubcategories dsc ON dsc.id = cm.disability_subcategory_id " +
        "INNER JOIN tbldepartment d ON d.dept_id = c.department_id " +
        "WHERE cm.course_id IN (?) AND cm.disability_subcategory_id = ?";

      db.query(
        fetchDetails,
        [course_id, disability_id],
        (err, detailedResult) => {
          if (err) {
            console.error("Error fetching course details:", err);
            return res
              .status(500)
              .json({ message: "Error fetching course details", error: err });
          }

          // If no details are found after the second query
          if (detailedResult.length === 0) {
            return res.send({
              message:
                "No detailed information found for this course and disability category",
            });
          }

          // Return detailed course information as the response
          return res.status(200).json({
            message: "Personalized course found",
            courseDetails: detailedResult,
          });
        }
      );
    }
  );
});

module.exports = router;
