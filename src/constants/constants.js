var KEYSIZE = (window.innerWidth)/14
var MAXKEYSIZE = 35;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    MAXKEYSIZE = 70;
}
if(KEYSIZE > MAXKEYSIZE) KEYSIZE = MAXKEYSIZE
var TOOLSSIZE = KEYSIZE * 4
var KEYROUND = window.innerHeight/128
var TEXTTYPE = "bold " + KEYSIZE/2 + "px Arial"
var SUBTEXTTYPE = "bold " + KEYSIZE/3.5 + "px Arial"
var SCROLLSIZE = KEYSIZE
var SCROLLROUND = SCROLLSIZE/2
var BACKGROUNDCOLOR = "#DF0000"
var DONATEURL = "https://www.paypal.com/donate/?token=JkaNXFUTpjU705Qc2jqmL0yPHNsQZ_UDRJC239eTWB9GP5qQz6VWKeptFnh6DUTBUdEnwm&country.x=US&locale.x="
var PLAYBACKSPEED = 250
var KEYNOTELENGTH = "8n"
var NOTELENGTH = "4n"
