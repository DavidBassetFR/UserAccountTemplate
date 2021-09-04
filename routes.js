const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController.js');


router.get('/users', mainController.getUsersDetails);
router.post('/users', mainController.addNewUser)
module.exports = router;
