(function () {
    "use strict";
    var app = angular.module("productManagement", ["common.services", "ui.router", "ui.mask", "ui.bootstrap", "productResourceMock"]);
    //here we are passing common services module as a dependency for this module


    //let us config the route using $stateProvider service of 'ui-router' module.
    //you will define a state which will be:
    //-linked to a url, 
    //-the template which will be servered
    //-controller which will be used by the template
    //url => support deeplinking which helps in managing the browser history.
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl:"app/welcomeView.html"
            })
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListController as vm"
            })

            .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditController as vm",
                resolve: {
                    productResource: "productResource", //name of the service from which would be used to fetch data
                    //function which will actually fetch the data, we are passing the productResoruce service parameter defined above
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId; //retrieve the product id which is passed as part of url

                        //call the get method of ProductResource service and return a promise.
                        return productResource.get({ productId: productId }).$promise;
                    }

                }
            })
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfoView.html"
            })
            .state("productEdit.price", {
                url: "/price",
                templateUrl: "app/products/productEditPriceView.html"
            })
            .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "app/products/productEditTagsView.html"
            })

            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailController as vm",
                resolve: {
                    productResource: "productResource", //name of the service from which would be used to fetch data
                    //function which will actually fetch the data, we are passing the productResoruce service parameter defined above
                    product: function(productResource, $stateParams) 
                    {
                        var productId = $stateParams.productId; //retrieve the product id which is passed as part of url

                        //call the get method of ProductResource service and return a promise.
                        return productResource.get({ productId: productId }).$promise;
                    }

                }
            })
    }]);
}());