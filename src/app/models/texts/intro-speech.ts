import { Scene } from 'phaser';
import { GameService } from '../../services/game-service';
import { TextBubble } from './text-bubble';

export class IntroSpeech extends TextBubble {
  stage = 0;
  texts = [
    `Hey there, adventurer!`,
    `This isn't your usual resume.`,
    `Explore the meadow, find the hidden fragments, 
and piece together who I am - my skills, my work, and my story.`,
    `Each discovery reveals part of the resume on the left.`,
    `Take your time... the campfire's warm, and the forest is friendly. Enjoy the journey!`,
  ];
  continueText = `Press [E] to continue...`;
  constructor(scene: Scene) {
    super(scene, 46, 140, '');

    this.setText(`${this.texts[this.stage]} \n\n${this.continueText}`).setDepth(1000);

  }

  continue(): this {
    this.setText(`${this.texts[++this.stage]} \n\n${this.continueText}`);
    if (this.stage === this.texts.length) {
      this.setVisible(false);
    }
    return this;
  }
}
