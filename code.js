var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c0f68403-b7cf-424e-8c05-c67f2b8a2cd8","7f8ae106-42ad-4bda-8575-84fba77ed1f3","51c7f17a-7cd7-4629-820b-c3c27fbd8f22","8ac5bdb5-fe43-4de9-a3b1-a18edfa6fdda"],"propsByKey":{"c0f68403-b7cf-424e-8c05-c67f2b8a2cd8":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"7f8ae106-42ad-4bda-8575-84fba77ed1f3":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"_voB8z1tybHuDAKJb3XrVhG9nCoFKaj.","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_voB8z1tybHuDAKJb3XrVhG9nCoFKaj./category_sports/soccer_yellow.png"},"51c7f17a-7cd7-4629-820b-c3c27fbd8f22":{"name":"enemy1","sourceUrl":"assets/v3/animations/Y0GHOn5QndJ7ydnZ9d-pWfAqvDJwx4dLOZOSpd1SK3Y/51c7f17a-7cd7-4629-820b-c3c27fbd8f22.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"KeY5xLPtftlCOGSNYMRuEIGCggX3ltJD","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/Y0GHOn5QndJ7ydnZ9d-pWfAqvDJwx4dLOZOSpd1SK3Y/51c7f17a-7cd7-4629-820b-c3c27fbd8f22.png"},"8ac5bdb5-fe43-4de9-a3b1-a18edfa6fdda":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"IXMujdXXrgPPJEz62mt_N1cKBgtsJG5c","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/8ac5bdb5-fe43-4de9-a3b1-a18edfa6fdda.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
b.setAnimation("b");

var ball= createSprite(200,375,10,10);
ball.setAnimation("ball");
ball.scale=0.1;

var enemy1 = createSprite(35,300,20,20);
enemy1.setAnimation("enemy2");
enemy1.scale=1.1;

var enemy2 = createSprite(365,200,20,20);
enemy2.setAnimation("enemy1");
enemy2.scale=1.1;

var enemy3 = createSprite(35,100,20,20);
enemy3.setAnimation("enemy2");
enemy3.scale=1.1;

var net = createSprite(200,10,110,25);
net.shapeColor="red";

var goal =0;
var death = 0;

enemy1.setVelocity(10,0);
enemy2.setVelocity(-10,0);
enemy3.setVelocity(10,0);








function draw() {
    
  //background(b); 
  
  
  
  
  
  
  createEdgeSprites();
  enemy1.bounceOff(edges);
  enemy2.bounceOff(edges);
  enemy3.bounceOff(edges);
  ball.bounceOff(edges);
  
  if(keyDown(UP_ARROW)){
  ball.y=ball.y-3;
  }
  
  if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+3;
  }
  
  if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-3;
  }
  
  if(keyDown(RIGHT_ARROW)){
  ball.x=ball.x+3;
  }
  
  if(ball.isTouching(enemy1)|| 
  ball.isTouching(enemy2)|| 
  ball.isTouching(enemy3))
  {
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  ball.x=200;
  ball.y=375;
  death=death+1;
  }
   
  if(ball.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  ball.x=200;
  ball.y=345;
  goal=goal+1;
  }
  

  
  
  
  
  
  
  
  
drawSprites();
textSize(20);
  fill("blue");
  text("Goals:"+goal,330,350);
  

textSize(20);
  fill("blue");
  text("death:"+death,5,350);
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
