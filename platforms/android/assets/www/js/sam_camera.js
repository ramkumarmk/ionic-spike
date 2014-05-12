var pictureSource;
var destinationType;
var db;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
      pictureSource=navigator.camera.PictureSourceType;
      destinationType=navigator.camera.DestinationType;
      db = window.openDatabase("test", "1.0", "Test DB", 1000000);
  }
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onPhotoFail, { quality: 50,
      destinationType: destinationType.FILE_URL });
  }
function onPhotoDataSuccess(imageURI) {
    // Uncomment to view the base64 encoded image data
    console.log(imageURI);

    var gotFileEntry = function(fileEntry) {
      console.log("got image file entry: " + fileEntry.fullPath);
      var gotFileSystem = function(fileSystem) {

            fileSystem.root.getDirectory("MyAppFolder", {
                create : true
            }, function(dataDir) {
              var d = new Date();
              var n = d.getTime();
              //new file name
              var newFileName = n + ".jpg";
              console.log("Saved image" + dataDir);
                // copy the file
              fileEntry.moveTo(dataDir, newFileName, function(newfile){
                var smallImage = document.getElementById('smallImage');
                smallImage.src = newfile.toURL()
                console.log(newfile.toURL())
              }, fsFail);

            }, dirFail);
        };
        // get file system to copy or move image file to
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem,
            fsFail);
    };
    // resolve file system for image
    window.resolveLocalFileSystemURL(imageURI, gotFileEntry, fsFail);
    // file system fail
    var fsFail = function(error) {
      console.log("failed with error code: " + error.code);
    };
    var dirFail = function(error) {
      console.log("Directory error code: " + error.code);
    };
  }
function onPhotoFail(message) {
  console.log('Failed because: ' + message);
}