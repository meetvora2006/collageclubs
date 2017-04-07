    //Create a module and create a controller for angular
var myangularapp = angular.module("myangularapp", []);
myangularapp.controller("myangularController", function($scope,$http) {
       
        
    $scope.login = function (){
        if($scope.username1 == 'admin' && $scope.password1 == 'admin'){
            window.location.href = '/colleges';
        } 
        else{ 
            alert('wrong credencials');
        }
            
    }
    
});


 $(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

       
    