let ville = "Toulouse";
let apikey = "a24c7127ebcae342c6a2b9597e39d34f"
let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apikey}`;

let temperature_ville = document.getElementById('temperature')
let humidite_ville = document.getElementById('humidite')

let button = document.getElementById("btn")
console.log(button)
button.addEventListener('click', function (event) {
    event.preventDefault()
    fetch(url).then(response => response.json())
        .then(data => {
            console.log('toto')
            let temperature = (data.main.temp - 273.15).toFixed(1)
            temperature_ville.innerHTML = temperature
            console.log('data', data.main.temp)
            let humidite = (data.main.humidity)
            humidite_ville.innerHTML = humidite

            console.log('data', data.main.humidity)
            let element = document.getElementById('temperature')
            let dateCourante = new Date();
            let minutes = dateCourante.getMinutes() + ""
            let temps = dateCourante.getHours() + ":" + minutes.padStart(2, '0')
        })
})
