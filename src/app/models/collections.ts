import {
  Sprite,
  Tileset,
  TilemapLayer,
  StaticGroup,
  Animation,
  DynamicSprite,
  IInteractableAreaConfig,
  ITextConfig,
} from './types';

export const TILESET_COLLECTION: Record<string, Tileset> = {};
export const SPRITE_COLLECTION: Record<string, Sprite> = {};
export const DYNAMIC_SPRITE_COLLECTION: Record<string, DynamicSprite> = {};
export const LAYER_COLLECTION: Record<string, TilemapLayer> = {};
export const COLLISION_GROUP_COLLECTION: Record<string, StaticGroup> = {};
export const ANIMATION_COLLECTION: Record<string, Animation> = {};
// export const AUDIO_COLLECTION: Record<string, ITextConfig> = {};

export const TEXT_COLLECTION = new Map<string, ITextConfig>();
export const INTERACTABLE_AREAS = new Map<string, IInteractableAreaConfig>();
