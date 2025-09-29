import { Injectable } from '@angular/core';
import { SpriteSheetImageConfig, TilesetImageConfig } from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { Scene } from 'phaser';
import { KEY } from '../models/keys';

@Injectable({ providedIn: 'root' })
export class AssetLoadService {
  scene: Scene;

  public loadAssets(scene: Scene): void {
    this.scene = scene;
    this.loadTiledMapJSON();
    this.loadTilesets();
    this.loadSpritesheets();
    this.loadAudios();
  }

  private loadTiledMapJSON(): void {
    this.scene.load.tilemapTiledJSON(KEY.map, `assets/${KEY.map}.json`);
  }

  private loadTilesets(): void {
    TILESET_IMAGE_CONFIGS.forEach(({ key, url }: TilesetImageConfig) => {
      this.scene.load.image(key, url);
    });
  }

  private loadSpritesheets(): void {
    SPRITESHEET_IMAGE_CONFIGS.forEach(({ key, url, frameConfig }: SpriteSheetImageConfig) => {
      this.scene.load.spritesheet(key, url, frameConfig);
    });
  }

  private loadAudios(): void {
    this.scene.load.audio(KEY.audio.backgroundMusic, 'assets/audios/background-music.mp3');
  }
}
