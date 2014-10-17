(function () {
    "use strict";

    var productEditController = function (product, $state) {
        var vm = this;
        vm.product = product;
        if(vm.product && vm.product.productId)
        {
            vm.title = "Edit: " + vm.product.productName;
        }
        else
        {
            vm.title = "New Product";
        }

        vm.open = function ($event) {
            $event.preventDefault(); //prevent any default action to be triggered
            $event.stopPropagation(); //prevent event to be propagated
            vm.opened != vm.opened;
        };
        vm.submit = function (valid)
        {
            if (valid)
            {
                vm.product.$save(function (data) {
                    toastr.success("Saved Successfully!!!");
                });
            }
            else
            {
                alert("Please fix the error!!")
            }
            
        };

        vm.cancel = function () {
            $state.go('productList')
        };

        vm.addTags = function (tags) {
            if(tags)
            {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
            }
            else {
                alert("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function(idx)
        {
            vm.product.tags.splice(idx, 1);
        }
    }

    angular.module("productManagement").controller("ProductEditController", ["product","$state", productEditController]);

}());