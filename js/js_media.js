$(document).ready(function () {
    var count = 0;
    var countMovies = 0;
    var id;
    var idGame;

    //Ajout de film (onglets film)
    function listenAddFilmButton() {
        $('.add_film').click(function () {
            var newFilm = $('#new_film');
            var addFilm = $('.film_add--onglet');
            addFilm[0].innerHTML = newFilm[0].innerHTML;
            $('.popup_ajout_film--input-title').focus();
            listenConfirmButtonAddFilm();
            listenClosePopupButton();
        });
    }

    function ajouteFilmHtml() {
        var elemListFilm = $('.liste_films--title');
        var elemTitle = $('.popup_ajout_film--input-title').val();
        var divNewFilm = document.createElement('div');
        $(divNewFilm).addClass('film');
        countMovies++;
        divNewFilm.id = 'film_nb_' + (countMovies-1);
        $(divNewFilm).text(elemTitle);
        $(elemListFilm).append(divNewFilm);
        var newFilmContainer = document.createElement('div');
        var templateContainer = $('#template_container');
        var containerAppli = $('.application');
        $(containerAppli).append(newFilmContainer);
        $(newFilmContainer).addClass('container_film_nb_' + (countMovies-1));
        $(newFilmContainer).addClass('container_film_actif')
        $(newFilmContainer).html($(templateContainer).html());
        focusOnFilm(newFilmContainer);
        setOngletFilmActif($('.liste_films > .liste_films--title > div:last-child'))
    }

    function setOngletFilmActif(onglet){
        $('.onglet_film_actif').removeClass('onglet_film_actif');
        $(onglet).addClass('onglet_film_actif');
    }

    function focusOnFilm(containerFilmFuturActif) {
        var lastMovie = $('.container_film_actif');
        $(lastMovie).removeClass('container_film_actif');
        $(lastMovie).addClass('container_film_hidden');
        $(containerFilmFuturActif).addClass('container_film_actif');
        if($(containerFilmFuturActif).hasClass('container_film_hidden')){
            $(containerFilmFuturActif).removeClass('container_film_hidden');
        }
    }

    function listenConfirmButtonAddFilm() {
        $('.fa-check-v').click(function () {
            ajouteFilmHtml();
            deletePopup();
            listenNewOngletFilm();
        });
    }

    function listenOngletsAjoutEtModif(className){
        $('.' + className + ' .onglet').click(function () {
            $('.' + className + ' .onglet').removeClass('onglet_actif');
            $(this).addClass('onglet_actif');
            if ($(this).hasClass('onglet_add')){
                $('.' + className + ' .contenu_onglet_add').addClass('contenu_onglet_actif');
                //$('.' + className + ' .film_modif_ajout_onglets').removeClass('film_modif_ajout_onglets_alter');
            } else {
                //$('.' + className + ' .film_modif_ajout_onglets').addClass('film_modif_ajout_onglets_alter');
                $('.' + className + ' .contenu_onglet_modif').removeClass('contenu_onglet_actif');
            }
        });
    }

    function checkFormulaireAjoutValidity(containerClassName){
        var titreMedia = $('.' + containerClassName + ' .ajout_media_title').val();
        var fileMedia = $('.' + containerClassName + ' .ajout_media_file').val();
        var titreValid = false;
        var fichierValid = false;
        if(titreMedia!=""){
            titreValid = true;
        }
        if(fileMedia!=""){
            fichierValid = true;
        }
        //tester la présence du fichier
        return (fichierValid && titreValid);
    }

    function addMediaToFilmList(containerClassName){
        var titreMedia = $('.' + containerClassName + ' .ajout_media_title').val();
        var fileMedia = $('.' + containerClassName + ' .ajout_media_file').val();
        var descMedia = $('.' + containerClassName + ' .ajout_media_desc').val();
        insertMediaInHTML(titreMedia, fileMedia, descMedia);
    }

    function insertMediaInHTML(){
        return false;
    }
    /*
    function listenOngletsVideoEtJeuVideo(className){
        $('.container_' + className + ' .film_add_video_onglet, .film_add_jeuvideo_onglet').click(function ongletMedia() {
            $('.container_' + className + ' .film_add_video_onglet, .film_add_jeuvideo_onglet').removeClass('film_add_onglet_actif');
            if (!$(this).hasClass('film_add_onglet_actif')) {
                $(this).addClass('film_add_onglet_actif');
            }
            if ($(this).hasClass('film_add_video_onglet')) {
                //afficher contenu video
                $('.container_' + className + ' .film_add_video').addClass('film_add_elem_active');
                $('.container_' + className + ' .film_add_jeuvideo').removeClass('film_add_elem_active');
            } else {
                //afficher contenu jeuvideo
                $('.container_' + className + ' .film_add_video').removeClass('film_add_elem_active');
                $('.container_' + className + ' .film_add_jeuvideo').addClass('film_add_elem_active');
            }
        });
    }*/

    function listenAjoutMediaButton(className){
        $('.'+ className + ' .add_media_button').click(function () {
            if(checkFormulaireAjoutValidity(className)){
                addMediaToFilmList(className);
            }
            /*
            var titre = $('.container_' + className + " #titre_film").val();
            var description = $('.container_' + className + " #description_film").val();
            var title;
            var describ;
            if (titre === "") {
                $('.container_' + className + ' .error_film').html("Erreur, vous devez entrer le nom du film !");
            }
            else {
                $('.container_' + className + ' .error_film').html("");
                var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/exemple_video.png'></div><div id='element_film_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                $('.container_' + className + ' .film_list_container').append(newMedia);

                $('.container_' + className + ' #element_' + count).click(function () {
                    id = $(this).attr('id').split("_")[1];
                    $('.container_' + className + ' #media_modif_title').val($('.container_' + className + ' #element_film_' + id).html());
                    $('.container_' + className + ' #media_modif_describ').val($('.container_' + className + ' #element_data_' + id).html());
                    console.log(id)
                });
                count++;

                $('.container_' + className + ' .valider_text').click(function () {
                    title = $('.container_' + className + ' #media_modif_title').val();
                    describ = $('.container_' + className + ' #media_modif_describ').val();
                    $('.container_' + className + ' #element_film_' + id).html(title);
                    $('.container_' + className + ' #element_data_' + id).html(describ);
                });
            }*/
        });
    }
    /*
    function listenAjoutJeuButton(className){
        $('.container_' + className + ' #click_jeu').click(function() {
            var titre = $('.container_' + className + ' #titre_jeu').val();
            var description = $('.container_' + className + ' #description_jeu').val();
            if (titre === "") {
                $('.container_' + className + ' .error_jeu').html("Erreur, vous devez entrer le nom du jeu !");
            }
            else {
                $('.container_' + className + ' .error_jeu').html("");
                var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/manette.jpg'></div><div id='element_jeu_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_jeu_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                $('.container_' + className + ' .film_list_container').append(newMedia);

                $('.container_' + className + ' #element_' + count).click(function () {
                    idGame = $(this).attr('id').split("_")[1];
                    $('.container_' + className + ' #media_modif_title').val(titre);
                    $('.container_' + className + ' #media_modif_describ').val(description);
                });
                count++;

                $('.container_' + className + ' .valider_text').click(function () {
                    titre = $('.container_' + className + ' #media_modif_title').val();
                    description = $('.container_' + className + ' #media_modif_describ').val();
                    $('.container_' + className + ' #element_jeu_' + idGame).html(titre);
                    $('.container_' + className + ' #element_jeu_data_' + idGame).html(description);
                    $('.container_' + className + ' #media_modif_title').empty();
                    $('.container_' + className + ' #media_modif_describ').empty();
                });
            }
        });
    }*/

    function listenNewOngletFilm(){
        //Gere les onglets des différents films
        $('#film_nb_' + (countMovies -1)).click(function () {
            var className = this.id;
            var newClassName = "container_" + className;
            var classChangeFocus = $('.' + newClassName);
            focusOnFilm(classChangeFocus);
            setOngletFilmActif(this);
        });
        var containerClassName = 'container_film_nb_'+(countMovies-1);
        //Gere les onglets ajout/modif
        listenOngletsAjoutEtModif(containerClassName);
        //gère les onglets video/jeuvideo
        //listenOngletsVideoEtJeuVideo(containerClassName);
        //Ajout media au click
        listenAjoutMediaButton(containerClassName);
    }

    function listenClosePopupButton() {
        $('.fa-times-close').click(function () {
            deletePopup();
        });
    }

    function deletePopup() {
       var selectPopup = document.querySelector('.film_add--onglet');
       var popup = document.querySelector('.popup_ajout--film');
       selectPopup.removeChild(popup);
    }

    listenClosePopupButton();
    listenAddFilmButton();
});