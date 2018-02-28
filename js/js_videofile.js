(function() {

function createThumbnail(file) {

  var reader = new FileReader();

  reader.addEventListener('load', function() {

    var videoElement = document.createElement('video');
    videoElement.style.maxWidth = '150px';
    videoElement.style.maxHeight = '150px';
    videoElement.src = this.result;
    prev.appendChild(videoElement);
    //affichage de la video
  });

  reader.readAsDataURL(file);
}

  var allowTypes = ['mp4', 'avi', 'rm'];
  fileInput = document.querySelector('#file'),
  prev = document.querySelector('#prev');



  fileInput;addEventListener('change', function() {

    var files =this.file,
        filesLen = files.length,
        imgType;

    for (var i = 0; i <filesLen; i++) {

      videoType = files[i].name.split('.');
      videoType = videoType[videoType.length - 1].toLowerCase();

      if (allowTypes.indexOf(videoType) != -1) {
        createThumbnail(files[i]);

        //le fichier est bien une video supportée, il ne reste plus qu'à l'afficher


      }
    }

  })
});