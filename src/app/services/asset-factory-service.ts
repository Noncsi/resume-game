import { Injectable } from '@angular/core';
import {
  Direction,
  IAnimationConfig,
  IDynamicSpriteConfig,
  IInteractableAreaConfig,
  ILayerConfig,
  ISpriteConfig,
  StaticGroup,
  TilesetImageConfig,
} from '../models/types';
import { TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import {
  ANIMATIONS,
  CONTROLS,
  DYNAMIC_SPRITES,
  LAYERS,
  MOVEMENT_MAP,
  SPRITES,
  TILESETS,
} from '../models/collections';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { LAYER_CONFIGS } from '../config/layers';
import { KEY } from '../models/keys';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { GameService } from './game-service';

@Injectable({ providedIn: 'root' })
export class AssetFactoryService {
  scene: Scene;
  map: Phaser.Tilemaps.Tilemap;
  collidingAreas: StaticGroup;
  gameService: GameService;

  public addAssets(
    scene: Scene,
    map: Phaser.Tilemaps.Tilemap,
    collidingAreas: StaticGroup,
    gameService: GameService
  ): void {
    this.scene = scene;
    this.map = map;
    this.collidingAreas = collidingAreas;
    this.gameService = gameService;
    this.addTilesets();
    this.addLayers();
    this.addSprites();
    this.addCollisions();
    this.addAnimations();
    this.addControls();
    this.addMovements();
  }

  private addTilesets(): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key }: TilesetImageConfig) => {
      TILESETS[key] = this.map.addTilesetImage(key);
    });
  }

  private addSprites(): void {
    SPRITE_CONFIGS.forEach(({ spriteName, position, texture, frame }: ISpriteConfig) => {
      const sprite = this.scene.add.sprite(position.x, position.y, texture, frame);
      SPRITES.set(spriteName, sprite);
    });
    DYNAMIC_SPRITE_CONFIGS.forEach(
      ({ spriteName, position, texture, bodySize, bodyOffset, origin }: IDynamicSpriteConfig) => {
        const dynamicSprite = this.scene.physics.add
          .sprite(position.x, position.y, texture)
          .setBodySize(bodySize.width, bodySize.height)
          .setOffset(bodyOffset.x, bodyOffset.y)
          .setOrigin(origin.x, origin.y);
        DYNAMIC_SPRITES.set(spriteName, dynamicSprite);
      }
    );
  }

  private addLayers(): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, x = 0, y = 0 }: ILayerConfig) => {
      const tilesets = tilesetKeys.map((key) => TILESETS[key]);
      const layer = this.map.createLayer(layerID, tilesets, x, y);
      layer.setCollisionByExclusion([-1]);
      LAYERS.set(layerID, layer);
    });
  }

  private addCollisions(): void {
    const player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);
    const collidingLayerConfigs = LAYER_CONFIGS.filter(
      (config: ILayerConfig) => config.isColliding
    ).map((config: ILayerConfig) => config.layerID);

    LAYERS.forEach((value: Phaser.Tilemaps.TilemapLayer, key: string) => {
      if (collidingLayerConfigs.includes(key)) {
        this.scene.physics.add.collider(player, value);
      }
    });
    INTERACTABLE_AREA_CONFIGS.forEach((area: IInteractableAreaConfig) => {
      const areaAsCollidingSprite = this.collidingAreas
        .create(area.position.x, area.position.y, 'exteriorAsSheet', 954)
        .setBodySize(64, 64)
        .setData({ key: area.key });
      this.scene.tweens.add({
        targets: areaAsCollidingSprite,
        y: '-= 10',
        duration: 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });
      this.scene.physics.add.overlap(player, areaAsCollidingSprite, () =>
        this.gameService.enterInteractableArea(area)
      );
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

  private addControls(): void {
    const controls = this.scene.input.keyboard.createCursorKeys();
    const keyE = this.scene.input.keyboard.addKey(KEY.control.E);
    CONTROLS.set('move', controls);
    CONTROLS.set(KEY.control.E, keyE);
  }

  private addMovements(): void {
    const VELOCITY = 100;
    MOVEMENT_MAP.set(Direction.left, {
      velocity: { x: -VELOCITY, y: 0 },
      animationKey: Direction.left,
    });
    MOVEMENT_MAP.set(Direction.right, {
      velocity: { x: VELOCITY, y: 0 },
      animationKey: Direction.right,
    });
    MOVEMENT_MAP.set(Direction.up, {
      velocity: { x: 0, y: -VELOCITY },
      animationKey: Direction.up,
    });
    MOVEMENT_MAP.set(Direction.down, {
      velocity: { x: 0, y: VELOCITY },
      animationKey: Direction.down,
    });
  }
}
