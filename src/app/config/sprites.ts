import { KEY } from '../models/constants';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  { x: 872, y: 216, texture: KEY.spritesheet.chimney },
  { x: 1087, y: 275, texture: KEY.spritesheet.cat },
  { x: 1030, y: 475, texture: KEY.spritesheet.trees },
  { x: 1080, y: 455, texture: KEY.spritesheet.birdFly },
  { x: 480, y: 175, texture: KEY.spritesheet.birdJump },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    x: 945,
    y: 350,
    texture: KEY.spritesheet.player,
    bodySize: { width: 10, height: 7 },
    bodyOffset: { x: 5, y: 19 },
    origin: { x: 0.5, y: 0 },
  },
];
