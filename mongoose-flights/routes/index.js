const express = require('express');
const router = express.Router();
const indexCtlr = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtlr.index);

module.exports = router;

