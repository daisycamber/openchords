var toolbar;

var chordMode = 0

// UPPER RIGHT:
// TODO add 7th, 9th, 13th
// TODO add notes dropdown (eg 1 Note, 2 Notes, to 6 Notes)
// TODO ADD bassline toggle
// TODO add labels to the Chords
var chordLabels = []
var bassline = 0;
var addSeventh = false
var addNinth = false
var addThirteenth = false

// Add a new measure to the progression
function addMeasure(measure){
  chordMarkers[measure] = []
  for(var j = 0; j < 9; j++){
    chordMarkers[measure][j] = new createjs.Shape();
    chordMarkers[measure][j].graphics.beginFill("White")
    chordMarkers[measure][j].graphics.drawRect((KEYSIZE+((stage.canvas.width-KEYSIZE)/8) * measure),0, (stage.canvas.width-KEYSIZE)/8, KEYSIZE);
    chordMarkers[measure][j].visible = false
    chordsContainer.addChild(chordMarkers[measure][j]);
  }
  chordLabels[measure] =  new createjs.Text("", SUBTEXTTYPE, "#000000")
  chordLabels[measure].x = (((stage.canvas.width)-KEYSIZE)/8) * measure + KEYSIZE * 1.05  + chordsContainer.x
  chordLabels[measure].y = KEYSIZE * 4.1
  stage.addChild(chordLabels[measure])
}

function addChordLabels(){
  for(var i = 0; i < 8; i++){
    chordLabels[i] =  new createjs.Text("", SUBTEXTTYPE, "#000000")
    chordLabels[i].x = (((stage.canvas.width)-KEYSIZE)/8) * i + KEYSIZE * 1.05
    chordLabels[i].y = KEYSIZE * 4.1
    stage.addChild(chordLabels[i])
  }
}
function clearChordLabels(){
  for(var i = 0; i < 8; i++){
    chordLabels[i].visible = false;
  }
}


function addToolBar(){


  // Add tool bar
  toolbar = new createjs.Container();
  var rect = new createjs.Shape();
  rect.graphics.beginFill(BACKGROUNDCOLOR)
  rect.graphics.drawRect(0, 0, window.innerWidth, TOOLSSIZE);
  toolbar.addChild(rect);

  addMiscButtons(toolbar)

  addChordButtons(toolbar);

  addOctaveButtons(toolbar);

  addInversionButtons(toolbar);

  addExportButton(toolbar);

  addSeventhNinthThirteenthButtons(toolbar);

  //addToggleBasslineButton(toolbar);

  /*
  // Donate
  var donateButton = new createjs.Shape();
  donateButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*3, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  donateButton.addEventListener("click", function(event) {
    window.open("");
  });
  toolbar.addChild(donateButton)
  var donateText =  new createjs.Text("Donate", TEXTTYPE, "#000000")
  donateText.x = KEYSIZE * 11.3
  donateText.y = KEYSIZE * 3.3
  toolbar.addChild(donateText)*/



  addDropdowns();
}
