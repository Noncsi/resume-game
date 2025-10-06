import { Sprite } from '../models/types';
import { KEY } from '../models/keys';
import { AUDIOS, SPRITES } from '../models/collections';

export class AssetPlayer {
  static playAll(): void {
    this.playSprites();
    this.playAudios();
  }

  private static playSprites(): void {
    SPRITES.forEach((sprite: Sprite, spriteName: string) => {
      sprite.play(spriteName);
    });
  }

  private static playAudios(): void {
    AUDIOS.get(KEY.audio.backgroundMusic).play();
  }
}
