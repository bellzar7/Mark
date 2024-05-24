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

# Project Architecture Overview

In this project, we follow a modular architecture approach.
## 1. Pages
The `Pages` are the primary components of our application. Each page represents a distinct user interface view or screen.

##### Example:
- `HomePage.js`
- `UserProfilePage.js`

## 2. Modules
Modules represent smaller, self-contained units of functionality that are used within our pages. These modules encapsulate specific logic or features.

##### Example:
- `LoginForm.js`
- `Header.js`
- `Footer.js`

## 3. Components
Components are reusable pieces of code that can be utilized throughout the application.

##### Example:
- `Button.js`
- `TextInput.js`
- `Icon.js`

## 4. Assets
The `Assets` directory houses various static files, including images, icons, and fonts.

> ***All images need to be in `.webp` format.***



##### Example:
- `images/`
    - `logo.png`
    - `background.jpg`
    - `images.js`
- `icons/`
    - `icon1.svg`
    - `icon2.svg`
    -  `icons.js`
- `fonts/`
    - `font1.ttf`
    - `font2.woff`

Importing images and icons is done through a separate JavaScript file located in the assets directory. We import these assets in the following manner:

##### Icons.js
```javascript
import logo from ".logo.svg";
export{logo}
```

##### module.js
```javascript
import { logo } from "../Assets/icons/icons.js";
```

## 5. Constants
The `Constants` module contains predefined values, configurations, or constants used within our application.

##### Example:
- `apiEndpoints.js`
- `errorMessages.js`
- `bot.js`



# BEM Naming Convention

In this project, we follow the `BEM` (Block, Element, Modifier) naming convention.
For more information on the BEM methodology, please visit the [official BEM website](https://en.bem.info/methodology/).



# Contributing to the Codebase

If you want to make changes in this repository it's essential to follow a structured approach when making changes to the codebase.

##### 1. Create a Feature Branch

```git checkout -b feature/your-feature-name```
##### 2. Make and Commit Your Changes
```git add .```
```git commit -m "Add a clear and concise commit message here```

##### 4. Push Your Branch
```git push origin feature/your-feature-name```
##### 5. Create a Pull Request (PR) and equest Code Review from team lead

##### 6. Address Feedback
If changes are requested during the code review, make the necessary adjustments and push the changes to your feature branch. 

> **Warning:** You can not push your changes directly to master branch in any case
