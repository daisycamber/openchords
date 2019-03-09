var dropdownKeys
var intervalDropdown
var notesDropdown
var currentKey = "C"
var currentInterval = "Major"
var notesInChord = 3 // Number of notes in the chord
var noteLength = "1/2"

// Update the timing (delay) of a measure if there isnt a chord
function updateMeasureTiming(){
  if(recordedChords[selectedMeasure] == null){
    chordLabels[selectedMeasure].text = noteLength
    chordLabels[selectedMeasure].visible = true
    chordLengths[selectedMeasure] = noteLength
  }
}

function addDropdowns(){
  // Key dropdown menu
  dropdownKeys = new createjs.Container(); // Add invisible container for keys
  dropdownKeys.visible = false;
  var keyDropdown = new createjs.Shape(); // Add dropdown button
  keyDropdown.graphics.beginFill("White")
  keyDropdown.graphics.drawRect(KEYSIZE * 2, 0, KEYSIZE, KEYSIZE);
  keyDropdown.addEventListener("click", function(event) {
    console.log(dropdownKeys.visible)
    if(dropdownKeys.visible == true) { // Toggle visible
      dropdownKeys.visible = false
    } else {
      dropdownKeys.visible = true
    }
  });
  toolbar.addChild(keyDropdown);

  var keyText =  new createjs.Text(keys[0], TEXTTYPE, "#000000")
  keyText.x = KEYSIZE * 2 + KEYSIZE/3;
  keyText.y = KEYSIZE/3;
  toolbar.addChild(keyText);

  for(var i = 0; i < 12; i++){
    var dropdownKey = new createjs.Container();
    var key = new createjs.Shape();
    key.graphics.beginFill("White")
    key.graphics.drawRect(KEYSIZE * 2,KEYSIZE * i + KEYSIZE, KEYSIZE, KEYSIZE);
    key.addEventListener("click", function(event) {
      keyText.text = keys[Math.ceil(event.stageY/KEYSIZE)-2]
      currentKey = keyText.text
      dropdownKeys.visible = false;
      updateKeys();
      clearChords();
    });

    var dropdownKeyText = new createjs.Text(keys[i], TEXTTYPE, "#000000")
    dropdownKeyText.x = KEYSIZE * 2 + KEYSIZE/3;
    dropdownKeyText.y = KEYSIZE/3 + KEYSIZE + KEYSIZE * i;

    dropdownKeys.addChild(key)
    dropdownKeys.addChild(dropdownKey);
    dropdownKey.addChild(dropdownKeyText);

  }
  toolbar.addChild(dropdownKeys)

  // Interval dropdown menu
  intervalDropdown = new createjs.Container(); // Add invisible container for keys
  intervalDropdown.visible = false;
  var intervalDropdownButton = new createjs.Shape(); // Add dropdown button
  intervalDropdownButton.graphics.beginFill("White")
  intervalDropdownButton.graphics.drawRect(KEYSIZE * 3, 0, KEYSIZE * 4, KEYSIZE);
  intervalDropdownButton.addEventListener("click", function(event) {
    if(intervalDropdown.visible == false) { // Toggle visible
      intervalDropdown.visible = true
    } else {
      intervalDropdown.visible = false
    }
  });
  toolbar.addChild(intervalDropdownButton);

  var intervalText =  new createjs.Text("Major", TEXTTYPE, "#000000")
  intervalText.x = KEYSIZE * 3 + KEYSIZE/8;
  intervalText.y = KEYSIZE/3;
  toolbar.addChild(intervalText);

  for(var i = 0; i < intervals.length; i++){
    var dropdownKey = new createjs.Container();
    var dropdownKeyText = new createjs.Text(intervals[i], TEXTTYPE, "#000000")
    dropdownKeyText.x = KEYSIZE * 3 + KEYSIZE/8;
    dropdownKeyText.y = KEYSIZE/3 + KEYSIZE + KEYSIZE * i;
    var key = new createjs.Shape();
    key.graphics.beginFill("White")
    key.graphics.drawRect(KEYSIZE * 3,KEYSIZE * i + KEYSIZE, KEYSIZE * 4, KEYSIZE);
    key.addEventListener("click", function(event) {
      intervalText.text = intervals[Math.ceil(event.stageY/KEYSIZE)-2]
      currentInterval = intervalText.text
      intervalDropdown.visible = false
      updateKeys();
      clearChords();
    });
    intervalDropdown.addChild(key)
    dropdownKey.addChild(dropdownKeyText);

    intervalDropdown.addChild(dropdownKey);
  }
  toolbar.addChild(intervalDropdown)

  // Notes dropdown menu
  notesDropdown = new createjs.Container(); // Add invisible container for keys
  notesDropdown.visible = false;
  var notesDropdownButton = new createjs.Shape(); // Add dropdown button
  notesDropdownButton.graphics.beginFill("White")
  notesDropdownButton.graphics.drawRect(KEYSIZE * 7, KEYSIZE * 3, KEYSIZE * 3, KEYSIZE);
  notesDropdownButton.addEventListener("click", function(event) {
    console.log("clicked this meme")
    if(notesDropdown.visible == true) { // Toggle visible
      notesDropdown.visible = false
    } else {
      notesDropdown.visible = true
    }
  });
  toolbar.addChild(notesDropdownButton);

  var notesText =  new createjs.Text("3 Notes", TEXTTYPE, "#000000")
  notesText.x = KEYSIZE * 7 + KEYSIZE/3;
  notesText.y = KEYSIZE * 3 + KEYSIZE/3;
  toolbar.addChild(notesText);

  for(var i = 0; i < noteNumbers.length; i++){
    var dropdownKey = new createjs.Container();
    var dropdownKeyText = new createjs.Text(noteNumbers[i], TEXTTYPE, "#000000")
    dropdownKeyText.x = KEYSIZE * 7 + KEYSIZE/3;
    dropdownKeyText.y = KEYSIZE/3 + (KEYSIZE*4) + KEYSIZE * i;
    var key = new createjs.Shape();
    key.graphics.beginFill("White")
    key.graphics.drawRect(KEYSIZE * 7,(KEYSIZE * 3) + KEYSIZE * i + KEYSIZE, KEYSIZE * 3, KEYSIZE);
    key.addEventListener("click", function(event) {
      notesText.text = noteNumbers[Math.ceil(event.stageY/KEYSIZE)-5]
      notesDropdown.visible = false
      notesInChord = Math.ceil(event.stageY/KEYSIZE)-4;
      console.log(notesInChord);
    });
    notesDropdown.addChild(key)
    dropdownKey.addChild(dropdownKeyText);

    notesDropdown.addChild(dropdownKey);
  }
  toolbar.addChild(notesDropdown)

  // Note length dropdown
  noteLengthDropdown = new createjs.Container(); // Add invisible container for keys
  noteLengthDropdown.visible = false;
  var noteLengthDropdownButton = new createjs.Shape(); // Add dropdown button
  noteLengthDropdownButton.graphics.beginFill("White")
  noteLengthDropdownButton.graphics.drawRect(KEYSIZE * 6, KEYSIZE * 3, KEYSIZE, KEYSIZE);
  noteLengthDropdownButton.addEventListener("click", function(event) {
    console.log("clicked this meme")
    if(noteLengthDropdown.visible == false) { // Toggle visible
      noteLengthDropdown.visible = true
    } else {
      noteLengthDropdown.visible = false
    }
    updateMeasureTiming();
  });
  toolbar.addChild(noteLengthDropdownButton);

  var noteLengthText =  new createjs.Text("1/2", TEXTTYPE, "#000000")
  noteLengthText.x = KEYSIZE * 6 + KEYSIZE/8;
  noteLengthText.y = KEYSIZE * 3 + KEYSIZE/3;
  toolbar.addChild(noteLengthText);

  for(var i = 0; i < noteLengths.length; i++){
    var dropdownKey = new createjs.Container();
    var dropdownKeyText = new createjs.Text(noteLengths[i], TEXTTYPE, "#000000")
    dropdownKeyText.x = KEYSIZE * 6 + KEYSIZE/8;
    dropdownKeyText.y = KEYSIZE/3 + (KEYSIZE*4) + KEYSIZE * i;
    var key = new createjs.Shape();
    key.graphics.beginFill("White")
    key.graphics.drawRect(KEYSIZE * 6,(KEYSIZE * 3) + KEYSIZE * i + KEYSIZE, KEYSIZE, KEYSIZE);
    key.addEventListener("click", function(event) {
      noteLength = noteLengths[Math.ceil(event.stageY/KEYSIZE)-5]
      noteLengthText.text = noteLength
      noteLengthDropdown.visible = false
      updateMeasureTiming();
    });
    noteLengthDropdown.addChild(key)
    dropdownKey.addChild(dropdownKeyText);

    noteLengthDropdown.addChild(dropdownKey);
  }
  toolbar.addChild(noteLengthDropdown)
}
