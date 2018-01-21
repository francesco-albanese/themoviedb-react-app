## Development process

- after creating the folder structure to accommodate for redux state management I focused on building the header component with Searchbar sub component

- I decided to add styles to component whilst developing them

- Whilst developing Searchbar component I added <Link> component to handle clicks to 'movies/:id' route so the use will be able to click on each result to display further details about the film. 'movies/:id' route does not have a component to render yet, I will take care of it later.

- In MoviesList component I noticed that I had wrapped the innermost content inside a div with no reason whatsoever, therefore I decided to create a utility component named Auxiliary which returns only props.children. This will allow me to not wrap content inside unnecessary divs