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
                        '<div  ng-click="showImageModal()" class="btn-default img-add-block-wrapper">'+
                            '<span  class="btn-browse">Browse</span>'+
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