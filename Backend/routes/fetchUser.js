var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    
    let login_id = req.query.login_id;

    if (!login_id) {
        return res.status(400).send({ 'message': 'Login ID is required' });
    }

    const fetchUserQuery = `SELECT * FROM tbluser u  INNER JOIN 
    tbllogin l on l.login_id = u.login_id INNER JOIN
    disabilitysubcategories dsc ON dsc.id = u.disability_sub_category
    INNER JOIN disabilitycategories dc ON dc.id = dsc.disability_category_id 
    WHERE l.login_id = ?`;

    db.query(fetchUserQuery, [login_id], (err, result) => {
        if (err) {
            return res.status(500).send({ 'message': 'Database query failed', 'error': err });
        }
       
        if (result.length > 0) {
            
            return res.json(result);
            
        } else if(result.length == 0) {
            
            return res.send({ 'message': 'User not found' });
        }
    });

    
        
        


});

module.exports = router;
