class Form {

  constructor() {


  }

  display() {
    var title = createElement('h2')
    title.html("Virtual Pet")
    title.position(130, 0);


    var button1 = createButton('Feed');

    button1.position(250, 200);

    button1.mousePressed(function () {
      button1.hide();
      dogFed();
      playerCount -= 1;
      // gameState == 1
      player.updateCount(playerCount);
    });

    var button2 = createButton('Add stock');

    button2.position(300, 200);

    button2.mousePressed(function () {
      // button2.hide();


      playerCount += 1;
      // gameState == 1
      player.updateCount(playerCount);
    });


  }






}



