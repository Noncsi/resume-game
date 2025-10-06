import { Scene } from 'phaser';
import { IInteractableAreaConfig } from '../models/types';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';

export class CollisionHandler {
  static setupInteractions(
    scene: Scene,
    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody,
    collidingAreas: Phaser.Physics.Arcade.StaticGroup,
    onAreaEnter: (area: IInteractableAreaConfig) => void
  ): void {
    INTERACTABLE_AREA_CONFIGS.forEach((area: IInteractableAreaConfig) => {
      const areaSprite = collidingAreas
        .create(area.position.x, area.position.y, 'exteriorAsSheet', 954)
        .setBodySize(64, 64)
        .setData({ key: area.key });

      // Add floating animation
      scene.tweens.add({
        targets: areaSprite,
        y: '-= 10',
        duration: 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
      });

      // Setup overlap with callback
      scene.physics.add.overlap(
        player, 
        areaSprite, 
        () => onAreaEnter(area)
      );
    });
  }
}