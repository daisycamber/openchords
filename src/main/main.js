var stage
function main(){
  // Createjs stuff
  stage = new createjs.Stage("canvas");
  // Enable touch
  createjs.Touch.enable(stage)
  // Fit canvas to screen
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight - 90;

  // Add functionality
  addSelector();
  scroll();
  addChords();
  addLengthMeasures();
  addChordLabels();
  addPianoKeys();
  addToolBar();


  canvas.style.backgroundColor = BACKGROUNDCOLOR;
  stage.update();

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    stage.update();
  }
}
