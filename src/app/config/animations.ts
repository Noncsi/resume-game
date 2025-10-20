import { SpritesheetKey } from '../models/keys';
import { IAnimationConfig, Direction } from '../models/types';

export const FRAME_RATE = 8;
export const REPEAT = -1;

export const ANIMATION_CONFIGS: IAnimationConfig[] = [
  {
    key: Direction.down,
    spritesheetKey: SpritesheetKey.Player,
    frameConfig: { start: 6, end: 11 },
  },
  {
    key: Direction.left,
    spritesheetKey: SpritesheetKey.Player,
    frameConfig: { start: 24, end: 29 },
  },
  {
    key: Direction.right,
    spritesheetKey: SpritesheetKey.Player,
    frameConfig: { start: 18, end: 23 },
  },
  {
    key: Direction.up,
    spritesheetKey: SpritesheetKey.Player,
    frameConfig: { start: 12, end: 17 },
  },
  {
    key: SpritesheetKey.Chimney,
    spritesheetKey: SpritesheetKey.Chimney,
    frameConfig: { start: 0, end: 5 },
  },
  {
    key: SpritesheetKey.Cat,
    spritesheetKey: SpritesheetKey.Cat,
    frameConfig: { frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51] },
    repeatDelay: 3000,
  },
  {
    key: SpritesheetKey.BirdFly,
    spritesheetKey: SpritesheetKey.BirdFly,
    frameConfig: {
      frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 0],
    },
    repeatDelay: 10000,
  },
  {
    key: SpritesheetKey.BirdJump,
    spritesheetKey: SpritesheetKey.BirdJump,
    frameConfig: { start: 0, end: 19 },
    repeatDelay: 500,
  },
  {
    key: SpritesheetKey.Cattle,
    spritesheetKey: SpritesheetKey.Cattle,
    frameConfig: { frames: [42, 43, 44, 45] },
    customFrameRate: 4,
  },
  {
    key: SpritesheetKey.Chick,
    spritesheetKey: SpritesheetKey.Chick,
    frameConfig: { frames: [36, 37, 38, 39] },
    customFrameRate: 4,
  },
  {
    key: SpritesheetKey.Rooster,
    spritesheetKey: SpritesheetKey.Rooster,
    frameConfig: { frames: [42, 43, 44, 45, 46, 47] },
  },
];
