import Phaser from 'phaser';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ANIMATION_COLLECTION,
  ASSET_KEY,
  DYNAMIC_SPRITE_COLLECTION,
  LAYER_COLLECTION,
  MOVEMENT_MAP,
  SPRITE_COLLECTION,
  TILESET_COLLECTION,
} from '../../models/constants';
import {
  CursorKeys,
  TilesetImageConfig,
  Sprite,
  SpriteSheetImageConfig,
  SpriteConfig,
  LayerConfig,
  DynamicSprite,
  DynamicSpriteConfig,
  CollisionType,
  CollisionConfig,
  AnimationConfig,
  Movement,
} from '../../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../../config/textures';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../../config/sprites';
import { LAYER_CONFIGS } from '../../config/layers';
import { COLLISION_CONFIGS } from '../../config/collisions';
import { ANIMATION_CONFIGS } from '../../config/animations';

@Injectable()
export class MainScene extends Phaser.Scene {
  private store: Store;
  private cursors: CursorKeys;
  private map: Phaser.Tilemaps.Tilemap;

  constructor(store: Store) {
    super('main');
    this.store = store;
  }

  private loadTilesets(): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key, url }: TilesetImageConfig) => {
      this.load.image(key, url);
    });
  }

  private loadSpritesheets(): void {
    SPRITESHEET_IMAGE_CONFIGS.forEach(({ key, url, frameConfig }: SpriteSheetImageConfig) => {
      this.load.spritesheet(key, url, frameConfig);
    });
  }

  private addTilesets(): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key }: TilesetImageConfig) => {
      TILESET_COLLECTION[key] = this.map.addTilesetImage(key);
    });
  }

  private addSprites(): void {
    SPRITE_CONFIGS.forEach(({ x, y, texture }: SpriteConfig) => {
      SPRITE_COLLECTION[texture] = this.add.sprite(x, y, texture);
    });
    DYNAMIC_SPRITE_CONFIGS.forEach(
      ({ x, y, texture, bodySize, bodyOffset, origin }: DynamicSpriteConfig) => {
        DYNAMIC_SPRITE_COLLECTION[texture] = this.physics.add
          .sprite(x, y, texture)
          .setBodySize(bodySize.width, bodySize.height)
          .setOffset(bodyOffset.x, bodyOffset.y)
          .setOrigin(origin.x, origin.y);
      }
    );
  }

  private addLayers(): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, x = 0, y = 0 }: LayerConfig) => {
      const tilesets = tilesetKeys.map((key) => TILESET_COLLECTION[key]);
      const layer = this.map.createLayer(layerID, tilesets, x, y);
      if (
        [
          ASSET_KEY.layer.forest,
          ASSET_KEY.layer.house,
          ASSET_KEY.layer.stones,
          ASSET_KEY.layer.fence,
        ].includes(layerID)
      ) {
        layer.setCollisionByExclusion([-1]);
      }
      LAYER_COLLECTION[layerID] = layer;
    });
  }

  private getCollisionObject(
    key: string
  ): Phaser.GameObjects.GameObject | Phaser.Tilemaps.TilemapLayer | null {
    return DYNAMIC_SPRITE_COLLECTION[key] || LAYER_COLLECTION[key] || null;
  }

  private addCollisions(): void {
    COLLISION_CONFIGS.forEach(
      ({ collisionType, object1Key, object2Key, callback }: CollisionConfig) => {
        const obj1 = this.getCollisionObject(object1Key);
        const obj2 = this.getCollisionObject(object2Key);
        switch (collisionType) {
          case CollisionType.collider:
            this.physics.add.collider(obj1, obj2, callback);
            break;
          case CollisionType.overlap:
            this.physics.add.overlap(obj1, obj2, callback);
            break;
        }
      }
    );
  }

  private addAnimations(): void {
    ANIMATION_CONFIGS.forEach(({ key, spritesheetKey, frameConfig }: AnimationConfig) => {
      const animation = this.anims.create({
        key,
        frames: this.anims.generateFrameNumbers(spritesheetKey, frameConfig),
        frameRate: 10,
        repeat: -1,
      });
      if (!animation) return;
      ANIMATION_COLLECTION[key] = animation;
    });
  }

  preload() {
    this.load.tilemapTiledJSON(ASSET_KEY.map, `assets/${ASSET_KEY.map}.json`);
    this.loadTilesets();
    this.loadSpritesheets();
  }

  create() {
    // this.physics.world.createDebugGraphic();
    this.cameras.main.fadeIn(500);

    this.cursors = this.input.keyboard.createCursorKeys();
    if (!this.cursors) return;

    this.map = this.make.tilemap({ key: 'map' });
    this.addTilesets();
    this.addLayers();
    this.addSprites();
    this.addAnimations();
    this.addCollisions();

    Object.entries(SPRITE_COLLECTION).forEach((sprite: [string, Sprite]) => {
      sprite[1].play(sprite[0]);
    });
  }

  override update() {
    const player = DYNAMIC_SPRITE_COLLECTION[ASSET_KEY.spritesheet.player];
    player.setVelocity(0);

    const pressedDirection = Object.entries(this.cursors).find(
      ([keyName, key]) => keyName in MOVEMENT_MAP && key.isDown
    )?.[0];

    if (!pressedDirection) return player.anims.stop();

    const movement: Movement = MOVEMENT_MAP[pressedDirection];
    player.setVelocity(movement.velocity.x, movement.velocity.y);
    return player.anims.play(movement.animationKey, true);
  }
}
