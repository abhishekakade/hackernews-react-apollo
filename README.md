# React Apollo GraphQL Hacker News

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Apollo GraphQL](https://www.apollographql.com/).

## How to run this project locally -

After cloning the repo, open git bash/terminal and -
`cd hackernews-react-apollo`
`yarn install`
`yarn start`

Then go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

To use the server and GraphiQL GUI, you will need to open another git bash/terminal window (without closing the previous one) and -
`cd server`
`yarn install`
`yarn prisma deploy`
`yarn start`

And then go to [http://localhost:4000](http://localhost:4000) to view it in the browser.

Note: Both servers should be running at the same time for this app to work. To terminate the server, press **Ctrl + C** in the terminal window. You will have to do this twice (once in each terminal window) to terminate both the servers. Then close both the terminal windows.
