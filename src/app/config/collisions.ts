import { INTERACTABLE_AREAS } from '../models/constants';
import { KEY } from '../models/keys';
import { ICollisionConfig, CollisionType, IInteractableAreaConfig } from '../models/types';
import { EventBus } from '../services/event-bus';

const createEmitter = (area: IInteractableAreaConfig) => {
  return EventBus.emit(area.eventKey, area);
};

export const COLLISION_CONFIGS: ICollisionConfig[] = [
  {
    layerKey: KEY.texture.layer.house,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
    callback: () => createEmitter(INTERACTABLE_AREAS.get(KEY.area.house)),
  },
  {
    layerKey: KEY.texture.layer.forest,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
  },
  {
    layerKey: KEY.texture.layer.fence,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
  },
  {
    layerKey: KEY.texture.layer.stones,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
    callback: () => createEmitter(INTERACTABLE_AREAS.get(KEY.area.stones)),
  },
  {
    layerKey: KEY.texture.layer.well,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
    callback: () => createEmitter(INTERACTABLE_AREAS.get(KEY.area.well)),
  },
  {
    layerKey: KEY.texture.layer.mushrooms,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
    callback: () => createEmitter(INTERACTABLE_AREAS.get(KEY.area.mushroom)),
  },
  {
    layerKey: KEY.texture.layer.flowers,
    collisionType: CollisionType.collider,
    spriteKey: KEY.texture.spritesheet.player,
    callback: () => createEmitter(INTERACTABLE_AREAS.get(KEY.area.flowers)),
  },
];
