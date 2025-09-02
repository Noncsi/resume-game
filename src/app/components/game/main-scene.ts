// main-scene.ts
import Phaser from 'phaser';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AssetKeys } from '../../models/constants';

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
    this.load.image(AssetKeys.player, `assets/tiles/${AssetKeys.player}.png`);
    this.load.image(AssetKeys.water, `assets/tiles/${AssetKeys.water}.png`);
    this.load.image(AssetKeys.grass, `assets/tiles/${AssetKeys.grass}.png`);
    this.load.image(AssetKeys.forest, `assets/tiles/${AssetKeys.forest}.png`);
    this.load.tilemapTiledJSON(AssetKeys.map, `assets/${AssetKeys.map}.json`);
  }

  create() {
    this.cameras.main.fadeIn(1000);
    // --- MAP ---
    const map = this.make.tilemap({ key: AssetKeys.map });
    this.physics.world.setBounds(800, 200, 320, 320);
    
    const waterTileSet = map.addTilesetImage(AssetKeys.water);
    const grassTileSet = map.addTilesetImage(AssetKeys.grass);
    const forestTileSet = map.addTilesetImage(AssetKeys.forest);

    map.createBlankLayer('waterLayer', waterTileSet).fill(1);
    const island = map.createLayer('grassLayer', grassTileSet);
    map.createLayer('layerForest', forestTileSet);

    // --- PLAYER ---
    this.player = this.physics.add.sprite(800, 200, AssetKeys.player);
    this.player.setCollideWorldBounds(true);

    // --- INPUT ---
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  override update() {
    if (!this.cursors) return;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-500);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(500);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-500);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(500);
    } else {
      this.player.anims.stop();
    }
  }
}
