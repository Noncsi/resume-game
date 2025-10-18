import { SpritesheetKey } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  {
    spriteName: SpritesheetKey.chimney,
    position: { x: 136, y: 104 },
    texture: SpritesheetKey.chimney,
  },
  {
    spriteName: SpritesheetKey.cat,
    position: { x: 160, y: 269 },
    texture: SpritesheetKey.cat,
  },
  {
    spriteName: SpritesheetKey.birdFly,
    position: { x: 374, y: 400 },
    texture: SpritesheetKey.birdFly,
  },
  {
    spriteName: SpritesheetKey.birdJump,
    position: { x: 284, y: 654 },
    texture: SpritesheetKey.birdJump,
  },
  {
    spriteName: SpritesheetKey.cattle,
    position: { x: 460, y: 510 },
    texture: SpritesheetKey.cattle,
  },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    spriteName: SpritesheetKey.player,
    position: {
      x: 150,
      y: 225,
    },
    texture: SpritesheetKey.player,
    bodySize: { width: 12, height: 8 },
    bodyOffset: { x: 24, y: 33 },
    origin: { x: 0.5, y: 0.5 },
  },
];
