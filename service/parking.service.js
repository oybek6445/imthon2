const fs = require('fs')

let data = ()=>{
    return JSON.parse(fs.readFileSync('./config/parking.json', 'utf8'))
}

let writeData = (body)=>{
    let data1 = data()
    data1.push(body)
    fs.writeFileSync('./config/parking.json', JSON.stringify(data1, null, 4), 'utf-8')
}

module.exports = {
    data,
    writeData
}