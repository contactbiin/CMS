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
        $scope.objectsSidebarService.setObjects($scope.organizationService.organizationsList);

        $scope.$on('changeOrganizationImage',function(vara,varb){
            $scope.objectsSidebarService.selectedObject.media[0]=varb;
        });

        if (!Authentication.user) {
            $location.path('/');
        }

        $scope.saveOrganization = function () {
            if ($scope.selectedOrganization >= 0 && !$scope.isAnalazingOrg) {
                if (isOrganizationDirty()) {
                    var currentOrganization = $scope.organizationService.organizationsList[$scope.selectedOrganization];
                    $scope.prevSaveOrganization = jQuery.extend({}, currentOrganization);
                    $scope.isAnalazingOrg = false;

                    $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organization/' + currentOrganization.identifier, {model: currentOrganization}).success(function (data, status) {
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
        $scope.editOrganization = function (index) {
            $scope.selectedOrganization = index;
            $scope.prevSaveOrganization = jQuery.extend({}, $scope.organizationService.organizationsList[index]);
            //changeOrganizationToDefault();
            //$scope.clearValidations();
            //$scope.wizardPosition=1;
            //$scope.validate(true);
        };

        //Push a new organization in the list
        $scope.createOrganization = function () {
            //Get the Mayor from server
            $http.post(ApplicationConfiguration.applicationBackendURL +'api/organization/').success(function (org, status) {
                if (status == 201 || status == 200) {
                    $scope.organizationService.organizationsList.push(org);
                    $scope.editOrganization($scope.organizationService.organizationsList.indexOf(org));
                } else {
                    displayErrorMessage(org, "Organizations Creation", status);
                }
            });
        };

        //Remove showcase at specific position
        $scope.removeOrganization = function (id, deferred) {
            $http.delete(ApplicationConfiguration.applicationBackendURL + 'api/organization/' + id).success(function (data) {
                    if (data.state == "success") {
                        $scope.organizationService.removeOrganization(id);
                        deferred.resolve();
                    }
                }
            );
        };


        //Indicate if an organization data is changed
        var isOrganizationDirty = function () {
            $scope.isAnalazingOrg = true;
            var propertiesToCheck = ["name", "brand", "description", "extraInfo"];
            var foundChange = false;
            if ($scope.prevSaveOrganization !== null) {
                for (var i = 0; i < propertiesToCheck.length && !foundChange; i++) {
                    foundChange = $scope.organizationService.organizationsList[$scope.selectedOrganization][propertiesToCheck[i]] !== $scope.prevSaveOrganization[propertiesToCheck[i]];
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