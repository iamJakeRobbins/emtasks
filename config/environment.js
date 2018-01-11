/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'emtasks',
    environment,
		contentSecurityPolicy: {
	    'script-src': "'self' 'unsafe-eval' apis.google.com",
	    'frame-src': "'self' https://*.firebaseapp.com",
	    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
	  },
		firebase: {
			apiKey: "AIzaSyCdXcvin-_t-orCHhgOWPn83uBlx5jIQgA",
	    authDomain: "mk-app-8fe35.firebaseapp.com",
	    databaseURL: "https://mk-app-8fe35.firebaseio.com",
	    projectId: "mk-app-8fe35",
	    storageBucket: "mk-app-8fe35.appspot.com",
	    messagingSenderId: "1003112981509"
		},
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
