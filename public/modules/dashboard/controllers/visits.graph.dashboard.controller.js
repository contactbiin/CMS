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

    VisitsGraphController.$inject = ['$http', '$state','$scope','$rootScope', 'Authentication', 'Organization','GlobalFilters'];
    function VisitsGraphController($http, $state, $scope,$rootScope, Authentication, Organization,GlobalFilters) {
        var vm = this;
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


        $scope.reset = function(){
            $scope.areaData = [{
                "label": "Visitas",
                "color": "#FE5621",
                "data": []
            }, {
                "label": "Notificaciones",
                "color": "#7dc7df",
                "data": []
            }];
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
            filters.siteId = $scope.globalFilters.selectedSite.identifier;

            $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/notifications', {
                headers: {
                    filters : JSON.stringify(filters),
                    offset : new Date().getTimezoneOffset()
                }
            }).success(function(dataNotifications) {

                $http.get(ApplicationConfiguration.applicationBackendURL+'api/dashboard/visits', {
                    headers: {
                        filters : JSON.stringify(filters),
                        offset : new Date().getTimezoneOffset()
                    }
                }).success(function(data) {
                    var visits = [];
                    var notifications =[];
                    var keys = Object.keys(data);

                    var maxValue = 1;
                    for (var i = 0; i < keys.length; i++) {
                        var s = new Date(keys[i]);
                        visits.push([s.getTime(), data[keys[i]]]);
                        notifications.push([s.getTime(), dataNotifications[keys[i]]]);
                    }
                    visits = visits.reverse();
                    notifications = notifications.reverse();

                    $scope.areaData = [{
                        "label": "Visitas",
                        "color": "#FE5621",
                        "data": visits
                    }, {
                        "label": "Notificaciones",
                        "color": "#7dc7df",
                        "data": notifications
                    }];

                    $rootScope.$broadcast('Biin: Finished Presential Children To Load', 'visitsGraph');
                });

            });
        };

        $scope.changeChartRange = function( days ){
            $scope.getChartData($scope.globalFilters.dateRange);
        };
        $scope.changeChartRange($scope.globalFilters.dateRange);

        $scope.areaOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return getDateString(new Date(x)) + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'time',
                timeformat: '%d-%b',
                monthNames: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                position: ($scope.app.layout.isRTL ? 'right' : 'left')
                //tickFormatter: function (v) {
                  //  return v + ' visitors';
               // }
            },
            shadowSize: 0
        };

    }
})();
