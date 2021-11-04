const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.post('/login', userController.login.post);
router.post('/signup', userController.signup.post);
router.get('/logout', userController.logout.get);

module.exports = router;
