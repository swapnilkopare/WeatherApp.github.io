const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf49f69869msh5222807b9a77c7fp105cc1jsn5368440c9e33',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {

	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)

			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));

}

// event listener 
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

// default call for Wardha city weather
getWeather("Wardha")


// weather for nagpur
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		tempNgp.innerHTML = response.temp
		humidityNgp.innerHTML = response.humidity
		min_tempNgp.innerHTML = response.min_temp
		max_tempNgp.innerHTML = response.max_temp
		wind_speedNgp.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));


// weather for Chandrapur
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandrapur', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		tempCh.innerHTML = response.temp
		humidityCh.innerHTML = response.humidity
		min_tempCh.innerHTML = response.min_temp
		max_tempCh.innerHTML = response.max_temp
		wind_speedCh.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));


// weather for Amaravati
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amaravati', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		tempAm.innerHTML = response.temp
		humidityAm.innerHTML = response.humidity
		min_tempAm.innerHTML = response.min_temp
		max_tempAm.innerHTML = response.max_temp
		wind_speedAm.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

// weather for Yavatmal
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Yavatmal', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		tempYa.innerHTML = response.temp
		humidityYa.innerHTML = response.humidity
		min_tempYa.innerHTML = response.min_temp
		max_tempYa.innerHTML = response.max_temp
		wind_speedYa.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
