import { Scene } from 'phaser';
import { IButtonConfig, TextStyle } from './types';

export class Button extends Phaser.GameObjects.Text {
  constructor(scene: Scene, config: IButtonConfig, onClick: () => void) {
    const defaultStyle: TextStyle = {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 8, y: 4 },
    };

    super(scene, config.position.x, config.position.y, config.text, {
      ...defaultStyle,
      ...config.style,
    });

    scene.add.existing(this);

    this.setInteractive().setDepth(config.depth ?? 1000);

    if (config.fixed) {
      this.setScrollFactor(0);
    }

    this.on('pointerdown', onClick);
    this.on('pointerover', () => this.setStyle({ backgroundColor: '#333333' }));
    this.on('pointerout', () => this.setStyle({ backgroundColor: '#000000' }));
  }
}
