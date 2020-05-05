import Phaser from 'phaser';
import Hero from '../entities/Hero';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
      frameWidth: 32,
      frameHeight: 64,
    });
  }

  create(data) {
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'hero-running',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 10,
      repeat: -1,
    });

    this.hero = new Hero(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2
    );

    this.platform = this.add.rectangle(220, 240, 200, 10, 0x4bcb7c);
    this.physics.add.existing(this.platform, true);
    this.physics.add.collider(this.platform, this.hero);
  }

  update(time, delta) {
    if (this.cursorKeys.space.isDown) {
      console.log('space is down');
    }
  }
}

export default Game;
