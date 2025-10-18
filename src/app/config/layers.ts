import { KEY, LayerKey, SpritesheetKey, TilesetKey } from '../models/keys';
import { ILayerConfig } from '../models/types';

export const LAYER_CONFIGS: ILayerConfig[] = [
  {
    layerID: LayerKey.Path,
    tilesetKeys: [TilesetKey.GroundGrassDetails],
  },
  {
    layerID: LayerKey.Road,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.GrassTerrain,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.Grass,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.FlowerField,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.GardenDirt,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.GardenPlants,
    tilesetKeys: [TilesetKey.Exterior, TilesetKey.Plants],
  },
  {
    layerID: LayerKey.Tiles,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.House,
    tilesetKeys: [TilesetKey.HouseDetails, TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.StoneCircleBelowPlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.StoneCircleAbovePlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.StoneCircleStumpBelowPlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.StoneCircleStumpAbovePlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.Mushrooms,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.WellBelowPlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.WellAbovePlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.Fence,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.MailboxBelowPlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.MailboxAbovePlayer,
    tilesetKeys: [TilesetKey.Exterior],
  },

  {
    layerID: LayerKey.DecorationNonCollidingBelowPlayer,
    tilesetKeys: [TilesetKey.Interior, TilesetKey.Exterior, TilesetKey.Supplies, TilesetKey.Plants],
  },

  {
    layerID: LayerKey.DecorationNonCollidingAbovePlayer,
    tilesetKeys: [TilesetKey.Interior, TilesetKey.Exterior, TilesetKey.Plants],
  },

  {
    layerID: LayerKey.DecorationColliding,
    tilesetKeys: [
      TilesetKey.Interior,
      TilesetKey.Exterior,
      TilesetKey.Pines,
      TilesetKey.Supplies,
      TilesetKey.Plants,
    ],
  },
  {
    layerID: LayerKey.Roof,
    tilesetKeys: [TilesetKey.HouseDetails, TilesetKey.Interior, TilesetKey.Interior],
  },
  {
    layerID: LayerKey.MapEdgeGrass,
    tilesetKeys: [TilesetKey.Exterior],
  },
  {
    layerID: LayerKey.Forest,
    tilesetKeys: [TilesetKey.Pines, TilesetKey.Plants],
  },
  {
    layerID: LayerKey.Animals,
    tilesetKeys: [SpritesheetKey.Cat, SpritesheetKey.BirdJump, SpritesheetKey.BirdFly],
  },
];
