export type GameConfig = Phaser.Types.Core.GameConfig
export type CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
export type Sprite = Phaser.GameObjects.Sprite;
export type DynamicSprite = Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
export type TilesetImageConfig = Phaser.Types.Loader.FileTypes.ImageFileConfig;
export type SpriteSheetImageConfig = Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig;
export type Tileset = Phaser.Tilemaps.Tileset;
export type TilemapLayer = Phaser.Tilemaps.TilemapLayer;
export type Collider = Phaser.Types.Physics.Arcade.ArcadeColliderType;
export type CollideCallback = Phaser.Types.Physics.Arcade.ArcadePhysicsCallback;
export type StaticGroup = Phaser.Physics.Arcade.StaticGroup;
export type Animation = Phaser.Animations.Animation;

export interface SpriteConfig {
  x: number;
  y: number;
  texture: string;
}

export interface DynamicSpriteConfig extends SpriteConfig {
  bodySize: { width: number; height: number };
  bodyOffset: { x: number; y: number };
  origin: { x: number; y: number };
}

export interface LayerConfig {
  layerID: string;
  tilesetKeys: string[];
  x?: number;
  y?: number;
}

export enum Direction {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
}

export enum CollisionType {
  collider,
  overlap,
}

export interface CollisionConfig {
  collisionType: CollisionType;
  spriteKey: string;
  layerKey: string;
  callback?: CollideCallback;
}

export interface AnimationConfig {
  key: string;
  spritesheetKey: string;
  frameConfig: { start: number; end: number } | { frames: number[] };
  frameRate?: number;
  repeat?: number;
}
 
export interface Movement {
  animationKey: string;
  velocity: { x: number; y: number };
}
