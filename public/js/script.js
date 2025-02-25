document.getElementById('addCarForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const carNum = document.getElementById('carLocation').value;
    const carMark = document.getElementById('carMark').value
    const carOwner = document.getElementById('carOwner').value

    let id = Math.floor(Math.random() * 1000000);
    let date = new Date();
    date.getUTCDate()

    fetch('/api/parking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, carNum, carMark, carOwner, date })
    })
    .then(response => response.json())
});




