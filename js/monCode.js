var username = "admin";
var password = "UHS";

$(document).ready(function () {
    $('.connect_inner_button').click(function(){
        console.log('click');
        verifyInputs();
    });
});


function verifyInputs(){
    console.log('verify');
    if(username == $('#username').val() && password == $('#password').val()){
        connectToUHS();
    }
}

function connectToUHS(){
    window.location ='C:/Users/antoi/Documents/HistoireSimple/UHS-WEB/home.html';
}

//faire une fonction qui déclenche le bouton quand on clique sur entrée