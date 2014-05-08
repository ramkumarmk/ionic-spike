var pictureSource;
var destinationType;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
      pictureSource=navigator.camera.PictureSourceType;
      destinationType=navigator.camera.DestinationType;
  }
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
      destinationType: destinationType.DATA_URL });
  }
function onPhotoDataSuccess(imageData) {
    // Uncomment to view the base64 encoded image data
    console.log(imageData);

    var smallImage = document.getElementById('smallImage');

    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
  }
function onFail(message) {
    alert('Failed because: ' + message);
  }