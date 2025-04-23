var express = require('express');
var router = express.Router();
const db = require('../database/db');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Middleware to parse JSON request bodies
router.use(express.json());

// Helper: Generate numeric OTP
function generateOTP(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

// Helper: Nodemailer transporter (Gmail example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ianandasokan@gmail.com',         // replace with your email
        pass: 'igprzrzosnzdmwvi'        // use app password if Gmail has 2FA
    }
});

router.get('/', (req, res, next) => {
    let username = req.query.username;

    if (!username) {
        return res.status(400).send({ message: 'Username is required' });
    }

    const query = `
        SELECT u.email FROM tbllogin l
        INNER JOIN tbluser u ON l.login_id = u.login_id
        WHERE l.username = ?
    `;

    db.query(query, [username], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed', details: err });
        }

        if (result.length > 0) {
            const email = result[0].email;
            const otp = generateOTP();

            // Send email with OTP
            const mailOptions = {
                from: 'your_email@gmail.com',
                to: email,
                subject: 'Your OTP Code',
                text: `Your One-Time Password for password reset is: ${otp}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending mail:', error);
                    return res.status(500).send({ message: 'Failed to send OTP', error });
                }

                console.log('Email sent:', info.response);
                return res.status(200).send({ message: 'OTP sent successfully', otp }); // ⚠️ remove `otp` in production!
            });

        } else {
            return res.status(404).send({ message: 'User not found' });
        }
    });
});

module.exports = router;
