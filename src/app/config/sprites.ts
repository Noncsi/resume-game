import { KEY } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  { x: 328, y: 104, texture: KEY.texture.spritesheet.chimney },
  { x: 352, y: 253, texture: KEY.texture.spritesheet.cat },
  { x: 540, y: 130, texture: KEY.texture.spritesheet.trees },
  { x: 580, y: 120, texture: KEY.texture.spritesheet.birdFly },
  { x: 910, y: 320, texture: KEY.texture.spritesheet.birdJump },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    x: 385,
    y: 250,
    texture: KEY.texture.spritesheet.player,
    bodySize: { width: 16, height: 10 },
    bodyOffset: { x: 24, y: 35 },
    origin: { x: 0.5, y: 0.5 },
  },
];
