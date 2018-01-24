$(document).ready(function () {
    var count = 0;
    var countMovies = 0;
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
           divNewFilm.className = 'film film_nb_' + countMovies + '';
           divNewFilm.innerHTML = elemTitle;
           elemListFilm.appendChild(divNewFilm);
           var newContainer = document.createElement('div');
           var templateContaineur = document.querySelector('#template_container');
           var containerbla = document.querySelector('.application');
           containerbla.appendChild(newContainer);
           newContainer.className = 'container_film' + countMovies + ' container_film_actif';
           newContainer.innerHTML = templateContaineur.innerHTML;
           console.log(templateContaineur.innerHTML);
           console.log(newContainer.length);
           deletePopup();
           countMovies++;

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

            //Ajout media au click
            $("#testclick").click(function addMedia(){
                var titre = $("#titre_film").val();
                var description = $("#description_film").val();
                var title;
                var describ;
                if( titre === ""){
                    $('.error_film').html("Erreur, vous devez entrer le nom du film !");
                }
                else{
                    $('.error_film').html("");
                    var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/exemple_video.png'></div><div id='element_film_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                    $(".film_list_container").append(newMedia);

                    $("#element_" + count + "" ).click(function modifMedia(){
                        id = $(this).attr('id').split("_")[1];
                        $('#media_modif_title').val($("#element_film_" + id + "").html());
                        $('#media_modif_describ').val($("#element_data_" + id + "").html());
                        console.log(id)
                    });
                    count++;

                    $(".valider_text").click(function modifMediaOk(){
                        var nul = "";
                        title = $("#media_modif_title").val();
                        describ = $("#media_modif_describ").val();
                        $("#element_film_" + id + "").html(title);
                        $("#element_data_" + id + "").html(describ);
                    });
                }
            });

            $("#click_jeu").click(function addGame(){
                var titre = $("#titre_jeu").val();
                var description = $("#description_jeu").val();
                if( titre === ""){
                    $('.error_jeu').html("Erreur, vous devez entrer le nom du jeu !");
                }
                else{
                    $('.error_jeu').html("");
                    var newMedia = "<div id='element_" + count + "' class='film_added_element draggable elem" + count + "'><div class='film_element_img'><img class='film_element_img_image' src='./assets/img/manette.jpg'></div><div id='element_jeu_" + count + "' class='film_element_titre'>" + titre + "</div><div id='element_jeu_data_" + count + "' class='film_element_data elem'>" + description + "</div></div>";
                    $(".film_list_container").append(newMedia);

                    $("#element_" + count + "" ).click(function modifMedia(){
                        idGame = $(this).attr('id').split("_")[1];
                        $('#media_modif_title').val(titre);
                        $('#media_modif_describ').val(description);
                        console.log(id)
                    });
                    count++;

                    $(".valider_text").click(function modifMediaOk(){
                        console.log(id);
                        titre = $("#media_modif_title").val();
                        description = $("#media_modif_describ").val();
                        $("#element_jeu_" + idGame + "").html(title);
                        $("#element_jeu_data_" + idGame + "").html(describ);
                        $("#media_modif_title").empty();
                        $("#media_modif_describ").empty();
                    });
                }
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