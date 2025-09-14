// main-scene.ts
import Phaser from 'phaser';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AssetKey, Direction, MOVEMENT_MAP } from '../../models/constants';

@Injectable()
export class MainScene extends Phaser.Scene {
  private store: Store;
  private player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(store: Store) {
    super('main');
    this.store = store;
  }

  preload() {
    this.load.atlas('atlas', `assets/tiles/atlas.png`, 'assets/tiles/atlas.json');
    this.load.spritesheet(AssetKey.player, 'assets/tiles/player-sheet.png', {
      frameWidth: 19,
      frameHeight: 27,
    });
  }

  create() {
    this.cameras.main.fadeIn(500);

    // --- MAP ---
    const mapEdgeForestGroup = this.physics.add.staticGroup();
    const collidingElementsGroup = this.physics.add.staticGroup();

    // World dimensions
    const cols = 62;
    const rows = 30;

    // Meadow center (in grid coordinates, not pixels)
    const meadowCenterX = Math.floor(cols / 2 - 1);
    const meadowCenterY = Math.floor(rows / 2 - 1);
    const meadowRadius = 12;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Compute distance from center of meadow
        const dx = x - meadowCenterX;
        const dy = y - meadowCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Place tree only if OUTSIDE the circular radius
        if (distance > meadowRadius) {
          mapEdgeForestGroup.create(x * 32, y * 32, 'atlas', 'tree');
        }
      }
    }

    collidingElementsGroup.create(1000, 200, 'atlas', 'house').body.setSize(120, 70);

    // --- PLAYER ---
    this.player = this.physics.add.sprite(1000, 300, 'player').setScale(1.5);
    this.physics.add.collider(this.player, mapEdgeForestGroup);
    this.physics.add.collider(this.player, collidingElementsGroup);

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
    }
    createAnimation(Direction.down, 0, 5);
    createAnimation(Direction.left, 6, 11);
    createAnimation(Direction.right, 12, 17);
    createAnimation(Direction.up, 18, 24);
  }

  override update() {
    // Player movement
    this.player.setVelocity(0);

    const pressedDirection = Object.entries(this.cursors).find(
      ([keyName, key]) => keyName in MOVEMENT_MAP && key.isDown
    )?.[0];

    if (!pressedDirection) return this.player.anims.stop();

    const movement = MOVEMENT_MAP[pressedDirection];
    this.player.setVelocity(movement.velocity.x, movement.velocity.y);
    return this.player.anims.play(movement.animation, true);
  }
}
