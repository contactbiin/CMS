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

    mobilePieVisitsController.$inject = ['$http', '$state','$scope', 'Authentication', 'Organization'];
    function mobilePieVisitsController($http, $state, $scope, Authentication, Organization) {
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

        $scope.getChartData = function ( days )
        {
            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/mobile/newsvsreturning').success(function(data) {
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
            $scope.currentDays = days;
        };
        $scope.changeChartRange(30);

    }
})();
