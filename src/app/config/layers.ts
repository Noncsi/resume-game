import { ASSET_KEY } from "../models/constants";
import { LayerConfig } from "../models/types";

export const LAYER_CONFIGS: LayerConfig[] = [
  { layerID: ASSET_KEY.layer.grass, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.road, tilesetKeys: [ASSET_KEY.tileset.exterior, ASSET_KEY.tileset.groundGrassDetails] },
  { layerID: ASSET_KEY.layer.forest, tilesetKeys: [ASSET_KEY.tileset.forestTrees], y: -66 },
  { layerID: ASSET_KEY.layer.stones, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.house, tilesetKeys: [ASSET_KEY.tileset.houseDetails, ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.fence, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.decorations, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.flowers, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.well, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.mushrooms, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.dirt, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.gardenPlants, tilesetKeys: [ASSET_KEY.tileset.exterior] },
  { layerID: ASSET_KEY.layer.roof, tilesetKeys: [ASSET_KEY.tileset.houseDetails] },
];