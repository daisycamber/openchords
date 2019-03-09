//
function addSeventhNinthThirteenthButtons(toolbar){

  // Toggles for adding 7th, ninth, etc
  // Add seventh
  var addSeventhButton = new createjs.Shape();
  addSeventhButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  addSeventhButton.addEventListener("click", function(event) {
    if(addSeventh){
      addSeventhButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    } else {
      addSeventhButton.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 11, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    }
    addSeventh = !addSeventh;
    console.log(addSeventh)
  });
  toolbar.addChild(addSeventhButton)
  var addSeventhText =  new createjs.Text("7th", TEXTTYPE, "#000000")
  addSeventhText.x = KEYSIZE * 11.1
  addSeventhText.y = KEYSIZE * 2.3
  toolbar.addChild(addSeventhText)

  // Add ninth
  var addNinthButton = new createjs.Shape();
  addNinthButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 12, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  addNinthButton.addEventListener("click", function(event) {
    if(addNinth){
      addNinthButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 12, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    } else {
      addNinthButton.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 12, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    }
    addNinth = !addNinth;
  });
  toolbar.addChild(addNinthButton)
  var addNinthText =  new createjs.Text("9th", TEXTTYPE, "#000000")
  addNinthText.x = KEYSIZE * 12.1
  addNinthText.y = KEYSIZE * 2.3
  toolbar.addChild(addNinthText)

  // Add 13th
  var addThirteenthButton = new createjs.Shape();
  addThirteenthButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 13, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
  addThirteenthButton.addEventListener("click", function(event) {
    if(addThirteenth){
      addThirteenthButton.graphics.beginFill("White").drawRoundRectComplex(KEYSIZE * 13, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    } else {
      addThirteenthButton.graphics.beginFill("Pink").drawRoundRectComplex(KEYSIZE * 13, KEYSIZE*2, KEYSIZE, KEYSIZE, KEYROUND, KEYROUND, KEYROUND, KEYROUND);
    }
    addThirteenth = !addThirteenth;
  });
  toolbar.addChild(addThirteenthButton)
  var addThirteenthText =  new createjs.Text("13th", TEXTTYPE, "#000000")
  addThirteenthText.x = KEYSIZE * 13.0
  addThirteenthText.y = KEYSIZE * 2.3
  toolbar.addChild(addThirteenthText)
}
