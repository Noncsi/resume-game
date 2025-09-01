// main-scene.ts
import Phaser from 'phaser';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

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
    this.load.image('grass', '/assets/images/grass.png');
    this.load.image('forest', '/assets/images/forest.png');
    this.load.tilemapTiledJSON('map', '/assets/map.json');

    this.load.spritesheet('player', '/assets/images/player.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // --- MAP ---
    const map = this.make.tilemap({ key: 'map' });
    const grassTileSet = map.addTilesetImage('Grass', 'grass');
    const forestTileSet = map.addTilesetImage('Forest', 'forest');

    map.createLayer('Grass', grassTileSet, 0, 0);
    map.createLayer('Forest', forestTileSet);

    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // --- PLAYER ---
    this.player = this.physics.add.sprite(50, 50, 'player');
    this.player.setCollideWorldBounds(true);

    // --- INPUT ---
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  override update() {
    if (!this.cursors) return;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
    } else {
      this.player.anims.stop();
    }
  }
}
