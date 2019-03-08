var chordsContainer
var octave = 3


var chordMarkers = []
var recordedChords = []

// 9 synths
var synths = []

// Called when chord is played
function chordCallback(chordNumber){
  for(var i = 0; i < recordedChords[chordNumber].length; i++){
    synths[i].triggerAttackRelease(recordedChords[chordNumber][i], NOTELENGTH)
  }
}

function clearChords(){
  for (var i = 0; i < 8; i++){
    for(var j = 0; j < 9; j++){
      chordMarkers[i][j].visible = false
    }
  }
  recordedChords = []
  clearChordLabels()
}

function deleteChord(){
  for(var j = 0; j < 9; j++){
    chordMarkers[selectedMeasure][j].visible = false
  }
  recordedChords[selectedMeasure] = []
  chordLabels[selectedMeasure].visible = false
}

function addChordMarkers() {
  chordsContainer = new createjs.Container()
  stage.addChild(chordsContainer)

  for (var i = 0; i < 8; i++){
    chordMarkers[i] = []
    for(var j = 0; j < 9; j++){
      chordMarkers[i][j] = new createjs.Shape();
      chordMarkers[i][j].graphics.beginFill("White")
      chordMarkers[i][j].graphics.drawRect(KEYSIZE+((stage.canvas.width-KEYSIZE)/8) * i,0, (stage.canvas.width-KEYSIZE)/8, KEYSIZE);
      chordMarkers[i][j].visible = false
      chordsContainer.addChild(chordMarkers[i][j]);
    }
  }
}
// Add a chord
function chord(chordName) {

  if(chordLabels[selectedMeasure] == null){
    addMeasure(selectedMeasure)
  }
  // Delete the chord that was there and remove the markers
  deleteChord(selectedMeasure)
  // These are the raw numerical values for the notes in the chord, as an array
  var notes = []
  // Build the chord
  for(var i = 0; i < notesInChord; i++)
  {
    // First part of the chord
    if (i < 3) {
      notes[i] = chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][i] + (octave * 12) + 3
    }
    if(i >= 3){
      notes[i] = chordNotes[chordKeys[currentInterval][currentKey][chordName]][chordMode][i-3] + ((octave-1) * 12) + 3
    }
    // Record the note as it falls on the keyboard, no longer numerical but a string value
    recordedChords[selectedMeasure][i] = keyboard[notes[i]]
    synths[i].triggerAttackRelease(recordedChords[selectedMeasure][i], NOTELENGTH)
    chordMarkers[selectedMeasure][i].y =  KEYSIZE * (-1 * ((notes[i] + 26)) + numKeys)
    chordMarkers[selectedMeasure][i].visible = true;
  }
  var note
  // For adding the seventh, ninth and thirteenth
  if(addSeventh){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][0] + (octave * 12) + 3
    recordedChords[selectedMeasure][notesInChord+0] = keyboard[note]
    synths[notesInChord+0].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+0], NOTELENGTH)
    chordMarkers[selectedMeasure][notesInChord+0].y =  KEYSIZE * (-1 * ((note + 26)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+0].visible = true
  }
  if(addNinth){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][1] + (octave * 12) + 3
    recordedChords[selectedMeasure][notesInChord+1] = keyboard[note]
    synths[notesInChord+1].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+1], NOTELENGTH)
    chordMarkers[selectedMeasure][notesInChord+1].y =  KEYSIZE * (-1 * ((note + 26)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+1].visible = true
  }
  if(addThirteenth){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][2] + (octave * 12) + 3
    recordedChords[selectedMeasure][notesInChord+2] = keyboard[note]
    synths[notesInChord+2].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+2], NOTELENGTH)
    chordMarkers[selectedMeasure][notesInChord+2].y =  KEYSIZE * (-1 * ((note + 26)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+2].visible = true
  }

  chordLabels[selectedMeasure].visible = true;
  chordLabels[selectedMeasure].text = chordKeys[currentInterval][currentKey][chordName]
}
// 9 + 1 synths (for chord and bass)
function addSynths(){
  for (var i = 0; i < 10; i++){
    synths[i] = new Tone.Synth().toMaster()
  }
}
var currentChord = 0
function addChordPlayer(){
  setInterval(function(){
    if(currentChord < recordedChords.length && recordedChords[currentChord] != null){
      chordCallback(currentChord)
    }
    currentChord++
  },PLAYBACKSPEED)
}
function addChords(){
  addSynths();
  addChordMarkers();
  addChordPlayer();
}
