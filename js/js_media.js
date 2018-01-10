$(document).ready(function () {
    //gère les onglets Ajout/modif
    $('.onglet').click(function(){
        $('.onglet').removeClass('onglet_actif');
        $(this).addClass('onglet_actif');
        if($(this).hasClass('onglet_add')){
            $('.contenu_onglet_add').addClass('contenu_onglet_actif');
            $('.contenu_onglet_modif').removeClass('contenu_onglet_actif');
            $('.film_modif_ajout_onglets').removeClass('film_modif_ajout_onglets_alter');
        }else{
            $('.film_modif_ajout_onglets').addClass('film_modif_ajout_onglets_alter');
            $('.contenu_onglet_modif').addClass('contenu_onglet_actif');
            $('.contenu_onglet_add').removeClass('contenu_onglet_actif');
        }
    });
    //gère les onglets video/jeuvideo
    $('.film_add_video_onglet, .film_add_jeuvideo_onglet').click(function(){
        $('.film_add_video_onglet, .film_add_jeuvideo_onglet').removeClass('film_add_onglet_actif');
        if(!$(this).hasClass('film_add_onglet_actif')){
            $(this).addClass('film_add_onglet_actif');
        }
        if($(this).hasClass('film_add_video_onglet')){
            //afficher contenu video
            $('.film_add_video').addClass('film_add_elem_active');
            $('.film_add_jeuvideo').removeClass('film_add_elem_active');
        }else{
            //afficher contenu jeuvideo
            $('.film_add_video').removeClass('film_add_elem_active');
            $('.film_add_jeuvideo').addClass('film_add_elem_active');
        }
    });
});

//spéacial branche dev