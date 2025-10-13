export type GameConfig = Phaser.Types.Core.GameConfig;
export type CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
export type Key = Phaser.Input.Keyboard.Key;
export type Sprite = Phaser.GameObjects.Sprite;
export type Audio =
  | Phaser.Sound.NoAudioSound
  | Phaser.Sound.HTML5AudioSound
  | Phaser.Sound.WebAudioSound
  | Phaser.Sound.BaseSound;
export type DynamicSprite = Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
export type TilesetImageConfig = Phaser.Types.Loader.FileTypes.ImageFileConfig;
export type SpriteSheetImageConfig = Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig;
export type Tileset = Phaser.Tilemaps.Tileset;
export type TilemapLayer = Phaser.Tilemaps.TilemapLayer;
export type Collider = Phaser.Types.Physics.Arcade.ArcadeColliderType;
export type CollideCallback = Phaser.Types.Physics.Arcade.ArcadePhysicsCallback;
export type StaticGroup = Phaser.Physics.Arcade.StaticGroup;
export type Animation = Phaser.Animations.Animation;
export type Text = Phaser.GameObjects.Text;
export type TextStyle = Phaser.Types.GameObjects.Text.TextStyle;

export interface ISpriteConfig {
  spriteName: string;
  position: { x: number; y: number };
  texture: string;
  frame?: number;
}

export interface IDynamicSpriteConfig extends ISpriteConfig {
  bodySize: { width: number; height: number };
  bodyOffset: { x: number; y: number };
  origin: { x: number; y: number };
}

export interface ILayerConfig {
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

export interface ICollisionConfig {
  object1Key: string;
  object2Key: string;
}

export interface IAnimationConfig {
  key: string;
  spritesheetKey: string;
  frameConfig: { start: number; end: number } | { frames: number[] };
  repeatDelay?: number;
  customFrameRate?: number;
}

export interface IMovement {
  animationKey: string;
  velocity: { x: number; y: number };
}

export interface IInteractableAreaConfig {
  key: string;
  position: { x: number; y: number };
  title: string;
  subTitle: string;
  content: string;
  containsCVFragment: boolean;
  footer?: string;
  customSize?: { width: number; height: number };
  customOffset?: { x: number; y: number };
  links?: { label: string; href: string }[];
}

export interface ICVFragment {
  areaKey: string;
  isCollected: boolean;
}

export interface ITextConfig {
  key: string;
  text: string | string[];
  position?: { x: number; y: number };
  style?: TextStyle;
}

export interface IButtonConfig {
  key: string;
  position: { x: number; y: number };
  text: string;
  text2?: string;
}

export interface IAudioConfig {
  key: string;
  url: string;
  IsLooping: boolean;
}
