import { KEY } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  { x: 872, y: 216, texture: KEY.texture.spritesheet.chimney },
  { x: 1087, y: 275, texture: KEY.texture.spritesheet.cat },
  { x: 1030, y: 475, texture: KEY.texture.spritesheet.trees },
  { x: 1080, y: 455, texture: KEY.texture.spritesheet.birdFly },
  { x: 480, y: 175, texture: KEY.texture.spritesheet.birdJump },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    x: 945,
    y: 350,
    texture: KEY.texture.spritesheet.player,
    bodySize: { width: 10, height: 7 },
    bodyOffset: { x: 5, y: 19 },
    origin: { x: 0.5, y: 0 },
  },
];
