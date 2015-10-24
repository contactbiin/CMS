'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'BiinCMSApp';

	var applicationBackendURL = window.location.href.indexOf('angle-biin') > -1 ? 'https://qa-biinapp.herokuapp.com/' :
		window.location.href.indexOf('dev') > -1 ? 'https://dev-biinapp.herokuapp.com/' :
			window.location.href.indexOf('qa') > -1 ?'https://qa-biinapp.herokuapp.com/' :
				window.location.href.indexOf('demo') > -1 ? 'https://demo-biinapp.herokuapp.com/' :
					window.location.href.indexOf('production') > -1 ? 'https://biin.io/' :
						window.location.href.indexOf('biin.io') > -1 ? 'https://biin.io/' : '';



	var applicationModuleVendorDependencies = ['ngRoute', 'ngAnimate', 'ngStorage', 'ngTouch', 'ngCookies',
        'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'ngSanitize',
        'ngResource', 'ui.utils','ngAnimate', 'toaster','textAngular','bootstrap-tagsinput','angular-bind-html-compile',
		'datePicker','ui.bootstrap-slider','ngDragDrop'];
	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule,
		applicationBackendURL: applicationBackendURL
	};
})();
