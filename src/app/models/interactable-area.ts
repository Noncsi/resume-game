import { Scene } from 'phaser';
import { DynamicSprite, IInteractableAreaConfig } from './types';
import { KEY } from './keys';

export class InteractableArea extends Phaser.GameObjects.Image {
  constructor(
    scene: Scene,
    config: IInteractableAreaConfig,
    player: DynamicSprite,
    onEnter: () => void
  ) {
    super(
      scene,
      config.position.x,
      config.position.y,
      KEY.texture.spritesheet.exteriorAsSheet,
      954
    );

    scene.tweens.add({
      targets: this,
      y: '-= 10',
      duration: 1000,
      repeatDelay: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Bounce.easeIn',
    });

    scene.add.existing(this);
    scene.physics.add.existing(this, true);

    if (config.containsCVFragment) {
      const cvFragment = scene.add.image(
        config.position.x,
        config.position.y + 16,
        KEY.texture.spritesheet.exteriorAsSheet,
        953
      );

      const fx = cvFragment.postFX.addGlow(0xffffff, 0, 0, false, 0.1, 32);

      scene.tweens.add({
        targets: fx,
        outerStrength: 4,
        yoyo: true,
        loop: -1,
        ease: 'sine.inout',
      });
    }

    const body = this.body as Phaser.Physics.Arcade.Body;

    const customSize = config.customSize;
    customSize ? body.setSize(customSize.width, customSize.height) : body.setSize(64, 64);

    const customOffset = config.customOffset;
    if (customOffset) body.setOffset(customOffset.x, customOffset.y);

    scene.physics.add.overlap(player, this, () => onEnter());
  }
}
