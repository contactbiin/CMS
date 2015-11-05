'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'BiinCMSApp';

	var applicationBackendURL = window.location.href.indexOf('angle-biin') > -1 ? 'https://qa-biinapp.herokuapp.com/' :
		window.location.href.indexOf('dev') > -1 ? 'https://dev-biin-backend.herokuapp.com/' :
			window.location.href.indexOf('qa') > -1 ?'https://qa-biin-backend.herokuapp.com/' :
				window.location.href.indexOf('demo') > -1 ? 'https://demo-biin-backend.herokuapp.com/' :
					window.location.href.indexOf('production') > -1 ? 'https://www.biin.io/' :
						window.location.href.indexOf('biin.io') > -1 ? 'https://www.biin.io/' :
							window.location.href.indexOf('localhost') > -1 ? 'https://dev-biin-backend.herokuapp.com/' : '';



	var applicationModuleVendorDependencies = ['ngRoute', 'ngAnimate', 'ngStorage', 'ngTouch', 'ngCookies',
        'pascalprecht.translate', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', 'cfp.loadingBar', 'ngSanitize',
        'ngResource', 'ui.utils','ngAnimate', 'toaster','textAngular','bootstrap-tagsinput','angular-bind-html-compile',
		'datePicker','ui.bootstrap-slider','ngDragDrop','nvd3'];
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

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('biinUsers');

/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('biins');

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.colors');

})();
(function () {
    'use strict';

    // Use Applicaion configuration module to register a new module
    ApplicationConfiguration.registerModule('app.core', [
        'app.routes',
        'app.sidebar',
        'app.navsearch',
        'app.preloader',
        'app.loadingbar',
        'app.translate',
        'app.settings',
        'app.forms',
        //'app.pages',
        'app.utils',
        'app.panels'
    ]);

})();

/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('dashboard');

/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('elements');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('app.forms');


'use strict';
ApplicationConfiguration.registerModule('gallery');

'use strict';
ApplicationConfiguration.registerModule('gmaps');


(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.lazyload');
})();
(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.loadingbar');
})();
'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('maintenance');

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.navsearch');
})();
/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('objectssidebar');

/**
 * Created by Ivan on 8/19/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('organization',['app.translate']);

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('page');

(function() {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.preloader');

})();


/**
 * Created by Ivan on 8/19/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('profile',['app.translate']);

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.routes',['app.lazyload']);

})();
(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.settings');

})();
/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('showcases');

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.sidebar');

})();
/**
 * Created by Ivan on 8/17/15.
 */
'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('sites');

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.translate');

})();
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');

(function() {
    'use strict';

    ApplicationConfiguration.registerModule('app.utils', [
          'app.colors'
          ]);

})();

'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
	}
]);

'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('app.listArticles', {
			url: '/articles',
			title: 'List Articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('app.createArticle', {
			url: '/articles/create',
			title: 'New Article',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('app.viewArticle', {
			url: '/articles/:articleId',
			title: 'View Article',
			templateUrl: 'modules/articles/views/view-article.client.view.html',
			controller: 'ArticlesController'
		}).
		state('app.editArticle', {
			title: 'Edit Article',
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);
'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Setting up route
angular.module('biinUsers').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('page.login', {
			url: '/login',
			templateUrl: 'modules/biinUsers/views/login.client.view.html'
		});
		/*.
		state('page.signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('page.forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('page.reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('page.reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('page.reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		}).
		state('app.password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('app.profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('app.accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		});*/
	}
]);

/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('biinUsers')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state','$location','$scope','Authentication','Organization'];
    function LoginFormController($http, $state,$location,$scope,Authentication,Organization) {
        var vm = this;
        $scope.authentication = Authentication;

        if ($scope.authentication.user) {
            $location.path('/dashboard');
        }

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.login = function() {
            vm.authMsg = '';

            if(vm.loginForm.$valid) {

              $http
                .post('api/account/login', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.data.account ) {
                    vm.authMsg = 'Incorrect credentials.';
                  }else{
                      $scope.authentication.user = response.data.account;
                      Organization.getOrganizations().then( function(){
                            $state.go('app.dashboard');
                          });

                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        }
    }
})();

/**
 * Created by Ivan on 8/27/15.
 */
'use strict';

// Setting up route
angular.module('biins').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.biins', {
                url: '/biins',
                templateUrl: 'modules/biins/views/biins.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**
 * Created by sofi on 10/8/15.
 */
/**=========================================================
 * Module: maintenance.js
 * Maintenance for biin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('biins')
        .controller('biinsModalController', BiinModalController);

    BiinModalController.$inject = ['$scope', '$modalInstance', 'selectedObj', 'elements', 'showcases'];
    function BiinModalController($scope, $modalInstance, selectedObj,elements,showcases) {

        $scope.type = selectedObj.type;
        $scope.elements=elements;
        $scope.showcases=showcases;

        //Create the modal for the creation Model
        if($scope.type==='create'){
            var obj={objectType:'1',notification:'', hasNotification:'0', isNew:true};
            var time = moment();
            time.minutes(0);
            time.hours(0);

            obj.onMonday='1';
            obj.onTuesday='1';
            obj.onWednesday='1';
            obj.onThursday='1';
            obj.onFriday='1';
            obj.onSaturday='1';
            obj.onSunday='1';
            obj.startTime=time.format();
            obj.endTime=time.format();
            $scope.obj= obj;
        }else
        {    $scope.obj =selectedObj.obj;
        }
        //$scope.objects=[];
        $scope.hasNotificationBool=false;
        $scope.hasTimeOptionsBool=false;

        //Days Activation
        $scope.mondayBool=false;
        $scope.tuesdayBool=false;
        $scope.wednesdayBool=false;
        $scope.thursdayBool=false;
        $scope.fridayBool=false;
        $scope.saturdayBool=false;
        $scope.sundayBool=false;

        //Set the scope values
        $scope.hasNotificationBool = $scope.obj.hasNotification==='1';
        $scope.hasTimeOptionsBool = $scope.obj.hasTimeOptions==='1';

        $scope.mondayBool =$scope.obj.onMonday==='1';
        $scope.tuesdayBool =$scope.obj.onTuesday==='1';
        $scope.wednesdayBool = $scope.obj.onWednesday==='1';
        $scope.thursdayBool = $scope.obj.onThursday==='1';
        $scope.fridayBool = $scope.obj.onFriday==='1';
        $scope.saturdayBool = $scope.obj.onSaturday==='1';
        $scope.sundayBool = $scope.obj.onSunday==='1';

        //Change the Object Type
        $scope.changeObjectType=function(selected){
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.obj.identifier='';
                });
            }, 100);
        };

        //Change the notification State
        $scope.changeNotificationState=function(){
            $scope.obj.hasNotification= $scope.hasNotificationBool?'1':'0';
        };

        //Change the notification State
        $scope.changeTimeOptionsState=function(){
            $scope.obj.hasTimeOptions= $scope.hasTimeOptionsBool?'1':'0';
        };

        //Change the day State
        $scope.changeDayState=function(varName, boolVarName){
            $scope.obj[varName] =$scope[boolVarName]?'1':'0';
        };

        $scope.save = function () {
            $modalInstance.close($scope.obj);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }
})();


/**=========================================================
 * Module: biins.controller.js
 * Controller for biins section
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('biins')
        .controller('BiinsController', BiinsController);

    BiinsController.$inject = ['$http', '$state', '$scope','$modal', 'Authentication', 'Organization', 'ObjectsSidebar'];
    function BiinsController($http, $state, $scope,$modal, Authentication, Organization, ObjectsSidebar) {


        /**=============================================================================================================
         *  Functions
         =============================================================================================================*/

        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.objectsSidebarService.enableAddButton = false;

        $scope.getSiteName = function (identifier) {
            var site = _.findWhere($scope.sites, {identifier: identifier});
            if (site) {
                return site.title1 + " " + site.title2;
            } else {
                return "";
            }
        };

        $scope.getObjectName = function (identifier, type) {
            if (identifier && type) {
                if (type === "1") {
                    var el = _.findWhere($scope.elements, {elementIdentifier: identifier});
                    if (el)
                        return el.title;
                }
                else {
                    var sh = _.findWhere($scope.showcases, {identifier: identifier});
                    if (sh)
                        return sh.name;
                }
            }
            return "name not available";
        };

        $scope.removeObject = function (index) {
            $scope.objectsSidebarService.selectedObject.objects.splice(index, 1);
            $scope.biins = $scope.objectsSidebarService.getObjects();
        };

        //Save The Biin Objects Changes
        $scope.save = function () {
            $http.put(ApplicationConfiguration.applicationBackendURL + 'api/venues/create', null, {
                headers: {
                    name: $scope.objectsSidebarService.selectedObject.venue,
                    orgidentifier: $scope.organizationId
                }
            }).success(function () {
                $http.post(ApplicationConfiguration.applicationBackendURL + 'api/biins/' + $scope.objectsSidebarService.selectedObject.identifier + '/update', $scope.objectsSidebarService.selectedObject).success(function () {
                    console.log("success");
                }).error(function (err) {
                    console.log(err);
                });
            });
        };

        var vm = this;
        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }

        /**=============================================================================================================
         * ObjectsSidebar Configuration
         *
         =============================================================================================================*/
        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.sidebarTemplate =
            "<div class='col-md-12 leftInformationArea'>" +
            "<label class='title-sidebar-object moduleTitle'>{{item.name}}</label>" +
            "<div class='body-sidebar-object'>" +
            "<localization class='moduleTitle' style='display: block'></localization>" +
            "<p class='moduleTitle'>{{item.status}}</p>" +
            "</div>" +
            "</div>";


        $scope.objectsSidebarService.template = $scope.sidebarTemplate;

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/

        $scope.$on('$stateChangeStart', function () {
            $scope.objectsSidebarService.reset();
        });

        $scope.$on('organizationChanged', function () {
            $scope.objectsSidebarService.selectedObject = null;
            $scope.objectsSidebarService.objects = [];

            $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;
            //Get the Sites Information
            $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/sites/').success(function (data) {
                $scope.sites = data.data.sites;
                //Get the elements
                $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/elements/').success(function (data) {
                    $scope.elements = data.data.elements;
                    //Get the showcases
                    $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/showcases/').success(function (data) {
                        $scope.showcases = data.data;
                        $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/biins/').success(function (data) {
                            $scope.biins = data.data;
                            $scope.objectsSidebarService.setObjects(data.data);
                        }).error(function (err) {
                            console.log(err);
                        });
                    }).error(function (err) {
                        console.log(err);
                    });
                }).error(function (err) {
                    console.log(err);
                });
            }).error(function (err) {
                console.log(err);
            });
        });

        $scope.$on("Biin: On Object Clicked", function (event, objectClicked) {

        });

        /**=============================================================================================================
         * Variables
         *
         =============================================================================================================*/

            //Init the the sites
        $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;

        /**=============================================================================================================
         * Self called functions
         *
         =============================================================================================================*/

            //Get the Sites Information
        $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/sites/').success(function (data) {
            $scope.sites = data.data.sites;
            //Get the elements
            $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/elements/').success(function (data) {
                $scope.elements = data.data.elements;
                //Get the showcases
                $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/showcases/').success(function (data) {
                    $scope.showcases = data.data;
                    $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.organizationId + '/biins/').success(function (data) {
                        $scope.biins = data.data;
                        $scope.objectsSidebarService.setObjects(data.data);
                    }).error(function (err) {
                        console.log(err);
                    });
                }).error(function (err) {
                    console.log(err);
                });
            }).error(function (err) {
                console.log(err);
            });
        }).error(function (err) {
            console.log(err);
        });


        //Add an object to the objects collection
        $scope.saveObject = function (obj) {
            if (obj)
                if ('isNew' in obj) {
                    delete obj.isNew;
                    $scope.objectsSidebarService.selectedObject.objects.push(obj);
                    $scope.biins = $scope.objectsSidebarService.getObjects();
                }
            //$scope.biins.push(obj);
            //Todo Do the method to save the save the data
        };

        $scope.getVenues = function (val) {
            return $http.get(ApplicationConfiguration.applicationBackendURL + 'api/venues/search', {
                headers: {
                    regex: val,
                    orgidentifier: $scope.organizationId
                }
            }).then(function (response) {
                return response.data;
            });
        };

        //Modal to edit or create an Object
        $scope.biinObject = function (size, type, obj) {

            var modalInstance = $modal.open({
                templateUrl: '/modules/biins/views/partials/biin.client.modal.view.html',
                controller: 'biinsModalController',
                size: size,
                resolve: {
                    selectedObj: function () {
                        if (type === 'create')
                            return {type: type};//name:$scope.sites[selectedIndex].title1,index:selectedIndex};
                        else
                            return {type: type, obj: obj};//name:$scope.sites[selectedIndex].title1,index:selectedIndex};
                    },
                    elements: function () {
                        return $scope.elements;
                    },
                    showcases: function () {
                        return $scope.showcases;
                    }
                }
            });

            modalInstance.result.then(function (objectToCreate) {
                $scope.saveObject(objectToCreate);
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

})();

(function() {
    'use strict';

    angular
        .module('biins')
        .directive('localization', organizationDropDown);

    organizationDropDown.$inject = ['$http','Organization'];
    function organizationDropDown ($http,Organization) {
        var directive = {
            link: link,
            restrict: 'E',
            template: "<text>{{getSiteName(item.siteIdentifier)}}</text>",
            transclude: false
        };
        return directive;

        function link(scope, element, attrs) {
            scope.organzationService = Organization;
            $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + scope.organzationService.selectedOrganization.identifier + '/sites/').success(function (data) {
                scope.sites = data.data.sites;
                scope.getSiteName = function (identifier) {
                    var site = _.findWhere(scope.sites, {identifier: identifier});
                    if (site) {
                        return site.title1 + " " + site.title2;
                    } else {
                        return "";
                    }
                };
                scope.$on('organizationChanged', function () {
                    $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + scope.organzationService.selectedOrganization.identifier + '/sites/').success(function (data) {
                        scope.sites = data.data.sites;
                    });
                });
            });

        }

    }


})();


(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#23b7e5',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide){
      
      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function () {
    'use strict';

    angular
        .module('app.core')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus) {
        // Add default menu entry
        //Menus.addMenuItem('sidebar', 'Home', 'home', null, '/home', true, null, null, 'icon-home');

        Menus.addMenuItem('sidebar', 'Dashboard', 'dashboard', null, '/dashboard', false, null, null,'icon-speedometer', "sidebar.MENU_DASHBOARD");
        Menus.addMenuItem('sidebar', 'Sites', 'sites', null, '/sites', false, null, null,'icon-pointer', "sidebar.MENU_SITES");
        Menus.addMenuItem('sidebar', 'Elements', 'elements', null, '/elements', false, null, null,'icon-book-open', "sidebar.MENU_ELEMENTS");
        Menus.addMenuItem('sidebar', 'Showcase', 'showcases', null, '/showcase', false, null, null,'icon-docs', "sidebar.MENU_SHOWCASES");
        Menus.addMenuItem('sidebar', 'Biins', 'biins', null, '/biins', false, null, null,'icon-feed', "sidebar.MENU_BIINS");
        Menus.addMenuItem('sidebar', 'Administration', 'administration', 'dropdown', null, false, null, null,'fa fa-gears', "sidebar.MENU_ADMINISTRATION");
        //this.addSubMenu   (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
        Menus.addSubMenuItem('sidebar', 'administration', 'Profile','profile',null, false, null, null, "sidebar.MENU_PROFILE");
        Menus.addSubMenuItem('sidebar', 'administration', 'Organizaciones','organization',null, false, null, null, "sidebar.MENU_ORGANIZATIONS");
        Menus.addMenuItem('sidebar', 'Maintenance', 'maintenance', null, '/maintenance', false, null, null,'icon-settings',"sidebar.MENU_MAINTENANCE");
    }

})();

(function () {
    'use strict';

    angular
        .module('app.core')
        .config(appRoutes)
    ;
    appRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function appRoutes($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // default route
        $urlRouterProvider.otherwise('/home');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            .state('app', {
                // url: '/',
                abstract: true,
                templateUrl: 'modules/core/views/core.client.view.html',
                resolve: helper.resolveFor('modernizr', 'icons', 'filestyle')
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'modules/core/views/home.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            })
            .state('appleftbar', {
                abstract: true,
                templateUrl: 'modules/core/views/coreleftbar.client.view.html',
                resolve: helper.resolveFor('modernizr', 'icons', 'filestyle')
            })
            /*.state('app.biinUsers', {
                url: '/login',
                templateUrl: 'modules/biinUsers/views/login.client.view.html',
                resolve: helper.resolveFor('biinUsers')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'modules/dashboard/views/dashboard.client.view.html',
                resolve: helper.resolveFor('dashboard')
            })*/
            //
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // -----------------------------------
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
        ;

    }
})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams',  '$window', '$templateCache', 'Colors'];
    
    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors) {
      
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;

      // Uncomment this to disable template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if (typeof(toState) !== 'undefined'){
            $templateCache.remove(toState.templateUrl);
          }
      });*/

      // Allows to use branding color with interpolation
      // {{ colorByName('primary') }}
      $rootScope.colorByName = Colors.byName;

      // cancel click event easily
      $rootScope.cancel = function($event) {
        $event.stopPropagation();
      };

      // Hooks Example
      // ----------------------------------- 

      // Hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState/*, fromState, fromParams*/) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
      // Hook error
      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(error);
        });
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(/*event, toState, toParams, fromState, fromParams*/) {
          // display new view from top
          $window.scrollTo(0, 0);
          // Save the route title
          $rootScope.currTitle = $state.current.title;
        });

      // Load a title dynamically
      $rootScope.currTitle = $state.current.title;
      $rootScope.pageTitle = function() {
        var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
        document.title = title;
        return title;
      };      

    }

})();


'use strict';

angular.module('app.core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','Organization',
	function($scope, Authentication, Menus,Organization) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');
		$scope.organizationService = Organization;

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

	}
]);

'use strict';

angular.module('app.core').service('Categories', ['$http', function (async) {
    return {
        getList: function () {
            var promise = async({method:'GET', url:ApplicationConfiguration.applicationBackendURL + 'api/categories'})
                .success(function (data, status, headers, config) {
                    return data;
                })
                .error(function (data, status, headers, config) {
                    return {"status": false};
                });
            return promise;
        }

    };
}]);

'use strict';

//Menu service used for managing  menus
angular.module('app.core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position,
																iconClass, translateKey, alert) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				//title: menuItemTitle,
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender,
				iconClass: iconClass || 'fa fa-file-o',
				translate: translateKey,
				alert: alert
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position, translateKey) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender,
						translate: translateKey
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
		//Adding the sidebar menu
		this.addMenu('sidebar');
	}
]);

'use strict';

angular.module('app.core').service('Organization', ['$http', '$rootScope', 'Authentication',


    function ($http, $rootScope, Authentication) {
        var selectedOrganization = {};
        var organizationsList = [];

        var promise = 'undefined';
        if (Authentication.user != "") {
            promise = $http.get('/api/organization').then(function (result) {
                    service.organizationsList = result.data.data;
                    service.selectedOrganization = service.organizationsList[0];
                },
                function () {

                }
            );
        }
        /*var promise = $http.get('/api/organization').then(function(result) {
         service.organizationsList = result.data.data;
         service.selectedOrganization = service.organizationsList[0];
         },
         function(){

         }
         );*/
        var service = {
            promise: promise,
            selectedOrganization: selectedOrganization,
            organizationsList: organizationsList,

            getOrganizations: function () {
                return $http.get('/api/organization').then(function (result) {
                        service.organizationsList = result.data.data;
                        service.selectedOrganization = service.organizationsList[0];
                    },
                    function () {
                    });
            },

            setSelectedOrganization: function (index) {
                if (index >= 0 && index < this.organizationsList.length) {
                    this.selectedOrganization = this.organizationsList[index];
                    $rootScope.$broadcast('organizationChanged');
                }
            },

            removeOrganization: function (id) {
                for (var i = 0; i < this.organizationsList.length; i++) {
                    if (this.organizationsList[i].identifier == id) {
                        this.organizationsList.slice(i, 1);
                        break;
                    }
                }
            }
        };

        return service;
    }
]);

'use strict';

// Setting up route
angular.module('dashboard').config(['$stateProvider',
    function ($stateProvider) {
        // Users state routing
        $stateProvider.
            state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'modules/dashboard/views/dashboard.client.view.html',
                resolve: {
                    organization: function (Organization) {
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function DashboardController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        $scope.authentication = Authentication;
        $scope.organizationService = Organization;
        $scope.globalFilters = GlobalFilters;
        activate();

        ////////////////

        function activate() {

        }

        $scope.changeChartRange = function (numberDays) {
            $scope.globalFilters.changeDateRange(numberDays);
        }
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('mobileTotalBiinedController', mobileTotalBiinedController);

    mobileTotalBiinedController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function mobileTotalBiinedController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        $scope.value = 0;

        activate();


        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/totalbiined',
                { headers:{
                    filters : JSON.stringify(filters) } } ).success(function(data) {
                    $scope.value = data.data;
                });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('mobileAverageVisitedElementsController', mobileAverageVisitedElementsController);

    mobileAverageVisitedElementsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function mobileAverageVisitedElementsController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        $scope.value = 0;

        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/visitedelements',
                { headers:{
                    filters : JSON.stringify(filters) } } ).success(function(data) {
                    $scope.value = data.data;
                });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('mobileNewVisitsPercentageController', mobileNewVisitsPercentageController);

    mobileNewVisitsPercentageController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function mobileNewVisitsPercentageController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        $scope.value = 0;

        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/newvisits',
                { headers:{
                filters : JSON.stringify(filters) } } ).success(function(data) {
                $scope.value = data.data;
            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('mobileSessionsController', mobileSessionsController);

    mobileSessionsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization'];
    function mobileSessionsController($http, $state, $scope, Authentication, Organization) {
        var vm = this;
        $scope.value = 0;

        $scope.currentDays = 0;

        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }


        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.currentDays);
        });


        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.currentDays);
        });
        $scope.getChartData = function ( days )
        {
            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/sessions').success(function(data) {
                $scope.value = data.data;
            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
            $scope.currentDays = days;
        };

        $scope.changeChartRange(30);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('mobilePieVisitsController', mobilePieVisitsController);

    mobilePieVisitsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function mobilePieVisitsController($http, $state, $scope, Authentication, Organization,GlobalFilters) {

        var vm = this;
        $scope.value = 0;
        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.options = {
            chart: {
                type: 'pieChart',
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/newsvsreturning',{ headers:{
                filters : JSON.stringify(filters) } } ).success(function(data) {
                var information  = data.data;
                $scope.data = [
                    {
                        key: "New Visits",
                        y: information.news
                    },
                    {
                        key: "Frecuent Client",
                        y: information.returning
                    }
                ];
            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);

    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('siteNewVisitsPercentageController', siteNewVisitsPercentageController);

    siteNewVisitsPercentageController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function siteNewVisitsPercentageController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        $scope.value = 0;

        activate();


        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/local/newvisits',
                { headers:{
                    filters : JSON.stringify(filters) } } ).success(function(data) {
                    $scope.value = data.data;
                });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('siteFromVisitsBarController', siteFromVisitsBarController);

    siteFromVisitsBarController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization'];
    function siteFromVisitsBarController($http, $state, $scope, Authentication, Organization) {
        var vm = this;
        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }

        $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;
        $scope.currentDays = 0;

        $scope.$on('organizationsChanged', function(orgId) {
            $scope.getChartData($scope.currentDays);
        });

        $scope.getChartData = function ( days )
        {
            $scope.options = {
                chart: {
                    type: 'multiBarHorizontalChart',
                    x: function(d){return d.label;},
                    y: function(d){return d.value;},
                    showControls: false,
                    showValues: true,
                    transitionDuration: 500,
                    xAxis: {
                        showMaxMin: false
                    },
                    yAxis: {
                        axisLabel: 'Values',
                        tickFormat: function(d){
                            return d3.format(',.2f')(d);
                        }
                    }
                }
            };

            $scope.data = [
                {
                    "key": "Series1",
                    "values":
                        [
                            {
                                "value" : 25.307646510375
                            }
                        ]
                },
                {
                    "key": "Series2",
                    "values":
                        [
                            {
                                "value" : 25.307646510375
                            }
                        ]
                }
            ];
        }

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
            $scope.currentDays = days;
        }
        $scope.changeChartRange(30);

    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('siteSessionsController', siteSessionsController);

    siteSessionsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization'];
    function siteSessionsController($http, $state, $scope, Authentication, Organization) {
        var vm = this;
        $scope.value = 0;
        $scope.currentDays = 0;

        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }


        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.currentDays);
        });


        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange(numberdays);
        });

        $scope.getChartData = function ( days )
        {
            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/local/sessions').success(function(data) {
                $scope.value = data.data;
            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
            $scope.currentDays = days;
        };

        $scope.changeChartRange(30);
    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('sitesPieVisitsController', sitesPieVisitsController);

    sitesPieVisitsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function sitesPieVisitsController($http, $state, $scope, Authentication, Organization,GlobalFilters) {

        var vm = this;
        $scope.value = 0;
        activate();

        ////////////////
        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.options = {
            chart: {
                type: 'pieChart',
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/local/newsvsreturning',{ headers:{
                filters : JSON.stringify(filters) } } ).success(function(data) {
                var information  = data.data;
                $scope.data = [
                    {
                        key: "New Visits",
                        y: information.news
                    },
                    {
                        key: "Frecuent Client",
                        y: information.returning
                    }
                ];
            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);

    }
})();

/**
 * Created by Ivan on 10/26/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('VisitsGraphController', VisitsGraphController);

    VisitsGraphController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization','GlobalFilters'];
    function VisitsGraphController($http, $state, $scope, Authentication, Organization,GlobalFilters) {
        var vm = this;
        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.globalFilters = GlobalFilters;
        }

        $scope.$on('organizationChanged',function(){
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.secondCriteriaChange = function(value)
        {
            $scope.getChartData($scope.globalFilters.dateRange);
        };

        $scope.firstCriteriaChange = function(value)
        {
            $scope.getChartData($scope.globalFilters.dateRange);
        };

        function getDateString(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!
            var yyyy = date.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            var stringDate = yyyy + '-' + mm + '-' + dd;
            return stringDate;
        }

        $scope.getChartData = function ( days )
        {
            var today = new Date();
            var previusDate = new Date();
            previusDate.setTime(today.getTime() - days * 86400000);

            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;


            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/notifications', {
                headers: {
                    filters : JSON.stringify(filters)
                }
            }).success(function(dataNotifications) {

                $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/visits', {
                    headers: {
                        filters : JSON.stringify(filters)
                    }
                }).success(function(data) {
                    var visits = [];
                    var notifications =[];
                    var keys = Object.keys(data);

                    var maxValue = 1;
                    for (var i = 0; i < keys.length; i++) {
                        var s = new Date(keys[i]);
                        visits.push({
                            x: s.getTime(),
                            y: data[keys[i]]
                        });
                        notifications.push({
                            x: s.getTime(),
                            y: dataNotifications[keys[i]]
                        });
                        if(data[keys[i]] > maxValue )
                            maxValue = data[keys[i]];
                    }
                        $scope.data = [{
                            values: visits,
                            key: 'visits',
                            color: '#006699',
                            area: true
                        },
                        {
                            values: notifications,
                            key: 'Notifications',
                            color: '#ffa500',
                            area: true
                        }];

                    $scope.options = {
                        chart: {
                            type: 'lineChart',
                            height: 250,
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 40,
                                left: 55
                            },
                            x: function(d) {
                                return d.x;
                            },
                            y: function(d) {
                                return d.y;
                            },
                            //useInteractiveGuideline: true,
                           /* dispatch: {
                                stateChange: function(e) {
                                    console.log("stateChange");
                                },
                                changeState: function(e) {
                                    console.log("changeState");
                                },
                                tooltipShow: function(e) {
                                    console.log("tooltipShow");
                                },
                                tooltipHide: function(e) {
                                    console.log("tooltipHide");
                                }
                            }, */
                            xAxis: {
                                axisLabel: 'Date',
                                tickFormat: function(d) {
                                    return d3.time.format('%d-%m-%y')(new Date(d));
                                },
                                showMaxMin:false,
                                axisLabelDistance: 30
                            },
                            yAxis: {
                            },
                            callback: function(chart) {
                                //console.log("!!! lineChart callback !!!");
                            },
                            forceY:[0,maxValue]
                        }
                    };
                });

            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
            $scope.currentDays = days;
        };
        $scope.changeChartRange(30);

    }
})();

'use strict';

angular.module('dashboard').service('GlobalFilters', ['$http','$rootScope',

	function($http, $rootScope) {

        var service = {
            selectedSite : "",
            dateRange : 0,

            changeDateRange : function ( numberDays ){
                this.dateRange = numberDays;
                $rootScope.$broadcast('Biin: Days Range Changed', numberDays);
            }
        };

        return service;
	}
]);

/**
 * Created by Ivan on 8/27/15.
 */
'use strict';

// Setting up route
angular.module('elements').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.elements', {
                url: '/elements',
                templateUrl: 'modules/elements/views/elements.client.view.html',
                resolve:{
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**=========================================================
 * Module: elements.controller.js
 * Controller of elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('elements')
        .controller('ElementsController', ElementsController);

    ElementsController.$inject = ['$http', '$state','$timeout','$scope', 'Authentication', 'Organization', 'Categories', 'ObjectsSidebar','Gallery'];

    function ElementsController($http, $state, $timeout, $scope, Authentication, Organization,Categories, ObjectsSidebar,Gallery) {
        activate();

        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.sidebarTemplate =
            "<div class='col-md-3 thumbListImage'>" +
                "<img ng-if='item.media.length == 0' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+' alt=''/>" +
                "<img ng-if='item.media.length>0' ng-src='{{item.media[0].url}}' pending-indicator='pending-indicator'/>"+
            "</div>"+
            "<div class='col-md-9 leftInformationArea'>"+
                "<label class='moduleTitle'>{{item.title}}</label>"+
                "<div class='btnShowcasePreview icon-round-control btn-on-hover'>"+
                    "<div class='icon icon-arrange-1'></div>"+
                "</div>"+
            "</div>"+
            "<div ng-click=\"deleteItem(objectsSidebarService.objects.indexOf(item),$event)\" class=\"icon-round-control btnDelete  btn-danger btn-on-hover\">"+
                "<i class=\"fa fa-close\"></i>"+
            "</div>";

        $scope.objectsSidebarService.template =$scope.sidebarTemplate;
        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }
        //Constants
        $scope.maxMedia=0;

        //Draggable Properties

        $scope.dragGalleryIndex=-1;
        $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;
        $scope.newTagField=[];

        //Loading images service properties
        $scope.loadingImages =false;

        //Boolean values
        $scope.hasListPriceBool=false;
        $scope.hasDiscountBool=false;
        $scope.hasTimmingBool =false;
        $scope.hasQuantityBool=false;
        $scope.hasSavingBool=false;
        $scope.hasPriceBool=false;
        $scope.hasFromPriceBool=false;
        $scope.isHighlightBool=false;
        $scope.galleries = [];



        $scope.$on('$stateChangeStart', function(){
                $scope.objectsSidebarService.reset();
            });

        $scope.$on('organizationChanged',function(){
            $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;
            //Get the List of Objects
            $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+'/elements').success(function(data){
                $scope.elements = data.data.elements;
                $scope.objectsSidebarService.setObjects($scope.elements);
            });

            Gallery.getList($scope.organizationId).then(function(promise){
                $scope.galleries = promise.data.data;
            });
        });

        $scope.$on("Biin: On Object Clicked", function(f,objectClicked){

            //I know it's ugly and I don't like this approach, it should be other way to  validate if the tag field is
            // rendered to call this code
            //TODO: Change this implementation for another safer way!!!
            $timeout(function(){
                var elemSearchTag =$('#elemSearchTag');
                elemSearchTag.tagsinput("removeAll");
                for(var i=0;i< $scope.objectsSidebarService.selectedObject.searchTags.length;i++){
                    elemSearchTag.tagsinput("add",$scope.objectsSidebarService.selectedObject.searchTags[i]);
                }
            },100);
        });

        $scope.$on("Biin: On Object Created", function(){
            $scope.create();
        });

        $scope.$on("Biin: On Object Deleted", function(f,index){
            $scope.removeElementAt(index);
        });


        //Get the List of Objects
        $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+'/elements').success(function(data){
            $scope.elements = data.data.elements;
            $scope.objectsSidebarService.setObjects($scope.elements);
        });



        //Push a new showcase in the list
        $scope.create = function(){
            $http.post(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+"/elements").success(function(element,status){
                if(status==201){
                    var elemSearchTag =$('#elemSearchTag');
                    elemSearchTag.tagsinput("removeAll");
                    $scope.elements.push(element);
                    $scope.objectsSidebarService.setObjects($scope.elements);
                    $scope.objectsSidebarService.setSelectedObject(element);
                }else{
                    displayErrorMessage(element,"Element Creation",status);
                }
            });
        };

        //Select Element Type function
        $scope.selectType=function(index){
            if($scope.objectsSidebarService.selectedObject.elementType!==''+index)
                $scope.objectsSidebarService.selectedObject.elementType=""+index;
            else
                $scope.objectsSidebarService.selectedObject.elementType="";

            $scope.validate(true);
        };

        //Remove element at specific position
        $scope.removeElementAt = function(index){
            if($scope.objectsSidebarService.selectedObject==$scope.objectsSidebarService.objects[index]){
                $scope.objectsSidebarService.selectedObject = null;
            }
            var elementId = $scope.objectsSidebarService.objects[index].elementIdentifier;
            $http.delete(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationId+'/elements/'+elementId).success(function(data){
                    $scope.objectsSidebarService.objects.splice(index,1);
                }
            );
        };

        //Save detail model object
        $scope.save= function(){

            //TODO: Delete following line, and uncomment the next one.
            $scope.objectsSidebarService.selectedObject.hasPrice = 0;
            //$scope.objectsSidebarService.selectedObject.hasPrice=$scope.objectsSidebarService.selectedObject.price > 0?'1':'0';

            var tags = $("#elemSearchTag").tagsinput('items');
            $scope.objectsSidebarService.selectedObject.searchTags = [];
            for(var i = 0; i < tags.length; i++){
                $scope.objectsSidebarService.selectedObject.searchTags.push(tags[i]);
            }

            $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationId+'/elements/'+$scope.objectsSidebarService.selectedObject.elementIdentifier,{model:$scope.objectsSidebarService.selectedObject}).success(function(data,status){
                if("replaceModel" in data){
                    $scope.objectsSidebarService.selectedObject = data.replaceModel;
                    $scope.elementPrototype =  $.extend(true, {}, $scope.elementPrototypeBkp);
                }
                if(data.state=="success")
                    $scope.succesSaveShow=true;
            });
        };

        //Get the List of Categories
        Categories.getList().then(function(promise){
            $scope.categories = promise.data.data;
        });

        //Return the categories of the selected element
        $scope.ownCategories=function(){
            var categories=[];
            //if($scope.objectsSidebarService.selectedObject && $scope.objectsSidebarService.selectedObject.categories)
              //  categories = $scope.objectsSidebarService.selectedObject.categories;
            return categories;
        };


        //Set the gallery index when start draggin
        $scope.setDragGallery=function(scopeIndex){
            $scope.dragGalleryIndex= scopeIndex;
        };



        //Select an sticker
        $scope.selectSticker=function(index){
            if($scope.objectsSidebarService.selectedObject.sticker.identifier !==$scope.stickers[index].identifier){
                $scope.objectsSidebarService.selectedObject.sticker.identifier= $scope.stickers[index].identifier;
                $scope.objectsSidebarService.selectedObject.sticker.color= $scope.stickers[index].color;
            }else{
                $scope.objectsSidebarService.selectedObject.sticker.identifier="";
                $scope.objectsSidebarService.selectedObject.sticker.color="";
            }
        };

        //Gallery Media Images

        //Insert a gallery item to site
        $scope.insertGalleryItem = function(index){
            if(($scope.objectsSidebarService.selectedObject.media.length < $scope.maxMedia &&  index < $scope.galleries.length && $scope.galleries[index])||$scope.maxMedia===0){
                var newObj = {};
                newObj.identifier = $scope.galleries[index].identifier;
                newObj.url = $scope.galleries[index].url;
                newObj.mainColor = $scope.galleries[index].mainColor;

                $scope.objectsSidebarService.selectedObject.media.push(newObj);

                $scope.wizard2IsValid= typeof($scope.objectsSidebarService.selectedObject.media)!='undefined'&& $scope.objectsSidebarService.selectedObject.media.length>0;
                //Apply the changes
                $scope.$digest();
                $scope.$apply();
            }
        };

        //Remove the media object at specific index
        $scope.removeMediaAt=function(index){
            if($scope.objectsSidebarService.selectedObject.media.length>=index)
                $scope.objectsSidebarService.selectedObject.media.splice(index,1);
        };

        //Get the list of the gallery
        Gallery.getList($scope.organizationId).then(function(promise){
            $scope.galleries = promise.data.data;
        });

        //On gallery change method
        $scope.onGalleryChange= function(obj,autoInsert){
            //Do a callback logic by caller
            $scope.galleries = $scope.galleries.concat(obj);
            $scope.$digest();

            if(autoInsert)
            {
                //Insert the images to the preview
                var cantToInsert=$scope.maxMedia- $scope.objectsSidebarService.selectedObject.media.length;
                for(var i=0; i< cantToInsert; i++){
                    $scope.insertGalleryItem($scope.galleries.indexOf(obj[i]));
                }
            }
        };

        $scope.loadingImagesChange=function(state){
            $scope.loadingImages = state;
            $scope.$digest();
        };

        //Category return if contains a specific category
        $scope.containsCategory=function(category){
            if(typeof(_.findWhere($scope.objectsSidebarService.selectedObject.categories,{identifier:category.identifier}))!='undefined')
                return true;
            else
                return false;
        };

        //Change the state of the category relation with the Site
        $scope.updateSelectedCategories =function(category){
            var index =-1;
            var cat = _.findWhere($scope.objectsSidebarService.selectedObject.categories,{identifier:category.identifier});
            if(typeof(cat)!='undefined'){
                index=$scope.objectsSidebarService.selectedObject.categories.indexOf(cat);
            }

            if(index>=0)
                $scope.objectsSidebarService.selectedObject.categories.splice(index,1);
            else
                $scope.objectsSidebarService.selectedObject.categories.push(category);

            //$scope.validate();

            /**if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$apply();
                $scope.$digest();
            }**/
        };
    }
})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];
    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.reset = function() {
            vm.myImage        = '';
            vm.myCroppedImage = '';
            vm.imgcropType    = 'square';
          };

          vm.reset();

          var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
              $scope.$apply(function(/*$scope*/){
                vm.myImage=evt.target.result;
              });
            };
            if(file)
              reader.readAsDataURL(file);
          };
          
          angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};
          
          // Tags inputs
          // ----------------------------------- 
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // ----------------------------------- 

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg 
          // ----------------------------------- 

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

          vm.person = {};
          vm.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];

          vm.address = {};
          vm.refreshAddresses = function(address) {
            var params = {address: address, sensor: false};
            return $http.get(
              'http://maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();
          
          // old usage support
          options.classInput = element.data('classinput') || options.classInput;
          
          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {
          
          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;
          
          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {
            
            if ( angular.isDefined(self.steps[step]) ) {

              if(self.validate && step !== 1) {
                var form = $(self.element),
                    group = form.children().children('div').get(step - 2);

                if (false === form.parsley().validate( group.id )) {
                  return false;
                }
              }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }
    }


})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('validateForm', validateForm);

    function validateForm () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.parsley)
            $elem.parsley();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
'use strict';

angular
    .module('gallery')
    .controller('GalleryController', GalleryController);
GalleryController.$inject = ['$scope','$modalInstance','galleries'];
function GalleryController($scope, $modalInstance, galleries) {
    $scope.render = true;
    $scope.loadingImages = false;
    $scope.galleries = galleries;


    $scope.loadingImagesChange = function (state) {
        $scope.loadingImages = state;
        $scope.$digest();
    };

    $scope.onGalleryChange = function (obj, autoInsert) {

        //Do a callback logic by caller
        $scope.galleries = $scope.galleries.concat(obj);
        $scope.$digest();

        //Insert the images to the preview
        if (autoInsert) {
            var cantToInsert = obj.length;
            if (maxMedia > 0)
                cantToInsert = $scope.maxMedia - $scope.sites[$scope.selectedSite].media.length;

            for (var i = 0; i < cantToInsert; i++) {
                $scope.insertGalleryItem($scope.galleries.indexOf(obj[i]));
            }
        }
    };

    $scope.apply = function () {
        var selectedImages = [];
        $(".galleryImageWrapper").each(function (index, element) {
            if ($(element).hasClass("selected")) {
                selectedImages.push($scope.galleries[index]);
            }
        });
        var modalInfo = {};
        modalInfo.selectedImages = selectedImages;
        modalInfo.galleries = $scope.galleries;
        $modalInstance.close(modalInfo);
    };

    $scope.close = function () {
        var modalInfo = {};
        modalInfo.galleries = $scope.galleries;
        $modalInstance.dismiss(modalInfo);
    };
}

/**
 * Created by Ivan on 9/22/15.
 */
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('gallery')
        .directive('gallery', Gallery);

    Gallery.$inject = ['$modal','ObjectsSidebar'];
    function Gallery ($modal,ObjectsSidebar) {
        var objectsSidebar  = ObjectsSidebar;
        var directive = {
            link: link,
            restrict: 'E',
            scope:{
                media : '=ngModel',
                gallery : '='
            },
            template:
            '<div class="row">'+
                '<div scrollbar="scrollbarOptionsStandard" class="ownedGalleryWrapper scrollbar-inner">'+
                    '<div ng-repeat="item in media" class="img-block">'+
                        '<div class="moduleWrapper img-block-buttons">'+
                            '<img ng-src="{{item.url}}" pending-indicator="pending-indicator" class="imagegallery img-responsive"/>'+
                            '<div ng-click="removeMediaAt(media.indexOf(item))" class="btnShowcasePreview icon-round-control btnDelete btn-danger btn-on-hover">'+
                                '<i class="fa fa-close"></i>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="img-add-block">'+
                        '<div  ng-click="showImageModal()" class="btn-default img-add-block-wrapper dottedBorder">'+
                            '<span translate="GENERIC.ADD_IMAGE" class="btn-browse"></span>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        };

        return directive;

        function link(scope, element, attrs)
        {

            scope.$watch('gallery', function(value){
                if(value){
                    console.log(value);
                }
            });

            scope.removeMediaAt = function(index){
                scope.$parent.removeMediaAt(index);
            };

            scope.showImageModal = function(){
                var mapInstance = $modal.open({
                    scope:scope,
                    templateUrl: '/modules/gallery/views/partials/gallery.modal.html',
                    controller: 'GalleryController',
                    size:'lg',
                    resolve:{
                        loadingImages : function(){ return scope.loadingImages;},
                        galleries : function(){ return scope.gallery;},
                        organizationId : function(){ return scope.organizationId;}
                    }
                });
                mapInstance.result.then(function ( modalInfo ) {

                    for (var i = 0; i < modalInfo.selectedImages.length; i++) {
                        var newObj = {};
                        newObj.identifier = modalInfo.selectedImages[i].identifier;
                        newObj.url = modalInfo.selectedImages[i].url;
                        newObj.mainColor = modalInfo.selectedImages[i].mainColor;
                        newObj.vibrantColor = modalInfo.selectedImages[i].vibrantColor;
                        newObj.vibrantDarkColor = modalInfo.selectedImages[i].vibrantDarkColor;
                        newObj.vibrantLightColor = modalInfo.selectedImages[i].vibrantLightColor;
                        objectsSidebar.selectedObject.media.push(newObj);
                    }
                    scope.gallery=modalInfo.galleries;
                }, function (modalInfo) {
                    scope.gallery=modalInfo.galleries;
                });
            };

        }
    }

})();

(function () {
    'use strict';

    angular
        .module('gallery')
        .directive('imageCheckbox', ImageCheckbox);

    ImageCheckbox.$inject = ['$modal'];
    function ImageCheckbox() {
        return {
            restrict: 'A',
            link: function (scope, el, attr) {
                scope.isSelected = el.find('input').val() == 'false';
                el.on('click', function () {
                    scope.isSelected = !scope.isSelected;
                    scope.$apply();
                });
            }
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('gallery')
        .directive('uploadFiles', UploadFiles);

    UploadFiles.$inject = ['$modal','Organization'];

    function UploadFiles($modal,Organization) {
        var organizationService = Organization;
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.uploadMedia = function(scope,formData, autoInsert){
                    scope.loadingImagesChange(true);
                    // now post a new XHR request
                    var xhr = new XMLHttpRequest();

                    xhr.open('POST', ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+organizationService.selectedOrganization.identifier+'/gallery');
                    xhr.onload = function (data) {
                        if (xhr.status === 200) {
                            var obj= $.parseJSON(xhr.response);

                            //Do a callback logic by caller
                            if(scope.onGalleryChange)
                                scope.onGalleryChange(obj,autoInsert);

                            console.log('all done: ' + xhr.status);
                            scope.loadingImagesChange(false);
                        } else {
                            console.log('Something went terribly wrong...');
                        }
                    };

                    xhr.upload.onprogress = function (event) {
                        if (event.lengthComputable) {
                            var complete = (event.loaded / event.total * 100 | 0);
                            //progress.value = progress.innerHTML = complete;
                        }
                    };

                    xhr.send(formData);
                };

                var $inputFileElement = $(attrs['uploadFiles']);
                var autoInsert = false;//Set to false default auto insert
                //Change event when an image is selected
                $inputFileElement.on('change', function () {
                    console.log("Change beginning the upload");

                    var files = $inputFileElement[0].files;
                    var formData = new FormData();
                    for (var i = 0; i < files.length; i++) {
                        var mediaFile = files[i];
                        mediaFile.originalFilename = files[i].name;
                        formData.append('file', mediaFile);
                    }
                    //Upload The media information
                    scope.uploadMedia(scope, formData);
                });
                //Click event of the style button
                $(element[0]).on('click touch', function (e) {
                    $inputFileElement.trigger('click');
                });
            }
        };
    }
})();

/**
 * Created by Ivan on 9/23/15.
 */
(function() {
    'use strict';

    angular
        .module('gallery')
        .service('Gallery', Gallery);

    Gallery.$inject = ['$http'];
    function Gallery($http) {
        var service = {
            getList: function (organization) {
                var promise = $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+organization+'/gallery')
                    .success(function (data) {
                        return data.data;
                    })
                    .error(function (data) {
                        return {"status": false};
                    });

                return promise;
            }
        };
        return service;
    }
})();

'use strict';

angular
    .module('gmaps')
    .controller('GmapController', GmapController);
GmapController.$inject = ['$scope','$modalInstance'];
function GmapController($scope, $modalInstance) {

    $scope.render = true;
    $scope.lat = 0;
    $scope.lng = 0;
    $scope.changeLocation = function (lat, lng) {
        $scope.lat = lat;
        $scope.lng = lng;
    };

    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.apply = function () {
        var newPos = {};
        newPos.lat = $scope.lat;
        newPos.lng = $scope.lng;
        $modalInstance.close(newPos);
    }
}

/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('gmaps')
        .directive('map', StaticMap);

    StaticMap.$inject = ['ObjectsSidebar'];
    function StaticMap (ObjectsSidebar) {
        return{
            restrict:'A',
            link:function(scope, element, attrs){

                var local_lat = ObjectsSidebar.selectedObject.lat;
                var local_lng = ObjectsSidebar.selectedObject.lng;

                var zoom = eval(attrs['zoom']);

                var defPosition =new google.maps.LatLng(local_lat ,local_lng);
                var defOptions = {
                    center: defPosition,
                    zoom: zoom
                };
                var map=new google.maps.Map(element[0],defOptions);
                var marker;
                //Get the Geolocation
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition,errorCallback,{timeout:10000});
                    } else {
                        element[0].innerHTML = "Geolocation is not supported by this browser.";
                    }
                }
                //Show the position in the map
                function showPosition(position,otherZoom) {
                    if(typeof(otherZoom)!=='undefined'){
                        zoom=otherZoom;
                    }
                    var myPosition =new google.maps.LatLng( position.coords.latitude ,  position.coords.longitude);
                    var mapOptions = {
                        center: myPosition,
                        zoom: zoom
                    };

                    map.setOptions(mapOptions);

                    marker = new google.maps.Marker({
                        map:map,
                        draggable:true,
                        animation: google.maps.Animation.DROP,
                        position: myPosition
                    });

                    //Change Location Event Refresh the model
                    google.maps.event.addListener(marker, 'position_changed', function(){
                        var newPosition = marker.getPosition();
                        scope.changeLocation(newPosition.lat(),newPosition.lng());
                    });


                    google.maps.event.addListenerOnce(map, 'idle', function() {
                        var newPosition = marker.getPosition();
                        google.maps.event.trigger(map, 'resize');
                        map.setCenter(newPosition);
                    });

                }

                function errorCallback(err){
                    var coords ={latitude:local_lat,longitude: local_lng};
                    showPosition({coords:coords},1);
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                }

                //Call get location
                if(local_lat==0&& local_lng==0)
                    getLocation();
                else{
                    var coords ={latitude:local_lat, longitude:local_lng};
                    showPosition({coords:coords});
                }
            }
        }
    }

})();

/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('gmaps')
        .directive('staticmap', StaticMap);

    StaticMap.$inject = ['ObjectsSidebar','$modal'];
    function StaticMap (ObjectsSidebar,$modal) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var zoom = eval(attrs['zoom']);
                var marker;
                //Get the Geolocation
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition, errorCallback, {timeout: 10000});
                    } else {
                        element[0].innerHTML = "Geolocation is not supported by this browser.";
                    }
                }

                scope.showMapModal = function ( ) {
                    var mapInstance = $modal.open({
                        templateUrl: '/modules/gmaps/views/partials/gmap.modal.client.partial.view.html',
                        controller: 'GmapController',
                        size:'lg'
                    });
                    mapInstance.result.then(function ( position ) {
                        if(position){
                            ObjectsSidebar.selectedObject.lng = position.lng;
                            ObjectsSidebar.selectedObject.lat = position.lat;
                        }
                    }, function () {

                    });
                };

                //Show the position in the map
                function showPosition(position, otherZoom) {
                    if (typeof(otherZoom) !== 'undefined') {
                        zoom = otherZoom;
                    }
                    if ($(element).children("img").length != 0) {
                        $(element).children("img")[0].remove();
                    }

                    var imageElement = document.createElement("img");
                    imageElement.setAttribute("src", "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude +
                        "&zoom=" + zoom + "&size=1024x512&markers=" + ObjectsSidebar.selectedObject.lat + "," + ObjectsSidebar.selectedObject.lng);
                    imageElement.className += "img-responsive";
                    element[0].appendChild(imageElement);
                }

                function errorCallback(err) {
                    var coords = {latitude: local_lat, longitude: local_lng};
                    showPosition({coords: coords}, 1);
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                }


                var local_lat = 0;
                var local_lng = 0;

                function showMap() {
                    if (attrs['lat'] && attrs['lng']) {
                        local_lat = eval(attrs['lat']);
                        local_lng = eval(attrs['lng']);
                    }

                    //Call get location
                    if (local_lat == 0 && local_lng == 0)
                        getLocation();
                    else {
                        var coords = {latitude: local_lat, longitude: local_lng};
                        showPosition({coords: coords});
                    }
                }

                showMap();

                attrs.$observe('lat', function (newValue, oldValue) {
                    showMap();
                });
                attrs.$observe('lng', function (newValue, oldValue) {
                    showMap();
                });
            }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'modernizr': ['/lib/modernizr/modernizr.js'],
                'icons': ['/lib/fontawesome/css/font-awesome.min.css',
                    '/lib/simple-line-icons/css/simple-line-icons.css'],
                'filestyle': ['/lib/bootstrap-filestyle/src/bootstrap-filestyle.js']

            },
            // Angular based script (use the right module name)
            modules: [
                //{name: 'biinUsers', files: ['/modules/biinUsers/controllers/access-login.controller.js']},
                //{name: 'dashboard', files: ['/modules/dashboard/controllers/dashboard.controller.js']}

            ]
        })
    ;

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
/**
 * Created by sofi on 10/6/15.
 */
'use strict';

// Setting up route
angular.module('maintenance').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.maintenance', {
                url: '/maintenance',
                templateUrl: 'modules/maintenance/views/maintenance.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**=========================================================
 * Module: maintenance.js
 * Maintenance for biin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('maintenance')
        .controller('MaintenanceController', MaintenanceController);

    MaintenanceController.$inject = ['$http', '$state', '$timeout', '$scope', '$modal', 'Authentication', 'ObjectsSidebar'];
    function MaintenanceController($http, $state, $timeout, $scope, $modal, Authentication, ObjectsSidebar) {
        var vm = this;
        activate();

        function activate() {
            $scope.authentication = Authentication;
        }

        /**=============================================================================================================
         * ObjectsSidebar Configuration
         *
         =============================================================================================================*/
        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.objectsSidebarService.template =
            "<div class='sidebar-padding'>" +
                "<h5>{{item.name}}</h5>" +

            "<label>{{item.assignedBeacons}}</label> Beacons" +
            "<br/>" +
            "</div>";

        $scope.objectsSidebarService.enableAddButton = false;

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/

        $scope.$on('$stateChangeStart', function () {
            $scope.objectsSidebarService.reset();
        });

        $scope.$on("Biin: On Object Clicked", function(event,objectClicked){
            $scope.showBiinsPerOrganization(objectClicked);
        });


        /**=============================================================================================================
         * Variables
         =============================================================================================================*/


        /**=============================================================================================================
         * Self called functions
         =============================================================================================================*/

        /**=============================================================================================================
         *  Functions
         =============================================================================================================*/

        $http.get(ApplicationConfiguration.applicationBackendURL + 'maintenance/organizations').success(function(data){
            $scope.objectsSidebarService.setObjects(data);
            //console.log($scope.objectsSidebarService.getObjects());

            for (var i = 0; i < $scope.objectsSidebarService.objects.length ; i++) {
                $scope.objectsSidebarService.objects[i].unassignedBeacons = $scope.objectsSidebarService.objects[i].biinsCounter - $scope.objectsSidebarService.objects[i].biinsAssignedCounter;
                $scope.objectsSidebarService.objects[i].assignedBeacons = $scope.objectsSidebarService.objects[i].biinsAssignedCounter;
            }

            $scope.selectedOrganization = null;
            $scope.biinsXOrganization = null;
            $scope.defaultUUID = "";

            $scope.getTypeName = function(type)
            {
                if(type == "1")
                {
                    return "External";
                }
                else if (type == "2")
                {
                    return "Internal";
                }
                else
                {
                    return "Product"
                }
            }


            $scope.showBiinsPerOrganization = function(selectedObject)
            {
                $http.get(ApplicationConfiguration.applicationBackendURL + 'maintenance/getBiinsOrganizationInformation/'+$scope.objectsSidebarService.selectedObject.identifier).success(function(data){
                    $scope.objectsSidebarService.selectedObject.biins = data.biins;
                    $scope.defaultUUID = data.defaultUUID;
                    $scope.biinsXOrganization = $scope.objectsSidebarService.selectedObject.biins;

                    for(var i = 0; i < $scope.biinsXOrganization.length; i++)
                    {
                        for(var j = 0; j < selectedObject.sites.length; j++)
                        {
                            if($scope.biinsXOrganization[i].siteIdentifier == selectedObject.sites[j].identifier)
                            {
                                $scope.biinsXOrganization[i].siteName = selectedObject.sites[j].title2;
                                break;
                            }
                        }
                    }
                });
            }

            $scope.showAddBiintoOrganizationModal = function ( mode, beacon)
            {
                var modalInstance = $modal.open({
                    templateUrl: '/modules/maintenance/views/partials/managebiintoorganization.client.modal.html',
                    controller: 'manageBiinToOrganization',
                    size:'lg',
                    resolve:{
                       selectedElement : function()
                        {
                            return { sites: $scope.objectsSidebarService.selectedObject.sites};
                        },
                        mode : function() { return mode },
                        beacon : function(){ return beacon},
                        selectedOrganization : function()
                        {
                            return { organization: $scope.objectsSidebarService.selectedObject};
                        },
                        defaultUUID : function() { return $scope.defaultUUID; }
                    }
                });

                modalInstance.result.then(function ( beacon ) {
                    $scope.showBiinsPerOrganization($scope.objectsSidebarService.selectedObject);
                    if(mode == "create" ){
                        $scope.objectsSidebarService.selectedObject.sites[beacon.siteIndex].minorCounter = $scope.objectsSidebarService.selectedObject.sites[beacon.siteIndex].minorCounter ? $scope.objectsSidebarService.selectedObject.sites[beacon.siteIndex].minorCounter+1 : 1;
                        $scope.objectsSidebarService.selectedObject.assignedBeacons = $scope.objectsSidebarService.selectedObject.assignedBeacons ? $scope.objectsSidebarService.selectedObject.assignedBeacons+1 : 1;

                    }
                    else{
                        if(beacon.minorHasChanged && beacon.biinType != "1"){
                            $scope.objectsSidebarService.selectedObject.sites[beacon.siteIndex].minorCounter = $scope.objectsSidebarService.selectedObject.sites[beacon.siteIndex].minorCounter+1;
                            delete beacon.minorHasChanged;
                        }
                    }
                }, function () {
                    $scope.showBiinsPerOrganization($scope.objectsSidebarService.selectedObject);
                });
            }
        }).error(function(err){
            console.log(err);
        });
    }
})();

/**
 * Created by sofi on 10/8/15.
 */
/**=========================================================
 * Module: maintenance.js
 * Maintenance for biin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('maintenance')
        .controller('manageBiinToOrganization', ManageBiinToOrganization);

    ManageBiinToOrganization.$inject = ['$scope', '$modalInstance', '$http', 'selectedElement', 'mode', 'beacon', 'selectedOrganization', 'defaultUUID'];
    function ManageBiinToOrganization($scope, $modalInstance, $http, selectedElement, mode, beacon, selectedOrganization, defaultUUID) {

        /**=============================================================================================================
         * ObjectsSidebar Configuration
         *
         =============================================================================================================*/

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/


        /**=============================================================================================================
         * Variables
         =============================================================================================================*/


        /**=============================================================================================================
         * Self called functions
         =============================================================================================================*/

        /**=============================================================================================================
         *  Functions
         =============================================================================================================*/

        $scope.sites = selectedElement.sites;
        $scope.mode = mode;
        $scope.beacon = null;
        $scope.selectedOrganization = selectedOrganization.organization;
        $scope.minor = 0;
        $scope.siteIndexFromBeacon = 0;
        $scope.lockValues = false;
        $scope.minorHasChanged = false;
        $scope.siteMinor = 0;

        if (mode == "create") {
            if ($scope.sites.length > 0) {
                $scope.selectedSite = $scope.sites[0];
                $scope.minor = parseInt($scope.selectedSite.minorCounter) + 1;
                $scope.siteMinor = parseInt($scope.selectedSite.minorCounter) + 1;

            }

            $scope.beacon = {
                identifier: "",
                name: "",
                status: "No Programmed",
                proximityUUID: defaultUUID,
                registerDate: "",
                biinType: "3",
                venue: ""
            }
        }
        else {
            $scope.beacon = beacon;
            $scope.minor = parseInt(beacon.minor);
            $scope.lockValues = $scope.beacon.status != "No Programmed";
            $scope.initialBeaconType = $scope.beacon.biinType;
            $scope.isExternalBeaconType = $scope.beacon.biinType == "1";
            var end = false;
            var indiceSelect = -1;


            for (var i = 0; i < $scope.sites.length; i++) {
                if ($scope.sites[i].identifier == $scope.beacon.siteIdentifier) {
                    $scope.selectedSite = $scope.sites[i];
                    break;
                }
            }

            /*for (var i = 0; i < $scope.sites.length && !end; i++) {
                if ($scope.sites[i].identifier == $scope.beacon.siteIdentifier) {
                    indiceSelect = i;
                    end = true;

                    //Binding the value in the view
                    setTimeout(function () {
                        $scope.selectedSite = indiceSelect;
                        $scope.siteIndexFromBeacon = indiceSelect;
                        $scope.siteMinor = parseInt($scope.sites[indiceSelect].minorCounter);
                        $scope.$apply(); //this triggers a $digest

                    }, 100);
                }
            }*/
        }

        $scope.save = function () {
            $scope.beacon.major = $scope.selectedSite.major;
            $scope.beacon.siteIdentifier = $scope.selectedSite.identifier;
            $scope.beacon.siteIndex = $scope.sites.indexOf($scope.selectedSite);
            $scope.beacon.isAssigned = true;
            $scope.beacon.organizationIdentifier = $scope.selectedOrganization.identifier;
            $scope.beacon.accountIdentifier = $scope.selectedOrganization.accountIdentifier;
            $scope.beacon.minor = $scope.minor;
            $scope.beacon.siteMinor = $scope.siteMinor;

            if ($scope.mode == "create") {
                $scope.beacon.mode = "create";
                $http.put(ApplicationConfiguration.applicationBackendURL + 'maintenance/insertBiin', $scope.beacon).success(function (data, status) {
                    $modalInstance.close($scope.beacon);
                }).error(function (data, status) {
                    $scope.message = data.message;
                    console.log(data);
                    console.log(status);
                });
            }
            else {
                $scope.beacon.mode = "edit";
                $http.post(ApplicationConfiguration.applicationBackendURL + 'maintenance/insertBiin', $scope.beacon).success(function (data, status) {
                    console.log("success");
                    $scope.beacon.minorHasChanged = $scope.minorHasChanged;
                    $modalInstance.close($scope.beacon);
                }).error(function (data, status) {
                    console.log(data);
                    console.log(status);
                });
            }
        }

        $scope.selectSite = function (site) {
            if ($scope.beacon.biinType == "1") {
                $scope.minor = 1;
                $scope.siteMinor = mode == "create" ? parseInt(site.minorCounter) : parseInt(site.minorCounter) + 1;
            } else {
                if (mode == "create") {
                    $scope.minor = parseInt(site.minorCounter) + 1;
                    $scope.siteMinor = parseInt(site.minorCounter) + 1;
                } else {
                    if ($scope.siteIndexFromBeacon == $scope.sites.indexOf(site) && $scope.isExternalBeaconType) {
                        $scope.minor = parseInt($scope.beacon.minor);
                        $scope.siteMinor = parseInt(site.minorCounter);
                        $scope.minorHasChanged = false;
                    } else {
                        $scope.minor = parseInt(site.minorCounter) + 1;
                        $scope.siteMinor = parseInt(site.minorCounter) + 1;
                        $scope.minorHasChanged = true;
                    }
                }
            }
            $scope.selectedSite = site;
        }

        $scope.onTypeChange = function (value) {
            if (value == "1") {
                $scope.minor = 1;
                $scope.minorHasChanged = !$scope.isExternalBeaconType;
                //TODO: FIX INDEX
                // $scope.siteMinor = pmode == "create" ? parseInt($scope.sites[index].minorCounter) : parseInt($scope.sites[index].minorCounter) + 1;
            } else {
                if ($scope.siteIndexFromBeacon == $scope.selectedSite && $scope.isExternalBeaconType == (value == "1")) {
                    $scope.minor = parseInt($scope.beacon.minor);
                    $scope.siteMinor = parseInt($scope.selectedSite.minorCounter);
                    $scope.minorHasChanged = false;
                } else {
                    $scope.minorHasChanged = true;
                    $scope.minor = parseInt($scope.selectedSite.minorCounter) + 1;
                    $scope.siteMinor = parseInt($scope.selectedSite.minorCounter) + 1;
                }
            }
        }
        $scope.selectStatus = function (status) {
            $scope.lockValues = status != "No Programmed"
        }

        $scope.ok = function () {
            $modalInstance.close($scope.objectIndex);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }
})();


/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 
    
    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;
        
    }

    //
    // Contrller definition
    // 
    
    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {
      
      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/
 
(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');
          
          var isOpen = navbarForm.hasClass('open');
          
          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            .val('') // Empty input
            ;
        }        
    }
})();

/**
 * Created by Ivan on 8/27/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('objectssidebar')
        .controller('ObjectsSideBar', ObjectsSideBar);

    ObjectsSideBar.$inject = ['$http', '$state','$scope','$rootScope','ObjectsSidebar'];
    function ObjectsSideBar($http, $state, $scope,$rootScope,ObjectsSidebar) {
        var vm = this;
        activate();

        $scope.isHidden = false;
        $scope.objectsSidebarService = ObjectsSidebar;
        ////////////////

        function activate() {
        }

        $scope.onObjectClick = function( index ){
            var objectClicked = $scope.objectsSidebarService.getObjects()[index];
            $scope.objectsSidebarService.selectedObject = objectClicked;
            $rootScope.$broadcast("Biin: On Object Clicked", objectClicked);
        };

        $scope.create = function(){
            $rootScope.$broadcast("Biin: On Object Created");
        };

        $scope.hideObjectsMenu =function()
        {
            if($scope.isHidden){
                $(".right-section-content").removeClass("extended");
                $(".objects-sidebar").removeClass("contracted");
            }
            else{
                $(".right-section-content").addClass("extended");
                $(".objects-sidebar").addClass("contracted");
            }
            $scope.isHidden = !$scope.isHidden;
        };

        $scope.deleteItem = function(index , $event){
            console.warn("Delete clicked " + index);
            $event.stopPropagation();
            $rootScope.$broadcast("Biin: On Object Deleted",index);
        };
    }
})();


(function() {
    'use strict';

    angular
        .module('objectssidebar')
        .service('ObjectsSidebar', ObjectsSidebar);

    ObjectsSidebar.$inject = [];
    function ObjectsSidebar() {
        var service = {
            objects: [],
            selectedObject: null,
            template: "",

            enableAddButton: true,

            setObjects: function (objects) {
                this.objects = objects;
            },
            getObjects: function () {
                return this.objects;
            },
            setSelectedObject: function (selectedObject) {
                this.selectedObject = selectedObject;
            },
            getSelectedObject: function () {
                return this.selectedObject;
            },
            reset: function () {
                this.objects = [];
                this.selectedObject = null;
                this.template = "";
                this.enableAddButton = true;
            }
        };
        return service;
    }
})();

/**
 * Created by Ivan on 8/19/15.
 */
'use strict';

// Setting up route
angular.module('organization').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.organization', {
                url: '/organization',
                templateUrl: 'modules/organization/views/organization.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
        /*.
         state('page.signup', {
         url: '/signup',
         templateUrl: 'modules/users/views/authentication/signup.client.view.html'
         }).
         state('page.forgot', {
         url: '/password/forgot',
         templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
         }).
         state('page.reset-invalid', {
         url: '/password/reset/invalid',
         templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
         }).
         state('page.reset-success', {
         url: '/password/reset/success',
         templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
         }).
         state('page.reset', {
         url: '/password/reset/:token',
         templateUrl: 'modules/users/views/password/reset-password.client.view.html'
         }).
         state('app.password', {
         url: '/settings/password',
         templateUrl: 'modules/users/views/settings/change-password.client.view.html'
         }).
         state('app.profile', {
         url: '/settings/profile',
         templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
         }).
         state('app.accounts', {
         url: '/settings/accounts',
         templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
         });*/
    }
]);

/**
 * Created by Ivan on 8/19/15.
 */
/**=========================================================
 * Module: profile.js
 * Profile management for biin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('organization')
        .controller('OrganizationController', OrganizationController);

    OrganizationController.$inject = ['$http', '$state', '$scope', 'Authentication', 'toaster', '$location', 'Organization','ObjectsSidebar'];
    function OrganizationController($http, $state, $scope, Authentication, toaster, $location, Organization,ObjectsSidebar) {
        var vm = this;
        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.organizationService = Organization;

        /**=============================================================================================================
         * ObjectsSidebar Configuration
         =============================================================================================================*/

        $scope.sidebarTemplate =
            "<div class='col-md-3 thumbListImage'>" +
            "<img ng-if='item.elements.length == 0  || item.elements[0].media.length == 0 ' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+' alt=''/>" +
            "<img ng-if='item.media.length>0' ng-src='{{item.media[0].url}}'/>" +
            "</div>" +
            "<div class='col-md-9 leftInformationArea'>" +
            "<label class='moduleTitle'>{{item.name}}</label>" +
            "<div class='btnShowcasePreview icon-round-control btn-on-hover'>" +
            "<div class='icon icon-arrange-1'></div>" +
            "</div>" +
            "</div>" +
            "<div ng-click=\"deleteItem(objectsSidebarService.objects.indexOf(item),$event)\" class=\"icon-round-control btnDelete  btn-danger btn-on-hover\">" +
            "<i class=\"fa fa-close\"></i>" +
            "</div>";
        $scope.objectsSidebarService.template = $scope.sidebarTemplate;
        $scope.objectsSidebarService.setObjects($scope.organizationService.organizationsList);

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/


        $scope.$on('$stateChangeStart', function () {
            $scope.objectsSidebarService.reset();
        });

        $scope.$on('organizationChanged', function () {

        });

        $scope.$on("Biin: On Object Clicked", function (event, objectClicked) {
            $scope.editOrganization();
        });

        $scope.$on("Biin: On Object Created", function () {
            $scope.createOrganization();
        });

        $scope.$on("Biin: On Object Deleted", function (event, index) {
            $scope.removeOrganization(index);
        });

        $scope.$on('changeOrganizationImage',function(scope,newPicture){
            $scope.objectsSidebarService.selectedObject.media[0]=newPicture;
        });

        if (!Authentication.user) {
            $location.path('/');
        }

        $scope.saveOrganization = function () {
            if (!$scope.isAnalazingOrg) {
                if (isOrganizationDirty()) {
                    var currentOrganization = $scope.objectsSidebarService.selectedObject;
                    $scope.prevSaveOrganization = jQuery.extend({}, currentOrganization);
                    $scope.isAnalazingOrg = false;

                    $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + currentOrganization.identifier, {model: currentOrganization}).success(function (data, status) {
                        if (status === 200) {
                            $scope.succesSaveShow = true;
                        } else
                            $scope.errorSaveShow = true;
                    });
                }
                $scope.isAnalazingOrg = false;
            }
        };

        //Edit an site
        $scope.editOrganization = function () {
            $scope.prevSaveOrganization = jQuery.extend({}, $scope.objectsSidebarService.selectedObject);
        };

        //Push a new organization in the list
        $scope.createOrganization = function () {
            //Get the Mayor from server
            $http.post(ApplicationConfiguration.applicationBackendURL +'api/organizations').success(function (org, status) {
                if (status == 201 || status == 200) {
                    $scope.organizationService.organizationsList.push(org);
                    //$scope.objectsSidebarService.objects.push(org);
                    $scope.objectsSidebarService.selectedObject = org;
                } else {
                    displayErrorMessage(org, "Organizations Creation", status);
                }
            });
        };

        //Remove showcase at specific position
        $scope.removeOrganization = function (index) {
            var id = $scope.objectsSidebarService.objects[index].identifier;
            $http.delete(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + id).success(function (data) {
                $scope.organizationService.removeOrganization(id);
                $scope.objectsSidebarService.objects.splice(index,1);
                if($scope.objectsSidebarService.selectedObject.identifier == id){
                    $scope.objectsSidebarService.selectedObject = null;
                }
            });
        };


        //Indicate if an organization data is changed
        var isOrganizationDirty = function () {
            $scope.isAnalazingOrg = true;
            var propertiesToCheck = ["name", "brand", "description", "extraInfo"];
            var foundChange = false;
            if ($scope.prevSaveOrganization !== null) {
                for (var i = 0; i < propertiesToCheck.length && !foundChange; i++) {
                    foundChange = $scope.objectsSidebarService.selectedObject[propertiesToCheck[i]] !== $scope.prevSaveOrganization[propertiesToCheck[i]];
                }
            }
            return foundChange;
        };

        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.editOrganization(0);
        }
    }
})();

/**
 * Created by Ivan on 10/22/15.
 */
(function() {
    'use strict';

    angular
        .module('organization')
        .directive('uploadOrganizationImage', uploadOrganizationImage);
        uploadOrganizationImage.$inject = ['$rootScope','Authentication','ObjectsSidebar'];
    function uploadOrganizationImage($rootScope,Authentication,ObjectsSidebar){
        return{
            restrict:'A',
            link:function(scope, element, attrs){
                var $inputFileElement=$(attrs['uploadOrganizationImage']);

                //Change event when an image is selected
                $inputFileElement.on('change',function(){
                    console.log("Change beginning the upload");

                    var files = $inputFileElement[0].files;
                    var formData = new FormData();
                    for (var i = 0; i < files.length; i++) {
                        var mediaFile = files[i];
                        mediaFile.originalFilename=files[i].name;
                        formData.append('file', mediaFile);
                    }

                    //Upload The media information

                    //scope.loadingImagesChange(true);
                    // now post a new XHR request
                    var xhr = new XMLHttpRequest();

                    var organization= ObjectsSidebar.selectedObject.identifier;

                    xhr.open('POST', ApplicationConfiguration.applicationBackendURL +'api/organizations/'+organization+"/image");
                    xhr.setRequestHeader('accountidentifier',Authentication.user.accountIdentifier);
                    xhr.onload = function (data) {
                        if (xhr.status === 200) {
                            var obj= $.parseJSON(xhr.response);

                            $rootScope.$broadcast("changeOrganizationImage",obj.data);

                            console.log('all done: ' + xhr.status);
                            //scope.loadingImagesChange(false);
                        } else {
                            console.log('Something went terribly wrong...');
                        }
                    };

                    xhr.upload.onprogress = function (event) {
                        if (event.lengthComputable) {
                            var complete = (event.loaded / event.total * 100 | 0);
                            //progress.value = progress.innerHTML = complete;
                        }
                    };

                    xhr.send(formData);

                })
                //Click event of the style button
                $(element[0]).on('click touch',function(e){
                    $inputFileElement.trigger('click');
                });
            }
        }
    }
})();

'use strict';

// Setting up route
angular.module('page').config(['$stateProvider',
  function($stateProvider) {
    // Users state routing
    $stateProvider.
    state('page', {
      url: '/page',
      templateUrl: 'modules/page/views/page.client.view.html'
    });
  }
]);

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];
    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

          // PANEL COLLAPSE EVENTS
          // ----------------------------------- 

          // We can use panel id name for the boolean flag to [un]collapse the panel
          $scope.$watch('panelDemo1',function(newVal){
              
              console.log('panelDemo1 collapsed: ' + newVal);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            var secs = 3;
            
            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });

          // PANELS VIA NG-REPEAT
          // ----------------------------------- 

          $scope.panels = [
            {
              id: 'panelRepeat1',
              title: 'Panel Title 1',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat2',
              title: 'Panel Title 2',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat3',
              title: 'Panel Title 3',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            }
          ];
        }

    } //PanelsCtrl

})();


/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];
    function Controller ($scope, $element, $timeout, $localStorage) {
      var storageKeyName = 'panelState';

      // Prepare the panel to be collapsible
      var $elem   = $($element),
          parent  = $elem.closest('.panel'), // find the first parent panel
          panelId = parent.attr('id');

      // Load the saved state if exists
      var currentState = loadPanelState( panelId );
      if ( typeof currentState !== 'undefined') {
        $timeout(function(){
            $scope[panelId] = currentState; },
          10);
      }

      // bind events to switch icons
      $element.bind('click', function(e) {
        e.preventDefault();
        savePanelState( panelId, !$scope[panelId] );

      });
  
      // Controller helpers
      function savePanelState(id, state) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(!data) { data = {}; }
        data[id] = state;
        $localStorage[storageKeyName] = angular.toJson(data);
      }
      function loadPanelState(id) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(data) {
          return data[id];
        }
      }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss () {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];
    function Controller ($scope, $element, $q, Utils) {
      var removeEvent   = 'panel-remove',
          removedEvent  = 'panel-removed';

      $element.on('click', function (e) {
        e.preventDefault();

        // find the first parent panel
        var parent = $(this).closest('.panel');

        removeElement();

        function removeElement() {
          var deferred = $q.defer();
          var promise = deferred.promise;
          
          // Communicate event destroying panel
          $scope.$emit(removeEvent, parent.attr('id'), deferred);
          promise.then(destroyMiddleware,function(resp){
              console.error(resp);
          });
        }

        // Run the animation before destroy the panel
        function destroyMiddleware() {
          if(Utils.support.animation) {
            parent.animo({animation: 'bounceOut'}, destroyPanel);
          }
          else destroyPanel();
        }

        function destroyPanel() {

          var col = parent.parent();
          parent.remove();
          // remove the parent if it is a row and is empty and not a sortable (portlet)
          col
            .filter(function() {
            var el = $(this);
            return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
          }).remove();

          // Communicate event destroyed panel
          $scope.$emit(removedEvent, parent.attr('id'));

        }

      });
    }
})();



/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];
    function Controller ($scope, $element) {
      var refreshEvent   = 'panel-refresh',
          whirlClass     = 'whirl',
          defaultSpinner = 'standard';

      // catch clicks to toggle panel refresh
      $element.on('click', function (e) {
        e.preventDefault();

        var $this   = $(this),
            panel   = $this.parents('.panel').eq(0),
            spinner = $this.data('spinner') || defaultSpinner
            ;

        // start showing the spinner
        panel.addClass(whirlClass + ' ' + spinner);

        // Emit event when refresh clicked
        $scope.$emit(refreshEvent, panel.attr('id'));

      });

      // listen to remove spinner
      $scope.$on('removeSpinner', removeSpinner);

      // method to clear the spinner when done
      function removeSpinner (ev, id) {
        if (!id) return;
        var newid = id.charAt(0) === '#' ? id : ('#'+id);
        angular
          .element(newid)
          .removeClass(whirlClass);
      }
    }
})();



/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels. 
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];
    function paneltool ($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

          var templates = {
            /* jshint multistr: true */
            collapse:'<a href="#" panel-collapse="" tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus"></em> \
                      </a>',
            dismiss: '<a href="#" panel-dismiss="" tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
            refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
          };

          var tools = scope.panelTools || attrs;
      
          $timeout(function() {
            element.html(getTemplate(element, tools )).show();
            $compile(element.contents())(scope);
            
            element.addClass('pull-right');
          });
  
          function getTemplate( elem, attrs ){
            var temp = '';
            attrs = attrs || {};
            if(attrs.toolCollapse)
              temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id')) );
            if(attrs.toolDismiss)
              temp += templates.dismiss;
            if(attrs.toolRefresh)
              temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
            return temp;
          }
        }// link
    } 

})();

/**=========================================================
 * Drag and drop any panel based on jQueryUI portlets
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('portlet', portlet);

    portlet.$inject = ['$timeout', '$localStorage'];
    function portlet ($timeout, $localStorage) {
      var storageKeyName = 'portletState';

      return {
        restrict: 'A',
        link: link
      };

      /////////////

      function link(scope, element) {
          
        // not compatible with jquery sortable
        if(!$.fn.sortable) return;

        element.sortable({
          connectWith:          '[portlet]', // same like directive 
          items:                'div.panel',
          handle:               '.portlet-handler',
          opacity:              0.7,
          placeholder:          'portlet box-placeholder',
          cancel:               '.portlet-cancel',
          forcePlaceholderSize: true,
          iframeFix:            false,
          tolerance:            'pointer',
          helper:               'original',
          revert:               200,
          forceHelperSize:      true,
          update:               savePortletOrder,
          create:               loadPortletOrder
        });

      }


      function savePortletOrder(event/*, ui*/) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);
        
        if(!data) { data = {}; }

        data[self.id] = $(self).sortable('toArray');

        if(data) {
          $timeout(function() {
            $localStorage[storageKeyName] = angular.toJson(data);
          });
        }
      }

      function loadPortletOrder(event) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);

        if(data) {
          
          var porletId = self.id,
              panels   = data[porletId];

          if(panels) {
            var portlet = $('#'+porletId);
            
            $.each(panels, function(index, value) {
               $('#'+value).appendTo(portlet);
            });
          }

        }
      }

    }

})();
 
(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>',
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
/**
 * Created by Ivan on 8/19/15.
 */
'use strict';

// Setting up route
angular.module('dashboard').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('app.profile', {
                url: '/profile',
                templateUrl: 'modules/profile/views/profile.client.view.html'
            });
        /*.
         state('page.signup', {
         url: '/signup',
         templateUrl: 'modules/users/views/authentication/signup.client.view.html'
         }).
         state('page.forgot', {
         url: '/password/forgot',
         templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
         }).
         state('page.reset-invalid', {
         url: '/password/reset/invalid',
         templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
         }).
         state('page.reset-success', {
         url: '/password/reset/success',
         templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
         }).
         state('page.reset', {
         url: '/password/reset/:token',
         templateUrl: 'modules/users/views/password/reset-password.client.view.html'
         }).
         state('app.password', {
         url: '/settings/password',
         templateUrl: 'modules/users/views/settings/change-password.client.view.html'
         }).
         state('app.profile', {
         url: '/settings/profile',
         templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
         }).
         state('app.accounts', {
         url: '/settings/accounts',
         templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
         });*/
    }
]);

/**
 * Created by Ivan on 8/19/15.
 */
/**=========================================================
 * Module: profile.js
 * Profile management for biin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('profile')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$http', '$state', '$scope', 'Authentication', 'toaster', '$location', 'Organization'];
    function ProfileController($http, $state, $scope, Authentication, toaster, $location, Organization) {
        var vm = this;
        $scope.organizationService = Organization;
        if (!Authentication.user) {
            $location.path('/');
        }

        $scope.saveInformation = function () {
            if (typeof($scope.profile) !== 'undefined' && isProfileDirty()) {//If is Profile Dirty
                $http.put('api/account', {model: $scope.profile}).success(function (data, status) {
                    if (status === 200) {
                        if (data.needToRelog)
                            window.location.href = '/auth/signout';
                        else
                            toaster.pop('success', '', 'Your information has been saved');
                    } else
                        toaster.pop('error', 'Error', 'Your information has not been saved');
                }).error(function () {
                    toaster.pop('error', 'Error', 'Your information has not been saved');
                });
            }
        };

        var isProfileDirty = function () {
            var propertiesToCheck = ["displayName", "lastName", "name", "phoneNumber"];
            //emails[0]
            return true;
        };

        $scope.$on('changeProfileImage', function(scope,image){
            $scope.profile.profilePhoto=image+ '?' + new Date().getTime();

            //Apply the changes
            $scope.$digest();
            $scope.$apply();
        });

        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $http.get("/api/account").success(function (data) {
                $scope.profile = data.data;
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('profile')
        .directive('uploadProfileImage', uploadProfileImage);
    uploadProfileImage.$inject = ['$rootScope','Authentication','ObjectsSidebar'];
    function uploadProfileImage($rootScope,Authentication,ObjectsSidebar){
        return{
            restrict:'A',
            link:function(scope, element, attrs){
                var $inputFileElement=$(attrs['uploadProfileImage']);

                //Change event when an image is selected
                $inputFileElement.on('change',function(){
                    console.log("Change beginning the upload");

                    var files = $inputFileElement[0].files;
                    var formData = new FormData();
                    for (var i = 0; i < files.length; i++) {
                        var mediaFile = files[i];
                        mediaFile.originalFilename=files[i].name;
                        formData.append('file', mediaFile);
                    }

                    //Upload The media information

                    //scope.loadingImagesChange(true);
                    // now post a new XHR request
                    var xhr = new XMLHttpRequest();

                    xhr.open('POST', ApplicationConfiguration.applicationBackendURL + 'api/imageProfile');
                    xhr.setRequestHeader('accountidentifier', Authentication.user.accountIdentifier);
                    xhr.setRequestHeader('name', Authentication.user.name);
                    xhr.onload = function (data) {
                        if (xhr.status === 200) {
                            var obj= $.parseJSON(xhr.response);

                            $rootScope.$broadcast("changeProfileImage",obj.data);
                            //scope.changeProfileImage(obj.data);

                            console.log('all done: ' + xhr.status);
                            //scope.loadingImagesChange(false);
                        } else {
                            console.log('Something went terribly wrong...');
                        }
                    };

                    xhr.upload.onprogress = function (event) {
                        if (event.lengthComputable) {
                            var complete = (event.loaded / event.total * 100 | 0);
                            //progress.value = progress.innerHTML = complete;
                        }
                    };

                    xhr.send(formData);

                });
                //Click event of the style button
                $(element[0]).on('click touch',function(e){
                    $inputFileElement.trigger('click');
                });
            }
        }
    }
})();

/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){

      // Global Settings
      // ----------------------------------- 
      $rootScope.app = {
        name: 'Biin',
        description: 'Biin Content Management System',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: false,
          isFloat: false,
          asideHover: false,
          theme: 'themes/theme-e.css'
            //theme: null
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      //$rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings [*** UNCOMMENT TO ENABLE ***]
      // if( angular.isDefined($localStorage.layout) )
      //   $rootScope.app.layout = $localStorage.layout;
      // else
      //   $localStorage.layout = $rootScope.app.layout;
      //
      // $rootScope.$watch('app.layout', function () {
      //   $localStorage.layout = $rootScope.app.layout;
      // }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }

})();

/**
 * Created by Ivan on 8/27/15.
 */
'use strict';

// Setting up route
angular.module('showcases').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.showcases', {
                url: '/showcases',
                templateUrl: 'modules/showcases/views/showcases.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**=========================================================
 * Module: showcases.controller.js
 * controller for the showcases page
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('showcases')
        .controller('ShowcasesController', ShowcasesController);

    ShowcasesController.$inject = ['$http', '$scope', 'Authentication', 'Organization', 'ObjectsSidebar','ElementsService','BiinsService'];
    function ShowcasesController($http, $scope, Authentication, Organization, ObjectsSidebar,ElementsService,BiinsService) {
        activate();

        ////////////////

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
            $scope.objectsSidebarService = ObjectsSidebar;
        }



        /**=============================================================================================================
         * ObjectsSidebar Configuration
         =============================================================================================================*/

        $scope.sidebarTemplate =
            "<div class='col-md-3 thumbListImage'>" +
            "<img ng-if='item.elements.length == 0  || item.elements[0].media.length == 0 ' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+' alt=''/>" +
            "<img ng-if='item.elements[0].media.length>0' ng-src='{{item.elements[0].media[0].url}}'/>" +
            "</div>" +
            "<div class='col-md-9 leftInformationArea'>" +
            "<label class='moduleTitle'>{{item.name}}</label>" +
            "<div class='btnShowcasePreview icon-round-control btn-on-hover'>" +
            "<div class='icon icon-arrange-1'></div>" +
            "</div>" +
            "</div>" +
            "<div ng-click=\"deleteItem(objectsSidebarService.objects.indexOf(item),$event)\" class=\"icon-round-control btnDelete  btn-danger btn-on-hover\">" +
            "<i class=\"fa fa-close\"></i>" +
            "</div>";

        $scope.objectsSidebarService.template = $scope.sidebarTemplate;

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/

        $scope.$on('$stateChangeStart', function () {
            $scope.objectsSidebarService.reset();
        });

        $scope.$on('organizationChanged', function () {
            //Get list of showcases
            $http.get(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/showcases').success(function (data) {
                $scope.objectsSidebarService.setObjects(data.data);
                $scope.showcasePrototype = data.prototypeObj;
                $scope.showcasePrototypeBkp = $.extend(true, {}, data.prototypeObj);
            });

            $http.get(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/sites').success(function (data) {
                $scope.sites = data.data.sites;
                $scope.sitesBooleanArray = [];
                for(var i= 0; i < $scope.sites.length; i++){
                    $scope.sitesBooleanArray.push(false);
                }
            });

            //Get the List of Elements
            ElementsService.getList($scope.organizationService.selectedOrganization.identifier).then(function (promise) {
                $scope.elements = promise.data.data.elements;
            });

            //Get the List of Biins
            BiinsService.getList($scope.organizationService.selectedOrganization.identifier).then(function(promise){
                $scope.biinSite = promise.data.data;
            });
        });

        $scope.$on("Biin: On Object Clicked", function (event, objectClicked) {
            $scope.sitesBooleanArray = [];
            for(var i= 0; i < $scope.sites.length; i++){
                $scope.sitesBooleanArray.push($scope.isShowcaseAssigned($scope.sites[i],objectClicked));
            }
        });

        $scope.$on("Biin: On Object Created", function () {
            $scope.create();
        });

        $scope.$on("Biin: On Object Deleted", function (event, index) {
            $scope.removeShowcaseAt(index);
        });

        /**=============================================================================================================
         * Variables
         =============================================================================================================*/
        $scope.slider1 = '50';

        /**=============================================================================================================
         * Self called functions
         =============================================================================================================*/
        //Get list of showcases
        $http.get(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/showcases').success(function (data) {
            $scope.objectsSidebarService.setObjects(data.data);
            $scope.showcasePrototype = data.prototypeObj;
            $scope.showcasePrototypeBkp = $.extend(true, {}, data.prototypeObj);
        });

        $http.get(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/sites').success(function (data) {
            $scope.sites = data.data.sites;
            $scope.sitesBooleanArray = [];
            for(var i= 0; i < $scope.sites.length; i++){
                $scope.sitesBooleanArray.push(false);
            }
        });

        //Get the List of Elements
        ElementsService.getList($scope.organizationService.selectedOrganization.identifier).then(function (promise) {
            $scope.elements = promise.data.data.elements;
        });

        //Get the List of Biins
        BiinsService.getList($scope.organizationService.selectedOrganization.identifier).then(function(promise){
            $scope.biinSite = promise.data.data;
        });



        /**=============================================================================================================
         *  Functions
         =============================================================================================================*/


        //Push a new showcase in the list
        $scope.create = function () {
            //Create a new Showcase
            $http.post(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + "/showcases").success(function (showcase, status) {
                if (status == 201) {
                    $scope.objectsSidebarService.objects.push(showcase);
                }
            });

        };

        //Remove showcase at specific position
        $scope.removeShowcaseAt = function (index) {
            if ($scope.objectsSidebarService.selectedObject == $scope.objectsSidebarService.objects[index]) {
                $scope.objectsSidebarService.selectedObject = null;
            }

            var showcaseId = $scope.objectsSidebarService.objects[index].identifier;
            $scope.objectsSidebarService.objects.splice(index, 1);
            $http.delete(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/showcases/' + showcaseId).success(function (data) {
                    if (data.state == "success") {
                        //Todo: implement a pull of messages
                    }
                }
            );

        };

        //Save detail model object
        $scope.save = function () {

            //save sites

            for(var i = 0; i< $scope.sites.length; i++){
                $scope.setShowcaseAssigned($scope.sites[i],$scope.sitesBooleanArray[i]);
            }

            $http.put(ApplicationConfiguration.applicationBackendURL +'api/showcases/' + $scope.objectsSidebarService.selectedObject.identifier, {model: $scope.objectsSidebarService.selectedObject}).success(function (data) {
                if ("replaceModel" in data) {
                    $scope.objectsSidebarService.selectedObject = data.replaceModel;
                    $scope.showcasePrototype = $.extend(true, {}, $scope.showcasePrototypeBkp);
                }
            });
            $http.post(ApplicationConfiguration.applicationBackendURL +'api/organizations/' + $scope.organizationService.selectedOrganization.identifier + '/site/showcases', {
                model: {
                    identifier: $scope.organizationService.selectedOrganization.identifier,
                    sites: $scope.sites
                }
            }).success(function (data, status) {

            });
        };


        $scope.filteredElements = function ( element ) {
            var index = -1;
            for(var i = 0; i < $scope.objectsSidebarService.selectedObject.elements.length; i++){
                if($scope.objectsSidebarService.selectedObject.elements[i]._id == element._id){
                    index = i;
                    break;
                }
            }
            return  index == -1;
        };

        //Remove an element of a Showcase
        $scope.removeElementAt = function (index) {
            $scope.objectsSidebarService.selectedObject.elements.splice(index, 1);
        };

        //Add element to a showcase
        $scope.insertElementAfter = function (indexElementToDrop, position) {

            // Deep copy
            //var elementToPush = jQuery.extend({}, $scope.elements[indexElementToDrop]);

            var elementToPush = {};
            jQuery.extend(elementToPush, $scope.elements[indexElementToDrop]);
            var positionToGive = eval(position) + 1;
            //Give the position of the next element
            elementToPush.position = "" + positionToGive;
            //Update the elements before
            updateShowcaseObjectsPosition(positionToGive);

            delete elementToPush._id;

            //Push the element in he collection
            $scope.showcases[$scope.selectedShowcase].elements.push(elementToPush);

            $scope.validate();

            //Apply the changes
            $scope.$digest();
            $scope.$apply();

        };

        //Get the first element by position
        $scope.getFirstElementByPosition = function (element) {
            var foundPosition = 0;
            if (element.objects.length === 1)
                return element.objects[0];
            else {
                var foundFirst = false;
                for (var i = 0; i < element.objects.length && foundFirst === false; i++) {
                    if (eval(element.objects[i].position) === 1) {
                        foundFirst = true;
                        foundPosition = i;
                    }
                }
            }
            return element.objects[foundPosition];
        };
        $scope.isShowcaseAssigned = function( site, showcase ){
            var index = -1;
            for (var i = 0; i < site.showcases.length; i++) {
                if(site.showcases[i].showcaseIdentifier == showcase.identifier)
                {
                    index = i;
                    break;
                }
            }
            if( index > -1)
            {
                return "active";
            }
            return "";

        };

        $scope.sortShowcases = function(site ,showcase){
            return function(showcase){
                var index = -1;
                for (var i = 0; i < site.showcases.length; i++) {
                    if(site.showcases[i].showcaseIdentifier == showcase.identifier)
                    {
                        index = i;
                        break;
                    }
                }
                if(index > -1)
                {
                    return index;
                }
                else
                {
                    return site.showcases.length + $scope.objectsSidebarService.objects.indexOf(showcase);
                }}
        };

        $scope.setShowcaseAssigned = function ( site, showcase ) {
            var index = -1;
            for (var i = 0; i < site.showcases.length; i++) {
                if(site.showcases[i].showcaseIdentifier == showcase.identifier)
                {
                    index = i;
                    break;
                }
            }
            if( index > -1)
            {
                site.showcases.splice(index,1);
            }
            else
            {
                site.showcases.push({showcaseIdentifier:showcase.identifier});
            }
        };

        $scope.moveShowcaseDown = function ( site, showcase ) {
            var index;
            for (var i = 0; i < site.showcases.length; i++) {
                if(site.showcases[i].showcaseIdentifier == showcase.identifier)
                {
                    index = i;
                    break;
                }
            }
            if(index+1 < site.showcases.length){
                site.showcases.splice(index,1);
                site.showcases.splice(index+1,0,{showcaseIdentifier:showcase.identifier});
            }
        };

        $scope.moveShowcaseUp = function ( site, showcase ) {
            var index;
            for (var i = 0; i < site.showcases.length; i++) {
                if(site.showcases[i].showcaseIdentifier == showcase.identifier)
                {
                    index = i;
                    break;
                }
            }
            if(index >= 1){
                site.showcases.splice(index,1);
                site.showcases.splice(index-1,0,{showcaseIdentifier:showcase.identifier});
            }
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('showcases')
        .service('BiinsService', BiinsService);

    BiinsService.$inject = ['$http'];
    function BiinsService($http) {
        return {
            getList: function(organizationId){
                var promise = $http({method:'GET',url:ApplicationConfiguration.applicationBackendURL +'api/organizations/'+organizationId+'/biins'})
                    .success(function (data,status,headers,config){
                        return data;
                    }).error(function(data,status,headers,config){
                        return {"status":false};
                    });

                return promise;
            },
            saveList:function(organizationId,biinSite){
                var promise= $http({method:'POST',url:ApplicationConfiguration.applicationBackendURL +'api/organizations/'+organizationId+'/sites/biins', data:biinSite}).success(function(data,status,headers,config){
                    return data;
                }).error(function(data,status,headers,config){
                    return {"status":false};
                });

                return promise;
            }
        };
    }
})();

(function() {
    'use strict';

    angular
        .module('showcases')
        .service('ElementsService', ElementsService);

    ElementsService.$inject = ['$http'];
    function ElementsService($http) {
        return {
            getList: function (organizationId) {
                var promise = $http({method:'GET', url:ApplicationConfiguration.applicationBackendURL +'api/organizations/'+organizationId+'/elements'})
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        return {"status": false};
                    });

                return promise;
            }
        };
    }
})();

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils', 'Authentication'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader,  Utils, Authentication) {

        activate();

        ////////////////

        function activate() {
          var collapseList = [];

          $scope.authentication = Authentication;

          // demo: when switch from collapse to hover, close all items
          $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
            if ( newVal === false && oldVal === true) {
              closeAllBut(-1);
            }
          });


          // Load menu from json file
          // ----------------------------------- 

          SidebarLoader.getMenu(sidebarReady);
          
          function sidebarReady(items) {
            $scope.menu = items;
          }

          // Handle sidebar and collapse items
          // ----------------------------------
          
          $scope.getMenuItemPropClasses = function(item) {
            return (item.heading ? 'nav-heading' : '') +
                   (isActive(item) ? ' active' : '') ;
          };

          $scope.addCollapse = function($index, item) {
            collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
          };

          $scope.isCollapse = function($index) {
            return (collapseList[$index]);
          };

          $scope.toggleCollapse = function($index, isParentItem) {

            // collapsed sidebar doesn't toggle drodopwn
            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

            // make sure the item index exists
            if( angular.isDefined( collapseList[$index] ) ) {
              if ( ! $scope.lastEventFromChild ) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
              }
            }
            else if ( isParentItem ) {
              closeAllBut(-1);
            }
            
            $scope.lastEventFromChild = isChild($index);

            return true;
          
          };

          // Controller helpers
          // ----------------------------------- 

            // Check item and children active state
            function isActive(item) {

              if(!item) return;

              if( !item.sref || item.sref === '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function(value) {
                  if(isActive(value)) foundActive = true;
                });
                return foundActive;
              }
              else
                return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
              index += '';
              for(var i in collapseList) {
                if(index < 0 || index.indexOf(i) < 0)
                  collapseList[i] = true;
              }
            }

            function isChild($index) {
              /*jshint -W018*/
              return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }
        
        } // activate
    }

})();

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$rootScope'];
    function UserBlockController($rootScope) {

        activate();

        ////////////////

        function activate() {
          $rootScope.user = {
            name:     'John',
            job:      'ng-developer',
            picture:  'app/img/user/02.jpg'
          };

          // Hides/show user avatar on sidebar
          $rootScope.toggleUserBlock = function(){
            $rootScope.$broadcast('toggleUserBlock');
          };

          $rootScope.userBlockVisible = true;

          $rootScope.$on('toggleUserBlock', function(/*event, args*/) {

            $rootScope.userBlockVisible = ! $rootScope.userBlockVisible;

          });
        }
    }
})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function sidebar ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

          var currentState = $rootScope.$state.current.name;
          var $sidebar = element;

          var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
          var subNav = $();

          $sidebar.on( eventName, '.nav > li', function() {

            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

              subNav.trigger('mouseleave');
              subNav = toggleMenuItem( $(this), $sidebar);

              // Used to detect click and touch events outside the sidebar          
              sidebarAddBackdrop();

            }

          });

          scope.$on('closeSidebarMenu', function() {
            removeFloatingNav();
          });

          // Normalize state when resize to mobile
          $win.on('resize', function() {
            if( ! Utils.isMobile() )
          	asideToggleOff();
          });

          // Adjustment on route changes
          $rootScope.$on('$stateChangeStart', function(event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
          });

      	  // Autoclose when click outside the sidebar
          if ( angular.isDefined(attrs.sidebarAnyclickClose) ) {
            
            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';
            
            $rootScope.$watch('app.asideToggled', watchExternalClicks);

          }

          //////

          function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if ( newVal === true ) {
              $timeout(function(){ // render after current digest cycle
                wrapper.on(sbclickEvent, function(e){
                  // if not child of sidebar
                  if( ! $(e.target).parents('.aside').length ) {
                    asideToggleOff();
                  }
                });
              });
            }
            else {
              // dettach event
              wrapper.off(sbclickEvent);
            }
          }

          function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            if(!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
      	  }
        }
        
        ///////

        function sidebarAddBackdrop() {
          var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
          $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
          });
        }

        // Open the collapse sidebar submenu items when on touch devices 
        // - desktop only opens on hover
        function toggleTouchItem($element){
          $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // ----------------------------------- 
        function toggleMenuItem($listItem, $sidebar) {

          removeFloatingNav();

          var ul = $listItem.children('ul');
          
          if( !ul.length ) return $();
          if( $listItem.hasClass('open') ) {
            toggleTouchItem($listItem);
            return $();
          }

          var $aside = $('.aside');
          var $asideInner = $('.aside-inner'); // for top offset calculation
          // float aside uses extra padding on aside
          var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
          var subNav = ul.clone().appendTo( $aside );
          
          toggleTouchItem($listItem);

          var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
          var vwHeight = $win.height();

          subNav
            .addClass('nav-floating')
            .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top:      itemTop,
              bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

          subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
          });

          return subNav;
        }

        function removeFloatingNav() {
          $('.dropdown-backdrop').remove();
          $('.sidebar-subnav.nav-floating').remove();
          $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['Menus'];
    function SidebarLoader(Menus) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          onError = onError || function() { alert('Failure loading menu'); };
          
          var menu = Menus.getMenu('sidebar');

          if( menu )
            onReady( menu );
          else
            onError();

        }
    }
})();
/**
 * Created by Ivan on 8/27/15.
 */
'use strict';

// Setting up route
angular.module('sites').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
            state('appleftbar.sites', {
                url: '/sites',
                templateUrl: 'modules/sites/views/sites.client.view.html',
                resolve: {
                    organization:function( Organization ){
                        return Organization.promise;
                    }
                }
            });
    }
]);

/**
 * Created by Ivan on 8/27/15.
 */
/**=========================================================
 * Module: dashboard.js
 * Dashboard for biin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('sites')
        .controller('SitesController', SitesController);

    SitesController.$inject = ['$http', '$state','$timeout' ,'$scope', 'Authentication', 'Organization','Categories', 'ObjectsSidebar','Gallery'];
    function SitesController($http, $state, $timeout, $scope, Authentication, Organization,Categories, ObjectsSidebar,Gallery) {
        var vm = this;
        activate();

        function activate() {
            $scope.authentication = Authentication;
            $scope.organizationService = Organization;
        }

        /**=============================================================================================================
         * ObjectsSidebar Configuration
         *
         =============================================================================================================*/
        $scope.objectsSidebarService = ObjectsSidebar;
        $scope.sidebarTemplate =
            "<div class='col-md-3 thumbListImage'>" +
            "<img ng-if='item.media.length == 0' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+' alt=''/>" +
            "<img ng-if='item.media.length>0' ng-src='{{item.media[0].url}}' pending-indicator='pending-indicator'/>"+
            "</div>"+
            "<div class='col-md-9 leftInformationArea'>"+
            "<label class='moduleTitle'>{{item.title1}}</label>"+
            "<br/>"+
            "<label class='moduleTitle'>{{item.title2}}</label>"+
            "<div class='btnShowcasePreview icon-round-control btn-on-hover'>"+
            "<div class='icon icon-arrange-1'></div>"+
            "</div>"+
            "</div>"+
            "<div ng-click=\"deleteItem(objectsSidebarService.objects.indexOf(item),$event)\" class=\"icon-round-control btnDelete  btn-danger btn-on-hover\">"+
            "<i class=\"fa fa-close\"></i>"+
            "</div>";

        $scope.objectsSidebarService.template =$scope.sidebarTemplate;

        /**=============================================================================================================
         * Events Listeners
         *
         =============================================================================================================*/

        $scope.$on('$stateChangeStart', function(){
            $scope.objectsSidebarService.reset();
        });

        $scope.$on('organizationChanged',function(){
            $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;
            //Get the List of Objects
            $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+'/sites').success(function(data){
                var sites = data.data.sites;
                $scope.objectsSidebarService.setObjects(sites);
                if(sites.length > 0)
                    selectFirstSite(sites);
            });

            Gallery.getList($scope.organizationId).then(function(promise){
                $scope.galleries = promise.data.data;
            });
        });

        $scope.$on("Biin: On Object Clicked", function(event,objectClicked){
            //I know it's ugly and I don't like this approach, it should be other way to  validate if the tag field is
            // rendered to call this code
            //TODO: Change this implementation for another safer way!!!
            $timeout(function(){
                var siteSearchTag = $('#siteSearchTag');
                siteSearchTag.tagsinput("removeAll");
                for(var i=0;i< $scope.objectsSidebarService.selectedObject.searchTags.length;i++){
                    siteSearchTag.tagsinput("add",$scope.objectsSidebarService.selectedObject.searchTags[i]);
                }
            },100);

        });

        $scope.$on("Biin: On Object Created", function(){
            $scope.create();
        });

        $scope.$on("Biin: On Object Deleted", function(event,index){
            $scope.removeSiteAt(index);
        });

        /**=============================================================================================================
         * Variables
         *
         =============================================================================================================*/

        //Init the the sites
        $scope.organizationId = $scope.organizationService.selectedOrganization.identifier;

        $scope.newTagField=[];

        //Loading images service property
        $scope.loadingImages =false;

        //Draggable Properties
        $scope.dragCategoryIndex =-1;
        $scope.dragGalleryIndex=-1;


        /**=============================================================================================================
         * Self called functions
         *
         =============================================================================================================*/

        //Get the List of Sites
        $http.get(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+ $scope.organizationService.selectedOrganization.identifier +'/sites').success(function(data){
            if(data.data) {
                $scope.objectsSidebarService.setObjects(data.data.sites);
                if(data.data.sites.length>0){
                    selectFirstSite(data.data.sites);
                }
            }
        });

        //Get the List of Categories
        Categories.getList().then(function(promise){
            $scope.categories = promise.data.data;
        });

        //Get the list of the gallery
        Gallery.getList($scope.organizationService.selectedOrganization.identifier).then(function(promise){
            $scope.galleries= promise.data.data;
        });

        /**=============================================================================================================
         *  Functions
         =============================================================================================================*/

        var selectFirstSite = function( sites ) {

            $scope.objectsSidebarService.selectedObject = sites[0];
            //I know it's ugly and I don't like this approach, it should be other way to  validate if the tag field is
            // rendered to call this code
            //TODO: Change this implementation for another safer way!!!
            $timeout(function(){
                var siteSearchTag = $('#siteSearchTag');
                for(var i=0;i< $scope.objectsSidebarService.selectedObject.searchTags.length;i++){
                    siteSearchTag.tagsinput("add",$scope.objectsSidebarService.selectedObject.searchTags[i]);
                }
            },100);

        };

        //Return the categories of the sites
        $scope.ownCategories=function(){
            return $scope.objectsSidebarService.selectedObject.categories;
        };

        //Create a new Site
        $scope.create = function(){
            //Get the Mayor from server
            $http.post(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+"/sites").success(function(site,status){
                if(status==201){

                    var siteSearchTag =$('#siteSearchTag');
                    siteSearchTag.tagsinput("removeAll");

                    var sites = $scope.objectsSidebarService.getObjects();
                    sites.push(site);
                    $scope.objectsSidebarService.setObjects(sites);
                    $scope.objectsSidebarService.setSelectedObject(site);
                }
                else
                {
                    displayErrorMessage(site,"Sites Creation",status)
                }
            });
        };

        //Remove site at specific position
        $scope.removeSiteAt = function(index){

            var sites = $scope.objectsSidebarService.getObjects();
            var siteIdToDelete = sites[index].identifier;
            var deleteSelectedObject = siteIdToDelete == $scope.objectsSidebarService.selectedObject.identifier;

            $http.delete(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationId+'/sites/'+siteIdToDelete).success(
                function(data){
                    if(data.state=="success"){
                        sites.splice(index,1);
                        if(deleteSelectedObject){
                            $scope.objectsSidebarService.selectedObject = null;
                        }
                        $scope.objectsSidebarService.setObjects(sites);

                    }else{
                        console.error("Couldn't delete site");
                    }
                }
            );

        };

        //Save detail model object
        $scope.save= function(){

            var tags = $("#siteSearchTag").tagsinput('items');

            $scope.objectsSidebarService.selectedObject.searchTags = [];

            for(var i = 0; i < tags.length; i++){
                $scope.objectsSidebarService.selectedObject.searchTags.push(tags[i]);
            }

            $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organizations/'+$scope.organizationService.selectedOrganization.identifier+'/sites/'+$scope.objectsSidebarService.selectedObject.identifier,{model:$scope.objectsSidebarService.selectedObject}).success(function(data,status){
                if("replaceModel" in data){
                    $scope.objectsSidebarService.selectedObject = data.replaceModel;
                }
                if(data.state=="success")
                    $scope.succesSaveShow=true;
            });

        };

        // Function that limits in nutshell how many words can it be
        $scope.limitNutshell = function(){
            var value = $scope.objectsSidebarService.selectedObject.nutshell;

            if(value == null)
                value = "";

            value = value.trim();
            var words = value.split(" ");

            if(words.length > 8)
                words.splice(8, words.length-8);
            var sentence = "";

            for (var i = 0; i < words.length; i++) {
                sentence += words[i] + " ";
            }

            sentence = sentence.trim();
            $scope.objectsSidebarService.selectedObject.nutshell = sentence;
        };

        //Location Methods
        $scope.changeLocation=function(lat,lng){
            $scope.objectsSidebarService.selectedObject.lat=lat;
            $scope.objectsSidebarService.selectedObject.lng=lng;

            //Apply the changes
            $scope.$digest();
            $scope.$apply();
        };

        //Category return if contains a specific category
        $scope.containsCategory=function(category){
            if(typeof(_.findWhere($scope.objectsSidebarService.selectedObject.categories,{identifier:category.identifier}))!='undefined')
                return true;
            else
                return false;
        };


        //Change the state of the category relation with the Site
        $scope.updateSelectedCategories =function(category){
            var index =-1;
            var cat = _.findWhere($scope.objectsSidebarService.selectedObject.categories,{identifier:category.identifier});
            if(typeof(cat)!='undefined'){
                index=$scope.objectsSidebarService.selectedObject.categories.indexOf(cat);
            }

            if(index>=0)
                $scope.objectsSidebarService.selectedObject.categories.splice(index,1);
            else
                $scope.objectsSidebarService.selectedObject.categories.push(category);

        };

        //Remove the media object at specific index
        $scope.removeMediaAt=function(index){
            if($scope.objectsSidebarService.selectedObject.media.length>=index)
                $scope.objectsSidebarService.selectedObject.media.splice(index,1)
        };
    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){
  
      $translateProvider.useStaticFilesLoader({
          prefix : '/i18n/',
          suffix : '.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
            'es_AR': 'Español',
            'en': 'English'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();

'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('page.signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('page.signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('page.forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('page.reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('page.reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('page.reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		}).
		state('app.password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		/*state('app.profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).*/
		state('app.accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		});
	}
]);

'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('click', function(){
            $timeout(function(){
              $window.dispatchEvent(new Event('resize'));
            });
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },
          
          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();
