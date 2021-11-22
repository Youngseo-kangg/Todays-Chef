const express = require('express');
const router = express.Router();
const { adminController, chefController } = require('../controllers');

router.get('/review', adminController.review.get);

module.exports = router;
