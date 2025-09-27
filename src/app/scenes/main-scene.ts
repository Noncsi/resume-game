import Phaser from 'phaser';
import { Injectable } from '@angular/core';
import {
  ANIMATION_COLLECTION,
  DYNAMIC_SPRITE_COLLECTION,
  INTERACTABLE_AREAS,
  LAYER_COLLECTION,
  SPRITE_COLLECTION,
  TEXT_COLLECTION,
  TILESET_COLLECTION,
} from '../models/collections';
import {
  CursorKeys,
  TilesetImageConfig,
  Sprite,
  SpriteSheetImageConfig,
  ISpriteConfig,
  ILayerConfig,
  IDynamicSpriteConfig,
  CollisionType,
  ICollidersConfig,
  IAnimationConfig,
  IMovement,
  IInteractableAreaConfig,
  ITextConfig,
} from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { LAYER_CONFIGS } from '../config/layers';
import { COLLISION_CONFIGS } from '../config/collisions';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { KEY } from '../models/keys';
import { MOVEMENT_MAP } from '../config/movement';
import { TEXT_CONFIGS } from '../config/texts';
import { GameService } from '../services/game-service';

@Injectable()
export class MainScene extends Phaser.Scene {
  gameService: GameService;
  private cursors: CursorKeys;
  private map: Phaser.Tilemaps.Tilemap;
  private lastPressedKey = '';

  constructor(gameService: GameService) {
    super('main');
    this.gameService = gameService;
    this.gameService.testService();
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
    COLLISION_CONFIGS.forEach(({ object1Key, object2Key }: ICollidersConfig) => {
      const obj1 = DYNAMIC_SPRITE_COLLECTION[object1Key];
      const obj2 = LAYER_COLLECTION[object2Key];
      this.physics.add.collider(obj1, obj2);
    });
  }

  private addAnimations(): void {
    ANIMATION_CONFIGS.forEach(({ key, spritesheetKey, frameConfig }: IAnimationConfig) => {
      const animation = this.anims.create({
        key,
        frames: this.anims.generateFrameNumbers(spritesheetKey, frameConfig),
        frameRate: FRAME_RATE,
        repeat: REPEAT,
      });
      if (!animation) return;
      ANIMATION_COLLECTION[key] = animation;
    });
  }

  private addInteractableAreas(): void {
    INTERACTABLE_AREA_CONFIGS.forEach(
      ({ key, eventKey, title, content, links }: IInteractableAreaConfig) => {
        INTERACTABLE_AREAS.set(key, { key, eventKey, title, content, links });
      }
    );
  }

  private addTexts(): void {
    TEXT_CONFIGS.forEach(
      ({ x, y, text }: ITextConfig, idx) => {
        TEXT_COLLECTION.set(idx.toString(), {x, y, text});
      }
    );
  }

  preload() {
    this.load.tilemapTiledJSON(KEY.map, `assets/${KEY.map}.json`);
    this.loadTilesets();
    this.loadSpritesheets();
    this.addInteractableAreas();
    this.addTexts();
    this.load.audio(KEY.audio.backgroundMusic, 'assets/audios/background-music.mp3');
  }

  create() {
    this.physics.world.createDebugGraphic();

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
    this.sound.play(KEY.audio.backgroundMusic);
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
