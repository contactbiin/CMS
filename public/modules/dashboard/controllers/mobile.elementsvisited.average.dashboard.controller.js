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

    mobileAverageVisitedElementsController.$inject = ['$http', '$state','$scope','$rootScope', 'Authentication', 'Organization','GlobalFilters'];
    function mobileAverageVisitedElementsController($http, $state, $scope,$rootScope, Authentication, Organization,GlobalFilters) {
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
            $scope.reset();
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Days Range Changed',function(scope,numberdays){
            $scope.reset();
            $scope.changeChartRange($scope.globalFilters.dateRange);
        });

        $scope.$on('Biin: Site Changed',function(scope,site){
            $scope.reset();
            $scope.getChartData($scope.globalFilters.dateRange);
        });

        $scope.reset = function (){
            $scope.value = 0;
        };

        $scope.getChartData = function ( days )
        {
            var filters = {};
            filters.organizationId = $scope.organizationService.selectedOrganization.identifier;
            filters.dateRange = $scope.globalFilters.dateRange;
            filters.siteId = $scope.globalFilters.selectedSite.identifier;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/sharedelements',
                { headers:{
                    filters : JSON.stringify(filters),
                    offset : new Date().getTimezoneOffset() } } ).success(function(data) {
                    $scope.value = data.data;
                    $rootScope.$broadcast('Biin: Finished Virtual Children To Load', 'visitsShared');
                });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData(days);
        };

        $scope.changeChartRange($scope.globalFilters.dateRange);
    }
})();
