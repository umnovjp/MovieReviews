var listOfMoviesOMDB = document.getElementById('boxOfDVDsOmdb');
var fetchOmdbButton = document.getElementById('searchOmdbButton');
var listOfMoviesImdbDrama = document.getElementById('boxOfDVDsDrama');
var fetchImdbDrama = document.getElementById('dramaImdbButton');
var listOfMoviesImdbFamily = document.getElementById('boxOfDVDsFamily');
var fetchImdbFamily = document.getElementById('familyImdbButton');
var listOfMoviesImdbThriller = document.getElementById('boxOfDVDsThriller');
var fetchImdbThriller = document.getElementById('thrillerImdbButton');
var listOfMoviesImdbComedy = document.getElementById('boxOfDVDsComedy');
var fetchImdbComedy = document.getElementById('comedyImdbButton');
var listOfMoviesImdbAction = document.getElementById('boxOfDVDsAction');
var fetchImdbAction = document.getElementById('actionImdbButton');
var enterYear0 = document.getElementById('enterYear');
var movieTitle;
var object1;
//these five variables are created to display movies 5-9, 10-14, etc. They do not work yet
var dramaCount = 0;
var familyCount = 0;
var thrillerCount = 0;
var comedyCount = 0;
var actionCount = 0;

fetchImdbDrama.addEventListener('click', getApiDataImdb);
fetchImdbFamily.addEventListener('click', getApiDataImdb);
fetchImdbThriller.addEventListener('click', getApiDataImdb);
fetchImdbComedy.addEventListener('click', getApiDataImdb);
fetchImdbAction.addEventListener('click', getApiDataImdb);
// enterYear0.addEventListener('click', updateYear);

function getApiDataImdb(event) {
  var buttonInput = console.log(event.currentTarget);
  // document.writeln(String(buttonInput));
  var genre = event.currentTarget.value;
  console.log(genre);
  var year = 2000;
  
  var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/' + year + '/byGen/' + genre + '/';
  fetch(requestURL, {
    "method": "GET", "headers": {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "f567ffdbe0msh246ba4a9ef34553p1195c8jsn6e946070d30d"
    }
  })
    .then(function (response) {
      return response.json();
      // console.log(response.status);
    })
    .then(function (data) {
      console.log(data);
      for (i = 0; i < 4 ; i++) {
        var movieName = document.createElement('p');
        //  var movieYear = document.createElement('p');
        movieName.textContent = data.Data[i].title;
        movieTitle = data.Data[i].title;
        // ugly method to replace ' ' to %20 in movieTitle, I know I was supposed to write a loop
        movieTitleFormatted = movieTitle.replace(" ", "%20");
        movieTitleFormatted1 = movieTitleFormatted.replace(" ", "%20");
        movieTitleFormatted2 = movieTitleFormatted1.replace(" ", "%20");
        movieTitleFormatted3 = movieTitleFormatted2.replace(" ", "%20");
        movieTitleFormatted4 = movieTitleFormatted3.replace(" ", "%20");
        var requestURLOmdb = 'http://www.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full' 
        // end of ugly method
      //  console.log(requestURLOmdb + ' ' + genre);
        //start second fetch
        fetch(requestURLOmdb)
          .then(function (response) {
            return response.json();
          })

          .then(function (data) {
        //    console.log(data);
            var object1 = data;
       //     console.log('title ' + object1.Title + ' released ' + object1.Released + ' actors' + object1.Actors);
            if (genre == 'Drama') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsDrama').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore;
              document.getElementById('boxOfDVDsDrama').appendChild(movieData)
              dramaCount++;
            }
            else if (genre == 'Family') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsFamily').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore;
              document.getElementById('boxOfDVDsFamily').appendChild(movieData)
              familyCount++;
            }
            else if (genre == 'Thriller') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsThriller').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore;
              document.getElementById('boxOfDVDsThriller').appendChild(movieData)
              thrillerCount++;
            }
            else if (genre == 'Comedy') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsComedy').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore;
              document.getElementById('boxOfDVDsComedy').appendChild(movieData)
              comedyCount++;
            }
            else if (genre == 'Action') {
              var movieName1 = document.createElement('p');
              movieName1.innerHTML = object1.Title;
              document.getElementById('boxOfDVDsAction').appendChild(movieName1)
              var movieData = document.createElement('p');
              movieData.innerHTML = 'Director: ' + object1.Director + ', Actors: ' + object1.Actors + ', Rating ' + object1.Metascore;
              document.getElementById('boxOfDVDsAction').appendChild(movieData)
              thrillerCount++;
              
            }
            else { }
          });
        //end second fetch
      }
    });

}

// function updateYear() {var movieYear = document.getElementById('enterYear').value;
//  var scheduleContent0 = localStorage.getItem('enterYear');
// enterYear.textContent = scheduleContent0;
//   var entry0 = document.getElementById('enterYear').value;
//  localStorage.setItem('enterYear', entry0);
// movieYear.textContent = 
// alert(movieYear)}
// fetchOmdbButton.addEventListener('click', getApiOmdb);



// lines below are just to make sure that JS works here
var pTag1 = document.createElement("p");
pTag1.textContent = 'this paragraph is created using JS';
pTag1.setAttribute("id", "list1")
pTag1.setAttribute("id", "parTag1")
document.getElementById('question').appendChild(pTag1);
var input1 = document.createElement("textarea");
input1.setAttribute('id', 'year0')
input1.setAttribute("class", "input")
input1.setAttribute("placeholder", "year")
document.getElementById('input2').appendChild(input1);
var enterYear = localStorage.getItem('year0');
var year2 = document.getElementById('year0').value;
console.log(year2)


