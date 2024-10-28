const apiKey = '38239edd31fe35a8961ed85427b832de'; // Clave API

document.getElementById('fetchWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            return response.json();
        })
        .then(weather => {
            const result = `
                <h2>El clima en ${weather.name}:</h2>
                <p>Temperatura: ${weather.main.temp} °C</p>
                <p>Descripción: ${weather.weather[0].description}</p>
                <p>Humedad: ${weather.main.humidity}%</p>
            `;
            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});
