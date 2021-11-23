const express = require('express');
const router = express.Router();
const { adminController } = require('../controllers');

router.get('/review/:cuisine', adminController.review.get);
router.post('/review', adminController.review.post);

router.get('/chef/:cuisine', adminController.chef.get);
router.post('/chef', adminController.chef.post);

module.exports = router;
