var stage
function main(){
  stage = new createjs.Stage("canvas");
  createjs.Touch.enable(stage)
  stage.canvas.width = window.innerWidth-4;
  stage.canvas.height = window.innerHeight-4;

  addSelector();
  addPianoKeys();
  scroll();
  addChords();
  addToolBar();

  canvas.style.backgroundColor = BACKGROUNDCOLOR;
  stage.update();

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
}
