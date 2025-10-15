import { Scene } from 'phaser';
import { TextBubble } from './text-bubble';
import { TextStyle } from '../types';

export class IntroSpeech extends TextBubble {
  stage = 0;
  texts = [
    `Hey there, adventurer!
This isn't your usual resume.`,
    `Explore the meadow,
find the hidden fragments, and piece together
who I am - my skills, my work, and my story.`,
    `Each discovery reveals 
a part of the resume on the left.`,
    `Take your time... the campfire's warm,
and the forest is friendly.
Enjoy the journey!`,
  ];
  continueText = `Press [E] to continue...`;
  constructor(scene: Scene) {
    const style: TextStyle = {
      fontSize: '16px',
      color: '#131313ff',
      backgroundColor: '#E3C48B',
      padding: { x: 8, y: 8 },
      fixedWidth: 470,
      fixedHeight: 100,
    };
    super(scene, 30, 80, '', style);

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
