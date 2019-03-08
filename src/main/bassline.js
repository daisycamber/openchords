// Add button to toggle the bassline
function addToggleBasslineButton(toolbar){
  // Toggle bassline
  var toggleBasslineButton = new createjs.Shape();
  toggleBasslineButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  toggleBasslineButton.addEventListener("click", function(event) {
    if(bassline == 0){
      bassline = 1
      toggleBasslineButton.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    } else {
      bassline = 0
      toggleBasslineButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    }
  });
  toolbar.addChild(toggleBasslineButton)
  var toggleBasslineText =  new createjs.Text("Bassline", TEXTTYPE, "#000000")
  toggleBasslineText.x = KEYSIZE * 11.3
  toggleBasslineText.y = KEYSIZE * 2.3
  toolbar.addChild(toggleBasslineText)
}
