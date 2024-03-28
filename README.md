## About this app

This application was put together as a learning / test assessment and understanding around React apps

## What this app does

I've tried to keep this app as authentic to a three page app in the traditional sense, but utilising the SPA method and brining in / out components instead of loading separate pages.

## Post Container Component 

NB. Due to trying to refactor for testing and DI, PostContainer2.js is the working component. 

Post container is a reusable component that accepts 3 parameters and is designed to operate / view differently depending on the params its called with. 
Params being:
ShowSummary - true will render out just the title of the content from the external API, false will render it all.
ShowCount - The number of posts to display 
URl - The URL where to get the posts from

A fetch data loading spinner has been added so you can visually see that content is being brought in. Because the API is pretty instant, I've added a JS wait timer so that it stalls getting the content in and you can see it "fetching".

Error handling has been added, so if there is a problem

To make it look a little more authentic, I've added a bit of code to render out a pretend user based on user ID from the post api - essentially changing the userID number into an actual name.  

## What are the 'pages'.
Home.js
Renders a bit of standard homepage guff with a sidebar of the post api data, just calling 5 posts and a summary.

otherlayout.js
Renders just the post container but a non summary version and including all posts from the API. Included a view / hide button to show the actual body of the post. 

createerror.js 
Purposely calls the API with a broken URL to get the post container to fail and show a gracious error message to the user.

## TODO
Implement testing of the components. As I have not correctly rendered or included my components, being able to do any sort of testing has been a bit of a problem.

I need to get a better understanding of how the components work and fit together and then be in a position to refactor them and add unit testing.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
