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

4. You will need an API key specifically for Google Books for the app to connect to the Google Books API. See instructions [here](https://console.developers.google.com/apis/credentials?project=_).  The API key then needs to be launched with the app as an environment variable.  We recommend accomplishing this by:

  - creating a file in your root directory called `.env`,
  - running `git init` and adding the `.env` file to you `.gitignore` file, and
  - pasting into .env the following: REACT_APP_GOOGLE_BOOKS_API_KEY = "your actual API key"

5. In your terminal, from the app's root directory, run `npm start`.  Then head to localhost:3000 in your browser to use the app.

6. To close out the program, close your browser, and in the terminal where you ran `npm start`, hit control+c (on a Mac). To run the program again, repeat step 5.  

To run and see tests for the app, in your terminal from the app's root directory, run `npm test --verbose`

## Contributions, Bugs, Licence, and Code of Conduct

Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/breadoliveoilsalt/browseum. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant (http://contributor-covenant.org) code of conduct.

License:
The app is available as open source under the terms of the MIT License (http://opensource.org/licenses/MIT).

Code of Conduct:
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct (https://github.com/breadoliveoilsalt/browseum/blob/master/CODE_OF_CONDUCT.md).

## Creating the App and Creating Tests for It

Here is a summary of my process for creating the app and its tests:

1. Start reading about the Google Books API.  Get a sense of what it can do and how to integrate it.

2. Sit down with paper and pencil and sketch out some imaginings on what the app would look like.  Still using paper, make an initial identification of the React components needed, their hierarchy, and which components should be presentational (as opposed to container components with functions).  Also brainstorm the shape of the Redux state and dispatching functions needed to update the state.

3. Create a working frame of the app using create-react-app. Start installing and integrating dependencies, such as Redux, Thunks, and React Router. Make sure Redux state is connected to the app.  

4. Get learning about how to do tests with React, Redux, and Thunks. Take a stab at the red/green/refactor pattern by writing tests only with descriptions for what I wanted to test, not the logic for the tests themselves.
  - This was my first time creating a test suite for an app.  I had been playing around with Mocha and Chai lately, but I knew there was going to be a big learning curve when it came to test suites that seemed relevant for an app like this, such as Jest, Enzyme, Sinon, fetchMock, and Redux Mock Store.  At that moment, in the interest of time, I figured that I would write descriptions of tests to get my brain working in a testing mindset and then flush out the test's logic as I continued to simultaneously build the app and learn more about testing.

5. Build out the components for the app. Connect it to the Google Books API and the Redux store.  Add some styling, taking a mobile-first approach and assuming the screen was 320px wide. Continue to play with stying here and there as the app takes shape and I notice things that need tweaking.

6. Start imaging how to move the app's logic toward an OOD structure.  Come up with a BookRecordModel class (to create objects from the Google Books API data) and a FetchRequest class with a #basicSearch method (on the theory that perhaps this class could be extended at a later point to integrate other types of searches).


-----
