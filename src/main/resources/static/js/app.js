//Create a module and create a controller for angular

var myangularapp = angular.module('myangularapp', ['ngWig']);
myangularapp.controller("myangularController", function ($scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/json";
    $scope.login = function () {

        $scope.username1;
        $scope.password1;

        $http.get('http://localhost:8080/users/search/findByUserName?username=' + $scope.username1).
                success(function (data) {

                    window.localStorage.setItem('clgId', data._embedded.users[0]['uniId']);
                    window.localStorage.setItem('userId', data._embedded.users[0]['id']);
                    window.location.href = '/club';
                });

    }


    $http.get('http://localhost:8080/addcolleges').
            success(function (data) {
                if (data._embedded != undefined) {
                    $scope.MyUniName = data._embedded;
                }
            });


    $scope.register = function () {

        if ($scope.firstname == "" || $scope.lastname == "" || $scope.username == "" || $scope.email == "" || $scope.password == "") {
            alert("Insufficient Data! Please provide values for task name, description, priortiy and status");
        } else {
            $http.post('http://localhost:8080/users/', {
                userName: $scope.username,
                password: $scope.password,
                email: $scope.email,
                uniId: $scope.myuniid
            }).
                    success(function (data, status, headers) {
                        alert("Ragistration sucessfuly done");
                        window.location.href = '/';

                    });
        }


    }

});

$(function () {

    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});

myangularapp.controller("clubpage", function ($scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/json";
    var MyUserId = window.localStorage.getItem('userId');
    var MyClgId = window.localStorage.getItem('clgId');

    function clubList() {

        $http.get('http://localhost:8080/addclubs/search/findByUserId?userid=' + MyUserId).
                success(function (data) {
                    if (data._embedded != undefined) {
                        $scope.Myclbdata = data._embedded;
                    }
                });
    }

    clubList();

    $scope.addclub = function () {
        if ($scope.club == '') {
            alert("add club name");
        } else {
            $http.post('http://localhost:8080/addclubs/', {
                userId: MyUserId,
                clgId: MyClgId,
                clbName: $scope.club
            }).success(function (data, status, headers) {
               
                clubList();
            });
        }
    };


    $scope.goToAboutClb = function (clbId) {
        window.localStorage.setItem('clubId', clbId);
        window.location.href = '/clubdetail';
    };

    $scope.clubgallery = function (clbId) {
    window.localStorage.setItem('clubId', clbId);
    window.location.href = '/clubgallery';
};


});


myangularapp.controller('clubdetailpage', function ($scope, $http, $sce) {
    var MyClbId = window.localStorage.getItem('clubId');

    $http.get('http://localhost:8080/addclubs/' + MyClbId).
            success(function (data) {
                $scope.AboutText = data.clbAbout;
            });



    $scope.saveAboutUs = function () {
        if ($scope.AboutText === '') {
            alert("add club description");
        } else {
            $http.put('http://localhost:8080/addclubs/'+ MyClbId,{clbAbout: $scope.AboutText}
            ).success(function (data, status, headers) {
                alert("saved");
            });
        }
    };
});


var mygallery = angular.module('demo', ['thatisuday.ng-image-gallery']);

        mygallery.config(function (ngImageGalleryOptsProvider) {
            ngImageGalleryOptsProvider.setOpts({
                thumbnails: true,
                bubbles: true,
                imgBubbles: false,
                bgClose: true
            });
        })
        .controller('main', function ($scope, $http) {
              var MyClbId = window.localStorage.getItem('clubId');
                      
             $http.get('http://localhost:8080/images/search/findByClbId?clbid=' + MyClbId).
                success(function (data) {
                    var myImages = [];
                   data._embedded.images.forEach(function(key) {
                  myImages.push(   {
                    url: './myimages/'+key.name,
                    thumbUrl: './myimages/'+key.name
                    })
                  
                   });
                   
                     $scope.gaimages = myImages;  
                    
                });
                              
        });


mygallery.service('fileUploadService', function ($http) {
  this.uploadFileToUrl = function(file, uploadUrl){
    var fd = new FormData();
    fd.append('file', file);
    $http.post('http://localhost:8080' + uploadUrl, fd, {
  transformRequest: angular.identity,
            headers: { 'processData': false,'Content-Type': false,'mimeType': 'multipart/form-data'}
    })
      .success(function(){
      })
      .error(function(){
      });
  };
});


mygallery.controller("addimage", function ($scope, fileUploadService) {   

$scope.uploadImage= function(){
    var file = $scope.uploadme;
    var uploadUrl = "/imageUpload";
    fileUploadService.uploadFileToUrl(file, uploadUrl);
    };  
});




        
