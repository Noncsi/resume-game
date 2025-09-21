import { KEY } from "../models/constants";
import { ILayerConfig } from "../models/types";

export const LAYER_CONFIGS: ILayerConfig[] = [
  { layerID: KEY.layer.grass, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.road, tilesetKeys: [KEY.tileset.exterior, KEY.tileset.groundGrassDetails] },
  { layerID: KEY.layer.forest, tilesetKeys: [KEY.tileset.forestTrees], y: -66 },
  { layerID: KEY.layer.stones, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.house, tilesetKeys: [KEY.tileset.houseDetails, KEY.tileset.exterior] },
  { layerID: KEY.layer.fence, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.decorations, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.flowers, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.well, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.mushrooms, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.dirt, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.gardenPlants, tilesetKeys: [KEY.tileset.exterior] },
  { layerID: KEY.layer.roof, tilesetKeys: [KEY.tileset.houseDetails] },
];