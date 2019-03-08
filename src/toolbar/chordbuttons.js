// Add buttons to add the chords
function addChordButtons(toolbar){
  var mod1 = 0
  var mod2 = 0
  for (var i = 0; i < 14; i++){
    if (i == 7) {
      mod1 = 1
      mod2 = 7
    }
    var keyContainer = new createjs.Container();
    keyContainer.x = ((KEYSIZE) * (i-mod2))
    keyContainer.y = KEYSIZE + (KEYSIZE) * mod1
    var key = new createjs.Shape();
    key.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    key.text = chords[i]
    key.addEventListener("click", function(event) {
      chord(event.currentTarget.text);
      //selector.x = selector.x + selector.width
    });
    keyContainer.addChild(key);
    var text =  new createjs.Text(chords[i], TEXTTYPE, "#000000")
    text.x = KEYSIZE/10
    text.y = KEYSIZE/3
    keyContainer.addChild(text)
    toolbar.addChild(keyContainer)
  }
}
