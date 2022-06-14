const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: "b9eaff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    }
  },
  scene: //[Scene1, Scene2]
  {
    preload, 
    update, 
    create
    }
}; 


const game = new Phaser.Game(config);
