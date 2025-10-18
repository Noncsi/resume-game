import { KEY, SpritesheetKey, TilesetKey } from '../models/keys';
import { ILayerConfig } from '../models/types';

export const LAYER_CONFIGS: ILayerConfig[] = [
  {
    layerID: KEY.texture.layer.path,
    tilesetKeys: [TilesetKey.groundGrassDetails],
  },
  {
    layerID: KEY.texture.layer.road,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.grassTerrain,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.grass,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.flowerField,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.gardenDirt,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.gardenPlants,
    tilesetKeys: [TilesetKey.exterior, TilesetKey.plants],
  },
  {
    layerID: KEY.texture.layer.tiles,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.house,
    tilesetKeys: [TilesetKey.houseDetails, TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleBelowPlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleAbovePlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleStumpBelowPlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.stoneCircleStumpAbovePlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.mushrooms,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.wellBelowPlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.wellAbovePlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.fence,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.mailboxBelowPlayer,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.mailboxAbovePlayer,
    tilesetKeys: [TilesetKey.exterior],
  },

  {
    layerID: KEY.texture.layer.decorationNonCollidingBelowPlayer,
    tilesetKeys: [
      TilesetKey.interior,
      TilesetKey.exterior,
      TilesetKey.supplies,
      TilesetKey.plants,
    ],
  },

  {
    layerID: KEY.texture.layer.decorationNonCollidingAbovePlayer,
    tilesetKeys: [
      TilesetKey.interior,
      TilesetKey.exterior,
      TilesetKey.plants,
    ],
  },

  {
    layerID: KEY.texture.layer.decorationColliding,
    tilesetKeys: [
      TilesetKey.interior,
      TilesetKey.exterior,
      TilesetKey.pines,
      TilesetKey.supplies,
      TilesetKey.plants,
    ],
  },
  {
    layerID: KEY.texture.layer.roof,
    tilesetKeys: [
      TilesetKey.houseDetails,
      TilesetKey.interior,
      TilesetKey.interior,
    ],
  },
  {
    layerID: KEY.texture.layer.mapEdgeGrass,
    tilesetKeys: [TilesetKey.exterior],
  },
  {
    layerID: KEY.texture.layer.forest,
    tilesetKeys: [TilesetKey.pines, TilesetKey.plants],
  },
  {
    layerID: KEY.texture.layer.animals,
    tilesetKeys: [
      SpritesheetKey.cat,
      SpritesheetKey.birdJump,
      SpritesheetKey.birdFly,
    ],
  },
];
