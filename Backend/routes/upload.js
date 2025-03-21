var express = require('express');
var router = express.Router();
const path = require('path');
const util = require("util");
const multer = require("multer");
var db = require('../database/db');



let storage = multer.diskStorage({destination: (req, file, cb) => {cb(null, 
    __basedir + "/public/images");}, 
       
      filename: (req, file, cb) => { console.log(file.originalname);cb(null, 
    file.originalname);}, 
    }); 
     
    let uploadFile = multer({storage: storage,}).single("file"); 
     
    let uploadFileMiddleware = util.promisify(uploadFile); 
     
    module.exports = uploadFileMiddleware; 