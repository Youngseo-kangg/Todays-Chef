const express = require('express');
const router = express.Router();
const { mypageController } = require('../controllers');
const upload = require('../modules/multer');

router.get('/user/reservation', mypageController.checkReservation.get);
router.post('/user/reservation', mypageController.checkReservation.post);

router.get('/user/review', mypageController.checkReview.get);
router.patch('/user/review', mypageController.checkReview.patch);

router.post('/:id', mypageController.userInfo.post);
router.delete('/:id', mypageController.userInfo.delete);

router.get('chef/reservation', mypageController.chefReservation.get);

module.exports = router;
