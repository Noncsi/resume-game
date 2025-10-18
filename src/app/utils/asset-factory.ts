import {
  Direction,
  IAnimationConfig,
  IAudioConfig,
  IDynamicSpriteConfig,
  ILayerConfig,
  ISpriteConfig,
  TilesetImageConfig,
} from '../models/types';
import { TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import { AUDIOS, DYNAMIC_SPRITES, MOVEMENT_MAP, SPRITES } from '../models/collections';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { LAYER_CONFIGS } from '../config/layers';
import { SpritesheetKey } from '../models/keys';
import { AUDIO_CONFIGS } from '../config/audios';

export class AssetFactory {
  static createAll(scene: Scene, map: Phaser.Tilemaps.Tilemap): void {
    this.createTilesets(map);
    this.createLayers(map);
    this.createSprites(scene);
    this.createCollisions(scene, map);
    this.createAnimations(scene);
    this.createMovements();
    this.createAudios(scene);
  }

  private static createTilesets(map: Phaser.Tilemaps.Tilemap): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key }: TilesetImageConfig) => {
      map.addTilesetImage(key);
    });
  }

  private static createLayers(map: Phaser.Tilemaps.Tilemap): void {
    LAYER_CONFIGS.forEach(({ layerID, tilesetKeys, position = { x: 0, y: 0 } }: ILayerConfig) => {
      const tilesets = tilesetKeys.map((key) => map.getTileset(key));
      map.createLayer(layerID, tilesets, position.x, position.y);
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

  private static createCollisions(scene: Scene, map: Phaser.Tilemaps.Tilemap): void {
    const player = DYNAMIC_SPRITES.get(SpritesheetKey.Player);

    map.layers.forEach((layerData: Phaser.Tilemaps.LayerData) => {
      const layer = layerData.tilemapLayer as Phaser.Tilemaps.TilemapLayer;
      if (!layer) return;
      const customProps = layer.layer.properties.reduce((acc: any, p: any) => {
        acc[p.name] = p.value;
        return acc;
      }, {});

      layer.setCollisionByProperty({ collides: true });
      scene.physics.add.collider(player, layer);

      customProps.isBelowPlayer ? layer.setDepth(0) : layer.setDepth(1000);

      // value.forEachTile((tile: Phaser.Tilemaps.Tile) => {
      //   tile.setSize(10, 10, 16, 16);
      // });

      const debugGraphics = scene.add.graphics().setAlpha(0.5);
      layer.renderDebug(debugGraphics, {
        tileColor: null,
      });
    });
  }

  private static createAnimations(scene: Scene): void {
    ANIMATION_CONFIGS.forEach(
      ({ key, spritesheetKey, frameConfig, repeatDelay, customFrameRate }: IAnimationConfig) => {
        scene.anims.create({
          key,
          frames: scene.anims.generateFrameNumbers(spritesheetKey, frameConfig),
          frameRate: customFrameRate ?? FRAME_RATE,
          repeat: REPEAT,
          repeatDelay: repeatDelay ?? 0,
        });
      }
    );
  }

  private static createMovements(): void {
    const VELOCITY = 75;
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
    AUDIO_CONFIGS.forEach(({ key, IsLooping, volume, rate }: IAudioConfig) => {
      const audio = scene.sound.add(key, { loop: IsLooping, volume: volume ?? 1 , rate: rate ?? 1});
      AUDIOS.set(key, audio);
    });
  }
}
