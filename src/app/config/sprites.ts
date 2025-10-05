import { KEY } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  {
    spriteName: KEY.texture.spritesheet.chimney,
    position: { x: 328, y: 104 },
    texture: KEY.texture.spritesheet.chimney,
  },
  {
    spriteName: KEY.texture.spritesheet.cat,
    position: { x: 352, y: 253 },
    texture: KEY.texture.spritesheet.cat,
  },
  {
    spriteName: KEY.texture.spritesheet.trees,
    position: { x: 540, y: 130 },
    texture: KEY.texture.spritesheet.trees,
  },
  {
    spriteName: KEY.texture.spritesheet.birdFly,
    position: { x: 580, y: 120 },
    texture: KEY.texture.spritesheet.birdFly,
  },
  {
    spriteName: KEY.texture.spritesheet.birdJump,
    position: { x: 910, y: 320 },
    texture: KEY.texture.spritesheet.birdJump,
  },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    spriteName: KEY.texture.spritesheet.player,
    position: {
      x: 455,
      y: 260,
    },
    texture: KEY.texture.spritesheet.player,
    bodySize: { width: 16, height: 10 },
    bodyOffset: { x: 24, y: 35 },
    origin: { x: 0.5, y: 0.5 },
  },
];
