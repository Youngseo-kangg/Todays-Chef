const express = require('express');
const router = express.Router();
const { mypageController } = require('../controllers');

router.get('/user/reservation', mypageController.checkReservation.get);
router.post('/user/reservation', mypageController.checkReservation.post);

router.get('/user/review', mypageController.checkReview.get);
router.patch('/user/review', mypageController.checkReview.patch);

module.exports = router;
