import { AnimationConfig, Direction } from '../models/types';
import { ASSET_KEY } from '../models/constants';

export const FRAME_RATE = 10;
export const REPEAT = -1;

export const ANIMATION_CONFIGS: AnimationConfig[] = [
  {
    key: Direction.down,
    spritesheetKey: ASSET_KEY.spritesheet.player,
    frameConfig: { start: 0, end: 5 },
  },
  {
    key: Direction.left,
    spritesheetKey: ASSET_KEY.spritesheet.player,
    frameConfig: { start: 6, end: 11 },
  },
  {
    key: Direction.right,
    spritesheetKey: ASSET_KEY.spritesheet.player,
    frameConfig: { start: 12, end: 17 },
  },
  {
    key: Direction.up,
    spritesheetKey: ASSET_KEY.spritesheet.player,
    frameConfig: { start: 18, end: 24 },
  },
  {
    key: ASSET_KEY.spritesheet.chimney,
    spritesheetKey: ASSET_KEY.spritesheet.chimney,
    frameConfig: { start: 0, end: 5 },
    frameRate: 8,
  },
  {
    key: ASSET_KEY.spritesheet.cat,
    spritesheetKey: ASSET_KEY.spritesheet.cat,
    frameConfig: { frames: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51] },
    frameRate: 8,
  },
  {
    key: ASSET_KEY.spritesheet.birdFly,
    spritesheetKey: ASSET_KEY.spritesheet.birdFly,
    frameConfig: {
      frames: [
        0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 51, 51, 51, 51, 51, 51,
        51, 51,
      ],
    },
    frameRate: 8,
  },
  {
    key: ASSET_KEY.spritesheet.birdJump,
    spritesheetKey: ASSET_KEY.spritesheet.birdJump,
    frameConfig: { start: 0, end: 20 },
    frameRate: 8,
  },
  {
    key: ASSET_KEY.spritesheet.trees,
    spritesheetKey: ASSET_KEY.spritesheet.trees,
    frameConfig: { frames: [3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111, 3, 3, 3, 3, 3] },
    frameRate: 8,
  },
];
