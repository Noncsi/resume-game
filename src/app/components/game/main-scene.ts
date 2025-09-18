// main-scene.ts
import Phaser from 'phaser';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AssetKey, Direction, MOVEMENT_MAP } from '../../models/constants';

@Injectable()
export class MainScene extends Phaser.Scene {
  private store: Store;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private playerSprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private smokeSprite: Phaser.GameObjects.Sprite;
  private catSprite: Phaser.GameObjects.Sprite;
  private birdFlySprite: Phaser.GameObjects.Sprite;
  private birdJumpSprite: Phaser.GameObjects.Sprite;
  private treeSprite: Phaser.GameObjects.Sprite;

  private tilesetsPrefix = 'assets/images/tilesets/';
  private spritesheetsPrefix = 'assets/images/spritesheets/';

  constructor(store: Store) {
    super('main');
    this.store = store;
  }

  preload() {
    this.load.tilemapTiledJSON('map', 'assets/map.json');

    this.load.image('exterior', `${this.tilesetsPrefix}exterior.png`);
    this.load.image('house_details', `${this.tilesetsPrefix}house_details.png`);
    this.load.image('forest_trees', `${this.tilesetsPrefix}forest_trees.png`);
    this.load.image('ground_grass_details', `${this.tilesetsPrefix}ground_grass_details.png`);

    this.load.spritesheet('smoke', `${this.spritesheetsPrefix}chimney_smoke.png`, {
      frameWidth: 48,
      frameHeight: 48,
    });
    this.load.spritesheet('trees', `${this.spritesheetsPrefix}trees.png`, {
      frameWidth: 64,
      frameHeight: 80,
    });
    this.load.spritesheet(AssetKey.player, `${this.spritesheetsPrefix}player.png`, {
      frameWidth: 19,
      frameHeight: 27,
    });

    this.load.spritesheet('cat', `${this.spritesheetsPrefix}cat.png`, {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('bird_fly', `${this.spritesheetsPrefix}bird_fly.png`, {
      frameWidth: 144,
      frameHeight: 64,
    });

    this.load.spritesheet('bird_jump', `${this.spritesheetsPrefix}bird_jump.png`, {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.cameras.main.fadeIn(500);

    const map = this.make.tilemap({ key: 'map' });

    const forestTileset = map.addTilesetImage('forest_trees', 'forest_trees');
    const houseDetailTileset = map.addTilesetImage('house_details', 'house_details');
    const exteriorTileset = map.addTilesetImage('exterior', 'exterior');
    const groundGrassDetailTileset = map.addTilesetImage(
      'ground_grass_details',
      'ground_grass_details'
    );

    map.createLayer('grass', exteriorTileset);
    map.createLayer('road', [exteriorTileset, groundGrassDetailTileset]);
    map.createLayer('forest', forestTileset, 0, -66);
    map.createLayer('stones', exteriorTileset);
    const house = map.createLayer('house', [houseDetailTileset, exteriorTileset]);
    map.createLayer('roof', houseDetailTileset);
    map.createLayer('flowers', exteriorTileset);
    map.createLayer('well', exteriorTileset);
    map.createLayer('mushrooms', exteriorTileset);
    map.createLayer('fence', exteriorTileset);
    map.createLayer('decorations', exteriorTileset);
    map.createLayer('dirt', exteriorTileset);
    map.createLayer('garden_plants', exteriorTileset);

    this.smokeSprite = this.add.sprite(872, 216, 'smoke');
    this.catSprite = this.add.sprite(1087, 275, 'cat');
    this.treeSprite = this.add.sprite(1030, 475, 'trees');
    this.birdFlySprite = this.add.sprite(1080, 455, 'bird_fly');
    this.birdJumpSprite = this.add.sprite(480, 175, 'bird_jump');

    const collidingElementsGroup = this.physics.add.staticGroup();
    house.setCollisionByExclusion([-1]);

    // --- PLAYER ---
    this.playerSprite = this.physics.add.sprite(800, 200, 'player');

    function enterHouse(player, item) {
      alert('knock knock');
      player.setPosition(1000, 300);
    }

    // collisions
    this.physics.add.overlap(this.playerSprite, collidingElementsGroup, enterHouse, null, this);
    this.physics.add.collider(this.playerSprite, house);

    // --- INPUT ---
    this.cursors = this.input.keyboard.createCursorKeys();
    if (!this.cursors) return;

    // --- ANIMATIONS ---
    const createAnimation = (key: string, start: number, end: number) => {
      this.anims.create({
        key,
        frames: this.anims.generateFrameNumbers(AssetKey.player, { start, end }),
        frameRate: 10,
        repeat: -1,
      });
    };

    // player
    createAnimation(Direction.down, 0, 5);
    createAnimation(Direction.left, 6, 11);
    createAnimation(Direction.right, 12, 17);
    createAnimation(Direction.up, 18, 24);

    // chimney smoke
    this.anims.create({
      key: 'smoke',
      frames: this.anims.generateFrameNumbers('smoke', { start: 0, end: 5 }),
      frameRate: 8,
      repeat: -1,
    });

    // cat
    this.anims.create({
      key: 'cat',
      frames: this.anims.generateFrameNumbers('cat', {
        frames: [
          0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 51, 51, 51, 51, 51,
          51, 51, 51,
        ],
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'bird_fly',
      frames: this.anims.generateFrameNumbers('bird_fly', {
        frames: [
          0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 51, 51, 51, 51, 51,
          51, 51, 51,
        ],
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'bird_jump',
      frames: this.anims.generateFrameNumbers('bird_jump', { start: 0, end: 20 }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'trees',
      frames: this.anims.generateFrameNumbers('trees', {         frames: [
          3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 3, 3, 3, 3, 3, 
        ], }),
      frameRate: 8,
      repeat: -1,
    });

    this.smokeSprite.play('smoke');
    this.catSprite.play('cat');
    this.birdFlySprite.play('bird_fly');
    this.birdJumpSprite.play('bird_jump');
    this.treeSprite.play('trees');
  }

  override update() {
    // Player movement
    this.playerSprite.setVelocity(0);

    const pressedDirection = Object.entries(this.cursors).find(
      ([keyName, key]) => keyName in MOVEMENT_MAP && key.isDown
    )?.[0];

    if (!pressedDirection) return this.playerSprite.anims.stop();

    const movement = MOVEMENT_MAP[pressedDirection];
    this.playerSprite.setVelocity(movement.velocity.x, movement.velocity.y);
    return this.playerSprite.anims.play(movement.animation, true);
  }
}
