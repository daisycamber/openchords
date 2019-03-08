function addMiscButtons(toolbar){
  // Play button
  var playButton = new createjs.Shape();
  playButton.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  playButton.addEventListener("click", function(event) {
    currentChord = 0
  });
  toolbar.addChild(playButton)
  var triangle = new createjs.Shape();
  triangle.graphics.beginFill("#000000").drawPolyStar(KEYSIZE/2, KEYSIZE/2, KEYSIZE * 0.4, 3, 0, 120);
  toolbar.addChild(triangle)

  // Pause button
  var pauseButton = new createjs.Shape();
  pauseButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  pauseButton.addEventListener("click", function(event) {
    currentChord = recordedChords.length
  });
  toolbar.addChild(pauseButton)
  var pauseRect = new createjs.Shape();
  pauseRect.graphics.beginFill("Red")
  pauseRect.graphics.drawRect(KEYSIZE + KEYSIZE/4, KEYSIZE/4, KEYSIZE*0.5, KEYSIZE*0.5);
  toolbar.addChild(pauseRect);
  stage.addChild(toolbar);

  // Delete the chord
  var deleteButton = new createjs.Shape();
  deleteButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 10, KEYSIZE * 3, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  deleteButton.addEventListener("click", function(event) {
    deleteChord();
  });
  toolbar.addChild(deleteButton)
  var deleteText =  new createjs.Text("X", TEXTTYPE, "#000000")
  deleteText.x = KEYSIZE * 10.3
  deleteText.y = KEYSIZE * 3.3
  toolbar.addChild(deleteText)


  // OpenChords.org button
  var openchordsButton = new createjs.Shape();
  openchordsButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, 0, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  openchordsButton.addEventListener("click", function(event) {
    window.open("http://openchords.org");
  });
  toolbar.addChild(openchordsButton)
  var openchordsText =  new createjs.Text("OpenChords", TEXTTYPE, "#000000")
  openchordsText.x = KEYSIZE * (11-0.05)
  openchordsText.y = KEYSIZE * 0.3
  toolbar.addChild(openchordsText)
}
