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

// Initialize the test environment
coreTesting.TestBed.resetTestEnvironment();
coreTesting.TestBed.initTestEnvironment(
    browserTesting.BrowserDynamicTestingModule,
    browserTesting.platformBrowserDynamicTesting()
);

// Let the browser show a full stack trace when an error happens
Error.stackTraceLimit = Infinity;
// Let's set the timeout for the async function calls to 3 sec. (default is 5 sec.)
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

// Find all files with .spec.ts extensions
const context = require.context('../src/', true, /\.spec\.ts$/);

// For each file, call the context function that will require the file and load it up here.
context.keys().forEach(context);