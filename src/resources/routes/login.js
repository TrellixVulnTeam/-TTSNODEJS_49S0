const express = require('express');
const router = express.Router();

const loginControllers = require('../../app/Controllers/loginController');


router.get('/',loginControllers.Viewlogin);
router.post('/login',loginControllers.login)

module.exports = router;