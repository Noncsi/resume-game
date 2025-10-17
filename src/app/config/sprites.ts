import { KEY } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  {
    spriteName: KEY.texture.spritesheet.chimney,
    position: { x: 136, y: 104 },
    texture: KEY.texture.spritesheet.chimney,
  },
  {
    spriteName: KEY.texture.spritesheet.cat,
    position: { x: 160, y: 269 },
    texture: KEY.texture.spritesheet.cat,
  },
  {
    spriteName: KEY.texture.spritesheet.birdFly,
    position: { x: 374, y: 400 },
    texture: KEY.texture.spritesheet.birdFly,
  },
  {
    spriteName: KEY.texture.spritesheet.birdJump,
    position: { x: 284, y: 654 },
    texture: KEY.texture.spritesheet.birdJump,
  },
  {
    spriteName: KEY.texture.spritesheet.cattle,
    position: { x: 460, y: 510 },
    texture: KEY.texture.spritesheet.cattle,
  },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    spriteName: KEY.texture.spritesheet.player,
    position: {
      x: 150,
      y: 225,
    },
    texture: KEY.texture.spritesheet.player,
    bodySize: { width: 12, height: 8 },
    bodyOffset: { x: 24, y: 33 },
    origin: { x: 0.5, y: 0.5 },
  },
];
