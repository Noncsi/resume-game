import { KEY } from '../models/keys';
import { ILayerConfig } from '../models/types';

export const LAYER_CONFIGS: ILayerConfig[] = [
  {
    layerID: KEY.texture.layer.path,
    tilesetKeys: [KEY.texture.tileset.groundGrassDetails],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.road,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.grassTerrain,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.stoneCircle,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.mushroomDecorations,
    tilesetKeys: [KEY.texture.tileset.groundGrassDetails],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.mushroomField,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.flowerField,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.gardenDirt,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.gardenPlants,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.well,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.wellDecorations,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.fence,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.tiles,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.house,
    tilesetKeys: [KEY.texture.tileset.houseDetails, KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.houseDecorationsLower,
    tilesetKeys: [KEY.texture.tileset.interior, KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.houseDecorationsUpper,
    tilesetKeys: [
      KEY.texture.tileset.interior,
      KEY.texture.tileset.exterior,
      KEY.texture.spritesheet.trees,
      KEY.texture.tileset.pines,
    ],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.natureDecorations,
    tilesetKeys: [KEY.texture.tileset.exterior, KEY.texture.tileset.pines],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.roof,
    tilesetKeys: [KEY.texture.tileset.houseDetails],
    isColliding: false,
  },
  {
    layerID: KEY.texture.layer.stumps,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.forest,
    tilesetKeys: [KEY.texture.tileset.pines],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.animals,
    tilesetKeys: [
      KEY.texture.spritesheet.cat,
      KEY.texture.spritesheet.birdJump,
      KEY.texture.spritesheet.birdFly,
    ],
    isColliding: true,
  },
  {
    layerID: KEY.texture.layer.mailbox,
    tilesetKeys: [KEY.texture.tileset.exterior],
    isColliding: true,
  },
];
