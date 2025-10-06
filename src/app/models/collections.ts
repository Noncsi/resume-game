import {
  Sprite,
  Tileset,
  TilemapLayer,
  StaticGroup,
  Animation,
  DynamicSprite,
  Text,
  CursorKeys,
  Key,
  Direction,
  IMovement,
  Audio,
} from './types';

export const TILESETS = new Map<string, Tileset>();
export const SPRITES = new Map<string, Sprite>();
export const DYNAMIC_SPRITES = new Map<string, DynamicSprite>();
export const LAYERS = new Map<string, TilemapLayer>();
export const COLLISION_GROUPS = new Map<string, StaticGroup>();
export const ANIMATIONS = new Map<string, Animation>();
export const AUDIOS = new Map<string, Audio>();
export const TEXTS = new Map<string, Text>();
export const CONTROLS = new Map<string, CursorKeys | Key>();
export const MOVEMENT_MAP = new Map<Direction, IMovement>()

