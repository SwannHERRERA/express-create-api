const express = require('express')

const exemple = require('./exemple')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  })
})

router.use('/exemple', exemple)

module.exports = router
