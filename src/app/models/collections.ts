import {
  Sprite,
  TilemapLayer,
  DynamicSprite,
  Direction,
  IMovement,
  Audio,
} from './types';

export const SPRITES = new Map<string, Sprite>();
export const DYNAMIC_SPRITES = new Map<string, DynamicSprite>();
export const LAYERS = new Map<string, TilemapLayer>();
export const AUDIOS = new Map<string, Audio>();
export const MOVEMENT_MAP = new Map<Direction, IMovement>()

