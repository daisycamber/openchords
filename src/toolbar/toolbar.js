var toolbar;
var currentChord = 0
var chordMode = 0

function chordCallback(chord){
  synth1.triggerAttackRelease(recordedChords[chord][0], '8n')
  synth2.triggerAttackRelease(recordedChords[chord][1], '8n')
  synth3.triggerAttackRelease(recordedChords[chord][2], '8n')
}
function addToolBar(){
  setInterval(function(){
    if(currentChord < recordedChords.length){
      chordCallback(currentChord)
    }
    currentChord++
  },500)

  // Add tool bar
  toolbar = new createjs.Container();
  var rect = new createjs.Shape();
  rect.graphics.beginFill(BACKGROUNDCOLOR)
  rect.graphics.drawRect(0, 0, window.innerWidth, TOOLSSIZE);
  toolbar.addChild(rect);

  // Play button
  var playButton = new createjs.Shape();
  playButton.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  playButton.addEventListener("click", function(event) {
    currentChord = 0
  });
  toolbar.addChild(playButton)
  var triangle = new createjs.Shape();
  triangle.graphics.beginFill("#000000").drawPolyStar(KEYSIZE/2, KEYSIZE/2, KEYSIZE * 0.4, 3, 0, 120);
  toolbar.addChild(triangle)

  // Pause button
  var pauseButton = new createjs.Shape();
  pauseButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  pauseButton.addEventListener("click", function(event) {
    currentChord = recordedChords.length
  });
  toolbar.addChild(pauseButton)
  var pauseRect = new createjs.Shape();
  pauseRect.graphics.beginFill("Red")
  pauseRect.graphics.drawRect(KEYSIZE + KEYSIZE/4, KEYSIZE/4, KEYSIZE*0.5, KEYSIZE*0.5);
  toolbar.addChild(pauseRect);
  stage.addChild(toolbar);


  // Chords toolbar
  var mod1 = 0
  var mod2 = 0
  for (var i = 0; i < 14; i++){
    if (i == 7) {
      mod1 = 1
      mod2 = 7
    }
    var keyContainer = new createjs.Container();
    keyContainer.x = ((KEYSIZE) * (i-mod2))
    keyContainer.y = KEYSIZE + (KEYSIZE) * mod1
    var key = new createjs.Shape();
    key.graphics.beginFill("White").drawRoundRectComplex(0, 0, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    key.text = chords[i]
    key.addEventListener("click", function(event) {
      chord(event.currentTarget.text);
      //selector.x = selector.x + selector.width
    });
    keyContainer.addChild(key);
    var text =  new createjs.Text(chords[i], TEXTTYPE, "#000000")
    text.x = KEYSIZE/5
    text.y = KEYSIZE/3
    keyContainer.addChild(text)
    toolbar.addChild(keyContainer)
  }

  var octaves = ["First Octave", "Second Octave", "Third Octave", "Fourth Octave", "Fifth Octave", "Sixth Octave", "Seventh Octave"]
  // Octave buttons button
  var octaveDown = new createjs.Shape();
  octaveDown.graphics.beginFill("#000000").drawPolyStar(KEYSIZE/2, KEYSIZE * 3.5, KEYSIZE * 0.5, 3, 0, 90);
  octaveDown.addEventListener("click", function(event) {
    if(octave >= 1){octave--;}
    text.text = octaves[octave]
  });
  toolbar.addChild(octaveDown)

  var text =  new createjs.Text("Fourth Octave", TEXTTYPE, "#000000")
  text.x = KEYSIZE * 2
  text.y = KEYSIZE * 3.3
  toolbar.addChild(text)

  var octaveUp = new createjs.Shape();
  octaveUp.graphics.beginFill("#000000").drawPolyStar(KEYSIZE * 6.5, KEYSIZE * 3.5, KEYSIZE * 0.5, 3, 0, 30);
  octaveUp.addEventListener("click", function(event) {
    if(octave <= 5){octave++;}
    text.text = octaves[octave]
  });
  toolbar.addChild(octaveUp)

  // Default or inversion?
  var defaultTriad = new createjs.Shape();
  var firstInversion = new createjs.Shape();
  var secondInversion = new createjs.Shape();
  defaultTriad.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 7, 0, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  defaultTriad.addEventListener("click", function(event) {
    defaultTriad.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 7, 0, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    firstInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    secondInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE * 2, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    chordMode = 0
  });
  toolbar.addChild(defaultTriad)
  var defaultTriadText =  new createjs.Text("Triad", TEXTTYPE, "#000000")
  defaultTriadText.x = KEYSIZE * 7.3
  defaultTriadText.y = KEYSIZE * 0.3
  toolbar.addChild(defaultTriadText)


  firstInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  firstInversion.addEventListener("click", function(event) {
    firstInversion.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    secondInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE * 2, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    defaultTriad.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, 0, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    chordMode = 1
  });
  toolbar.addChild(firstInversion)
  var firstInversionText =  new createjs.Text("First Inversion", TEXTTYPE, "#000000")
  firstInversionText.x = KEYSIZE * 7.3
  firstInversionText.y = KEYSIZE * 1.3
  toolbar.addChild(firstInversionText)


  secondInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE * 2, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  secondInversion.addEventListener("click", function(event) {
    secondInversion.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE * 2, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    defaultTriad.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, 0, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    firstInversion.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE, KEYSIZE * 4, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    chordMode = 2
  });
  toolbar.addChild(secondInversion)
  var secondInversionText =  new createjs.Text("Second Inversion", TEXTTYPE, "#000000")
  secondInversionText.x = KEYSIZE * 7.1
  secondInversionText.y = KEYSIZE * 2.3
  toolbar.addChild(secondInversionText)

  var exportButton = new createjs.Shape();
  exportButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 8, KEYSIZE * 3, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  exportButton.addEventListener("click", function(event) {
    exportMidi();
  });
  toolbar.addChild(exportButton)
  var exportText =  new createjs.Text("Export MIDI", TEXTTYPE, "#000000")
  exportText.x = KEYSIZE * 8.1
  exportText.y = KEYSIZE * 3.3
  toolbar.addChild(exportText)

  // Delete the chord
  var deleteButton = new createjs.Shape();
  deleteButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 7, KEYSIZE * 3, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  deleteButton.addEventListener("click", function(event) {
    deleteChord();
  });
  toolbar.addChild(deleteButton)
  var deleteText =  new createjs.Text("X", TEXTTYPE, "#000000")
  deleteText.x = KEYSIZE * 7.3
  deleteText.y = KEYSIZE * 3.3
  toolbar.addChild(deleteText)


  // OpenChords.org button
  var openchordsButton = new createjs.Shape();
  openchordsButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, 0, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  openchordsButton.addEventListener("click", function(event) {
    window.open("http://google.com");
  });
  toolbar.addChild(openchordsButton)
  var openchordsText =  new createjs.Text("OpenChords", TEXTTYPE, "#000000")
  openchordsText.x = KEYSIZE * 11
  openchordsText.y = KEYSIZE * 0.3
  toolbar.addChild(openchordsText)

  // Tutorial
  var tutorialButton = new createjs.Shape();
  tutorialButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  tutorialButton.addEventListener("click", function(event) {
    window.open("http://google.com");
  });
  toolbar.addChild(tutorialButton)
  var tutorialText =  new createjs.Text("Tutorial", TEXTTYPE, "#000000")
  tutorialText.x = KEYSIZE * 11.3
  tutorialText.y = KEYSIZE * 1.3
  toolbar.addChild(tutorialText)

  // Credits
  var creditsButton = new createjs.Shape();
  creditsButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  creditsButton.addEventListener("click", function(event) {
    window.open("http://google.com");
  });
  toolbar.addChild(creditsButton)
  var creditsText =  new createjs.Text("Credits", TEXTTYPE, "#000000")
  creditsText.x = KEYSIZE * 11.3
  creditsText.y = KEYSIZE * 2.3
  toolbar.addChild(creditsText)

  // Donate
  var donateButton = new createjs.Shape();
  donateButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*3, KEYSIZE * 3, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  donateButton.addEventListener("click", function(event) {
    window.open("https://www.paypal.com/donate/?token=JkaNXFUTpjU705Qc2jqmL0yPHNsQZ_UDRJC239eTWB9GP5qQz6VWKeptFnh6DUTBUdEnwm&country.x=US&locale.x=");
  });
  toolbar.addChild(donateButton)
  var donateText =  new createjs.Text("Donate", TEXTTYPE, "#000000")
  donateText.x = KEYSIZE * 11.3
  donateText.y = KEYSIZE * 3.3
  toolbar.addChild(donateText)



  addKeyDropdowns();
}
