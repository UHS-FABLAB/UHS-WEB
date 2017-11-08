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
        desappear();
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

function desappear() {
    //fonction permettant de cacher la div quand on clique sur connnexion
      $('.connect_container').animate({
        opacity: 0
      },500,affiche_gif);
    })
};

function affiche_gif()
    //function affichant le GIF après avoir cliqué sur connexion
  {
  document.getElementById('hide').innerHTML = '<img src="https://media.giphy.com/media/p3V5TYYVGSCvm/giphy.gif">';
  }
