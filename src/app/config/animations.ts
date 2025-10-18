import { SpritesheetKey } from '../models/keys';
import { IAnimationConfig, Direction } from '../models/types';

export const FRAME_RATE = 8;
export const REPEAT = -1;

export const ANIMATION_CONFIGS: IAnimationConfig[] = [
  {
    key: Direction.down,
    spritesheetKey: SpritesheetKey.player,
    frameConfig: { start: 6, end: 11 },
  },
  {
    key: Direction.left,
    spritesheetKey: SpritesheetKey.player,
    frameConfig: { start: 24, end: 29 },
  },
  {
    key: Direction.right,
    spritesheetKey: SpritesheetKey.player,
    frameConfig: { start: 18, end: 23 },
  },
  {
    key: Direction.up,
    spritesheetKey: SpritesheetKey.player,
    frameConfig: { start: 12, end: 17 },
  },
  {
    key: SpritesheetKey.chimney,
    spritesheetKey: SpritesheetKey.chimney,
    frameConfig: { start: 0, end: 5 },
  },
  {
    key: SpritesheetKey.cat,
    spritesheetKey: SpritesheetKey.cat,
    frameConfig: { frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51] },
    repeatDelay: 5000,
  },
  {
    key: SpritesheetKey.birdFly,
    spritesheetKey: SpritesheetKey.birdFly,
    frameConfig: {
      frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45],
    },
    repeatDelay: 10000,
  },
  {
    key: SpritesheetKey.birdJump,
    spritesheetKey: SpritesheetKey.birdJump,
    frameConfig: { start: 0, end: 19 },
    repeatDelay: 500,
  },
  {
    key: SpritesheetKey.cattle,
    spritesheetKey: SpritesheetKey.cattle,
    frameConfig: { frames: [42, 43, 44, 45] },
    customFrameRate: 4,
  },
];
