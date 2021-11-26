const express = require('express');
const router = express.Router();
const { mypageController } = require('../controllers');

router.get('/user/reservation', mypageController.checkReservation.get);

module.exports = router;
