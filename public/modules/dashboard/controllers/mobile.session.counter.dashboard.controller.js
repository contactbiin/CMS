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
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/sessions',{ headers:{
                filters : JSON.stringify(filters) } } ).success(function(data) {
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
