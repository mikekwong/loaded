# SASS library pre-processor use (node-sass)

## Context

Styling components for platform.

## Decision

I wanted the ability to utilize variables for styling presets, color values, and be able to nest selectors depending where they were located in the DOM tree without having to repeat myself and keep code DRY, maintainable, easy to read, and easy to change (particularly with preset variables)

# AXIOS library

## Context

Fetching external API from within React to populate data for components.

## Decision

I needed an easy to use library that's well known and commonly used in the industry to do an AJAX request to Fetch back JSON objects as content for the loadsmart shipment web platform. I could've done it natively using the native JS Fetch API but opted not to to speed up development time since axios is so easy to use and has a lot of community support and documentation. Plus with the native Fetch API, there is more minutia in code details that could easily cause bugs in development.

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

Commonly used and well documented tools in the industry for React testing. These tools were used to write unit tests for the React components to ensure certain html tags existed, proper components, were being imported and used within components even before running the project in development/production build. To determine if a test case passes or fails.
