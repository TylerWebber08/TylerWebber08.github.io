var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 50, image:"img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 50, image:"img/Pufferfish.png", offsetX: 10, offsetY: -10, scale: 0.25},
          { type: "sawblade", x: 1800, y: groundY - 125, damage: 100, image:"img/spikeball.png",  offsetX: -25, offsetY: -25, scale: 0.3},
          { type: "sawblade", x: 2000, y: groundY - 125, damage: 50, image:"img/Pufferfish.png", offsetX: 10, offsetY: -10, scale: 0.25},
          { type: "sawblade", x: 230, y: groundY - 125, damage: 50, image:"img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1},


          { type: "enemy", x: 900, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
           { type: "enemy", x: 1400, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
           { type: "enemy", x: 2000, y: groundY - 50, speed: -4, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
             { type: "enemy", x: 2200, y: groundY - 50, speed: -2, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
             { type: "enemy", x: 1900, y: groundY - 50, speed: -3, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
            { type: "enemy", x: 2900, y: groundY - 50, speed: -2, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
            { type: "enemy", x:3400, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},

          { type: "reward", x: 2900, y: groundY - 125, speed: -2, image:"img/mcdiamond2.png", offsetX: -30, offsetY: -25, scale: 0.11},
          { type: "reward", x: 3100, y: groundY - 125, speed: -2, image:"img/Pizza.png", offsetX: -30, offsetY: -40, scale: 0.05},
          {type: "marker", x: 3200, y: groundY - 120, speed: -2, image:"img/Thumb.png", offsetX: -50, offsetY: -100, scale: 0.5}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 50, image:"img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 50, image:"img/Pufferfish.png", offsetX: 10, offsetY: -10, scale: 0.25},
          { type: "sawblade", x: 1800, y: groundY - 125, damage: 100, image:"img/spikeball.png",  offsetX: -25, offsetY: -25, scale: 0.3},
          { type: "sawblade", x: 2000, y: groundY - 125, damage: 50, image:"img/Pufferfish.png", offsetX: 10, offsetY: -10, scale: 0.25},
          { type: "sawblade", x: 230, y: groundY - 125, damage: 50, image:"img/sawblade.png", offsetX: -25, offsetY: -25, scale: 1},


          { type: "enemy", x: 900, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
           { type: "enemy", x: 1400, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
           { type: "enemy", x: 2000, y: groundY - 50, speed: -4, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
             { type: "enemy", x: 2200, y: groundY - 50, speed: -2, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
             { type: "enemy", x: 1900, y: groundY - 50, speed: -3, image:"img/RAHHH.png", offsetX: -40, offsetY: -50, scale: 0.25},
            { type: "enemy", x: 2900, y: groundY - 50, speed: -2, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},
            { type: "enemy", x:3400, y: groundY - 50, speed: -3, image:"img/freakygoomba.png", offsetX: -80, offsetY: -50, scale: 0.09},

          { type: "reward", x: 2900, y: groundY - 125, speed: -2, image:"img/mcdiamond2.png", offsetX: -30, offsetY: -25, scale: 0.11},
          { type: "reward", x: 3100, y: groundY - 125, speed: -2, image:"img/Pizza.png", offsetX: -30, offsetY: -40, scale: 0.05},
          {type: "marker", x: 3200, y: groundY - 120, speed: -2, image:"img/Thumb.png", offsetX: -50, offsetY: -100, scale: 0.5}
         
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
