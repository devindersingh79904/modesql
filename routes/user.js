const express = require('express');
const { addNewUser, getAllUser } = require('../controllers/user');
const router = express.Router()

router.route('/')
.post(addNewUser)
.get(getAllUser);
module.exports = router;