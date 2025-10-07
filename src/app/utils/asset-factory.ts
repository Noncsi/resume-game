import {
  Direction,
  IAnimationConfig,
  IAudioConfig,
  IDynamicSpriteConfig,
  ILayerConfig,
  ISpriteConfig,
  ITextConfig,
  TilesetImageConfig,
} from '../models/types';
import { TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import {
  ANIMATIONS,
  AUDIOS,
  CONTROLS,
  DYNAMIC_SPRITES,
  LAYERS,
  MOVEMENT_MAP,
  SPRITES,
  TEXTS,
  TILESETS,
} from '../models/collections';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { LAYER_CONFIGS } from '../config/layers';
import { KEY } from '../models/keys';
import { AUDIO_CONFIGS } from '../config/audios';
import { TEXT_CONFIGS } from '../config/texts';

export class AssetFactory {
  static createAll(scene: Scene, map: Phaser.Tilemaps.Tilemap): void {
    this.createTilesets(map);
    this.createLayers(map);
    this.createSprites(scene);
    this.createCollisions(scene);
    this.createAnimations(scene);
    this.createControls(scene);
    this.createMovements();
    this.createAudios(scene);
    this.createTexts(scene);
  }

  private static createTilesets(map: Phaser.Tilemaps.Tilemap): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key }: TilesetImageConfig) => {
      TILESETS[key] = map.addTilesetImage(key);
    });
  }

  private static createLayers(map: Phaser.Tilemaps.Tilemap): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, x = 0, y = 0 }: ILayerConfig) => {
      const tilesets = tilesetKeys.map((key) => TILESETS[key]);
      const layer = map.createLayer(layerID, tilesets, x, y);
      layer.setCollisionByExclusion([-1]);
      LAYERS.set(layerID, layer);
    });
  }

  private static createSprites(scene: Scene): void {
    SPRITE_CONFIGS.forEach(({ spriteName, position, texture, frame }: ISpriteConfig) => {
      const sprite = scene.add.sprite(position.x, position.y, texture, frame);
      SPRITES.set(spriteName, sprite);
    });
    DYNAMIC_SPRITE_CONFIGS.forEach(
      ({ spriteName, position, texture, bodySize, bodyOffset, origin }: IDynamicSpriteConfig) => {
        const dynamicSprite = scene.physics.add
          .sprite(position.x, position.y, texture)
          .setBodySize(bodySize.width, bodySize.height)
          .setOffset(bodyOffset.x, bodyOffset.y)
          .setOrigin(origin.x, origin.y);
        DYNAMIC_SPRITES.set(spriteName, dynamicSprite);
      }
    );
  }

  private static createCollisions(scene: Scene): void {
    const player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);

    const collidingLayerConfigs = LAYER_CONFIGS.filter(
      (config: ILayerConfig) => config.isColliding
    ).map((config: ILayerConfig) => config.layerID);

    LAYERS.forEach((value: Phaser.Tilemaps.TilemapLayer, key: string) => {
      if (collidingLayerConfigs.includes(key)) {
        scene.physics.add.collider(player, value);
      }
    });

    // CollisionHandler.setupInteractions(scene, player, collidingAreas, onAreaEnter);
  }

  private static createAnimations(scene: Scene): void {
    ANIMATION_CONFIGS.forEach(({ key, spritesheetKey, frameConfig }: IAnimationConfig) => {
      const animation = scene.anims.create({
        key,
        frames: scene.anims.generateFrameNumbers(spritesheetKey, frameConfig),
        frameRate: FRAME_RATE,
        repeat: REPEAT,
      });
      if (!animation) return;
      ANIMATIONS[key] = animation;
    });
  }

  private static createControls(scene: Scene): void {
    const controls = scene.input.keyboard.createCursorKeys();
    const keyE = scene.input.keyboard.addKey(KEY.control.E);
    CONTROLS.set('move', controls);
    CONTROLS.set(KEY.control.E, keyE);
  }

  private static createMovements(): void {
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

  private static createAudios(scene: Scene): void {
    AUDIO_CONFIGS.forEach(({ key, IsLooping }: IAudioConfig) => {
      const audio = scene.sound.add(key, { loop: IsLooping });
      AUDIOS.set(key, audio);
    });
  }

  private static createTexts(scene: Scene): void {
    TEXT_CONFIGS.forEach(({ key, position, text, style }: ITextConfig) => {
      const textObject = scene.add
        .text(position.x, position.y, text, style)
        .setDepth(100)
        .setVisible(false);
      TEXTS.set(key, textObject);
    });
  }
}
