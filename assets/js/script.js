$(document).ready(function () {
 
    $("#small_screen_navbar_toggler").click(function (e) { 
        $("#small_screen_navbar").toggleClass("show-custom");
        
        if($("#small_screen_navbar_toggler .fa").hasClass("fa-navicon")){
            $("#small_screen_navbar_toggler .fa").removeClass("fa-navicon");
            $("#small_screen_navbar_toggler .fa").addClass("fa-times");
        }
        else{
            $("#small_screen_navbar_toggler .fa").removeClass("fa-times");
            $("#small_screen_navbar_toggler .fa").addClass("fa-navicon");
        }
    });
   
});