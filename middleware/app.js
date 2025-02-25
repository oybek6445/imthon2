const express = require('express')

let renderMain = require('../routes/parking.route.js')


let app = express()

app.use(express.json())

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './public/views')

app.use('/', renderMain)

module.exports = app