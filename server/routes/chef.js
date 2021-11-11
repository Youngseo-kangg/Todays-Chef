const express = require('express');
const router = express.Router();
const { chefController } = require('../controllers');

router.get('/cuisine', chefController.cuisine.get);
router.get('/', chefController.chefId.get);

module.exports = router;
