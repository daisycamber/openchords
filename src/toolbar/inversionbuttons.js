function addInversionButtons(toolbar){

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
    var defaultTriadText =  new createjs.Text("Default", TEXTTYPE, "#000000")
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
    var firstInversionText =  new createjs.Text("1st Inversion", TEXTTYPE, "#000000")
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
    var secondInversionText =  new createjs.Text("2nd Inversion", TEXTTYPE, "#000000")
    secondInversionText.x = KEYSIZE * 7.3
    secondInversionText.y = KEYSIZE * 2.3
    toolbar.addChild(secondInversionText)
}
