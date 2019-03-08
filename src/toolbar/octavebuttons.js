function addOctaveButtons(toolbar){
  var octaves = ["First Octave", "Second Octave", "Third Octave", "Fourth Octave", "Fifth Octave", "Sixth Octave", "Seventh Octave"]
  // Octave buttons button
  var octaveDownButton = new createjs.Shape();
  octaveDownButton.graphics.beginFill("White").drawRoundRectComplex(0, KEYSIZE * 3, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  toolbar.addChild(octaveDownButton)
  var octaveDown = new createjs.Shape();
  octaveDown.graphics.beginFill("#000000").drawPolyStar(KEYSIZE/2, KEYSIZE * 3.5, KEYSIZE * 0.5, 3, 0, 90);
  octaveDownButton.addEventListener("click", function(event) {
    if(octave >= 1){octave--;}
    text.text = octaves[octave]
  });

  toolbar.addChild(octaveDown);

  var octaveTab = new createjs.Shape();
  octaveTab.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE, KEYSIZE * 3, KEYSIZE * 5, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  toolbar.addChild(octaveTab)

  var text =  new createjs.Text("Fourth Octave", TEXTTYPE, "#000000")
  text.x = KEYSIZE * 2
  text.y = KEYSIZE * 3.3
  toolbar.addChild(text)

  var octaveUpButton = new createjs.Shape();
  octaveUpButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 6, KEYSIZE * 3, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  toolbar.addChild(octaveUpButton)
  var octaveUp = new createjs.Shape();
  octaveUp.graphics.beginFill("#000000").drawPolyStar(KEYSIZE * 6.5, KEYSIZE * 3.5, KEYSIZE * 0.5, 3, 0, 30);
  octaveUpButton.addEventListener("click", function(event) {
    if(octave <= 5){octave++;}
    text.text = octaves[octave]
  });
  toolbar.addChild(octaveUp)
}
