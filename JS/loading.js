/* 


*****************
TABLE OF CONTENTS
*****************

1. Hide and show sections (with delay)


*/


/* Hide and show sections (with delay) */
$(document).ready(function() {
    $(".about").delay(7000).show("slow");
    $(".blog").delay(7000).show("slow");
    $(".contact").delay(7000).show("slow");
    $(".footer").delay(7000).show("slow");
    $(".home").delay(7000).show("slow");
    $(".loader").delay(7000).hide("slow");
    $(".projects").delay(7000).show("slow");
});