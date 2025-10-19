import { SpritesheetKey } from '../models/keys';
import { IDynamicSpriteConfig, ISpriteConfig } from '../models/types';

export const SPRITE_CONFIGS: ISpriteConfig[] = [
  {
    spriteName: SpritesheetKey.Chimney,
    position: { x: 136, y: 104 },
    texture: SpritesheetKey.Chimney,
  },
  {
    spriteName: SpritesheetKey.Cat,
    position: { x: 160, y: 269 },
    texture: SpritesheetKey.Cat,
  },
  {
    spriteName: SpritesheetKey.BirdFly,
    position: { x: 374, y: 400 },
    texture: SpritesheetKey.BirdFly,
  },
  {
    spriteName: SpritesheetKey.BirdJump,
    position: { x: 284, y: 654 },
    texture: SpritesheetKey.BirdJump,
  },
  {
    spriteName: SpritesheetKey.Cattle,
    position: { x: 460, y: 510 },
    texture: SpritesheetKey.Cattle,
  },
    {
    spriteName: SpritesheetKey.Chick,
    position: { x: 350, y: 260 },
    texture: SpritesheetKey.Chick,
  },
    {
    spriteName: SpritesheetKey.Rooster,
    position: { x: 330, y: 250 },
    texture: SpritesheetKey.Rooster,
  },
];

export const DYNAMIC_SPRITE_CONFIGS: IDynamicSpriteConfig[] = [
  {
    spriteName: SpritesheetKey.Player,
    position: {
      x: 150,
      y: 225,
    },
    texture: SpritesheetKey.Player,
    bodySize: { width: 12, height: 8 },
    bodyOffset: { x: 24, y: 33 },
    origin: { x: 0.5, y: 0.5 },
  },
];
