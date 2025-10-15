import { Scene } from 'phaser';
import { TextStyle } from '../types';

export class TextBubble extends Phaser.GameObjects.Text {
  constructor(scene: Scene, x: number, y: number, text: string, style?: TextStyle) {
    const defaultStyle = {
      fontSize: '16px',
      color: '#ffffffff',
      backgroundColor: '#252525e0',
      padding: { x: 8, y: 4 },
    };
    super(scene, x, y, text, style ?? defaultStyle);

    this.setDepth(1000);
    this.scene.add.existing(this);
  }
}
