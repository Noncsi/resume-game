import { ASSET_KEY, ASSET_PATH } from "../models/constants";
import { SpriteSheetImageConfig, TilesetImageConfig } from "../models/types";

export const TILESET_IMAGE_CONFIGS: TilesetImageConfig[] = [
  { key: ASSET_KEY.tileset.exterior, url: `${ASSET_PATH.tilesets}/exterior.png` },
  { key: ASSET_KEY.tileset.houseDetails, url: `${ASSET_PATH.tilesets}/house-details.png` },
  { key: ASSET_KEY.tileset.forestTrees, url: `${ASSET_PATH.tilesets}/forest-trees.png` },
  {
    key: ASSET_KEY.tileset.groundGrassDetails,
    url: `${ASSET_PATH.tilesets}/ground-grass-details.png`,
  },
];

export const SPRITESHEET_IMAGE_CONFIGS: SpriteSheetImageConfig[] = [
  {
    key: ASSET_KEY.spritesheet.chimney,
    url: `${ASSET_PATH.spritesheets}/chimney.png`,
    frameConfig: { frameWidth: 48, frameHeight: 48 },
  },
  {
    key: ASSET_KEY.spritesheet.trees,
    url: `${ASSET_PATH.spritesheets}/trees.png`,
    frameConfig: { frameWidth: 64, frameHeight: 80 },
  },
  {
    key: ASSET_KEY.spritesheet.player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 19, frameHeight: 27 },
  },
  {
    key: ASSET_KEY.spritesheet.cat,
    url: `${ASSET_PATH.spritesheets}/cat.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: ASSET_KEY.spritesheet.birdFly,
    url: `${ASSET_PATH.spritesheets}/bird-fly.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: ASSET_KEY.spritesheet.birdFly,
    url: `${ASSET_PATH.spritesheets}/bird-fly.png`,
    frameConfig: { frameWidth: 144, frameHeight: 64 },
  },
  {
    key: ASSET_KEY.spritesheet.birdJump,
    url: `${ASSET_PATH.spritesheets}/bird-jump.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
];