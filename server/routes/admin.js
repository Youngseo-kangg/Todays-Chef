const express = require('express');
const router = express.Router();
const { adminController, chefController } = require('../controllers');

router.get('/review/:cuisine', adminController.review.get);

module.exports = router;
