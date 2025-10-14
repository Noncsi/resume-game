import { Scene } from 'phaser';
import { TextBubble } from './text-bubble';

export class Help extends TextBubble {
  constructor(scene: Scene) {
    super(
      scene,
      16,
      16,
      `Press arrow keys [← → ↑ ↓] to move. 
Press [E] to interact.`
    );
  }
}
