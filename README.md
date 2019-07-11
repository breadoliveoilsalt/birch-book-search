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

## Updates as of July 11, 2019

An an update, here is a summary of the latest refactoring steps:

1. Add and modify a few components to improve UI. For example, add a `<PageNotFound>` component to render in response to an invalid browser path. Update `<JumpToTopButton>` so the button has a fixed position in the window once search results load, so the user doesn't have to scroll all the way to the bottom of the page to find the button.

2. Clean up aspects of components that had been bothering me and try to increase readability. In addition, break responsibility of certain components into sub-components for better allocation of single-responsiblity and for easier testing.  For example, move `<BrowserRouter>`'s switch capabilities from `<App>` to a new `<Routes>` component, which enabled me to test whether different components would render properly depending on the browser's path.

3. Update tests to cover the new components and refactoring described above and below.  Try to DRY up tests, particularly relying more on `#beforeEach` for test set up.

4. Clean up folder structure and file names for better organization and navigation.  For example, move action creators and thunk to new `/actions` folder.  Implement `actionTypes` file in `/actions` for keeping track of the app's actions.  Create folder `/models` for models, create folder `/builders` for object builders (as part of implementing builder pattern, described below), and create folder `/api` to hold classes responsible for making API requests.  Remove redundancies in file names where a folder name makes it clear what the file contains.  For example, remove 'reducer' from the names of files that are in the `/reducers` folder (except for `rootReducer`, since research seems indicate this is standard). Remove 'model' from the file name for the `Book` model, which is now just `book.js` under the `/models` folder. Remove 'class' from the file name for the `FetchRequest` class, which is now just `fetchRequest.js` under the `/api` folder.

5. Attempt to make previous `FetchRequest` class extendable to different APIs in the future by separating it from the functions and properties needed to make a request to the Google Books API.  That is, move the functions and properties relevant to a Google Books API request to a new class, `GoogleBooksAPIRequest`, which is a sub-class of the `FetchRequest` class.  An instance of the `FetchRequest` class now has only the fetching functionality and a `searchTerms` property, and ideally `FetchRequest` could be extended to other sub-classes making different API requests in the future.  The `FetchRequest` and `GoogleBooksAPIRequest` classes are now under the new `/api` folder.

6. Chew on the prior version of `#getBookRecords` thunk, which previously had responsibility for (1) triggering an API request, (2) funneling the returned data through a model to create instances, and then (3) dispatching the instances to the Redux store.  Decide that (2) is out of place -- there's no need for the thunk to know *what* it is dispatching -- and the thunk should only have responsibility for (1) and (3).  Refactor the thunk accordingly. But...

7. ...Where should (2) go? Where should the responsibility belong for creating Book objects from API data? Wrestle with this for a bit and then decide that `GoogleBooksAPIRequest` class can handle this responsibility, since we know on its face that it is requesting and returning book information.  As part of moving this responsibility to `GoogleBooksAPIRequest` class, rather than rely on the `Book` model to instantiate book objects, implement the builder pattern (**`googleBooksAPIReuqest.js`, lines 140-150**), with a new `BookBuilder` class in a the `/builders` folder.

- Side note: I relied in particular on [this article](https://enmascript.com/articles/2019/03/18/building-objects-progressively-with-the-builder-pattern-in-javascript) for JavaScript advice and [this article](https://medium.com/@andreaspoyias/design-patterns-a-quick-guide-to-builder-pattern-a834d7cacead) for general concepts on the builder pattern.

8. As part of Step 7, wrestle a bit further with the following:

- Does `GoogleBooksAPIRequest` class now know too much about the `BookBuilder` class and, in turn, the `Book` model? Do we have a dependency problem? Ultimately decide this might be something we can live with, since `GoogleBooksAPIRequest` is all about books on its face.  

- Who should have responsibility for validating the API data and information used to create `Book` instances?  In doing research, find some who recommend that the builder validate data, and other who recommend that the model validate data. Ultimately decide to validate API data prior to passing it to the builder, with a new private function `#__parseAndValidateBookData` in `GoogleBooksAPIRequest`.  Why?  

  - I've noticed some inconsistencies in the data records returned from the Google Books API.  Most of the time, things worked as planned and expected fields for book information existed.  But sometimes they were not there.  And some of the expected fields that Birch needs are deeply nested.  Trying to call a builder setter method with an *expected* nested attribute field that didn't exist triggered errors even before the program tried to execute the setter method.  So `try/catch` patterns inside builder's setter methods to validate data wouldn't work.  As a result, I figured the best thing to do was to parse and validate the returned data from the Google Books API before calling on these methods.  Then we could call the builder's setter methods with this validated data.  Plus, in theory, I think this would tend to make the builder more extendable to other APIs in the future, as it wouldn't be embedded with validators specific to the Google Books API return data.


-----

Thanks for stopping by! 
