import { Scene } from 'phaser';

export class TextBubble extends Phaser.GameObjects.Text {
  constructor(scene: Scene, x: number, y: number, text: string) {
    super(scene, x, y, text, {
      fontSize: '16px',
      color: '#ffffffff',
      backgroundColor: '#252525e0',
      padding: { x: 8, y: 4 },
    });

    this.setDepth(1000);
    this.scene.add.existing(this);
  }
}
