function getWeather() {
    const location = document.getElementById('location').value;
    if (location === '') {
        alert('Please enter a location');
        return;
    }
    
    const apiKey = 'd0adbc0932324ee388052611252303';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const icon = data.current.condition.icon;
            document.getElementById('weatherResult').innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <img src="${icon}" alt="Weather icon">
                <h3>Temperature: ${temp}°C</h3>
                <h4>Condition: ${condition}</h4>
            `;
        })
        .catch(error => {
            alert('Error fetching weather data. Please check the location and try again.');
        });
}