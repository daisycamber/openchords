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
  for(var i = 0; i < recordedChords.length; i++){
    if(recordedChords[i] != null){
      for(var j = 0; j < recordedChords[i].length; j++){
        track.addNote({
          name : recordedChords[i][j],
          time : i,
          duration: 2,
        });
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
  saveByteArray([midi.toArray()], 'openchords.midi');
}
