function scroll(){
  // Scroll
  var mouseDown = false
  stage.on("stagemousedown", function(evt) {
    mouseDown = true
  })
  stage.on("stagemouseup", function(evt) {
    mouseDown = false
    dropdownKeys.visible = false
    intervalDropdown.visible = false
  })
  var lastY = 0
  var lastX = 0
  stage.on("stagemousemove", function(evt) {
    if(lastY > 0 && lastX > 0) {// && pianoKeys.y + evt.stageY - lastY <= KEYSIZE * 50 && pianoKeys.y + evt.stageY - lastY >=KEYSIZE * -40){
      pianoKeysContainer.y = pianoKeysContainer.y + evt.stageY - lastY
      chordsContainer.y = chordsContainer.y + evt.stageY - lastY
    }

    lastX = evt.stageX
    lastY = evt.stageY

  })
}
