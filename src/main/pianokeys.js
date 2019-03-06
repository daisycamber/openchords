var pianoKeysContainer
var pianoKeys = []
var keysText = []
var synth = new Tone.Synth().toMaster()
var synth1 = new Tone.Synth().toMaster()
var synth2 = new Tone.Synth().toMaster()
var synth3 = new Tone.Synth().toMaster()
function addPianoKeys(){

  // Add keys
  pianoKeysContainer = new createjs.Container();
  for (var i = 0; i < numKeys; i++){
    var container = new createjs.Container();
    container.x = 0
    container.y = KEYSIZE * i - KEYSIZE * 25
    var text =  new createjs.Text(chromaticScale[(i) % 12], TEXTTYPE, "#000000")
    text.x = KEYSIZE/4;
    text.y = KEYSIZE/3;
    var key = new createjs.Shape();
    if(chromaticScale[(i) % 12].includes("#")){
      key.graphics.beginFill("Black").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, 0, KEYROUND, KEYROUND, 0);
      text.color = "White"
    } else {
      key.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, 0, KEYROUND, KEYROUND, 0);
    }
    var octave = Math.ceil(((numKeys-i)-3)/12)
    key.text = chromaticScale[(i) % 12] + octave
    key.addEventListener("click", function(event) {
      console.log(event.currentTarget.text)
      synth.triggerAttackRelease(event.currentTarget.text, '8n')
    });


    container.addChild(key);
    container.addChild(text);
    pianoKeysContainer.addChild(container)
    pianoKeys[i] = key
    keysText[i] = text
  }
  stage.addChild(pianoKeysContainer)
}

// Update the keys according to a new interval (deprecated)
function updateKeys(){
  console.log("Updating keys")
}
