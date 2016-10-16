exports.config = {
  services: ['browserstack'],
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  server: 'hub-cloud.browserstack.com',

  updateJob: false,
  specs: [
     './test/features/**/*.feature'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'webdriver-browserstack'
  },

   capabilities: [
     {
  'os': 'Windows',
  'os_version': '7',
  'browser': 'Chrome',
  'browser_version': '54.0 beta',
  'resolution': '1024x768'
},{
  'os': 'Windows',
  'os_version': '7',
  'browser': 'Firefox',
  'browser_version': '50.0 beta',
  'resolution': '1024x768'
},{
  'os': 'Windows',
  'os_version': '7',
  'browser': 'IE',
  'browser_version': '10.0',
  'resolution': '1024x768'
},{
    //browser: 'safari'
  },{
  'browserName': 'iPhone',
  'platform': 'MAC',
  'device': 'iPhone 6'
},
{
  'browserName': 'Android',
  'platform': 'android',
  //'device': 'Nexus 5'
}],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  
  reporters: ['spec', 'junit'],     
  reporterOptions: {
        junit: {
            outputDir: './Reports'
        }
    },
  framework: 'cucumber',
  //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    //reporters: ['spec'],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: [            
        ],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        //tags: require('./test/tagProcessor'),           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

