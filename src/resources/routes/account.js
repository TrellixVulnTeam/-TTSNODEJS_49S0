const express = require("express");
const router = express.Router();

const accountControllers = require('../../app/Controllers/accountControllers');

router.get('/:id/edit',accountControllers.edit)
router.post('/:id/editaccount',accountControllers.editAccount)
router.get('/:id/destroy',accountControllers.destroy)



module.exports = router;