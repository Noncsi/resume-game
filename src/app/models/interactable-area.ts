import { Scene } from 'phaser';
import { DynamicSprite, IInteractableAreaConfig } from './types';

export class InteractableArea extends Phaser.GameObjects.Sprite {
  constructor(
    scene: Scene,
    config: IInteractableAreaConfig,
    player: DynamicSprite,
    onEnter: () => void
  ) {
    super(scene, config.position.x, config.position.y, 'exteriorAsSheet', 954);
    
    scene.tweens.add({
        targets: this,
        y: '-= 10',
        duration: 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
    });
    
    scene.physics.add.overlap(player, this, () => onEnter());
    scene.add.existing(this);
  }
}
