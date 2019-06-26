# Birch

Welcome to Birch, a tool to search for your next favorite book!

## Introduction

Birch connects to the Google Books API to deliver search results entered into the app's search bar.  The app was built using [React]((https://github.com/facebook/create-react-app) and has a [Redux-managed state](https://redux.js.org/). It relies on [Thunks](https://github.com/reduxjs/redux-thunk) to handle asynchronous Redux dispatching and [React Router](https://reacttraining.com/react-router/) to handle navigation.

A live demo of the app is available via Heroku at https://birch-book-search.herokuapp.com/.

For more on the process of creating the app and creating tests for it, please see further below.

## Running the App Locally

To run the app locally:

1. Fork it in GitHub and clone it to your computer.

2. In your terminal, `cd` into the parent directory the app.  

3. In your terminal, run `npm install` to download dependencies.

4. You will need an API key specifically for Google Books for the app to connect to the Google Books API. See instructions [here](https://console.developers.google.com/apis/credentials?project=_).  The API key then needs to be launched with the app as an environment variable.  We recommend accomplishing this by:

  - creating a file in your root directory called `.env`,
  - running `git init` and adding the `.env` file to you `.gitignore` file, and
  - pasting into .env the following: REACT_APP_GOOGLE_BOOKS_API_KEY = "your actual API key"

5. In your terminal, from the app's parent director, run `npm start`.  Then head to localhost:3000 in your browser to use the app.

To close out the program, close your browser, and in the terminal where you ran `npm start`, hit control+c (on a Mac).  

To run the program again, repeat step 5.  

## Contributions, Bugs, Licence, and Code of Conduct

Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/breadoliveoilsalt/browseum. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant (http://contributor-covenant.org) code of conduct.

License:
The app is available as open source under the terms of the MIT License (http://opensource.org/licenses/MIT).

Code of Conduct:
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct (https://github.com/breadoliveoilsalt/browseum/blob/master/CODE_OF_CONDUCT.md).

-----




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
