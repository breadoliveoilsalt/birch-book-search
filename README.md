# Birch 

Welcome to Birch, a tool to search for your next favorite book!

## Introduction

Birch connects to the Google Books API to deliver search results entered into the app's search bar.  The app was built using [React](https://github.com/facebook/create-react-app) and has a [Redux-managed state](https://redux.js.org/). It relies on [Thunks](https://github.com/reduxjs/redux-thunk) to handle asynchronous Redux dispatching and [React Router](https://reacttraining.com/react-router/) to handle navigation.

A live demo of the app is available via Heroku at https://birch-book-search.herokuapp.com/.

For more on the process of creating the app and creating tests for it, please see further below.

## Running the App Locally and Running Tests

To run the app locally:

1. Fork it in GitHub and clone it to your computer.

2. In your terminal, `cd` into the root directory the app.  

3. In your terminal, run `npm install` to download dependencies.

4. You will need provide an API key specifically for Google Books in order for the app to connect to the Google Books API. See instructions [here](https://console.developers.google.com/apis/credentials?project=_) for how to obtain an API key.  The app then needs to be launched with the API key as an environment variable.  We recommend accomplishing this by:

  - creating a file in your root directory called `.env`,
  - running `git init` and adding the `.env` file to you `.gitignore` file, and
  - pasting into `.env` the following: `REACT_APP_GOOGLE_BOOKS_API_KEY = "your actual API key"`

5. In your terminal, from the app's root directory, run `npm start`.  Then head to localhost:3000 in your browser to use the app.

6. To close out the program, close your browser, and in the terminal where you ran `npm start`, hit control+c (on a Mac). To run the program again, repeat step 5.  

To run and see tests for the app, in your terminal from the app's root directory, run `npm test`.  When the testing program loads, type `a` to run all tests.

## Contributions and License

### Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/breadoliveoilsalt/birch-book-search. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant (http://contributor-covenant.org) code of conduct.

### License:

The app is available as open source under the terms of the MIT License (http://opensource.org/licenses/MIT).

## Summary of Creating the App and Creating Tests for It

Creating the app was a lot of fun and lead to much learning about tests.  Here is a summary of how I went about things:

1. Start reading about the Google Books API.  Get a sense of what it can do and how to integrate it.

2. Sit down with paper and pencil and sketch out some imaginings on what the app would look like.  Still using paper, make an initial identification of the React components needed, their hierarchy, and which components should be presentational (as opposed to container components with functions).  Also brainstorm the keys of the Redux state and dispatching functions needed to update the state.

3. Create a working frame of the app using create-react-app. Start installing and integrating dependencies, such as Redux, Thunks, and React Router. Make sure Redux state is connected to the app.  

4. Get learning about how to do tests with React, Redux, and Thunks. Take a stab at the red/green/refactor pattern by writing tests only with descriptions for what I wanted to test, not the logic for the tests themselves.
  - Side Note: This was my first time creating a test suite for an app.  I had been playing around with Mocha and Chai for JavaScript testing lately, but I knew there was going to be a big learning curve when it came to test suites relevant for an app like this (such as Jest, Enzyme, Sinon, fetchMock, and Redux Mock Store).  At that moment, in the interest of time, I figured that I would write descriptions of tests to get my brain working in a testing mindset and then flush out the test's logic as I continued to simultaneously build the app and learn more about testing.

5. Build out the components for the app. Connect it to the Google Books API and add logic so responses from the API populate the Redux store and, in turn, populate the front end.  Add some styling, taking a mobile-first approach and assuming the user's screen is 320px wide. Continue to play with stying here and there as the app takes shape and I notice things that need tweaking.

6. Start imaging how to move the app's logic more toward object oriented design.  Come up with a BookRecordModel class (to create objects from the Google Books API data) and a FetchRequest class with a #basicSearch method (on the theory that perhaps this class could be extended at a later point to integrate other types of searches).

7. Return to writing tests and flush out the logic for the tests. Scrap most of the original descriptions I came up with as I learn more about the approaches people advocate when testing React Components, Redux dispatching, Thunks, and fetch actions. Make many mistakes. Keep hammering away at the tests. Realize that many problems I have with my test creation stem from too many objects and methods being tightly coupled and inter-dependent.  Attempt to refactor code and decouple objects/methods through dependency injection, attempting in particular to decouple the thunk that handles the fetching and dispatching from the BookRecordModel and the FetchRequest class.  Continue to work on tests, which seem to be going better and make more sense thanks to the decoupling.
- Side Note: There are definitely areas where the testing could be improved.  In particular:
  - The tests for the SearchResultsFooter component need to be beefed up to cover all sub-components.  Drafts of the tests were going poorly, perhaps due to too much conditional rendering in this component as-is.  
  - The tests in SearchLayoutAndLogic-FunctionCalls (testing the functions belonging to the SearchLayoutAndLogic component) should be extended to functions that call #document.getElementById.  Drafts of such tests were not up to snuff, particularly for getting and setting values using #document.getElementById.   

-----

Thanks for stopping by!
