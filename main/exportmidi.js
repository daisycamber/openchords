
function exportMidi(){
  console.log("Exporting midi")
  var midi = new Midi()
  // add a track
  var track = midi.addTrack()
  for(var i = 0; i < recordedChords.length; i++){
    track.addNote({
      name : recordedChords[i][0],
      time : i,
      duration: 1,
    });
    track.addNote({
      name : recordedChords[i][1],
      time : i,
      duration: 1,
    });
    track.addNote({
      name : recordedChords[i][2],
      time : i,
      duration: 1,
    });
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
