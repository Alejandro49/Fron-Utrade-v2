const express = require('express');


const pagesController = require('../controllers/pages.js');

// const isAuth = require('../middleware/is-auth');

const router = express.Router();


router.get('/', pagesController.getLandingPage);


module.exports = router;