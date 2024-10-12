document.getElementById('getWeather').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const apiKey = '90ed93362ba24f90a49140742241210'; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather not found');
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>${data.location.name}</h2>
                <p>${data.current.temp_c} °C</p>
                <p>${data.current.condition.text}</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
        });
});
