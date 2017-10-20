// A $( document ).ready() block.

$(document).ready(function () {
    console.log("ready!");


    $(".connect_button").click(function (){
     $(this).animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

});