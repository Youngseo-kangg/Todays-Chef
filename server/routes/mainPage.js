const express = require('express');
const router = express.Router();
const { mainPageController } = require('../controllers');

router.get('/', mainPageController.bestChef.get);

module.exports = router;
