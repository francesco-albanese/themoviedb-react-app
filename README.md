## The Movie DB react app

This project consists of a responsive react web application which consumes [Themoviedb APIs](https://www.themoviedb.org/documentation/api).

## Features

- List movies by popularity
- Search by movie title
- Filter movies by different genres
- Navigate to specific movie to display more details
- Fully responsive

## Design

- inspired by [Movie Application UI Details](https://dribbble.com/shots/2786747-Movie-Application-UI-Details)

## Dependencies

- axios to fetch APIs
- react-router-dom to navigate to different routes of the application
- redux and react-redux for state management
- redux-thunk to handle asynchronous code in action creators

## State management with Redux react-redux and redux-thunk

In this project I am using Redux and react-redux to control the flow of data making sure all the components update accordingly having access to a global store.
Redux makes easier to handle the global state, creating a central store which encapsulate all the states of the application.

I created action types constants to describe the type of action which I wanted to execute with the action creator function. Thanks to redux-thunk middleware I managed to dispatch actions asynchronously, fetching data from TMDB Apis and consequently let the reducer handle the data transformation (if needed) and update the store.

Since the reducers are responsible for updating the store, I decided to put data transformation logic inside the reducers rather than in the actions.

Here's my data flow: a component dispatches an action with an action creator function, the actionCreator fetches data from the server and send it to the reducer. The reducer at that point is responsible to update the store and through the "connect" function of redux I am hooking up the component itself to the global state,making sure to receive the data as props. 

I also made sure to update the store immutably, returning every time a brand new javascript object with the old state properties and the updated ones.

