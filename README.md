# HBO CLONE

![logo](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/hbologo_readme.png)



Front-end application clone of the former HBO Video Streaming platform for educational purposes developed with React js. Probably the most accurate HBO clone on all Github. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [React components](#React-components)
* [React customHooks](#React-customHooks)
* [App preview](#app-preview)
* [Future developments](#future-developments)

## General info
This project is a easy HBO clone. Scroll up/ down to see what tv show or film is trending and watch an sneek peak. 
	
## Technologies
Project has been created with:
* React js
* The Mobie Data Base API (https://developers.themoviedb.org/3/getting-started/introduction)
* React-youtube library 
* Movie trailer librart
	
## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start

```

## Features
### Responsive design with different react components useBreakpoint 
Customized hook that changes the behaviour of the header component depending on the device.

### useRef react hook for infinite scroll
Inifinte scroll in the home page to fetch the different types of films.

### css responsive design good practices
Using relative withs and max-widths css properties together with FLEXBOX allowed this project to be responsive from mobile to laptop (max-width: px).

### Performance practices
The fonts have been also uploaded to the project (instead of using a CDN link) to improve performance of the project.


## React components
```
Activate
HeaderDesktop
HeaderMobile
NowTrending
Row
Footer
```

## React customHooks
```
useFetch
usePointbreak
```

## App preview
### Responsive design
#### mobile view
![Responsive](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/cover.png)

#### desktop view



## Future developments
* Loading
* LogIn
* Search Component
* Watched videos (watchlist)
* My Account information

// some notes to next developments
dispatch reduce
infinite scroll
responsive
placeholder
