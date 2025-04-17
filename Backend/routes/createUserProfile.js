var express = require('express');
var router = express.Router();
const db = require('../database/db');
const nodemailer = require('nodemailer'); // Add nodemailer import

router.use(express.json());

router.post('/', async (req, res, next) => {
    let {
        firstname, lastname, email, mobile, dateofbirth, gender, pincode, 
        state, district, location, disabilitycategory, disabilitysubcategory, 
        percent, profile, loginid
    } = req.body;

    const createUserProfileQuery = `INSERT INTO tbluser 
    (first_name, last_name, email, phone, dob, gender, pincode, state, district, location, disability_category, disability_sub_category, percent, profile_pic, login_id) 
    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        // Insert user into the database
        const result = await new Promise((resolve, reject) => {
            db.query(createUserProfileQuery, [firstname, lastname, email, mobile, dateofbirth, gender, pincode, state, district, location, disabilitycategory, disabilitysubcategory, percent, profile, loginid], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        if (result.affectedRows > 0) {
            // Send success response
            res.send({ 'message': 'Success' });

            // Send confirmation email
            const mailOptions = {
                from: `"NextStep" <ianandasokan@gmail.com>`,
                to: email,
                subject: "Registration Successful",
                html: `
                    <p>Dear ${firstname} ${lastname},</p>
                    <p>Thank you for registering with us. Your profile has been successfully created!</p>
                    <p>Best regards,<br>NextStep Team</p>
                ` // Added HTML content
            };

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'ianandasokan@gmail.com', // Use environment variable
                    pass: 'igprzrzosnzdmwvi' // Use environment variable
                }
            });

            // Send the email
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Error sending email:', err);
                } else {
                    console.log('Email sent:', info);
                }
            });
        } else {
            res.send({ message: 'Failed' });
        }
    } catch (err) {
        console.error('Database or email error:', err);
        res.status(500).send({ message: 'Internal server error' });
    }
});

module.exports = router;
