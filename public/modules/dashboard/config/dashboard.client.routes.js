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
                    permissions: function(Permission) {
                        return Permission.getPermissions();
                    },
                    selectedOrganization: function (Organization) {
                        return Organization.getSelectedOrganization();
                    },
                    organization: function (Organization) {
                        return Organization.getOrganizations();
                    }
                }
            });
    }
]);
