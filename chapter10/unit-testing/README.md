## Unit testing with Jasmine and Karma

### Prerequisites

Node.js version 6.x or higher, NPM 3.x or higher.

### Install

```sh
npm install
```

### Start application

Start application in the development mode.

```sh
npm start
```

You can also start the application in the production mode with minified code, AOT and Tree Shaking.

```sh
npm run start:prod
```

Running application is available at [http://localhost:3000/](http://localhost:3000/). You don't need to stop the server when you code, it runs in the watch mode.

### Run all unit tests (single run)

In Chrome and PhantomJS.

```sh
npm run test
```

Only in Chrome.

```sh
npm run test:chrome
```

Only in PhantomJS.

```sh
npm run test:headless
```

### Run concrete tests in watch mode

```sh
npm run test:chrome:grep -- app/section/section.component.spec.ts
npm run test:chrome:grep -- app/section/service/country.service.spec.ts
```

or

```sh
npm run test:headless:grep -- app/section/section.component.spec.ts
npm run test:headless:grep -- app/section/service/country.service.spec.ts
```

### Run tests within a folder in watch mode

```sh
npm run test:chrome:grep -- app/section
```

or

```sh
npm run test:headless:grep -- app/section
```