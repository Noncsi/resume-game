import { Injectable } from '@angular/core';
import {
  IAnimationConfig,
  ICollidersConfig,
  IDynamicSpriteConfig,
  ILayerConfig,
  ISpriteConfig,
  SpriteSheetImageConfig,
  TilesetImageConfig,
} from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import { KEY } from '../models/keys';
import { ANIMATIONS, DYNAMIC_SPRITES, LAYERS, SPRITES, TILESETS } from '../models/collections';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { COLLISION_CONFIGS } from '../config/collisions';
import { LAYER_CONFIGS } from '../config/layers';

@Injectable({ providedIn: 'root' })
export class AssetFactoryService {
  scene: Scene;
  map: Phaser.Tilemaps.Tilemap;

  public addAssets(scene: Scene, map: Phaser.Tilemaps.Tilemap): void {
    this.scene = scene;
    this.map = map;
    this.addTilesets();
    this.addLayers();
    this.addSprites();
    this.addCollisions();
    this.addAnimations();
  }

  private addTilesets(): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key }: TilesetImageConfig) => {
      TILESETS[key] = this.map.addTilesetImage(key);
    });
  }

  private addSprites(): void {
    SPRITE_CONFIGS.forEach(({ position, texture, frame }: ISpriteConfig) => {
      console.log({ position, texture, frame });
      const sprite = this.scene.add.sprite(position.x, position.y, texture, frame);
      SPRITES.set(texture, sprite);
    });
    DYNAMIC_SPRITE_CONFIGS.forEach(
      ({ position, texture, bodySize, bodyOffset, origin }: IDynamicSpriteConfig) => {
        DYNAMIC_SPRITES[texture] = this.scene.physics.add
          .sprite(position.x, position.y, texture)
          .setBodySize(bodySize.width, bodySize.height)
          .setOffset(bodyOffset.x, bodyOffset.y)
          .setOrigin(origin.x, origin.y);
      }
    );
  }

  private addLayers(): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, x = 0, y = 0 }: ILayerConfig) => {
      const tilesets = tilesetKeys.map((key) => TILESETS[key]);
      const layer = this.map.createLayer(layerID, tilesets, x, y);
      layer.setCollisionByExclusion([-1]);
      LAYERS[layerID] = layer;
    });
  }

  private addCollisions(): void {
    COLLISION_CONFIGS.forEach(({ object1Key, object2Key }: ICollidersConfig) => {
      const obj1 = DYNAMIC_SPRITES[object1Key];
      const obj2 = LAYERS[object2Key];
      this.scene.physics.add.collider(obj1, obj2);
    });
  }

  private addAnimations(): void {
    ANIMATION_CONFIGS.forEach(({ key, spritesheetKey, frameConfig }: IAnimationConfig) => {
      const animation = this.scene.anims.create({
        key,
        frames: this.scene.anims.generateFrameNumbers(spritesheetKey, frameConfig),
        frameRate: FRAME_RATE,
        repeat: REPEAT,
      });
      if (!animation) return;
      ANIMATIONS[key] = animation;
    });
  }
}
