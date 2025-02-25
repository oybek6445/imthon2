let service = require('../service/parking.service.js')

let bodyShow = (req,res)=>{
    let body = req.body
    console.log(JSON.stringify(body))
}
let renderMain = (req,res)=>{
    res.render('index')
}
let renderAdmin = (req,res)=>{
    res.render('admin')
}
let writeFile = (req,res)=>{
    let data = req.body
    service.writeData(data)
}
module.exports = {
    bodyShow,
    renderMain,
    renderAdmin,
    writeFile,
}