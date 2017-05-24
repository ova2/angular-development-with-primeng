require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

// RxJS
require('rxjs/Rx');

const coreTesting = require('@angular/core/testing');
const browserTesting = require('@angular/platform-browser-dynamic/testing');

coreTesting.TestBed.resetTestEnvironment();
coreTesting.TestBed.initTestEnvironment(
    browserTesting.BrowserDynamicTestingModule,
    browserTesting.platformBrowserDynamicTesting()
);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

const context = require.context('../src/', true, /\.spec\.ts$/);

/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here.
 */
context.keys().forEach(context);