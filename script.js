document.getElementById("getWeather").addEventListener("click", ()=>{
    const city = document.getElementById("cityInput").value;
    const apiKey = "e4a4304df43c430da5634639251804";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
    .then(response => response.json())
    .then (data =>{
        const temp = data.current.temp_f;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;

        document.getElementById("weatherResult").innerHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <p>Temperature: ${temp} °F</p>
        <p>Condition: ${condition}</p>
        <img src="${icon}" alt="Weather icon">
        `;
    })
    .catch(error => {
        console.error("Error fetching weather:", error);
        document.getElementById("weatherResult").textContent = "Could not get weather. Try again."
    });
});