import Phaser from 'phaser';
import { Injectable } from '@angular/core';
import {
  ANIMATION_COLLECTION,
  DYNAMIC_SPRITE_COLLECTION,
  INTERACTABLE_AREAS,
  LAYER_COLLECTION,
  MOVEMENT_MAP,
  SPRITE_COLLECTION,
  TILESET_COLLECTION,
} from '../models/constants';
import {
  CursorKeys,
  TilesetImageConfig,
  Sprite,
  SpriteSheetImageConfig,
  ISpriteConfig,
  ILayerConfig,
  IDynamicSpriteConfig,
  CollisionType,
  ICollisionConfig,
  IAnimationConfig,
  IMovement,
  IInteractableAreaConfig,
} from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { LAYER_CONFIGS } from '../config/layers';
import { COLLISION_CONFIGS } from '../config/collisions';
import { ANIMATION_CONFIGS } from '../config/animations';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { KEY } from '../models/keys';

@Injectable()
export class MainScene extends Phaser.Scene {
  private cursors: CursorKeys;
  private map: Phaser.Tilemaps.Tilemap;
  private lastPressedKey = '';

  constructor() {
    super('main');
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
    SPRITE_CONFIGS.forEach(({ x, y, texture }: ISpriteConfig) => {
      SPRITE_COLLECTION[texture] = this.add.sprite(x, y, texture);
    });
    DYNAMIC_SPRITE_CONFIGS.forEach(
      ({ x, y, texture, bodySize, bodyOffset, origin }: IDynamicSpriteConfig) => {
        DYNAMIC_SPRITE_COLLECTION[texture] = this.physics.add
          .sprite(x, y, texture)
          .setBodySize(bodySize.width, bodySize.height)
          .setOffset(bodyOffset.x, bodyOffset.y)
          .setOrigin(origin.x, origin.y);
      }
    );
  }

  private addLayers(): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, x = 0, y = 0 }: ILayerConfig) => {
      const tilesets = tilesetKeys.map((key) => TILESET_COLLECTION[key]);
      const layer = this.map.createLayer(layerID, tilesets, x, y);
      layer.setCollisionByExclusion([-1]);
      LAYER_COLLECTION[layerID] = layer;
    });
  }

  private addCollisions(): void {
    COLLISION_CONFIGS.forEach(
      ({ collisionType, spriteKey, layerKey, callback }: ICollisionConfig) => {
        const obj1 = DYNAMIC_SPRITE_COLLECTION[spriteKey];
        const obj2 = LAYER_COLLECTION[layerKey];
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
    ANIMATION_CONFIGS.forEach(({ key, spritesheetKey, frameConfig }: IAnimationConfig) => {
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

  private addInteractableAreas(): void {
    INTERACTABLE_AREA_CONFIGS.forEach(
      ({ key, eventKey, title, content, links }: IInteractableAreaConfig) => {
        INTERACTABLE_AREAS.set(key, {key, eventKey, title, content, links})
      }
    );
  }

  preload() {
    this.load.tilemapTiledJSON(KEY.map, `assets/${KEY.map}.json`);
    this.loadTilesets();
    this.loadSpritesheets();
    this.addInteractableAreas();
  }

  create() {
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
    const player = DYNAMIC_SPRITE_COLLECTION[KEY.texture.spritesheet.player];
    player.setVelocity(0);

    const pressedMovementKeys = Object.entries(this.cursors).filter(([keyName, key]) => {
      return keyName in MOVEMENT_MAP && key.isDown;
    });

    const newlyPressedKey = pressedMovementKeys[0]?.[0];

    if (pressedMovementKeys.length === 1) {
      this.lastPressedKey = newlyPressedKey;
    } else {
      const idx = pressedMovementKeys.findIndex((a) => a[0] === this.lastPressedKey);
      pressedMovementKeys.splice(idx, 1);
    }
    
    if (!pressedMovementKeys.length) return player.anims.stop();

    const movement: IMovement = MOVEMENT_MAP[newlyPressedKey];
    player.setVelocity(movement.velocity.x, movement.velocity.y);
    return player.anims.play(movement.animationKey, true);
  }
}
