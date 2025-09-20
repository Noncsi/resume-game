import { ASSET_KEY } from '../models/constants';
import { DynamicSpriteConfig, SpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: SpriteConfig[] = [
  { x: 872, y: 216, texture: ASSET_KEY.spritesheet.chimney },
  { x: 1087, y: 275, texture: ASSET_KEY.spritesheet.cat },
  { x: 1030, y: 475, texture: ASSET_KEY.spritesheet.trees },
  { x: 1080, y: 455, texture: ASSET_KEY.spritesheet.birdFly },
  { x: 480, y: 175, texture: ASSET_KEY.spritesheet.birdJump },
];

export const DYNAMIC_SPRITE_CONFIGS: DynamicSpriteConfig[] = [
  {
    x: 600,
    y: 280,
    texture: ASSET_KEY.spritesheet.player,
    bodySize: { width: 10, height: 7 },
    bodyOffset: { x: 5, y: 19 },
    origin: { x: 0.5, y: 0 },
  },
];
