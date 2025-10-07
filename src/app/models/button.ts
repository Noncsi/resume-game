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

    this.setInteractive().setDepth(config.depth ?? 1000);

    if (config.fixed) {
      this.setScrollFactor(0);
    }

    this.on('pointerdown', onClick);
    if (config.text2) {
      this.on('pointerdown', () => {
        this.text = this.text === config.text ? config.text2 : config.text;
      });
    }

    scene.add.existing(this);
  }
}
