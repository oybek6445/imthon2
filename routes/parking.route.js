const express = require('express')

let parkingController = require('../controller/parking.controller.js')

let renderMain = express.Router()

renderMain.get('/admin', parkingController.renderMain)
renderMain.get('/', parkingController.renderHome)
renderMain.post('/api/parking', parkingController.writeFile)

module.exports = renderMain