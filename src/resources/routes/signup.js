const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

const signUpController = require('../../app/Controllers/signUpController');

router.get('/',signUpController.viewSignUp);
router.post('/submitsignup',signUpController.createAccount)

module.exports = router;
