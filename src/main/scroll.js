// Scroll up and down
var mouseDown = false
function scroll(){
  var lastY = 0
  var lastX = 0
  stage.on("stagemousedown", function(evt) {
    mouseDown = true
    lastX = evt.stageX
    lastY = evt.stageY
  })
  stage.on("stagemouseup", function(evt) {
    mouseDown = false
    //dropdownKeys.visible = false
    //intervalDropdown.visible = false
    //notesDropdown.visible = false
  })
  stage.on("stagemousemove", function(evt) {
    if(mouseDown && lastY > 0 && lastX > 0) {
      // Scroll piano keys up/down
      if((pianoKeysContainer.y + evt.stageY - lastY <= KEYSIZE) && (pianoKeysContainer.y + evt.stageY - lastY >= (KEYSIZE * numKeys * -1) + (stage.canvas.height))){
        pianoKeysContainer.y = pianoKeysContainer.y + evt.stageY - lastY
        chordsContainer.y = chordsContainer.y + evt.stageY - lastY
      } else {
        // If we are at the top or bottom, align to top or bottom
        if(evt.stageY - lastY < 0){
          pianoKeysContainer.y = (KEYSIZE * numKeys * -1) + (stage.canvas.height)
          chordsContainer.y = (KEYSIZE * numKeys * -1) + (stage.canvas.height) - KEYSIZE
        }
        else {
          chordsContainer.y = 0
          pianoKeysContainer.y = KEYSIZE
        }
      }


      // Scroll chords container and length measures and markers
      if(chordsContainer.x + (evt.stageX - lastX) <= 0){
        chordsContainer.x = chordsContainer.x + evt.stageX - lastX
        selector.x = selector.x + evt.stageX - lastX
        for(var i = 0; i < chordLabels.length; i++){
          if(chordLabels[i] != null){
            chordLabels[i].x = chordLabels[i].x + evt.stageX - lastX
          }
        }
      }
      else if(chordsContainer.x + (evt.stageX - lastX) >= 0){
        chordsContainer.x = 0
        selector.x = (((stage.canvas.width)-KEYSIZE)/8) * selectedMeasure

        for(var i = 0; i < chordLabels.length; i++){
          if(chordLabels[i] != null){
            chordLabels[i].x = (((stage.canvas.width)-KEYSIZE)/8) * i + KEYSIZE * 1.1
          }
        }
      }

      // Scroll length measures


    }

    lastX = evt.stageX
    lastY = evt.stageY

  })
}
