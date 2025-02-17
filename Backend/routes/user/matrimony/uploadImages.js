var express = require("express");
var router = express.Router();
const db = require("../../../database/db");
const multer = require("multer");
const path = require("path");

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Make file names unique
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("images", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ message: "No files uploaded" });
  }

  const loginId = req.body.loginId;

  const imageUrls = req.files.map(
    (file) => `http://localhost:3000/uploads/${file.filename}`
  );

  const insertPromises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO tblphotos (login_id, photo_url) VALUES (?, ?)";
      db.query(query, [loginId, url], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.insertId); // Resolve with the inserted photo_id
        }
      });
    });
  });

  // Wait for all insertions to complete
  Promise.all(insertPromises)
    .then((imageIds) => {
      // Assuming you want to update the user profile with the last inserted image ID
      const lastImageId = imageIds[imageIds.length - 1];
      const updateQuery =
        "UPDATE tblprofile SET photo_id = ? WHERE login_id = ?";
      db.query(updateQuery, [lastImageId, loginId], (err, result) => {
        if (err) {
          console.error("Error updating user table:", err);
          return res.status(500).send("Database error");
        }
        console.log("User profile updated with image ID:", lastImageId);

        // Respond back with success
        res.status(200).send({
          message: "Files uploaded successfully and user profile updated",
          files: imageUrls,
          lastImageId: lastImageId,
        });
      });
    })
    .catch((error) => {
      console.error("Error inserting images into database:", error);
      res.status(500).send("Database error while inserting images");
    });
});

module.exports = router;
