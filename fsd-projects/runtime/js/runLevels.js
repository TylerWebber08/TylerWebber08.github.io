var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    
      function createSawBlade(x, y, damage, image, offsetX, offsetY, scale){
        var hitZoneSize = 25;
        var damageFromObstacle = damage;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        sawBladeHitZone.rotationalVelocity = 30;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap(image);
        obstacleImage.x = offsetX;
        obstacleImage.y = offsetY;
        obstacleImage.scaleX = scale;
        obstacleImage.scaleY = scale; 
       sawBladeHitZone.addChild(obstacleImage);
   
      }

      function createEnemy(x, y, speed, image, offsetX, offsetY, scale){
        var enemy = game.createGameItem("enemy", 25);
        var enemyImage = draw.bitmap(image);
        enemyImage.x = offsetX;
        enemyImage.y = offsetY;
        enemyImage.scaleX = scale;
        enemyImage.scaleY = scale;
        enemy.addChild(enemyImage);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = speed;
        enemy.onPlayerCollision = function () {
          game.changeIntegrity(-10)
        };
        enemy.onProjectileCollision = function (){
          game.increaseScore(50);
          enemy.fadeOut();
        };
      }
      
      function createReward(x, y, speed, image, offsetX, offsetY, scale){
        var reward = game.createGameItem("reward", 25);
        var rewardImage = draw.bitmap(image);
        rewardImage.x = offsetX;
        rewardImage.y = offsetY;
        rewardImage.scaleX = scale;
        rewardImage.scaleY = scale; 
        reward.addChild(rewardImage);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = speed;
        reward.onPlayerCollision = function () {
          game.changeIntegrity(10)
          game.increaseScore(100);
        };
      }
        function createMarker(x, y, speed, image, offsetX, offsetY, scale){
        var marker = game.createGameItem("marker", 25);
        var markerImage = draw.bitmap(image);
        markerImage.x = offsetX;
        markerImage.y = offsetY;
        marker.addChild(markerImage);
        marker.x = x;
        marker.y = y;
        markerImage.scaleX = scale;
        markerImage.scaleY = scale; 
        game.addGameItem(marker);
        marker.velocityX = speed;
        marker.onPlayerCollision = function () {
          game.changeIntegrity(0)
          game.increaseScore(1000);
          startLevel();
        }; 
      }
      
      
      
      
      
      
     
      function startLevel() {
      // TODO 13 goes below here
        var level = levelData[currentLevel]; //fetches the current level of the array and stores it in the level variable
        var levelObjects = level.gameItems;
        for(var i = 0; i < levelObjects.length; i++){
          var element = levelObjects[i];
          if(element.type === "sawblade"){
            createSawBlade(element.x, element.y, element.damage, element.image, element.offsetX, element.offsetY, element.scale);
          }
          if(element.type === "enemy"){
             createEnemy(element.x, element.y, element.speed, element.image, element.offsetX, element.offsetY, element.scale);
          }
          if(element.type === "reward"){
             createReward(element.x, element.y, element.speed, element.image, element.offsetX, element.offsetY, element.scale);
          }
          if(element.type === "marker"){
             createMarker(element.x, element.y, element.speed, element.image, element.offsetX, element.offsetY, element.scale);
          }
        }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
