(function() {
  // this app uses openweathermap.org

  const appId = '0a5003614cb77bec468c5d24c5e54036';
  const input = document.querySelector('.weather-input');
  const btn = document.querySelector('.weather-btn');
  const list = document.querySelector('.weather-list');

  input.value = 'enter a city here..'

  // **** to check data in dev tools, click network and then 'forecast283928349....'
  // functions are stored set of instructions
  // q s the query
  const searchWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`)
    .then()
  }


  // Search weather for starting input value
  searchWeather('Nashville');
})();
