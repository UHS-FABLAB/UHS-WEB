var username = "admin";
var password = "UHS";

$(document).ready(function () {
    //permet de se connecter en cliquant sur le bouton
    $('.connect_inner_button').click(function(){
        removeErrorMessage();
        verifyInputs();
    });
    //permet de se connecter avec le bouton entrée
    $('.connect_input_text').keydown(function (e) {
        if (e.keyCode == 13) {
            verifyInputs();
        }
    });
});

//vérifie les identifiants
function verifyInputs(){
    console.log('verify');
    if(username == $('#username').val() && password == $('#password').val()){
        //fonction chloé pour animer le bouton connexion
        connectToUHS();
    }else{
        $('.connect_error').addClass('connect_error_active');
    }
}

function connectToUHS(){
    window.location = 'home.html';
}

function removeErrorMessage(){
    $('.connect_error').removeClass('connect_error_active');
}

//faire une fonction qui déclenche le bouton quand on clique sur entrée