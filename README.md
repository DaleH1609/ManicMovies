
# ICT Skills 2 Assignment.

Name: Dale Healy Egan (20066529)

## Overview.

The react app was developed as an extension to the lab work from ICT skills 2. This application retrieves information from the TMDB API which retreives information such as popular TV series's, movies, upcoming movies and popular actors.

e.g. 
+ Ability to view the latest TV series's and images.
+ Ability to view TV series information.
+ Ability to view popluar actors and their images.
+ Ability to view actor bio's.
+ Storybook support.

## Setup requirements.

Create a .env file and add the file to the base folder of the project. Retrieve an API key from the TMDB webite and add put it beside the following REACT_APP_TMDB_KEY=

Once added you will be able to access the TMDB API to retreive the information for the site.

## App Design.

Design has not changed. Same design choice from the lab with added functionality.

### Routing/Navigation.

+ /actors/popular - lists all popular actors.
+ /actors/:id - lists the biography and personal information of the actor.
+ /tvseries/popular - lists the most popular tv series.
+ /tvseries/:id - lists a description of the tv series and some other information.

### Views/Pages.


>Lists popular actors. 

![][d1]

>Lists popular actors information. Biography and date of birth. 

![][d2]

>Lists popular tv series.

![][d3]

>Lists popular tv series information. The tv series genre, duration, rating and date it first aired. 

![][d4]


### Component catalogue.

![][s1]

![][s2]

![][s3]


## Caching.

+ TV Series
+ TV Series Details
+ Popular Actors
+ Popular Actors details

![][c1]

![][c2]

![][c3]

![][c4]

[d1]: ./public/d1.png
[d2]: ./public/d2.png
[d3]: ./public/d3.png
[d4]: ./public/d4.png
[s1]: ./public/s1.png
[s2]: ./public/s2.png
[s3]: ./public/s3.png
[c1]: ./public/c1.png
[c2]: ./public/c2.png
[c3]: ./public/c3.png
[c4]: ./public/c4.png

