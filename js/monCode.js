// A $( document ).ready() block.

$(document).ready(function () {
    console.log("ready!");


    $(".connect_input").click(function () {
        if ($(this).prev('input').attr('type') == 'password');
            changeType($(this).prev('input'), 'text');
        else
            changeType($(this).prev('input'), 'password');

            return false;
        });
    }

    $('.connect_button').click(function () {
        alert('vous êtes connectez');
    });

});