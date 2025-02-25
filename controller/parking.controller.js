let service = require('../service/parking.service.js')

let bodyShow = (req,res)=>{
    let body = req.body
    console.log(JSON.stringify(body))
}
let renderMain = (req,res)=>{
    res.render('index')
}

let renderHome = (req,res)=>{
    let datas = service.data()
    res.render('home', {datas:datas})
}
let writeFile = (req,res)=>{
    let data = req.body
    service.writeData(data)
}
module.exports = {
    bodyShow,
    renderMain,
    writeFile,
    renderHome
}