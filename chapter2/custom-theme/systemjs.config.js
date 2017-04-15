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
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.min.js',
        '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.min.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.min.js',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.min.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.min.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.min.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
        'rxjs': 'node_modules/rxjs',
        'primeng': 'node_modules/primeng',
        'app': 'src'
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
        'rxjs': {main: 'Rx'}
    }
});