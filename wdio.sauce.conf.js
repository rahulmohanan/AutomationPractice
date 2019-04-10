let merge = require('deepmerge');
let wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'us',
  sauceConnect: true,

  specs: [
    // Fill in this spot with any tests you might want to run repeatedly, but don't commit this file with those changes.
    //'./test/forgetPassword.spec.js'
  ],

  maxInstances: 50,
  capabilities: [

    //= ==================================================================================//
    // ---Windows platform---//
    //= ====================================================================================//
/*
    {
      browserName: 'chrome',
      platform: 'Windows 10',
      version: '66.0',
      extendedDebugging: true,
      logLevel: 'sauce:network'
    }*/
    // {
    //     browserName: "MicrosoftEdge",
    //     platform: "Windows 10",
    //     version: "16.16299",
    //     extendedDebugging: true, 
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "firefox",
    //     platform: "Windows 10",
    //     version: "59.0",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    // {
    //     browserName: "internet explorer",
    //     platform: "Windows 10",
    //     version: "11.103",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // },
    //= ==================================================================================//
    // ---IOS platform---//
    //= ====================================================================================//
    //  {
    //      browserName: "safari",
    //      platform: "macOS 10.14",
    //      version: "12.0",
    //      extendedDebugging: true,
    //      logLevel: 'sauce:network'
    //  }
    {
        browserName: "chrome",
        platform: "macOS 10.14",
        version: "66.0",
        extendedDebugging: true,
        logLevel: 'sauce:network'
    },
    // {
    //     browserName: "firefox",
    //     platform: "macOS 10.13",
    //     version: "59.0",
    //     extendedDebugging: true,
    //     logLevel: 'sauce:network'
    // }

  ],

  services: [ 'sauce'],

  // logLevel: 'error',

  waitforTimeout: 25000

})