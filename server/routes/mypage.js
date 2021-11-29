const express = require('express');
const router = express.Router();
const { mypageController } = require('../controllers');
const upload = require('../modules/multer');

router.get('/reservation/user', mypageController.checkReservation.get);
router.post('/reservation/user', mypageController.checkReservation.post);

router.get('/review/user', mypageController.checkReview.get);
router.patch('/review/user', mypageController.checkReview.patch);

router.post('/:id', mypageController.userInfo.post);
router.delete('/:id', mypageController.userInfo.delete);

router.get('/reservation/chef', mypageController.chefReservation.get);

module.exports = router;
