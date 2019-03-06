var KEYSIZE = (window.innerWidth)/14
var MAXKEYSIZE = 40;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    MAXKEYSIZE = 70;
}
if(KEYSIZE > MAXKEYSIZE) KEYSIZE = MAXKEYSIZE
var TOOLSSIZE = KEYSIZE * 4
var KEYROUND = window.innerHeight/128
var TEXTTYPE = "bold " + KEYSIZE/2 + "px Arial"
var SCROLLSIZE = KEYSIZE
var SCROLLROUND = SCROLLSIZE/2
var BACKGROUNDCOLOR = "#DF0000"
