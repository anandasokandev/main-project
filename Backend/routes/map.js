var express = require('express');
var router = express.Router();
const axios = require('axios');

router.use(express.json());

router.get('/', async (req, res) => {
    
    // var pincode1 = req.query.body;
    // var pincode2 = req.query.body;

    const { pincode1, pincode2 } = req.query;

    const apiKey = 'AIzaSyB4-KuisxcRnHk9I_1OA1LmgXUlzdMvRa0';
  
    // Validate input
    if (!pincode1 || !pincode2) {
      return res.status(400).json({ error: 'Both pincode1 and pincode2 are required' });
    }
  
    // Construct the Google Maps Distance Matrix API URL
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${pincode1},India&destinations=${pincode2},India&key=${apiKey}`;
  
    try {
      // Make a request to the Google Maps API
      const response = await axios.get(url);
      
      // Return the API response to the client
      res.json(response.data);
    } catch (error) {
      // If the request fails, return the error response
      res.status(500).json({ error: 'Error fetching data from Google Maps API', details: error.message });
    }
  });

  module.exports = router;
  