$(document).ready(function () {
    $('.onglet').click(function(){
        $('.onglet').removeClass('onglet_actif');
        if(!$(this).hasClass('onglet_actif')){
            $(this).addClass('onglet_actif');
        }
    });
});