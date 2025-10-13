import {
  Sprite,
  DynamicSprite,
  Direction,
  IMovement,
  Audio,
  Text,
} from './types';

export const SPRITES = new Map<string, Sprite>();
export const DYNAMIC_SPRITES = new Map<string, DynamicSprite>();
export const AUDIOS = new Map<string, Audio>();
export const MOVEMENT_MAP = new Map<Direction, IMovement>()
export const INTRO_SPEECH = new Map<number, Text>();

