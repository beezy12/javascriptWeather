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

    .then((res) => res.json())

    .then((results) => {

      // either use this console.log or just type 'results' into dev tools to look at data
      console.log('results: ', results)

      // for(let i = 0; i < results.list.length; i++) {
      results.list.map((data) => {


          const humidity = results.list[0].main.humidity + '%'

          // makes a list item, takes that and adds the 'weather-list-item' class *****
          const element = document.createElement('li')
          element.classList.add('weather-list-item')

          // add the li to the HTML as humidity
          element.innerHTML = humidity


          // allows us to move elements inside other elements
          // this adds the humidity li to the list ul
          list.appendChild(element)

          // can modify CSS here....
          element.style.height = humidity



          // debugger}
      })


    })
  }


  // Search weather for starting input value
  searchWeather('Nashville');
})();
