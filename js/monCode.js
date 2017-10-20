// A $( document ).ready() block.

$(document).ready(function () {
    console.log("ready!");


<<<<<<< HEAD
    $(".connect_button").click(function (){
     $(this).animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
=======
    $(".connect_input").click(function () {
        if ($(this).prev('input').attr('type') == 'password');
            changeType($(this).prev('input'), 'text');
        else
            changeType($(this).prev('input'), 'password');

            return false;
>>>>>>> a698b2844a3f470b26549b52ffd0e60345c4c333
        });
    });

});