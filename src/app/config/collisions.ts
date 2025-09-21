import { ASSET_KEY } from '../models/constants';
import { CollisionConfig, CollisionType } from '../models/types';

export const interactWith = {
  house: () => {
    console.log('Entering house...');
  },
  well: () => {
    console.log('open well...');
  },
  stones: () => {
    console.log('open stones...');
  },
  mushrooms: () => {
    console.log('open mushrooms...');
  },
  flowers: () => {
    console.log('open flowers...');
  },
};

export const COLLISION_CONFIGS: CollisionConfig[] = [
  {
    layerKey: ASSET_KEY.layer.house,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
    callback: interactWith.house,
  },
  {
    layerKey: ASSET_KEY.layer.forest,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
  },
  {
    layerKey: ASSET_KEY.layer.fence,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
  },
  {
    layerKey: ASSET_KEY.layer.stones,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
    callback: interactWith.stones,
  },
  {
    layerKey: ASSET_KEY.layer.well,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
    callback: interactWith.well,
  },
  {
    layerKey: ASSET_KEY.layer.mushrooms,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
    callback: interactWith.mushrooms,
  },
    {
    layerKey: ASSET_KEY.layer.flowers,
    collisionType: CollisionType.collider,
    spriteKey: ASSET_KEY.spritesheet.player,
    callback: interactWith.flowers,
  },
];
