/**=========================================================
 * Module: gifts.controller.js
 * Controller of gifts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('gifts')
        .controller('GiftsController', GiftsController);

    GiftsController.$inject = ['$http', '$window', '$state', '$scope', 'Loading', 'Organization', 'ObjectsSidebar', 'Authentication', '$translate', 'Sites', 'Gifts', 'Products'];

    function GiftsController($http, $window, $state, $scope, Loading, Organization, ObjectsSidebar, Authentication, $translate, Sites, Gifts, Products) {
        var gift = this;
        
        /* Redirect to login if there is no user*/
        if (!Authentication.user) {
            $window.location = '/';
        }

        /* Running init function */
        init();
        
        /**=============================================================================================================
         * Init Function
         =============================================================================================================*/

        function init() {
            /* Initial Settings */
            $scope.loadingService = Loading;
            $scope.selectedOrganizationId = Organization.selectedOrganizationId;
            $scope.objectsSidebarService = ObjectsSidebar;
            $scope.giftsService = Gifts;
            $scope.productsService = Products;
            $scope.sitesService = Sites;

            getInitialData();

            /* Ready to fill/display the form */
            $scope.ready = false;
            /* Current Date */
            $scope.currentDate = new Date().getTime();
            /* Default alerts/hints (Last block) */
            $scope.show_alert = true;
            /* ObjectsSidebar gift template */
            $scope.sidebarTemplate =
                "<div class='col-md-3 thumbListImage'>" +
                    "<img ng-if='item.productIdentifier.length==0' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+' alt=''/>" +
                    "<img ng-if='item.productIdentifier.length>0' ng-src='{{setProductImage(item.productIdentifier)}}' pending-indicator='pending-indicator'/>"+
                "</div>" +
                "<div class='col-md-9 leftInformationArea'>"+
                    "<label class='twoRowTitle'>{{item.name}}</label>"+
                    "<small ng-if='((item.isUnlimited || item.amount>item.amountSpent) && item.hasAvailablePeriod==false) || ((item.isUnlimited || item.amount>item.amountSpent) && (currentDate <= formDate(item.endDate)) && item.hasAvailablePeriod==true)' class='valid-color'>Disponible</small>"+
                    "<small ng-if='(!item.isUnlimited && item.amount>item.amountSpent && item.hasAvailablePeriod==false) || (!item.isUnlimited && item.amount>item.amountSpent && (currentDate <= formDate(item.endDate)) && item.hasAvailablePeriod==true)'>{{item.amount-item.amountSpent}} u.</small>"+
                    "<small ng-if='(!item.isUnlimited && item.amount==item.amountSpent && item.hasAvailablePeriod==false) || (!item.isUnlimited && item.amount==item.amountSpent && (currentDate <= formDate(item.endDate)) && item.hasAvailablePeriod==true)' class='invalid-color'>Agotado</small>"+
                    "<small ng-if='(currentDate > formDate(item.endDate)) && item.hasAvailablePeriod==true' class='invalid-color'>Vencido</small>"+
                "</div>";
            $scope.objectsSidebarService.template =$scope.sidebarTemplate;
        }

        /**=============================================================================================================
         * Event Listeners
         =============================================================================================================*/

        $scope.$on('$stateChangeStart', function(){
            $scope.loadingService.isLoading = true;
            $scope.objectsSidebarService.reset();
        });

        $scope.$on("Biin: On Object Created", function(){
            $scope.create();
        });

        $scope.$on("Biin: On Object Clicked", function (event, objectClicked) {
            /* Parsing dates to work on AngularJS */
            objectClicked.startDate = moment(new Date(objectClicked.startDate)).endOf("day").toDate();
            objectClicked.endDate = moment(new Date(objectClicked.endDate)).endOf("day").toDate();
            /* All ready to show the gift info */
            $scope.ready = true;
        });
        
        $scope.$on('organizationChanged',function(){
            $scope.loadingService.isLoading = true;

            /* Get data again, depending of the new organization */
            $scope.ready = false;
            if($scope.selectedOrganizationId){
                getInitialData();
            }
        });

        /**=============================================================================================================
         * Functions
         =============================================================================================================*/

        /*
         *Function to get all the initial data need it to initialization of the module
         */
        function getInitialData() {
            if($scope.selectedOrganizationId){
                $scope.isLoading = true;
                $scope.productsService.getReadyProducts().then(function(products) {
                    $scope.products = products.data.elements;
                    return $scope.giftsService.getGifts();
                }).then(function(gifts) {
                    $scope.gifts = gifts;
                    $scope.objectsSidebarService.setObjects($scope.gifts);
                    return $scope.sitesService.getSites();
                }).then(function(sites) {
                    $scope.locals = sites.data.sites;
                    $scope.loadingService.isLoading = false;
                });
            }
        }
        
        //Create a gift
        $scope.create = function(){
            var titleText = $translate.instant("GIFT.CREATING");
            swal({   title: titleText,  type: "info",   showConfirmButton: false });
            $http.post(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.selectedOrganizationId + '/gifts').success(function(gift,status){
                if(status == 201){
                    var gifts = $scope.objectsSidebarService.getObjects();
                    gift.startDate = new Date(gift.startDate);
                    gift.endDate = new Date(gift.endDate);
                    gifts.unshift(gift);
                    $scope.objectsSidebarService.setObjects(gifts);
                    $scope.objectsSidebarService.setSelectedObject(gift);
                    $scope.ready = true;

                    setTimeout(function(){
                        swal.close();
                    },2000);
                }
            });
        }

        //Function to send just the available types of gift mechanics
        $scope.availableIn = function (type) {
            var exist = false;
            $scope.types = $scope.objectsSidebarService.selectedObject.availableIn;

            if($scope.types.length == 0){
                //If any button is clicked
                if (type=='all'){
                    $scope.types = $scope.types = ['nps','mec','vip'];
                } else {
                    $scope.types.push(type);
                }
            }else if ($scope.types.length == 3){
                if (type=='all'){
                    $scope.types = [];
                } else {
                    $scope.types = [];
                    $scope.types.push(type);
                }
            } else if($scope.types.length == 2){
                $scope.types = $scope.types = ['nps','mec','vip'];
            } else {
                if (type=='all'){
                    $scope.types = $scope.types = ['nps','mec','vip'];
                } else {
                    for(var i in $scope.types){
                        if(type == $scope.types[i]){
                            $scope.types.splice(i, 1);
                            exist = true;
                        }
                    }
                    if(!exist){
                        $scope.types.push(type);
                    }
                }
            }
            $scope.objectsSidebarService.selectedObject.availableIn = $scope.types;
        }

        //Function to control the locals available for the gift
        $scope.availableLocal = function (local) {
            var exist = false;
            $scope.localsAvailable = $scope.objectsSidebarService.selectedObject.sites;

            if($scope.localsAvailable.length == 0){
                 $scope.localsAvailable.push(local);
            }else{
                 //Validate if the local was already selected
                for(var i in $scope.localsAvailable){
                    if(local == $scope.localsAvailable[i]){
                        $scope.localsAvailable.splice(i, 1);
                        exist = true;
                    }
                }
                if(!exist){
                    $scope.localsAvailable.push(local);
                }
            }
            $scope.objectsSidebarService.selectedObject.sites = $scope.localsAvailable;
        }

        //Function to activate a gift
        $scope.activate = function () {
            if(gift.myForm.$valid) {
                var giftToUpdate = $scope.objectsSidebarService.selectedObject;
                var translatedTexts = $translate.instant(["GENERIC.ACTIVATE_GIFT_TITLE", "GENERIC.ACTIVATE_GIFT_CONFIRMATION", "GENERIC.ACTIVATE", "GENERIC.CANCEL", "GENERIC.ACTIVATED", "GIFT.ACTIVATE_TEXT"]);
                swal({
                    title: translatedTexts["GENERIC.ACTIVATE_GIFT_TITLE"],
                    text: translatedTexts["GENERIC.ACTIVATE_GIFT_CONFIRMATION"],
                    type: "warning",
                    showCancelButton: true,
                    cancelButtonText: translatedTexts["GENERIC.CANCEL"],
                    confirmButtonColor: "#8CD4F5",
                    confirmButtonText: translatedTexts["GENERIC.ACTIVATE"],
                    showLoaderOnConfirm: true,
                    closeOnConfirm: false
                }, function () {
                    $scope.objectsSidebarService.selectedObject.isActive = true;

                    $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.selectedOrganizationId + '/gifts/' + giftToUpdate.identifier, {isActive: true}).success(function (data, status) {
                        swal(translatedTexts["GENERIC.ACTIVATED"], translatedTexts["GIFT.ACTIVATE_TEXT"], "success");
                    });
                });
            }
        }

        //Function that display the swal as a confirmation to remove gift
        $scope.deleteGift = function(message, selectedObject) {
            var translatedTexts  = $translate.instant(["GENERIC.DELETE_GIFT_TITLE","GENERIC.DELETE_GIFT_CONFIRMATION","GENERIC.DELETE","GENERIC.CANCEL"]);

            swal({
                title: translatedTexts["GENERIC.DELETE_GIFT_TITLE"],
                text: translatedTexts["GENERIC.DELETE_GIFT_CONFIRMATION"],
                type: "warning",
                showCancelButton: true,
                cancelButtonText:translatedTexts["GENERIC.CANCEL"],
                confirmButtonColor: "#DD6B55",
                confirmButtonText: translatedTexts["GENERIC.DELETE"],
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                $scope.removeGiftAt($scope.objectsSidebarService.objects.indexOf(selectedObject));
            });
        };

        //Remove gift at specific position
        $scope.removeGiftAt = function(index){
            var giftToDelete = $scope.objectsSidebarService.objects[index];
            var translatedTexts  = $translate.instant(["GIFT.DELETED_TEXT","GENERIC.DELETED"]);
            $http.delete(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.selectedOrganizationId + '/gifts/'+ giftToDelete.identifier,{data:giftToDelete}).success(function(data){
                    $scope.ready = false;
                    $scope.objectsSidebarService.objects.splice(index,1);
                    swal(translatedTexts["GENERIC.DELETED"], translatedTexts["GIFT.DELETED_TEXT"], "success");
                }
            );
        };

        //Save gift information
        $scope.update = function(){
            var giftToUpdate = $scope.objectsSidebarService.selectedObject;
            // Don't do anything if there is no selected gift
            if ($scope.ready == false)
                return;

            if(gift.myForm.$valid  && $scope.objectsSidebarService.selectedObject.sites.length > 0 && $scope.objectsSidebarService.selectedObject.availableIn.length > 0) {
                $http.put(ApplicationConfiguration.applicationBackendURL + 'api/organizations/' + $scope.selectedOrganizationId + '/gifts/'+giftToUpdate.identifier,giftToUpdate).success(function(data,status){
                    console.log('Actualizado');
                });
            }
        }
        //Check locals in initial data
        $scope.checkLocal = function(local){
            if($scope.objectsSidebarService.selectedObject){
                $scope.localsAvailable = $scope.objectsSidebarService.selectedObject.sites;
                for(var i in $scope.localsAvailable){
                    if(local == $scope.localsAvailable[i]){
                        return true;
                    }
                }
            }
        }
        //Define a display number for amount
        $scope.checkUnlimited = function() {
            $scope.objectsSidebarService.selectedObject.amount = 1;
        }
    }
})();
