# HBO CLONE

![logo](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/hbologo_readme.png)

Front-end application clone of the former HBO Video Streaming platform for educational purposes developed with React js. Probably the most accurate HBO clone on all Github. Already working on the HBOMAX platform.

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
Inifinte scroll in the home page to fetch the different types of films while scrolling.

### css responsive design good practices
Using relative withs and max-widths css properties together with FLEXBOX allowed this project to be responsive from mobile to laptop (max-width: px).


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
All the hooks have been named after famous movies or best quotes. Can you guess the movie?
```
useInfinityAndBeyond
useFetch
usePointbreak
```

## App preview
### Responsive design
![Responsive](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/ezgif.com-gif-maker.gif)
#### mobile view
![mobile](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/cover.png)

#### desktop view
![desktop](https://github.com/IMGEORGEMOR/hbospain-webclone/blob/main/src/assets/desktop.png)

## Future developments
Migration to the new hbomax