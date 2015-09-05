$(document).ready(function(){
    $('.modal-trigger').leanModal();

    var base_url = 'http://192.168.0.100:5001/';

    $("#on").click(function(){
    	
        $.get(base_url + "on", function(data){
        	if (data == 'on'){
        		Materialize.toast('Włączono', 4000);
        	} else {
        		Materialize.toast('Wystąpił błąd', 4000);
        	}
        });
    });

    $("#off").click(function(){
        $.get(base_url + "off", function(data){
        	if (data == 'off'){
        		Materialize.toast('Wyłączono', 4000);
        	} else {
        		Materialize.toast('Wystąpił błąd', 4000);
        	}
        });
    });

    $("#shutdown").click(function(){
        console.log("shutdown");
        $.get(base_url + "shutdown", function(){});
    });

    $("#restart").click(function(){
        console.log("restart");
        $.get(base_url + "restart", function(){});
    }); 
});
