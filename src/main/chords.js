var chordsContainer
var octave = 3


var chordMarkers = []
var recordedChords = []


function clearChords(){
  for (var i = 0; i < 8; i++){
    chordMarkers[i][0].visible = false
    chordMarkers[i][1].visible = false
    chordMarkers[i][2].visible = false
  }
  recordedChords = []
  clearChordLabels()
}

function deleteChord(){
    chordMarkers[selectedMeasure][0].visible = false
    chordMarkers[selectedMeasure][1].visible = false
    chordMarkers[selectedMeasure][2].visible = false
    recordedChords[selectedMeasure] = []
    chordLabels[selectedMeasure].visible = false
}

function addChordMarkers() {
  chordsContainer = new createjs.Container()
  stage.addChild(chordsContainer)

  for (var i = 0; i < 8; i++){
    chordMarkers[i] = []
    chordMarkers[i][0] = new createjs.Shape();
    chordMarkers[i][0].graphics.beginFill("White")
    chordMarkers[i][0].graphics.drawRect(KEYSIZE+((stage.canvas.width-KEYSIZE)/8) * i,0, (stage.canvas.width-KEYSIZE)/8, KEYSIZE);
    chordMarkers[i][0].visible = false
    chordsContainer.addChild(chordMarkers[i][0]);

    chordMarkers[i][1] = new createjs.Shape();
    chordMarkers[i][1].graphics.beginFill("White")
    chordMarkers[i][1].graphics.drawRect(KEYSIZE+((stage.canvas.width-KEYSIZE)/8) * i, 0, (stage.canvas.width-KEYSIZE)/8, KEYSIZE);
    chordMarkers[i][1].visible = false
    chordsContainer.addChild(chordMarkers[i][1]);

    chordMarkers[i][2] = new createjs.Shape();
    chordMarkers[i][2].graphics.beginFill("White")
    chordMarkers[i][2].graphics.drawRect(KEYSIZE+((stage.canvas.width-KEYSIZE)/8) * i,0, (stage.canvas.width-KEYSIZE)/8, KEYSIZE);
    chordMarkers[i][2].visible = false
    chordsContainer.addChild(chordMarkers[i][2]);
  }
}
// Add a chord
function chord(chordName) {
  // Record the chord
  var octavemod1 = 0
  var octavemod2 = 0
  var octavemod3 = 0
  if(chordMode == 1) {
    octavemod1 = 1
  } else if(chordMode == 1) {

    octavemod1 = 1
    octavemod2 = 1
  }
  var note1 = chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][0] + (octave * 12) + 3
  var note2 = chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][1] + (octave * 12) + 3
  var note3 = chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][2] + (octave * 12) + 3
  console.log(chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][1])
  recordedChords[selectedMeasure] = [keyboard[note1],keyboard[note2],keyboard[note3]]
  synth1.triggerAttackRelease(recordedChords[selectedMeasure][0], '8n')
  synth2.triggerAttackRelease(recordedChords[selectedMeasure][1], '8n')
  synth3.triggerAttackRelease(recordedChords[selectedMeasure][2], '8n')
  chordMarkers[selectedMeasure][0].y =  KEYSIZE * (-1 * ((note1 + 26)) + numKeys)
  chordMarkers[selectedMeasure][1].y =  KEYSIZE * (-1 * ((note2 + 26)) + numKeys)
  chordMarkers[selectedMeasure][2].y =  KEYSIZE * (-1 * ((note3 + 26)) + numKeys)

  chordMarkers[selectedMeasure][0].visible = true;
  chordMarkers[selectedMeasure][1].visible = true;
  chordMarkers[selectedMeasure][2].visible = true;

  chordLabels[selectedMeasure].visible = true;
  chordLabels[selectedMeasure].text = chordKeys[currentInterval][currentKey][chordName]


}
function addChords(){
  addChordMarkers();
}
