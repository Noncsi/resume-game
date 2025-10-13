import { Scene } from 'phaser';
import { TextBubble } from './text-bubble';

export class Help extends TextBubble {
  constructor(scene: Scene) {
    super(
      scene,
      scene.scale.width - 32,
      scene.scale.height - 32,
      `Press arrow keys [← → ↑ ↓] to move. 
Press [E] to interact.`
    );

    this.setOrigin(1, 1);
  }
}
