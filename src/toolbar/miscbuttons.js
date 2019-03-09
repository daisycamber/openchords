// Chords set for playback
var playbackChords = []

// Add misc buttons to the toolbar
function addMiscButtons(toolbar){
  // Play button
  var playButton = new createjs.Shape();
  playButton.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  playButton.addEventListener("click", function(event) {
    playbackRecordedChords();
  });
  toolbar.addChild(playButton)
  var triangle = new createjs.Shape();
  triangle.graphics.beginFill("#000000").drawPolyStar(KEYSIZE/2, KEYSIZE/2, KEYSIZE * 0.4, 3, 0, 120);
  toolbar.addChild(triangle)

  // Pause button
  var pauseButton = new createjs.Shape();
  pauseButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  pauseButton.addEventListener("click", function(event) {
    currentChord = playbackChords.length
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
    window.open("/");
  });
  toolbar.addChild(openchordsButton)
  var openchordsText =  new createjs.Text("OpenChords", TEXTTYPE, "#000000")
  openchordsText.x = KEYSIZE * (11-0.05)
  openchordsText.y = KEYSIZE * 0.3
  toolbar.addChild(openchordsText)

  // OpenChords.org button
  var donateButton = new createjs.Shape();
  donateButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  donateButton.addEventListener("click", function(event) {
    window.open("/#donate");
  });
  toolbar.addChild(donateButton)
  var donateText =  new createjs.Text("Donate", TEXTTYPE, "#000000")
  donateText.x = KEYSIZE * (11+0.5)
  donateText.y = KEYSIZE * 0.3 + KEYSIZE
  toolbar.addChild(donateText)
}
