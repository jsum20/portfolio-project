# How to use 

## Setting up on your pc

Use git clone to clone this project into your local machine and then do 'npm install' to install all the required dependencies for this project. However note that, VScode must be installed and and also Node for running JS code.
https://phoenixnap.com/kb/install-node-js-npm-on-windows 

When the contents are loaded into VScode, using 'npm start' will start the localhost:3000 server which allows you to change the content as you wish.

After you are happy with the changes, to deploy/host the new website with all the changes you have made, use 'npm run build'

## Project structure

In data: It contains all the information displayed within each page. If you wish to change any details this can be done here. It doesn't use standard markdown rules however you can use '\n' for a line break. I dont think bullet points work so opt for '1. 2. 3.' if you wish, or you could go into the Pages section and add an 'li' element. 

To change the favicon, make sure the name is 'favicon.ico' and drag and drop from your files into the public folder. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
