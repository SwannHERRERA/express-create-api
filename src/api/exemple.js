const express = require('express')
const router = express.Router()
const models = require('../models')

router.use('/api/exemple', require('../helpers/crud')(models.exemple))

module.exports = router
