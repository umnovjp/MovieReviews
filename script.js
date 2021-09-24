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
// var enterYear0 = document.getElementById('enterYear');
var movieTitle;
var object1;
var inputVal = '2021'
//these five variables are created to display movies 5-9, 10-14, etc. They do not work yet
var dramaCount = 0;
var familyCount = 0;
var thrillerCount = 0;
var comedyCount = 0;
var actionCount = 0;

function getInputValue() {var inputVal = document.getElementById('myInput').value;
console.log(inputVal)}

fetchImdbDrama.addEventListener('click', getApiDataImdb);
fetchImdbFamily.addEventListener('click', getApiDataImdb);
fetchImdbThriller.addEventListener('click', getApiDataImdb);
fetchImdbComedy.addEventListener('click', getApiDataImdb);
fetchImdbAction.addEventListener('click', getApiDataImdb);
// enterYear0.addEventListener('click', updateYear);


function getApiDataImdb(event) {
 // var buttonInput = console.log(event.currentTarget);
  // document.writeln(String(buttonInput));
  var genre = event.currentTarget.value;
  console.log(genre);
// if (inputVal = '') {inputVal = '2021'}
// else { }
  console.log(inputVal)
  
  var requestURL = 'https://data-imdb1.p.rapidapi.com/movie/byYear/' + inputVal + '/byGen/' + genre + '/';
  fetch(requestURL, {
    "method": "GET", "headers": {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "f567ffdbe0msh246ba4a9ef34553p1195c8jsn6e946070d30d"
    }
  })
    .then(function (response) {
      return response.json();
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
        // var requestPosterOmdb = 'http://img.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=' + movieTitleFormatted4 + '&plot=full' 
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
              document.getElementById('boxOfDVDsDrama').appendChild(movieName1);
              
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
// requestPosterOmdb = 'http://img.omdbapi.com/?i=tt3896198&apikey=bf124b81&t=Remember%20the%20Titans&plot=full'
// fetch(requestPosterOmdb)
 //                .then(function(data) {var moviePoster = document.createElement('p');
 //              var image = data; 
 //            moviePoster.innerHTML = image;
 //          document.getElementById('boxOfDVDsDrama').appendChild(moviePoster)})


         

// lines below are just to make sure that JS works here
var pTag1 = document.createElement("p");
pTag1.textContent = 'this paragraph is created using JS';
pTag1.setAttribute("id", "list1")
pTag1.setAttribute("id", "parTag1")
document.getElementById('question').appendChild(pTag1);


