let getCityName = document.getElementById('getCityName');
let locationBtn = document.getElementById('locationBtn');
let getCityNameBtn = document.getElementById('getCityNameBtn');

const sendRequest = () => {
	return new Promise((resolve, reject) => {
		reject('Error: get user message error, please reload the page');
	});
}

async function getWeatherDetail() {
	let resultHTML = document.getElementById('result');
	resultHTML.innerHTML = `<h1>waiting info...</h1>`;
	let APIKey = '439d4b804bc8187953eb36d2a8c26a02';
	try {
		let resultHTML = document.getElementById('result');
		let city = document.getElementById('getCityName').value;
		let weatherDetail = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
		weatherDetail = await weatherDetail.json();
		let description = weatherDetail.weather[0].description;
		let temp = weatherDetail.main.temp.toFixed(1);
		let feelLike = weatherDetail.main.feels_like.toFixed(1);
		let visibility = weatherDetail.visibility / 1000;
		visibility = visibility.toFixed(1);
		let Name = weatherDetail.name;
		resultHTML.innerHTML =
			`
				<div class="firstInfo">
					<img src="./icon/cloud-computing.svg" alt="cloud">
					<h1>${temp}°C</h1>
					<h3>${description}</h3>
					<h2>${Name}</h2>
				</div>
				<div class="secInfo">
					<div class="feelTemp">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z"/></svg>
						<div class="info">
							<h1>${feelLike}</h1>
							<h2>Feel Like</h2>
						</div>
					</div>
					<div class="Visibility">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"/></svg>
						<div class="info">
							<h1>${visibility}KM</h1>
							<h2>Visibility</h2>
						</div>
					</div>
				</div>
			`
	} catch (message) {
		let resultHTML = document.getElementById('result');
		resultHTML.innerHTML = `<h1>please check city name</h1>`;
	}
}

async function getWeatherDetailByLocal(city) {
	let resultHTML = document.getElementById('result');
	resultHTML.innerHTML = `<h1>waiting info...</h1>`;
	let APIKey = '439d4b804bc8187953eb36d2a8c26a02';
	try {
		let resultHTML = document.getElementById('result');
		let weatherDetail = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
		weatherDetail = await weatherDetail.json();
		let description = weatherDetail.weather[0].description;
		let temp = weatherDetail.main.temp.toFixed(1);
		let feelLike = weatherDetail.main.feels_like.toFixed(1);
		let visibility = weatherDetail.visibility / 1000;
		visibility = visibility.toFixed(1);
		let Name = weatherDetail.name;
		resultHTML.innerHTML =
			`
				<div class="firstInfo">
					<img src="./icon/cloud-computing.svg" alt="cloud">
					<h1>${temp}°C</h1>
					<h3>${description}</h3>
					<h2>${Name}</h2>
				</div>
				<div class="secInfo">
					<div class="feelTemp">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z"/></svg>
						<div class="info">
							<h1>${feelLike}</h1>
							<h2>Feel Like</h2>
						</div>
					</div>
					<div class="Visibility">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"/></svg>
						<div class="info">
							<h1>${visibility}KM</h1>
							<h2>Visibility</h2>
						</div>
					</div>
				</div>
			`
	} catch (message) {
		let resultHTML = document.getElementById('result');
		resultHTML.innerHTML = `<h1>please check city name</h1>`;
	}
}

getCityNameBtn.addEventListener('click', () => {
	if (getCityName.value != "") {
		getWeatherDetail();
	}
});


getCityName.addEventListener('keydown', (e) => {
	if (e.keyCode == '13' && getCityName.value != "") {
		getWeatherDetail();
	}
});

locationBtn.addEventListener('click', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError)
	}
});

function onSuccess(position) {
	let { latitude, longitude } = position.coords;
	fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=02f6724180484efd99fccbacf0fb43b6&language=en`)
		.then(response => response.json()).then(response => {
			let allDetails = response.results[0].components;
			let { city } = allDetails;
			getWeatherDetailByLocal(city);
		});
}

function onError() {
	locationBtn.innerText = 'Your browser no support';
}