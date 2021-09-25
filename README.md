#MovieReviews

in this project entitled "Movie Reviews" it utilizes information from openly available online databases to pull down small lists of movies according to their genres.

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

![image](https://user-images.githubusercontent.com/88108211/134759518-79814fb1-798d-4d0a-b85c-3a8fcb9866e3.png)

title of each of five movies is displayed along with film director, actors and rating
and when I click comedy button, they are displayed as well

![image](https://user-images.githubusercontent.com/88108211/134759551-2c07336c-d3d4-403c-abb0-1b70fb476138.png)

more movies are added when I click drama, family, thriller buttons. We added posters to be displayed. We are confident links are correct. But for some reason, same poster is displayed every time. That's why we have index.html and index_with_posters.html in the repo. 
![image](https://user-images.githubusercontent.com/88174852/134775354-c7dbf460-dfee-47e4-b58c-5519ffcc56f2.png)

And when I click rent me on RedHat or buy me at Amazon buttons, I am forwarded to their websites


We used two APIs, first returns list of movies by genre and year from IMDB API. Second takes movie title from first web API then sends request to get detailed movie info from OMDB web API.


In Script.js file you'll find most of what makes this project work.

In the index.html file the groups html used to create the sidebar which is intended to jump to a section on the main page, as opposed to
opening a second page in order to make for easy navigation for the user.
You'll also find that in this folder we have laid out the classes for the buttons, which are accessed in the script.js file.
File generally used to contain the bulk of the information on the web page.

It was our decision not to do too much with CSS file. That's why site is almost black and white. we can add more styles later. 

Live page is approved at https://johnpaulgeorgeringo.github.io/MovieReviews/. But it does not work as planned. It is the result of a microsoft setting.
![image](https://user-images.githubusercontent.com/88108211/134757900-820debcc-071b-4ae2-b0eb-9bf138ee2841.png)


Thanks for reading
