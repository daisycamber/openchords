// Add a selector to select which measure to add the chords into
var selector
var selectedMeasure = 0
function addSelector(){
  selector = new createjs.Shape();
  selector.graphics.beginFill("Pink")
  selector.graphics.drawRect(KEYSIZE, TOOLSSIZE, (stage.canvas.width- KEYSIZE)/8, stage.canvas.height - TOOLSSIZE);
  stage.addChild(selector);
  stage.on("stagemouseup", function(event) {
    if(event.stageY > TOOLSSIZE){
      for(var i = 0; i < 8; i++){
        if(event.stageX > KEYSIZE + ((stage.canvas.width-KEYSIZE)/8) * i && event.stageX < KEYSIZE + ((stage.canvas.width-KEYSIZE)/8) * (i+1)){
          selector.x = (stage.canvas.width - KEYSIZE)/8 * i
          selectedMeasure = i
        }
      }
    }
  })
}
