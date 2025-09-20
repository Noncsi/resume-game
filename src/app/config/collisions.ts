import { ASSET_KEY, LAYER_COLLECTION, SPRITE_COLLECTION } from '../models/constants';
import { CollisionConfig, CollisionType } from '../models/types';

export const collisionCallback = {
    enterHouse: () => {console.log('Entering house...');}
}

export const COLLISION_CONFIGS: CollisionConfig[] = [
  {
    collisionType: CollisionType.collider,
    object1Key: ASSET_KEY.spritesheet.player,
    object2Key: ASSET_KEY.layer.house,
    callback: collisionCallback.enterHouse,
  },
  {
    collisionType: CollisionType.collider,
    object1Key: ASSET_KEY.spritesheet.player,
    object2Key: ASSET_KEY.layer.forest,
  },
  {
    collisionType: CollisionType.collider,
    object1Key: ASSET_KEY.spritesheet.player,
    object2Key: ASSET_KEY.layer.fence,
  },
  {
    collisionType: CollisionType.collider,
    object1Key: ASSET_KEY.spritesheet.player,
    object2Key: ASSET_KEY.layer.stones,
  },
];
