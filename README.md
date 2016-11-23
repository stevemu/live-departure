# my ern stack starter (react+express+node.js)

## Features

* Node.js serve the index.html and bundled.js in production
* webpack-dev server watches new changes and compile the new bundle.js on-the-fly in development; in this case, the node.js server only serve API
* support hot reloading during development when using dev server.
* css is bundled with webpack
* Use react-router
* browser history fall-back
* use SASS
* backend port is specified in package.json via cross-env for easy change
* whether the envrionment is production is specified at envrionment variable NODE_ENV=production||or_other


## Need Install global npm modules first

```
sudo npm install webpack -g
sudo npm install cross-env -g
```

## How to start developing

```
export NODE_ENV=not_production
npm install
npm run server
npm run dev-server
```

Check your http://localhost:8080/

## How to deploy to production

to change the port, go to package.json and change 3000 to the port you desired

```
export NODE_ENV="production" 
npm install
npm run build-prod
npm run server
```

Check your http://${server}:3000/