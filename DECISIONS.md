# Project/React architecture

## Context

Architected React project to be composable with reuseable components for modularity and separation of concerns.

## Decision

Since there were some repeating elements like shipment destinations (that also had exact same styling) I decided to break them out into reusable components to be imported whenever needed in the layout. I created stateful components to handle the JSON data so they could easily be passed down to stateless components as props for ease of use and for its ability to handle dynamic data. That way if there are any changes or additions to the data, the platform allows flexible scalability without needing much maintenance from the developer.

for the utility functions, since some of the data needs conversion from its original JSON format for human legibility for the React view layer (to match design intent), I created a few utility functions that are able to be imported and used in any component at any time.

For the API, even if the base URL requires changing–it could easily be edited from one file in the api folder to affect the other React components. That way when focusing on different JSON files, we can easily make a file name change where needed in the react component without having to input the whole API route.

For Sass, I broke down the partials into individual parts where it served as 'sections' or 'panels' of the platform (Navigation, Shipments, Shipment, variables). That way I could have a main.scss and import the partials to compile the CSS. This helps to keep the file/folder structure clean/modular and enables brevity and scalability if I ever needed to modify or add new styles, variables, or mixins.

# Folder organizational structure

## Context

Keeping project organized with folder structure and naming convention.

## Decision

Since this project has many React components, tests, Sass files, icons, APIs, and utility functions–I separated them out into their individual folders so any other developer is able to navigate around the files and start working.

# SASS library pre-processor use (node-sass)

## Context

Styling components for platform.

## Decision

I wanted the ability to utilize variables for styling presets, color values, and be able to nest selectors depending where they were located in the DOM tree without having to repeat myself and keep code DRY, maintainable, easy to read, and easy to change (particularly with preset variables).

# AXIOS library

## Context

Fetching external API from within React to populate data for components.

## Decision

I needed a promise based HTTP client for the browser and node.js to perform AJAX requests to Fetch back JSON as content for the loadsmart shipment web platform. I could've done it natively using the native JS Fetch API but opted not to to speed up development time since axios is so easy to use and has a lot of community support and documentation. Plus with the native Fetch API, there is more minutia in code details that could easily cause bugs in development.

# React Router DOM library

## Context

Needed to implement different routes for dynamic shipment details display

## Decision

React router dom is a common library for this use case if I have many different route endpoints to visit. Particularly I can target a specific component for a specific route and pass in route IDs (in this case) as an endpoint and ID of json object for the AJAX get request.

# HAMBURGERS library

## Context

Needed an animating burger icon for mobile navigation

## Decision

I decided to go with an easy to use library that compliments well with Sass for the animating icon for mobile navigation. The other alternative was to create an animation from scratch (which would've taken much longer) or have no animation.

# React Star Ratings library

## Context

Needed to implement star highlight based on ratings and be dynamic to different number values

## Decision

I decided to go with an easy to use library that works seamlessly for this purpose. As the JSON value for the rating was easily a number, I just had to input that in to highlight the number of partial stars needed. The alternative was to write an algorithm that might change the class names accordingly based on stars (and probably wouldn't do well with partial stars).

# Jest & Enzyme test libraries

## Context

TDD for React components

## Decision

Commonly used and well documented tools in the industry for React testing. These tools were used to write unit tests for the React components to ensure certain html tags existed, proper components, were being imported and used within components even before running the project in development/production build. To determine if a test case passes or fails. Tests are kept organized, so each test file pertains to each React component.
