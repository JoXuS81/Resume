/* Table of Contents
********************

1. Functioning of the Filter Navbar (Section Projects)

*/


// Functioning of the Filter Navbar (Section Projects)
$(".projects_all").click(function() {
    $(".projects_all").css("color", "#37ABBB");
    $(".projects_app").show("slow");
    $(".projects_applications").css("color", "#ffffff");
    $(".projects_des").css("color", "#ffffff");
    $(".projects_design").show("slow");
    $(".projects_dev").css("color", "#ffffff");
    $(".projects_laptop").show("slow");
}); 


$(".projects_applications").click(function() {
    $(".projects_all").css("color", "#ffffff");
    $(".projects_app").show("slow");
    $(".projects_applications").css("color", "#37ABBB");
    $(".projects_des").css("color", "#ffffff");
    $(".projects_design").hide("slow");
    $(".projects_dev").css("color", "#ffffff");
    $(".projects_laptop").hide("slow");
}); 


$(".projects_des").click(function() {
    $(".projects_all").css("color", "#ffffff");
    $(".projects_app").show("slow");
    $(".projects_applications").css("color", "#ffffff");
    $(".projects_des").css("color", "#37ABBB");
    $(".projects_design").show("slow");
    $(".projects_dev").css("color", "#ffffff");
    $(".projects_laptop").hide("slow");
}); 


$(".projects_dev").click(function() {
    $(".projects_all").css("color", "#ffffff");
    $(".projects_app").hide("slow");
    $(".projects_applications").css("color", "#ffffff");
    $(".projects_des").css("color", "#ffffff");
    $(".projects_design").hide("slow");
    $(".projects_dev").css("color", "#37ABBB");
    $(".projects_laptop").show("slow");
}); 