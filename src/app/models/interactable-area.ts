import { Scene } from 'phaser';
import { IInteractableAreaConfig } from './types';
import { SpritesheetKey } from './keys';

export class InteractableArea extends Phaser.GameObjects.Image {
  config: IInteractableAreaConfig;
  constructor(
    scene: Scene,
    config: IInteractableAreaConfig,
  ) {
    super(
      scene,
      config.position.x,
      config.position.y,
      SpritesheetKey.ExteriorAsSheet,
      955
    );

    this.config = config;

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
        config.position.y + 19,
        SpritesheetKey.ExteriorAsSheet,
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
      this.setFrame(954);
    }
    this.setScale(1.3);

    const body = this.body as Phaser.Physics.Arcade.Body;

    const customSize = config.customSize;
    customSize ? body.setSize(customSize.width, customSize.height) : body.setSize(64, 64);

    const customOffset = config.customOffset;
    if (customOffset) body.setOffset(customOffset.x, customOffset.y);
  }
}
