/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myangularfrontapp = angular.module('myangularfrontapp',[]);

myangularfrontapp.controller("allclubpage", function ($scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/json";
    
    function allClubList() {

        $http.get('http://localhost:8080/addclubs/').
                success(function (data) {
                    if (data._embedded != undefined) {
                        console.log(data);
                        $scope.MyAllclbdata = data._embedded;
                    }
                });
            }

    allClubList();

    $scope.goToAboutClbPage = function (clbId) {
        window.localStorage.setItem('clubId', clbId);
        window.location.href = '/frontclubdetail';
    };

    $scope.goTogalleryClbPage = function (clbId) {
    window.localStorage.setItem('clubId', clbId);
    window.location.href = '/frontclubgallery';
    };
    
    $scope.goToreviewClbPage = function (clbId) {
    window.localStorage.setItem('clubId', clbId);
    window.location.href = '/frontclubreview';
    };


});

myangularfrontapp.controller('myclubdetailpage', function ($scope, $http, $sce) {
    var MyClbId = window.localStorage.getItem('clubId');

    $http.get('http://localhost:8080/addclubs/' + MyClbId).
            success(function (data) {
                
                $scope.AboutText = $sce.trustAsHtml(data.clbAbout);
                            });
            
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
                   
                     $scope.fgaimages = myImages;  
                    
                });
                              
        });
        
        
  var myreviews = angular.module('myAppReview',[]);//require comments module
  
  
  myreviews.controller('FrmController', function ($scope, $http) {
       $http.defaults.headers.post["Content-Type"] = "application/json";
    var MyClbId = window.localStorage.getItem('clubId');
    
   function commentList() {
  
    
    $http.get('http://localhost:8080/addreviews/search/findByClbId?clbid=' + MyClbId).
                success(function (data) {
                   
                    var myComments = [];
                  data._embedded.addreviews.forEach(function(key) {
                  myComments.push(key.clbComment);
                  
                   });
                   
                     $scope.comment = myComments;  
                    
                });
                
   }
   
    commentList();
                
               
    $scope.btn_add = function() {
  
        $http.post('http://localhost:8080/addreviews/', {
             clbComment: $scope.txtcomment,
             clbId: MyClbId
        }).success(function (data, status, headers) {
            commentList();
           
        }).error(function(){
           
        });

        $scope.txtcomment = "";
    };
 
               
});
   