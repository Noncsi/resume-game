import {
  Sprite,
  Tileset,
  TilemapLayer,
  StaticGroup,
  Animation,
  IMovement,
  Direction,
  DynamicSprite,
  IInteractableAreaConfig,
} from './types';

export const ASSET_PATH = {
  tilesets: 'assets/textures/tilesets',
  spritesheets: 'assets/textures/spritesheets',
};

export const KEY = {
  map: 'map',
  tileset: {
    exterior: 'exterior',
    houseDetails: 'houseDetails',
    forestTrees: 'forestTrees',
    groundGrassDetails: 'groundGrassDetails',
  },
  spritesheet: {
    player: 'player',
    chimney: 'chimney',
    trees: 'trees',
    cat: 'cat',
    birdFly: 'birdFly',
    birdJump: 'birdJump',
  },
  layer: {
    grass: 'grass',
    road: 'road',
    forest: 'forest',
    stones: 'stones',
    house: 'house',
    fence: 'fence',
    roof: 'roof',
    decorations: 'decorations',
    flowers: 'flowers',
    well: 'well',
    mushrooms: 'mushrooms',
    dirt: 'dirt',
    gardenPlants: 'gardenPlants',
  },
  area: {
    well: 'well',
    house: 'house'
  },
};

export const TILESET_COLLECTION: Record<string, Tileset> = {};
export const SPRITE_COLLECTION: Record<string, Sprite> = {};
export const DYNAMIC_SPRITE_COLLECTION: Record<string, DynamicSprite> = {};
export const LAYER_COLLECTION: Record<string, TilemapLayer> = {};
export const COLLISION_GROUP_COLLECTION: Record<string, StaticGroup> = {};
export const ANIMATION_COLLECTION: Record<string, Animation> = {};

export const INTERACTABLE_AREAS = new Map<string, IInteractableAreaConfig>();

export const VELOCITY = 110;

export const MOVEMENT_MAP: Record<Direction, IMovement> = {
  [Direction.left]: { velocity: { x: -VELOCITY, y: 0 }, animationKey: Direction.left },
  [Direction.right]: { velocity: { x: VELOCITY, y: 0 }, animationKey: Direction.right },
  [Direction.up]: { velocity: { x: 0, y: -VELOCITY }, animationKey: Direction.up },
  [Direction.down]: { velocity: { x: 0, y: VELOCITY }, animationKey: Direction.down },
};
