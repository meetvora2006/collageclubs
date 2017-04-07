var myangularapp = angular.module("myangularapp", []);
myangularapp.controller("myangularController", function ($scope, $http) {

    $http.defaults.headers.post["Content-Type"] = "application/json";

    function collegeList(){
        
        $http.get('http://localhost:8080/addcolleges').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.Mydata = data._embedded;
                }
            });
        }
        
    collegeList();    

    $scope.addcollege = function () {
        if ($scope.college == '') {
            alert("add college name");
        } else {
            $http.post('http://localhost:8080/addcolleges/', {
                collegeName: $scope.college
            }).success(function (data, status, headers) {
                        collegeList();
                    });
        }
    }

});