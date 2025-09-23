import { ASSET_PATH } from "../models/constants";
import { KEY } from "../models/keys";
import { SpriteSheetImageConfig, TilesetImageConfig } from "../models/types";

export const TILESET_IMAGE_CONFIGS: TilesetImageConfig[] = [
  { key: KEY.texture.tileset.exterior, url: `${ASSET_PATH.tilesets}/exterior.png` },
  { key: KEY.texture.tileset.houseDetails, url: `${ASSET_PATH.tilesets}/house-details.png` },
  { key: KEY.texture.tileset.forestTrees, url: `${ASSET_PATH.tilesets}/forest-trees.png` },
  {
    key: KEY.texture.tileset.groundGrassDetails,
    url: `${ASSET_PATH.tilesets}/ground-grass-details.png`,
  },
];

export const SPRITESHEET_IMAGE_CONFIGS: SpriteSheetImageConfig[] = [
  {
    key: KEY.texture.spritesheet.chimney,
    url: `${ASSET_PATH.spritesheets}/chimney.png`,
    frameConfig: { frameWidth: 48, frameHeight: 48 },
  },
  {
    key: KEY.texture.spritesheet.trees,
    url: `${ASSET_PATH.spritesheets}/trees.png`,
    frameConfig: { frameWidth: 64, frameHeight: 80 },
  },
  {
    key: KEY.texture.spritesheet.player,
    url: `${ASSET_PATH.spritesheets}/player.png`,
    frameConfig: { frameWidth: 19, frameHeight: 27 },
  },
  {
    key: KEY.texture.spritesheet.cat,
    url: `${ASSET_PATH.spritesheets}/cat.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
  {
    key: KEY.texture.spritesheet.birdFly,
    url: `${ASSET_PATH.spritesheets}/bird-fly.png`,
    frameConfig: { frameWidth: 144, frameHeight: 64 },
  },
  {
    key: KEY.texture.spritesheet.birdJump,
    url: `${ASSET_PATH.spritesheets}/bird-jump.png`,
    frameConfig: { frameWidth: 32, frameHeight: 32 },
  },
];