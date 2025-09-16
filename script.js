let weatherBtn = document.getElementById("weatherBtn");
if (weatherBtn) {
  weatherBtn.addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.trim();
    if (!city) return alert("Enter city name");

    let apiKey = "93615f6e3cc90f178b6dbdf8398e5cc5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(r => r.json())
      .then(res => {
        if (res.cod === 200) {
          document.getElementById("weatherResult").innerHTML = `
            <p><b>${res.name}</b></p>
            <p>🌡 Temp: ${res.main.temp} °C</p>
            <p>💨 Wind: ${res.wind.speed} km/h</p>
            <p>☁ ${res.weather[0].description}</p>`;
        } else {
          document.getElementById("weatherResult").innerText = "City not found.";
        }
      });
  });
}

let btcBtn = document.getElementById("btcBtn");
if (btcBtn) {
  btcBtn.addEventListener("click", () => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr")
      .then(r => r.json())
      .then(res => {
        if (res.bitcoin) {
          document.getElementById("btcResult").innerHTML = `
            <p>USD: $${res.bitcoin.usd}</p>
            <p>INR: ₹${res.bitcoin.inr}</p>`;
        }
      });
  });
}

let jokeBtn = document.getElementById("jokeBtn");
if (jokeBtn) {
  jokeBtn.addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then(r => r.json())
      .then(res => {
        document.getElementById("jokeResult").innerText = res.joke;
      })
      .catch(() => {
        document.getElementById("jokeResult").innerText = "Could not fetch joke.";
      });
  });
}