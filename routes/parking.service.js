const express = require('express')

let parkingController = require('../controller/parking.controller.js')

let renderMain = express.Router()

renderMain.get('/', parkingController.renderMain)
renderMain.post('/api/parking', parkingController.writeFile)
renderMain.post('/api/parking/:id', parkingController.findId)
renderMain.get('/admin', parkingController.renderAdmin)

module.exports = renderMain