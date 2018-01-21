## Development process

- after creating the folder structure to accommodate for redux state management I focused on building the header component with Searchbar sub component

- I decided to add styles to component whilst developing them to save some time for the final responsive tests I am planning to execute

- Whilst developing Searchbar component I added <Link> component to handle clicks to 'movies/:id' route so the use will be able to click on each result to display further details about the film. 'movies/:id' route does not have a component to render yet, I will take care of it later.

- In MoviesList component I noticed that I had wrapped the innermost content inside a div with no reason whatsoever, therefore I decided to create a utility component named Auxiliary which returns only props.children. This will allow me to not wrap content inside unnecessary divs

- With regards to GenreFilter component, I thought about two different approaches to filter by genre:
    1) retrieve all genres ids and names from TMDB Api to populate the select, then onChange would fire a function which hits TMDB endpoints to search movies by specific genres and assign new movies array to MoviesListReducer
    2) retrieve all genres ids and names from API to populate the select and onChange will fire a function which goes through state.moviesListReducer.movies and would filter them according to the id passed (obviously in an immutable way)
    I decided to go for the first approach to get more results each time the user filters by favourite genre.

- I opted for axios to handle asynchrounous request instead of window.fetch for better cross-browser compatibility, although I could have included a polyfill

- Folder structure: 
    -- I created 4 sub folders inside src main folder: 
        1) /assets contains the logo of TMDB
        2) containers which contains all the stateful components
        3) components contains just presentational components
        4) /store contains /actions and /reducers; actions is divided into actionCreators and actionTypes
    I decided to export default constants as actionTypes to prevent typos