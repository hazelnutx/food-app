# Nutrition Planner
An app that helps you find food that fits your diet.
Built with [React](https://reactjs.org/), [Material-UI](https://material-ui.com/) and uses [Nutritionix](https://www.nutritionix.com/) as API.

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![screenshot](https://github.com/ksandin/food-app/blob/main/docs/screenshot.png?raw=true)

# Time spent on MVP
~16 hours (4 coding sessions, ~4 hours each, from project start until 2021-02-03)

# Goals
Apart from satisfying the test instructions I set these goals for myself:

- [x] Every module needs to be documented.
- [x] Easy to understand structure
- [x] Good separation of concerns
- [x] Demonstration of workflow in github issues

# Improvements
I have created [github issues](https://github.com/ksandin/food-app/milestone/3) describing several technical and user experience improvements that can and should be made for an app like this.

# Caveats

### Semantics over optimization
Theoretically optimal react components should memoize callbacks to make
sure the React reconciler only updates when necessary. This can lead to very verbose code,
so when performance is not a problem I prefer to prioritize semantic code and skip memoizing,
which you see me do all over this project.

### Excessive non-batched API requests
In [searchForFoods.ts](src/api/custom/searchForFoods.ts) I am performing multiple API calls and composing the results into a convenient
rich client side data structure. This consumes our rate limit quicker than necessary,
but it was a very cheap design in terms of development, which I decided was okay for the goals of this project.

### No API proxy
As the test instruction had no server side requirement I did not develop an API proxy to 
hold the API keys. The keys are instead injected into the frontend application via environment variables, which is a bad practice.

### No unit tests
As the test instruction had a small scope there was no room for doing TDD (Or at least I prioritized other goals than TDD).
I did however prepare architecture for tests and test coverage.

# Project structure
A conventional CRA, with `index.tsx` being the entry point.
`index.tsx` renders the app once, `src/components/App` being the root component, and react keeps it running.
 
Notable files and folders and what their purpose is:

> For more information about a file see the comments in the file

- `src/index.tsx` application entry point
- `src/api` API types and functions. Interfaces with [Nutritionix](https://www.nutritionix.com/).
- `src/api/lookup` Mirrors API operations specified in the [Food Lookup Endpoints](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.84ciec341szv) section of the Nutritionix documentation
- `src/api/custom` Custom API operations that serve the application
- `src/api/types` Mirrors the types we use from the Nutritionix API
- `src/components` react components
- `src/fixtures` static data
- `src/functions` pure functions, often helpers to derive or operate on state
- `src/hooks` react hooks
- `src/state` types used as application state
- `src/types` typescript declaration files
- `design` design documents (mostly screenshots from other apps to use as inspiration)

# Prerequisites
To run the app you need to configure a Nutritionix `app id` and `app key`.
These can be retrieved by registering at [developer.nutritionix.com](https://developer.nutritionix.com/) and going to the page `View API Keys`.

Copy `.env.example` to `.env` and add your app id and app key to the `.env` file:
```
REACT_APP_NUTRITIONIX_APP_ID=your_app_id
REACT_APP_NUTRITIONIX_APP_KEY=your_app_key
```

# Getting started
1. Clone this repository
2. Run `yarn install`
3. Make sure you have configured your `.env` (see above)
4. Run `yarn start`

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
