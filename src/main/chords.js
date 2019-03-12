var chordsContainer
var octave = 3


var chordMarkers = []
var recordedChords = []

// Lengths of the chord
var chordLengths = []
// and for playback
var playbackChordLengths = []

// 9 synths
var synths = []

// Called when chord is played
function chordCallback(chordNumber){

  // Stop all all synths
  for(var i = 0; i < synths.length; i++){
    synths[i].triggerRelease();
  }

  var chordLength;
  if(playbackChordLengths[chordNumber] == "1/8"){
    chordLength = "8n"
  } else if(playbackChordLengths[chordNumber] == "1/4"){
    chordLength = "4n"
  } else if(playbackChordLengths[chordNumber] == "1/2"){
    chordLength = "2n"
  } else if(playbackChordLengths[chordNumber] == "3/4"){
    chordLength = "1n"
  }
  else if(playbackChordLengths[chordNumber] == "1"){
    chordLength = "1n"
  }
  for(var i = 0; i < playbackChords[chordNumber].length; i++){
    synths[i].triggerAttackRelease(playbackChords[chordNumber][i], chordLength)
  }
}

// Called when chord is selected
function playChord(chordNumber){
  if(recordedChords[chordNumber] != null){
    // Stop all all synths
    for(var i = 0; i < synths.length; i++){
      synths[i].triggerRelease();
    }

    var chordLength
    if(chordLengths[chordNumber] == "1/8"){
      chordLength = "8n"
    } else if(chordLengths[chordNumber] == "1/4"){
      chordLength = "4n"
    } else if(chordLengths[chordNumber] == "1/2"){
      chordLength = "2n"
    } else if(chordLengths[chordNumber] == "3/4"){
      chordLength = "1n"
    }
    else if(chordLengths[chordNumber] == "1"){
      chordLength = "1n"
    }
    for(var i = 0; i < recordedChords[chordNumber].length; i++){
      synths[i].triggerAttackRelease(recordedChords[chordNumber][i], chordLength)
    }
  }
}

function clearChords(){
  for (var i = 0; i < recordedChords.length; i++){
    if(recordedChords[i]){
      for(var j = 0; j < 9; j++){
        chordMarkers[i][j].visible = false
      }
    }
  }
  recordedChords = []
  clearChordLabels()
}

function deleteChord(){
  for(var j = 0; j < 9; j++){
    chordMarkers[selectedMeasure][j].visible = false
  }
  recordedChords[selectedMeasure] = null
  chordLabels[selectedMeasure].visible = false
  chordLengths[selectedMeasure] = null
}
function clearChords(){
  for (var i = 0; i < recordedChords.length; i++){
    for(var j = 0; j < 9; j++){
      chordMarkers[i][j].visible = false
    }
    recordedChords[i] = null
    chordLabels[i].visible = false
    chordLengths[i] = null
  }
}

function addChordMarkers() {
  chordsContainer = new createjs.Container()
  stage.addChild(chordsContainer)
  chordsContainer.y = KEYSIZE * -25

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



  if(noteLength == "1/8"){
    chordLength = "8n"
  } else if(noteLength == "1/4"){
    chordLength = "4n"
  } else if(noteLength == "1/2"){
    chordLength = "2n"
  } else if(noteLength == "3/4"){
    chordLength = "1n"
  } else if(noteLength == "1"){
    chordLength = "1n"
  }

  // Delete the chord that was there and remove the markers
  deleteChord(selectedMeasure)
  chordLengths[selectedMeasure] = noteLength;
  recordedChords[selectedMeasure] = []
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
    synths[i].triggerAttackRelease(recordedChords[selectedMeasure][i], chordLength)
    chordMarkers[selectedMeasure][i].y =  KEYSIZE * (-1 * ((notes[i]+1)) + numKeys)
    chordMarkers[selectedMeasure][i].visible = true;
  }
  var note
  // For adding the seventh, ninth and thirteenth
  if(addSeventh){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][0] + ((octave) * 12) + 3
    recordedChords[selectedMeasure][notesInChord+0] = keyboard[note]
    synths[notesInChord+0].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+0], chordLength)
    chordMarkers[selectedMeasure][notesInChord+0].y =  KEYSIZE * (-1 * ((note+1)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+0].visible = true
  }
  if(addNinth){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][1] + ((octave) * 12) + 3
    recordedChords[selectedMeasure][notesInChord+1] = keyboard[note]
    synths[notesInChord+1].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+1], chordLength)
    chordMarkers[selectedMeasure][notesInChord+1].y =  KEYSIZE * (-1 * ((note+1)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+1].visible = true
  }
  if(addThirteenth){
    note = chordNotes[chordKeys[currentInterval][currentKey][chordName]][3][2] + ((octave) * 12) + 3
    recordedChords[selectedMeasure][notesInChord+2] = keyboard[note]
    synths[notesInChord+2].triggerAttackRelease(recordedChords[selectedMeasure][notesInChord+2], chordLength)
    chordMarkers[selectedMeasure][notesInChord+2].y =  KEYSIZE * (-1 * ((note+1)) + numKeys)
    chordMarkers[selectedMeasure][notesInChord+2].visible = true
  }

  chordLabels[selectedMeasure].visible = true;
  chordLabels[selectedMeasure].text = chordKeys[currentInterval][currentKey][chordName] + " " + noteLength
}
// 9 + 1 synths (for chord and bass)
function addSynths(){
  for (var i = 0; i < 10; i++){
    synths[i] = new Tone.Synth().toMaster()
  }
}
var currentChord = 0
var waitTime = 0

function addChordPlayer(){

  setInterval(function(){
    if(currentChord < playbackChords.length && playbackChords[currentChord] != null){
      chordCallback(currentChord)
    }
    currentChord++
  },PLAYBACKSPEED)
}
// Play the chords back
function playbackRecordedChords(){
  currentChord = 0
  playbackChords = []
  playbackChordLengths = []
  // What this does is optimize an array of recorded chords to an array of chords for playback with correct timing
  for(var i = 0; i < recordedChords.length; i++) {
    playbackChords[currentChord] = recordedChords[i] // Set playback to current chord
    playbackChordLengths[currentChord] = chordLengths[i]
    if(chordLengths[i] == "1/8"){
      currentChord = currentChord + 1
    } else if(chordLengths[i] == "1/4"){
      currentChord = currentChord + 2
    } else if(chordLengths[i] == "1/2"){
      currentChord = currentChord + 4
    } else if(chordLengths[i] == "3/4"){
      currentChord = currentChord + 6
    } else if(chordLengths[i] == "1"){
      currentChord = currentChord + 8
    }
  }
  currentChord = 0
}
function addChords(){
  addSynths();
  addChordMarkers();
  addChordPlayer();
}2
