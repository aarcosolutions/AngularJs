(function () {
    var module = angular.module("common.services");
    //var productResource = function ($resource) {
    //    var getProductById = function (productId) {
    //        return $resource("/api/products/:productId");
    //    };
    //    return {
    //        getProductById: getProductById
    //    };
    //};

    var productResource = function ($resource) {
            return $resource("/api/products/:productId");
    };

    module.factory("productResource", ["$resource", productResource]);
}());