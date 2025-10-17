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

export interface ICoordinate {
  x: number;
  y: number;
}

export interface ISpriteConfig {
  spriteName: string;
  position: ICoordinate;
  texture: string;
  frame?: number;
}

export interface IDynamicSpriteConfig extends ISpriteConfig {
  bodySize: { width: number; height: number };
  bodyOffset: ICoordinate;
  origin: ICoordinate;
}

export interface ILayerConfig {
  layerID: string;
  tilesetKeys: string[];
  position?: ICoordinate
}

export enum Direction {
  left = 'left',
  right = 'right',
  up = 'up',
  down = 'down',
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
  velocity: ICoordinate;
}

export interface IInteractableAreaConfig {
  key: string;
  position: ICoordinate;
  title: string;
  subTitle: string;
  content: string;
  containsCVFragment: boolean;
  category?: string;
  footer?: string;
  customSize?: { width: number; height: number };
  customOffset?: ICoordinate;
  links?: { label: string; href: string }[];
}

export interface ICVFragment {
  areaKey: string;
  isCollected: boolean;
}

export interface ITextConfig {
  key: string;
  text: string | string[];
  position?: ICoordinate;
  style?: TextStyle;
}

export interface IButtonConfig {
  key: string;
  position: ICoordinate;
  text: string;
  text2?: string;
}

export interface IAudioConfig {
  key: string;
  url: string;
  IsLooping: boolean;
  volume?: number;
  rate?: number;
}
