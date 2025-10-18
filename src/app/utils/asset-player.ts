import { Sprite } from '../models/types';
import { AUDIOS, SPRITES } from '../models/collections';
import { AudioKey } from '../models/keys';

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
    AUDIOS.get(AudioKey.BackgroundMusic).play();
  }
}
