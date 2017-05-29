### File uploading in all its glory

#### Prerequisites

Node.js version 6.x or higher, NPM 3.x or higher.

#### Install

```sh
npm install
```

### In the 1. terminal: start json-server as mock backend

```sh
npm run jsonserver
```

#### In the 2. terminal: start demo application

Development mode:

```sh
npm start
```

Production mode (with minified code, AOT and Tree Shaking):

```sh
npm run start:prod
```

Running application is available at [http://localhost:3000/](http://localhost:3000/). It runs in the watch mode.

#### Distribution

Distributed application can be found in the `dist` folder after running

```sh
npm run build
```

or

```sh
npm run build:prod
```