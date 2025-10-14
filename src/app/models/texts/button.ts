import { Scene } from 'phaser';
import { IButtonConfig } from '../types';
import { TextBubble } from './text-bubble';

export class Button extends TextBubble {
  constructor(scene: Scene, config: IButtonConfig, onClick: () => void) {
    super(scene, config.position.x, config.position.y, config.text);

    this.setInteractive({
      cursor: "url('../../../assets/cursors/pixel-pointer.cur'), pointer",
    }).setVisible(true);

    this.on('pointerdown', onClick);
    if (config.text2) {
      this.on('pointerdown', () => {
        this.text = this.text === config.text ? config.text2 : config.text;
      });
    }
  }
}
