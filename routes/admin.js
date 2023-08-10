const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
router.post('/product_details',adminController.postProduct);
router.get('/get_details',adminController.getProduct);
router.put('/update_details/:id',adminController.updateProduct);
module.exports=router;