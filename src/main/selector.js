// Add a selector to select which measure to add the chords into
var selector
var selectedMeasure = 0

function newMeasure(){

}
function addSelector(){
  var background = new createjs.Shape();
  background.graphics.beginFill(BACKGROUNDCOLOR)
  background.graphics.drawRect(KEYSIZE, TOOLSSIZE, (stage.canvas.width- KEYSIZE), stage.canvas.height - TOOLSSIZE);
  stage.addChild(background);
  selector = new createjs.Shape();
  selector.graphics.beginFill("Pink")
  selector.graphics.drawRect(KEYSIZE, TOOLSSIZE, (stage.canvas.width- KEYSIZE)/8, stage.canvas.height - TOOLSSIZE);
  stage.addChild(selector);
  background.addEventListener("pressup", function(event) {
    if(event.stageY > TOOLSSIZE && event.stageX > KEYSIZE){
      selectedMeasure = Math.floor(((chordsContainer.x * -1) + (event.stageX - KEYSIZE)) / ((stage.canvas.width-KEYSIZE)/8))
      selector.x = chordsContainer.x + ((stage.canvas.width - KEYSIZE)/8) * selectedMeasure

      /*for(var i = 0; i < 8; i++){
        if(event.stageX > KEYSIZE + ((stage.canvas.width-KEYSIZE)/8) * i && event.stageX < KEYSIZE + ((stage.canvas.width-KEYSIZE)/8) * (i+1)){
          selector.x = (stage.canvas.width - KEYSIZE)/8 * i
          selectedMeasure = i
          console.log(selectedMeasure)
        }
      }*/
    }
  })
}
