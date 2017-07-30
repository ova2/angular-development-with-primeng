## Demo how to create a new theme "crazy" with Sass

### Prerequisites

- Node.js version 6.x or higher, NPM 3.x or higher.
- Build for production mode requires Java installed because we use Java-based [Google Closure Compiler](https://github.com/roman01la/webpack-closure-compiler).

### Install dependencies

```sh
npm install
```

### Run demo application

```sh
npm start
```

![Screenshot](https://raw.githubusercontent.com/ova2/angular-development-with-primeng/master/chapter2/custom-theme/theme.png)

### Build the new theme for distribution

```sh
npm run build:css
```

The path to the new theme: `src/assets/themes/crazy/theme.min.css`.