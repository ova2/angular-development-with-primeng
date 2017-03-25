System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    },
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'primeng': 'node_modules/primeng',
        'app': 'src'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'primeng': {
            defaultExtension: 'js'
        },
        'app': {
            main: 'main',
            defaultExtension: 'ts'
        },
        'rxjs': {main: 'Rx'},
        '@angular/common': {main: 'common.umd.min.js'},
        '@angular/compiler': {main: 'compiler.umd.min.js'},
        '@angular/core': {main: 'core.umd.min.js'},
        '@angular/forms': {main: 'forms.umd.min.js'},
        '@angular/router': {main: 'router.umd.min.js'},
        '@angular/platform-browser': {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});