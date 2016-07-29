(function() {
  // this app uses openweathermap.org

  const appId = '0a5003614cb77bec468c5d24c5e54036';
  const input = document.querySelector('.weather-input');
  const btn = document.querySelector('.weather-btn');
  const list = document.querySelector('.weather-list');

  input.value = 'Nashville'

  // **** to check data in dev tools, click network and then 'forecast283928349....'
  // functions are stored set of instructions
  // q s the query
  const searchWeather = (city) => {

    // clears input
    list.innerHTML = ''

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`)

    .then((res) => res.json())

    .then((results) => {

      // either use this console.log or just type 'results' into dev tools to look at data
      console.log('results: ', results)



      // for(let i = 0; i < results.list.length; i++) {
      results.list.map((weather) => {

          // gets the humidity % and applies it to the humditiy variable
          const humidity = weather.main.humidity + '%'

          // makes a list item, takes that and adds the 'weather-list-item' class *****
          const element = document.createElement('li')
          element.classList.add('weather-list-item')

          // add the li to the HTML as humidity
          element.innerHTML = humidity


          // allows us to move elements inside other elements
          // this adds the humidity li to the list ul

          // list.appendChild(element)

          // can modify CSS here....
          element.style.height = humidity

          // debugger
          return element


          // ***** so .map just makes a new array but doesn't apply the newly made li's to the ul.... so that's what's going on here.
      }).forEach((element) => list.appendChild(element))
    })
  }


  // btn.addEventListener('click', () => {

  //   console.log('heard the click')

  //   // Search weather for starting input value
  //   searchWeather(input.value)
  // })


  document.getElementById('searchButton').addEventListener('keyup', function(event) {

    console.log('enter button')

    if(event.keyCode == 13) {
      // Search weather for starting input value
      searchWeather(input.value)
    }

  })

  // btn.addEventListener('keydown', (e) => {
  //   console.log('heard that enter button')
  //   event.preventDefault();
  //   if(e.keyCode === 13) {
  //     searchWeather(input.value)
  //   }
  // })


  // this is the default city that will be searched when the page loads
  searchWeather('Nashville')


})();


