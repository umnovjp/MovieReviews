# MovieReviews
in this project entitled "Movie Reviews" it utilizes information from openly available online databases to pull down small lists of movies according to their genres. A user can enter a year such as 2021 or 2018 in the input field. Then click on one of the buttons to search by genre to view five movie cards. There are five genres currently included. 

## Technical Acceptance
We use two server sides APIs. First we find movie titles by year and genre on https://data-imdb1.p.rapidapi.com/movie/byYear/. Then we find additional information such as film director, actors, rating, plot on http://www.omdbapi.com/. Application does not use JS alerts. We used template imported from Figma fro CSS styling. We improved it a little to make colors less default-looking. It accepts movie release year in the input field and genre using buttons. Also, user can click more buttons to rent those movies at redbox.com or buy them at Amazon.com. 
The lists are accessed through an API entitled "OMDb Api" as well as a second API entitled "Data-Imdb"
Once accessed the lists populate the relevant movie category that they happen to fall under.
For example when a query is ran for a movies of a particular genre, that information is then taken
to the MovieReviews website, this is done by clicking a button which is programmed to perform the query
from there, the title populates the section that is labeled on the button for each section.

This website consists of an HTML file, JavaScript file, and a CSS file in order to format the page.

All of the necessary queries, and event listeners can be found in the JavaScript file "script.js"

We utilized several buttons for categories that we believed would be the most popular.

The API "OMDb api" we used offers multiple clicks a month with a limit on the amount we can click for free monthly.

When I click button with action movies,

![image](https://user-images.githubusercontent.com/88174852/134790220-369602d6-1721-49cf-9de2-2a4c66f00068.png)

title of each of five movies is displayed along with film director, actors, rating, and plot. 
And when I click comedy button, they are displayed as well

![image](https://user-images.githubusercontent.com/88174852/134790257-69ab098d-c89d-4feb-946c-dd628e1fa9d5.png)

more movies are added when I click drama, family, thriller buttons. We added posters to be displayed. We are confident links are correct. But for some reason, same poster is displayed every time. So code is still there but it is disabled. I am sure we can add this functionality later, when we get help from our TA. 
![image](https://user-images.githubusercontent.com/88174852/134790773-a175a467-ed39-41f5-b6c2-32e86039e7c7.png)

And when I click to sidebar button it lands me at proper <div>.

In Script.js file you'll find most of what makes this project work. It dynamically adds text to the page as I click buttons. 
## Styles
Styles are created using style.css file. They have tons of space for improvement. Our project team was understaffed. That's why we concentrated on features and not on style. 

GitHub link is https://github.com/JohnPaulGeorgeRingo/MovieReviews/. Live page is approved at https://johnpaulgeorgeringo.github.io/MovieReviews/. But it does not work as planned. It is the result of a Microsoft setting.
![image](https://user-images.githubusercontent.com/88174852/134790915-69fd1679-7d04-49ec-88a8-67b032dde0b6.png)

Thanks for reading
