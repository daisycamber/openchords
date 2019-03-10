
function getDate(){
  var today = new Date();
  var dd = today.getDate();

  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10)
  {
      dd='0'+dd;
  }

  if(mm<10)
  {
      mm='0'+mm;
  }
  today = mm+'-'+dd+'-'+yyyy;
  return today
}

// Add the button to export to midi
function addExportButton(toolbar){
  var exportButton = new createjs.Shape();
  exportButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE * 3, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  exportButton.addEventListener("click", function(event) {
    exportMidi();
  });
  toolbar.addChild(exportButton)
  var exportText =  new createjs.Text("Export MIDI", TEXTTYPE, "#000000")
  exportText.x = KEYSIZE * 11.1
  exportText.y = KEYSIZE * 3.3
  toolbar.addChild(exportText)
}

// Export the chords to MIDI and download
function exportMidi(){
  var midi = new Midi()
  var track = midi.addTrack()

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
  currentChord = playbackChords.length;

  for(var i = 0; i < playbackChords.length; i++){
    if(playbackChords[i] != null){
      var chordDuration
      if(playbackChordLengths[i] == "1/8"){
        chordDuration = 0.5
      } else if(playbackChordLengths[i] == "1/4"){
        chordDuration = 1
      } else if(playbackChordLengths[i] == "1/2"){
        chordDuration = 2
      } else if(playbackChordLengths[i] == "3/4"){
        chordDuration = 3
      } else if(playbackChordLengths[i] == "1"){
        chordDuration = 4
      }
      for(var j = 0; j < playbackChords[i].length; j++){
        if(playbackChords[i][j] != null){
          track.addNote({
            name : playbackChords[i][j],
            time : i/4,
            duration: chordDuration/2,
          });
        }
      }
    }
  }
  // Save the project
  var saveByteArray = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, name) {
      var blob = new Blob(data, {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  }());
  saveByteArray([midi.toArray()], "openchords-" + getDate() + ".midi");
}
