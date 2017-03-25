## Setup PrimeNG project with Webpack

### Prerequisites

Node.js version 6.x or higher, NPM 3.x or higher.

### Install

```sh
npm install
```

### Run it

Start application in the development mode.

```sh
npm start
```

You can also start the application in the production mode with minified code, AOT and Tree Shaking.

```sh
npm run start:prod
```

Running application is available at [http://localhost:3000/](http://localhost:3000/). You don't need to stop the server when you code, it runs in the watch mode.

### Distribute it

Distributed application can be found in the `dist` folder after running

```sh
npm run build
```

or

```sh
npm run build:prod
```