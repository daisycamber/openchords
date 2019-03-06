// Scroll up and down
function scroll(){
  var mouseDown = false
  var lastY = 0
  var lastX = 0
  stage.on("stagemousedown", function(evt) {
    mouseDown = true
    lastX = evt.stageX
    lastY = evt.stageY
  })
  stage.on("stagemouseup", function(evt) {
    mouseDown = false
    dropdownKeys.visible = false
    intervalDropdown.visible = false
  })
  stage.on("stagemousemove", function(evt) {
    if(mouseDown && lastY > 0 && lastX > 0) {
      pianoKeysContainer.y = pianoKeysContainer.y + evt.stageY - lastY
      chordsContainer.y = chordsContainer.y + evt.stageY - lastY
    }

    lastX = evt.stageX
    lastY = evt.stageY

  })
}
