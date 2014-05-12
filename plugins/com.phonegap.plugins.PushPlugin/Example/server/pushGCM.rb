require 'rubygems'
require 'pushmeup'
GCM.host = 'https://android.googleapis.com/gcm/send'
GCM.format = :json
GCM.key = "AIzaSyDhEul7A68uzfKGsIaUsIzXO-wa_1ND9ng"
destination = ["APA91bHVpgechDIuLClM7i8SDYErWcBngsmTrtDeklx6JpJrMOkU7h02lbMd-AsSnSt5u-vzp4h0RTLqTQzuZimwC2Ux240Jx8rGq1ZuZtKdTGI1WghTzoXXxaTLWVkVDoW1c2ymgG_YvD4riT-t3RbnoFRsBTPQKTiroYU2JAqlPeZV-nb9XOo"]
data = {:message => "Hurray! PhoneGap Build rocks!", :msgcnt => "1", :soundname => "beep.wav"}

GCM.send_notification( destination, data)
