const fs = require("fs");

let data = () => {
    return JSON.parse(fs.readFileSync("./config/parking.json", "utf8"));
};

let writeData = (body) => {
    let cars = data();
    cars.push(body);
    saveData(cars);
};

let saveData = (newData) => {
    fs.writeFileSync("./config/parking.json", JSON.stringify(newData, null, 4), "utf8");
};

module.exports = {
    data,
    writeData,
    saveData
};
