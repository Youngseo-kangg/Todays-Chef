const express = require('express');
const router = express.Router();
const { adminController, chefController } = require('../controllers');

router.get('/review/:cuisine', adminController.review.get);
router.delete('/review', adminController.review.delete);

module.exports = router;
