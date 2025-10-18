import { SpritesheetKey, TilesetKey } from '../models/keys';
import { SpriteSheetImageConfig, TilesetImageConfig } from '../models/types';

export const ASSET_PATH = {
  tilesets: 'assets/textures/tilesets',
  spritesheets: 'assets/textures/spritesheets',
} as const;

export const TILESET_IMAGE_CONFIGS: TilesetImageConfig[] = [
  { key: TilesetKey.exterior, url: `${ASSET_PATH.tilesets}/exterior.png` },
  { key: TilesetKey.interior, url: `${ASSET_PATH.tilesets}/interior.png` },
  { key: TilesetKey.houseDetails, url: `${ASSET_PATH.tilesets}/house-details.png` },
  { key: TilesetKey.pines, url: `${ASSET_PATH.tilesets}/pines.png` },
  { key: TilesetKey.plants, url: `${ASSET_PATH.tilesets}/plants.png` },
  { key: TilesetKey.supplies, url: `${ASSET_PATH.tilesets}/supplies.png` },
  {
    key: TilesetKey.groundGrassDetails,
    url: `${ASSET_PATH.tilesets}/ground-grass-details.png`,
  },
];

export const SPRITESHEET_IMAGE_CONFIGS: SpriteSheetImageConfig[] = [
  {
    key: SpritesheetKey.chimney,
    url: `${ASSET_PATH.spritesheets}/chimney.png`,
    frameConfig: { frameWidth: 48, frameHeight: 48 },
  },
  {
    key: SpritesheetKey.player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.cat,
    url: `${ASSET_PATH.spritesheets}/cat.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: SpritesheetKey.birdFly,
    url: `${ASSET_PATH.spritesheets}/bird-fly.png`,
    frameConfig: { frameWidth: 144, frameHeight: 64 },
  },
  {
    key: SpritesheetKey.birdJump,
    url: `${ASSET_PATH.spritesheets}/bird-jump.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: SpritesheetKey.exteriorAsSheet,
    url: `${ASSET_PATH.tilesets}/exterior.png`,
    frameConfig: { frameWidth: 16, frameHeight: 16 },
  },
  {
    key: SpritesheetKey.cattle,
    url: `${ASSET_PATH.spritesheets}/grey-cattle.png`,
    frameConfig: { frameWidth: 64, frameHeight: 64 },
  },
];
