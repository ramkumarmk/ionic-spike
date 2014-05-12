var pushNotification;
document.addEventListener("deviceready",onDeviceReady,false);
function successHandler (result) {
  console.log('Push notification 1st response = ' + result);
}

function errorHandler (error) {
  alert('error = ' + error);
}

function onNotificationGCM(e) {
  // $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');
  alert(e.event);
  switch( e.event )
  {
  case 'registered':
      if ( e.regid.length > 0 )
      {
        appendMessage('REGISTERED -> REGID:' + e.regid)
          // Your GCM push server needs to know the regID before it can push to this device
          // here is where you might want to send it the regID for later use.
          alert("regID = " + e.regid);
      }
  break;

  case 'message':
      // if this flag is set, this notification happened while we were in the foreground.
      // you might want to play a sound to get the user's attention, throw up a dialog, etc.
      if ( e.foreground )
      {
          appendMessage('--INLINE NOTIFICATION--');

          // if the notification contains a soundname, play it.
          var my_media = new Media("/android_asset/www/"+e.soundname);
          my_media.play();
      }
      else
      {  // otherwise we were launched because the user touched a notification in the notification tray.
          if ( e.coldstart )
          {

            appendMessage('--COLDSTART NOTIFICATION--');
          }
          else
          {
              appendMessage('--BACKGROUND NOTIFICATION--');
          }
      }

      appendMessage('MESSAGE -> MSG: ' + e.payload.message);
      //Only works for GCM
         appendMessage('MESSAGE -> MSGCNT: ' + e.payload.msgcnt);
  break;

  case 'error':
      appendMessage('ERROR -> MSG:' + e.msg);
  break;

  default:
      appendMessage('EVENT -> Unknown, an event was received and we do not know what it is');
  break;
  }
}

function onDeviceReady() {
  pushNotification = window.plugins.pushNotification;
  if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "Amazon" || device.platform == "amazon")
  {
      pushNotification.register(
          successHandler,
          errorHandler, {
              "senderID":"395011907685",
              "ecb":"onNotificationGCM"
          });
  }

}

function appendMessage(message){
  su = document.getElementById("app-status-ul");
  li  =document.createElement("li")
  li.innerHTML = "innerHTML" + message
  su.appendChild(li)
}