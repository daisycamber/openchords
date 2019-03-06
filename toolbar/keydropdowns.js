var dropdownKeys
var intervalDropdown

var currentKey = "C"
var currentInterval = "Major"
function addKeyDropdowns(){
  // Key dropdown menu
  dropdownKeys = new createjs.Container(); // Add invisible container for keys
  dropdownKeys.visible = false;
  var keyDropdown = new createjs.Shape(); // Add dropdown button
  keyDropdown.graphics.beginFill("White")
  keyDropdown.graphics.drawRect(KEYSIZE * 2, 0, KEYSIZE, KEYSIZE);
  keyDropdown.addEventListener("click", function(event) {
    if(dropdownKeys.visible == false) { // Toggle visible
      dropdownKeys.visible = true
    } else {
      dropdownKeys.visible = false
    }
  });
  toolbar.addChild(keyDropdown);

  var keyText =  new createjs.Text(keys[0], KEYSIZE/2 + "px Arial", "#000000")
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
      updateKeys();
      clearChords();
    });

    var dropdownKeyText = new createjs.Text(keys[i], KEYSIZE/2 + "px Arial", "#000000")
    dropdownKeyText.x = KEYSIZE * 2 + KEYSIZE/3;
    dropdownKeyText.y = KEYSIZE/3 + KEYSIZE + KEYSIZE * i;

    dropdownKeys.addChild(key)

    dropdownKeys.addChild(dropdownKey);
    dropdownKey.addChild(dropdownKeyText);

  }
  toolbar.addChild(dropdownKeys)
  toolbar.setChildIndex( dropdownKeys, toolbar.getNumChildren()-1);

  // Major/Minor/Etc dropdown menu
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

  var intervalText =  new createjs.Text("Major", KEYSIZE/2 + "px Arial", "#000000")
  intervalText.x = KEYSIZE * 3 + KEYSIZE/8;
  intervalText.y = KEYSIZE/3;
  toolbar.addChild(intervalText);

  for(var i = 0; i < intervals.length; i++){
    var dropdownKey = new createjs.Container();
    var dropdownKeyText = new createjs.Text(intervals[i], KEYSIZE/2 + "px Arial", "#000000")
    dropdownKeyText.x = KEYSIZE * 3 + KEYSIZE/8;
    dropdownKeyText.y = KEYSIZE/3 + KEYSIZE + KEYSIZE * i;
    var key = new createjs.Shape();
    key.graphics.beginFill("White")
    key.graphics.drawRect(KEYSIZE * 3,KEYSIZE * i + KEYSIZE, KEYSIZE * 4, KEYSIZE);
    key.addEventListener("click", function(event) {
      intervalText.text = intervals[Math.ceil(event.stageY/KEYSIZE)-2]
      currentInterval = intervalText.text
      updateKeys();

    });
    intervalDropdown.addChild(key)
    dropdownKey.addChild(dropdownKeyText);

    intervalDropdown.addChild(dropdownKey);
  }
  toolbar.addChild(intervalDropdown)
  toolbar.setChildIndex( intervalDropdown, toolbar.getNumChildren()-1);
}
