# Introduction

This project is running with React.js and Express.js

## Start express server

On localhost start the server by running `npm start`. This will start the express server on localhost:3001

## Start react app

To start the react app. Go to the client folder `cd client`. And `npm start` there. Then the react app will be started as well.

**Note: You have to start the app in that order. Otherwise it will not run**

## Deployment

The app is designed to run on Heroku. Therefore there is a `heroku-postbuild`-command that will run build the react app on the server. Do not change the paths in the server.js. This is needed to make it work on Heroku.
