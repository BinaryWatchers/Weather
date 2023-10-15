const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {
    location: 'sunnyvale',
    format: 'json',
    u: 'f'
  },
  headers: {
    'X-RapidAPI-Key': '08dede6f08mshd7b284b823b4b63p1bf4abjsnc6e4fa9dbbd8',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}