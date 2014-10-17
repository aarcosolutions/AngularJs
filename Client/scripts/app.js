//// JavaScript source code
//var module = (function () {
//})();


//var work = function () {
//    console.log("this is work!!!");
//}

//var doWork = function (f) {
//    console.log("starting work")
//    f();
//    console.log("work done!!!")
//};

//doWork(work);

var ReservationController =  function ($scope, $http) {

    
    var _reservations = {
        ReservationId : 101,
        ClientName : "Amit",
        Location: "Covent Garden",
        ImageSrc : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSo4-kjX6AjS9BXEO9SRju-2XDSDO5Jr6FGEKU6MTKHqWy-Bv1_"
    };

    $scope.reservations = _reservations;

    _reservations.getAll = function () {
    };

    _reservations.getById = function (id) {
    };

    return _reservations;
};