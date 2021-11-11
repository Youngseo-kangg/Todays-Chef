const express = require('express');
const router = express.Router();
const { chefController } = require('../controllers');

router.get('/:id', chefController.cuisine.get);
router.get('/', chefController.chefId.get);

module.exports = router;
