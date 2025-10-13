import { KEY } from '../models/keys';
import { IAnimationConfig, Direction } from '../models/types';

export const FRAME_RATE = 8;
export const REPEAT = -1;

export const ANIMATION_CONFIGS: IAnimationConfig[] = [
  {
    key: Direction.down,
    spritesheetKey: KEY.texture.spritesheet.player,
    frameConfig: { start: 6, end: 11 },
  },
  {
    key: Direction.left,
    spritesheetKey: KEY.texture.spritesheet.player,
    frameConfig: { start: 24, end: 29 },
  },
  {
    key: Direction.right,
    spritesheetKey: KEY.texture.spritesheet.player,
    frameConfig: { start: 18, end: 23 },
  },
  {
    key: Direction.up,
    spritesheetKey: KEY.texture.spritesheet.player,
    frameConfig: { start: 12, end: 17 },
  },
  {
    key: KEY.texture.spritesheet.chimney,
    spritesheetKey: KEY.texture.spritesheet.chimney,
    frameConfig: { start: 0, end: 5 },
  },
  {
    key: KEY.texture.spritesheet.cat,
    spritesheetKey: KEY.texture.spritesheet.cat,
    frameConfig: { frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51] },
    repeatDelay: 5000,
  },
  {
    key: KEY.texture.spritesheet.birdFly,
    spritesheetKey: KEY.texture.spritesheet.birdFly,
    frameConfig: {
      frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45],
    },
    repeatDelay: 10000,
  },
  {
    key: KEY.texture.spritesheet.birdJump,
    spritesheetKey: KEY.texture.spritesheet.birdJump,
    frameConfig: { start: 0, end: 20 },
    repeatDelay: 500,
  },
  {
    key: KEY.texture.spritesheet.trees,
    spritesheetKey: KEY.texture.spritesheet.trees,
    frameConfig: { frames: [3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 3, 3, 3, 3, 3] },
    repeatDelay: 10000,
  },
  {
    key: KEY.texture.spritesheet.cattle,
    spritesheetKey: KEY.texture.spritesheet.cattle,
    frameConfig: { frames: [42, 43, 44, 45] },
    customFrameRate: 4,
  },
];
