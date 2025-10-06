import { SpriteSheetImageConfig, TilesetImageConfig } from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import { KEY } from '../models/keys';
import { AUDIO_CONFIGS } from '../config/audios';

export class AssetLoader {
  static loadAll(scene: Scene): void {
    this.loadTiledMapJSON(scene);
    this.loadTilesets(scene);
    this.loadSpritesheets(scene);
    this.loadAudios(scene);
  }

  private static loadTiledMapJSON(scene: Scene): void {
    scene.load.tilemapTiledJSON(KEY.map, `assets/${KEY.map}.json`);
  }

  private static loadTilesets(scene: Scene): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key, url }: TilesetImageConfig) => {
      scene.load.image(key, url);
    });
  }

  private static loadSpritesheets(scene: Scene): void {
    SPRITESHEET_IMAGE_CONFIGS.forEach(({ key, url, frameConfig }: SpriteSheetImageConfig) => {
      scene.load.spritesheet(key, url, frameConfig);
    });
  }

  private static loadAudios(scene: Scene): void {
    AUDIO_CONFIGS.forEach(({ key, url }) => {
      scene.load.audio(key, url);
    });
  }
}
