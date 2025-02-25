const service = require('../service/parking.service.js');

let bodyShow = (req, res) => {
    let body = req.body;
    console.log(JSON.stringify(body));
};

let renderMain = (req, res) => {
    res.render('index');
};

let renderHome = (req, res) => {
    let datas = service.data();
    res.render('home', { datas: datas });
};

let writeFile = (req, res) => {
    let data = req.body;
    service.writeData(data);
    res.json({ message: "Mashina qo'shildi", success: true });
};

let delCar = (req, res) => {
    let id = +req.params.id;
    let cars = service.data(); 

    let index = cars.findIndex(u => u.id === id);
    if (index !== -1) {
        cars.splice(index, 1);
        service.saveData(cars); 
        res.json({ message: "Mashina o'chirildi", success: true });
    } else {
        res.status(404).json({ message: "Mashina topilmadi", success: false });
    }
};

let carById = (req, res) => {
    let id = +req.params.id;
    let cars = service.data();
    let car = cars.find(u => u.id === id);

    if (car) {
        res.json({ car });
    } else {
        res.status(404).json({ message: "Mashina topilmadi" });
    }
};

module.exports = {
    bodyShow,
    renderMain,
    writeFile,
    renderHome,
    delCar,
    carById
};
