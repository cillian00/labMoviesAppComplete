

# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Cillian Murphy

## Overview.

### New Pages.

- Added Actor page
- Actor Details page
- My playlist page
- Firebase Login page
- TV List page.
- TV Details Page
- Modified Upcoming movie page to have add to playlist icon

### New Features.

- Added Firebase Authentication 
- Added Actor Database
- Added My Movie List page with Icons
- Added TV Show list
- Added TV Show Details
- Added new Routes
- Added new Template pages & data stuctures
- Added " My Movie List " similar to favourites 
- Added Filtering for Upcoming Movies
- Extensive data hyperlinking.
## Setup requirements.

- IMDB Api Key
- I'm not sure if you need the firebase config. 

## TMDB endpoints.

+ /movie/{movie_id}/upcoming - A list my movie lists 
+ /person/popular - A list of popular actors.
+ /tv/popular? - The TV Show popular.
+ /tv/${id}? - for the details page. 


## App Design.
### Component catalogue.

### UI Design.



![ ](./images/Screenshot_35.png)

>Shows the authentication page for firebase

![ ](./images/Screenshot_36.png)

>Shows the page for my popular actors

![ ](./images/Screenshot_37.png)

>Shows the page for my movie lists

![ ](./images/Screenshot_38.png)

>Shows the TV Shows page I added 

![ ](./images/Screenshot_39.png)

>Shows the TV Show details page I added 

### Routing.


e.g. 

+ /actors - displays a list of popular actors.
+ /actors/:id - shows details about a particular actor.
+ /actors/:id/movies (protected) - an actor's movie credits.
+ etc.


        <Route path="/" element={<Page />} /> 

       - This is the authentication page

        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />

       - Brings you to the favourite movies page 

        <Route exact path="/movies/playlist" element={<PlaylistMoviePage />} />

        - Playlists were made for upcoming movies and this shows them.


        <Route path="/pages/homepage" element={ <HomePage/> } />

        - This is the popular movies page 

        <Route path="/tv/:id" element={<TVSeriesPage />} />

        - this brings you to the TV Series details page

        <Route path="/pages/actorShowPage" element={<ActorShowPage />} />

        This brings you to the actor page. 

        <Route path="/pages/tvshowpage" element={<TvShowPage />} />

        This is the TV list page.

## Independent learning (If relevant).

- Learned alot about firebase authentication
- Learned new things about the local storage function
