$(document).ready(function () {
    var count = 0;
    var countMovies = 1;
    var id;
    var idGame;

    //Ajout de film (onglets film)
    $('.add_film').click(function (){
        var newFilm = document.querySelector('#new_film');
        var addFilm = document.querySelector('.film_add--onglet');
        addFilm.innerHTML = newFilm.innerHTML;
        $('.onglet_ajout_film--input-title').focus();
        $('.fa-check-v').click(function (){
           var elemListFilm = document.querySelector('.liste_films--title');
           var elemTitle = document.querySelector('.onglet_ajout_film--input-title').value;
           var divNewFilm = document.createElement('div');
           divNewFilm.className = 'film';
           divNewFilm.id = 'film_nb_' +countMovies;
           divNewFilm.innerHTML = elemTitle;
           elemListFilm.appendChild(divNewFilm);
           var newContainer = document.createElement('div');
           var templateContaineur = document.querySelector('#template_container');
           var containerbla = document.querySelector('.application');
           containerbla.appendChild(newContainer);
           newContainer.className = 'container_film_nb_' + countMovies + ' container_film_actif';
           newContainer.innerHTML = templateContaineur.innerHTML;
           deletePopup();
           var countMoviesLessOne;
           countMoviesLessOne = countMovies - 1;
           countMovies++;
           var lastMovie = $('.container_film_nb_'+ countMoviesLessOne);

           var lengthList = $('.liste_films--title').children().length;
           if(lengthList >1) {
            lastMovie[0].style.display = "none";
           }

           //Gere les onglets des différents films
           $('.film').click(function () {
               console.log('click');
               var className = this.id;
               console.log(className);
               for(var i=1; i<countMovies; i++) {
                   var listFilm = $('.container_film_nb_' + i);
                   listFilm[0].style.display = "none";
               }
               var classChange = "container_" + className;
               var classChangeFocus = $('.' + classChange);
               classChangeFocus[0].style.display = "flex";

               //Gere les onglets ajout/modif
               $('.container_' + className + ' .onglet').click(function (){
                   console.log(className);
                   $('.container_' + className + ' .onglet').removeClass('onglet_actif');
                   $(this).addClass('onglet_actif');
                   if($(this).hasClass('onglet_add')){
                       $('.container_' + className + ' .contenu_onglet_add').addClass('contenu_onglet_actif');
                       $('.container_' + className + ' .contenu_onglet_modif').removeClass('contenu_onglet_actif');
                       $('.container_' + className + ' .film_modif_ajout_onglets').removeClass('film_modif_ajout_onglets_alter');
                   }else{
                       $('.container_' + className + ' .film_modif_ajout_onglets').addClass('film_modif_ajout_onglets_alter');
                       $('.container_' + className + ' .contenu_onglet_modif').addClass('contenu_onglet_actif');
                       $('.container_' + className + ' .contenu_onglet_add').removeClass('contenu_onglet_actif');
                   }
               });

               //gère les onglets video/jeuvideo
               $('.container_' + className + ' .film_add_video_onglet, .film_add_jeuvideo_onglet').click(function ongletMedia(){
                   $('.container_' + className + ' .film_add_video_onglet, .film_add_jeuvideo_onglet').removeClass('film_add_onglet_actif');
                   if(!$(this).hasClass('film_add_onglet_actif')){
                       $(this).addClass('film_add_onglet_actif');
                   }
                   if($(this).hasClass('film_add_video_onglet')){
                       //afficher contenu video
                       $('.container_' + className + ' .film_add_video').addClass('film_add_elem_active');
                       $('.container_' + className + ' .film_add_jeuvideo').removeClass('film_add_elem_active');
                   }else{
                       //afficher contenu jeuvideo
                       $('.container_' + className + ' .film_add_video').removeClass('film_add_elem_active');
                       $('.container_' + className + ' .film_add_jeuvideo').addClass('film_add_elem_active');
                   }
               });

               //Ajout media au click
               $('.container_' + className + ' #testclick').click(function (){
                   var titre = $('.container_' + className + " #titre_film").val();
                   var description = $('.container_' + className + " #description_film").val();
                   var title;
                   var describ;
                   if( titre === ""){
                       $('.container_' + className + ' .error_film').html("Erreur, vous devez entrer le nom du film !");
                   }
                   else{
                       $('.container_' + className + ' .error_film').html("");
                       var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/exemple_video.png'></div><div id='element_film_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                       $('.container_' + className + ' .film_list_container').append(newMedia);

                       $('.container_' + className + ' #element_' + count).click(function (){
                           id = $(this).attr('id').split("_")[1];
                           $('.container_' + className + ' #media_modif_title').val($('.container_' + className + ' #element_film_' + id).html());
                           $('.container_' + className + ' #media_modif_describ').val($('.container_' + className + ' #element_data_' + id).html());
                           console.log(id)
                       });
                       count++;

                       $('.container_' + className + ' .valider_text').click(function (){
                           title = $('.container_' + className + ' #media_modif_title').val();
                           describ = $('.container_' + className + ' #media_modif_describ').val();
                           $('.container_' + className + ' #element_film_' + id).html(title);
                           $('.container_' + className + ' #element_data_' + id).html(describ);
                       });
                   }
               });

               //Ajout jeu au click
               $('.container_' + className + ' #click_jeu').click(function addGame(){
                   var titre = $('.container_' + className + ' #titre_jeu').val();
                   var description = $('.container_' + className + ' #description_jeu').val();
                   if( titre === ""){
                       $('.container_' + className + ' .error_jeu').html("Erreur, vous devez entrer le nom du jeu !");
                   }
                   else{
                       $('.container_' + className + ' .error_jeu').html("");
                       var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/manette.jpg'></div><div id='element_jeu_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_jeu_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                       $('.container_' + className + ' .film_list_container').append(newMedia);

                       $('.container_' + className + ' #element_' + count).click(function (){
                           idGame = $(this).attr('id').split("_")[1];
                           $('.container_' + className + ' #media_modif_title').val(titre);
                           $('.container_' + className + ' #media_modif_describ').val(description);
                           console.log(id)
                       });
                       count++;

                       $('.container_' + className + ' .valider_text').click(function (){
                           console.log(id);
                           titre = $('.container_' + className + ' #media_modif_title').val();
                           description = $('.container_' + className + ' #media_modif_describ').val();
                           $('.container_' + className + ' #element_jeu_' + idGame).html(titre);
                           $('.container_' + className + ' #element_jeu_data_' + idGame).html(description);
                           $('.container_' + className + ' #media_modif_title').empty();
                           $('.container_' + className + ' #media_modif_describ').empty();
                       });
                   }
               });
           });
        });
        $('.fa-times-close').click(function () {
           deletePopup();
        });

    });

    function deletePopup() {
       var selectPopup = document.querySelector('.film_add--onglet');
       var popup = document.querySelector('.onglet_ajout--film');
       selectPopup.removeChild(popup);
    }

    //gère les onglets des differents film

});