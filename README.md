# SQL Editor/Console

Created a SQL editor which generated data fetched from the database.

Application Link: https://aryan-master.github.io/SQL-Editor-console/

## ⚙ Libraries Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

## 👨‍💻 App Features

- User can get data of any of the predefined SQL queries either by using SQL Editor.\
- User can also use slider menu to select perticular table and get result.\
- User can search for a particular data among many records using the search bar.\
- User can sort data directly by clicking the Table Headers title.\
- User can see query runtime in milliseconds(ms).\
- User can download the data in CSV and JSON Format.\
- User can navigate to different pages using pagination.\

# Predefined SQL Queries

- `select * from categories`
- `select * from customers`
- `select * from employees`
- `select * from orders`
- `select * from products`
- `select * from regions`

## ⏳ Application Loading Time
All the calculations are based on the report from [Lighthouse Chrome DevTools Report](https://developers.google.com/web/tools/lighthouse#devtools)
Page load time for desktop is between 0.8 to 1.0 sec.

Results from [Lighthouse Chrome DevTools Report](https://developers.google.com/web/tools/lighthouse#devtools) ->
![sql-editor-lhreport1](https://user-images.githubusercontent.com/68116253/166192665-78622bbc-b06a-4267-9ab7-ea2853fc6b28.jpg)

![sql-editor-lhreport2](https://user-images.githubusercontent.com/68116253/166192602-a26477a0-a5c9-48db-97ed-a5e114e341d8.jpg)

## Steps taken to Optimize

- Import for react-ace editor was long tasks running during page load, Converted it to Lasy loaded component using `React.lazy()` for code-splitting and delaying it's loading.
- Used `React.Memo()` to optimize the render performance of functional components.
- Used `Lighthouse DevTools Extension` to find the performance issues and fix them using their actionable suggestion.

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



