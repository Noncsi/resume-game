import { SpritesheetKey, TilesetKey } from '../models/keys';
import { SpriteSheetImageConfig, TilesetImageConfig } from '../models/types';

export const ASSET_PATH = {
  tilesets: 'assets/textures/tilesets',
  spritesheets: 'assets/textures/spritesheets',
} as const;

export const TILESET_IMAGE_CONFIGS: TilesetImageConfig[] = [
  { key: TilesetKey.Exterior, url: `${ASSET_PATH.tilesets}/exterior.png` },
  { key: TilesetKey.Interior, url: `${ASSET_PATH.tilesets}/interior.png` },
  { key: TilesetKey.HouseDetails, url: `${ASSET_PATH.tilesets}/house-details.png` },
  { key: TilesetKey.Pines, url: `${ASSET_PATH.tilesets}/pines.png` },
  { key: TilesetKey.Plants, url: `${ASSET_PATH.tilesets}/plants.png` },
  { key: TilesetKey.Supplies, url: `${ASSET_PATH.tilesets}/supplies.png` },
  {
    key: TilesetKey.GroundGrassDetails,
    url: `${ASSET_PATH.tilesets}/ground-grass-details.png`,
  },
];

export const SPRITESHEET_IMAGE_CONFIGS: SpriteSheetImageConfig[] = [
  {
    key: SpritesheetKey.Chimney,
    url: `${ASSET_PATH.spritesheets}/chimney.png`,
    frameConfig: { frameWidth: 48, frameHeight: 48 },
  },
  {
    key: SpritesheetKey.Player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.Player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.Cat,
    url: `${ASSET_PATH.spritesheets}/cat.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: SpritesheetKey.BirdFly,
    url: `${ASSET_PATH.spritesheets}/bird-fly.png`,
    frameConfig: { frameWidth: 144, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.BirdJump,
    url: `${ASSET_PATH.spritesheets}/bird-jump.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: SpritesheetKey.ExteriorAsSheet,
    url: `${ASSET_PATH.tilesets}/exterior.png`,
    frameConfig: { frameWidth: 16, frameHeight: 16 },
  },
  {
    key: SpritesheetKey.Cattle,
    url: `${ASSET_PATH.spritesheets}/grey-cattle.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
];
