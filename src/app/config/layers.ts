import { KEY } from '../models/keys';
import { ILayerConfig } from '../models/types';

export const LAYER_CONFIGS: ILayerConfig[] = [
  {
    layerID: KEY.texture.layer.path,
    tilesetKeys: [KEY.texture.tileset.groundGrassDetails],
  },
  {
    layerID: KEY.texture.layer.road,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.grassTerrain,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.grass,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.flowerField,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.gardenDirt,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.gardenPlants,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.tiles,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.house,
    tilesetKeys: [KEY.texture.tileset.houseDetails, KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleBelowPlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleAbovePlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleStumpBelowPlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleStumpAbovePlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.mushrooms,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.wellBelowPlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.wellAbovePlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.fence,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.mailboxBelowPlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.mailboxAbovePlayer,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },

  {
    layerID: KEY.texture.layer.decorationNonCollidingBelowPlayer,
    tilesetKeys: [KEY.texture.tileset.interior, KEY.texture.tileset.exterior],
  },

  {
    layerID: KEY.texture.layer.decorationNonCollidingAbovePlayer,
    tilesetKeys: [KEY.texture.tileset.interior, KEY.texture.tileset.exterior],
  },

  {
    layerID: KEY.texture.layer.decorationColliding,
    tilesetKeys: [
      KEY.texture.tileset.interior,
      KEY.texture.tileset.exterior,
      KEY.texture.tileset.pines,
    ],
  },
  {
    layerID: KEY.texture.layer.roof,
    tilesetKeys: [KEY.texture.tileset.houseDetails, KEY.texture.tileset.interior],
  },
  {
    layerID: KEY.texture.layer.mapEdgeGrass,
    tilesetKeys: [KEY.texture.tileset.exterior],
  },
  {
    layerID: KEY.texture.layer.forest,
    tilesetKeys: [KEY.texture.tileset.pines],
  },
  {
    layerID: KEY.texture.layer.animals,
    tilesetKeys: [
      KEY.texture.spritesheet.cat,
      KEY.texture.spritesheet.birdJump,
      KEY.texture.spritesheet.birdFly,
    ],
  },
];
