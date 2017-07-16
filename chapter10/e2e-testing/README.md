## End-to-end testing with Protractor

### Prerequisites

- Node.js version 6.x or higher, NPM 3.x or higher.
- Build for production mode requires Java installed because we use Java-based [Google Closure Compiler](https://github.com/roman01la/webpack-closure-compiler).

### Install

```sh
npm install
```

### Start application

Development mode:

```sh
npm start
```

Production mode (with minified code, AOT and Tree Shaking):

```sh
npm run start:prod
```

Running application is available at [http://localhost:3000/](http://localhost:3000/). It runs in the watch mode.

### Run e2e tests

Ensure that the application is running at [http://localhost:3000/](http://localhost:3000/). In the second console, run

```sh
npm run e2e
```