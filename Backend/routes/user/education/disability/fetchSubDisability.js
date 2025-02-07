var express = require('express');
var router = express.Router();
var db = require('../../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    
    let id = req.query.id;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    const fetchSubCategory = 'SELECT * FROM disabilitysubcategories WHERE disability_category_id = ?';

    db.query(fetchSubCategory, [id], (err, result) => {
        if (err) {
            console.error(err);  
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        
        return res.json(result);
    });
});

module.exports = router;
