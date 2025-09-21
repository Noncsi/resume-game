import { KEY, INTERACTABLE_AREAS } from '../models/constants';
import { ICollisionConfig, CollisionType, EventKey } from '../models/types';
import { EventBus } from '../services/event-bus';

export const COLLISION_CONFIGS: ICollisionConfig[] = [
  {
    layerKey: KEY.layer.house,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
    callback: () => EventBus.emit('interactWithHouse', this),
  },
  {
    layerKey: KEY.layer.forest,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
  },
  {
    layerKey: KEY.layer.fence,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
  },
  {
    layerKey: KEY.layer.stones,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
    callback: () => EventBus.emit('interactWithHouse', this),
  },
  {
    layerKey: KEY.layer.well,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
    callback: () =>
      EventBus.emit(
        INTERACTABLE_AREAS.get(KEY.area.well).eventKey,
        INTERACTABLE_AREAS.get(KEY.area.well)
      ),
  },
  {
    layerKey: KEY.layer.mushrooms,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
    callback: () => EventBus.emit('interactWithHouse', this),
  },
  {
    layerKey: KEY.layer.flowers,
    collisionType: CollisionType.collider,
    spriteKey: KEY.spritesheet.player,
    callback: () => EventBus.emit('interactWithHouse', this),
  },
];
