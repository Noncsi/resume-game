import { KEY } from '../models/keys';
import { ICollidersConfig } from '../models/types';

export const COLLISION_CONFIGS: ICollidersConfig[] = [
  {
    object2Key: KEY.texture.layer.house,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.forest,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.fence,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.stoneCircle,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.well,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.mushroomField,
    object1Key: KEY.texture.spritesheet.player,
  },
  {
    object2Key: KEY.texture.layer.flowerField,
    object1Key: KEY.texture.spritesheet.player,
  },
];
