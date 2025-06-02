$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms AT LEAST 5
  createPlatform(600, 650, 50, 20, "gray");
   createPlatform (440, 540, 50, 20, "gray");
    createPlatform (600, 450, 50, 20, "gray" );
     createPlatform (950, 450, 50, 20, "gray");
       createPlatform (1250, 450, 50, 20, "gray");


    // TODO 3 - Create Collectables AT LEAST 5
createCollectable ("mcdiamond2", 600, 600, 0, 0);
createCollectable ("mcdiamond2", 960, 400, 0, 0);
createCollectable ("mcdiamond2", 1265, 400, 0, 0);
createCollectable ("mcdiamond2", 1300, 700, 0, 0);
createCollectable ("mcdiamond2", 100, 700, 0, 0);
    
    // TODO 4 - Create Cannons AT LEAST 3
  createCannon ("top", 300, 1000);
    createCannon ("top", 870, 500);
  createCannon ("top", 1250, 500);
createCannon ("right", 750, 2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
