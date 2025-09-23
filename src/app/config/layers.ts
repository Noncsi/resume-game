import { KEY } from "../models/keys";
import { ILayerConfig } from "../models/types";

export const LAYER_CONFIGS: ILayerConfig[] = [
  { layerID: KEY.texture.layer.grass, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.road, tilesetKeys: [KEY.texture.tileset.exterior, KEY.texture.tileset.groundGrassDetails] },
  { layerID: KEY.texture.layer.forest, tilesetKeys: [KEY.texture.tileset.forestTrees], y: -66 },
  { layerID: KEY.texture.layer.stones, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.house, tilesetKeys: [KEY.texture.tileset.houseDetails, KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.fence, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.decorations, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.flowers, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.well, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.mushrooms, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.dirt, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.gardenPlants, tilesetKeys: [KEY.texture.tileset.exterior] },
  { layerID: KEY.texture.layer.roof, tilesetKeys: [KEY.texture.tileset.houseDetails] },
];