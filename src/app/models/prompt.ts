import { tap } from 'rxjs';
import { GameService } from '../services/game-service';
import { inject } from '@angular/core';
import { MainScene } from '../scenes/main-scene';
import { TextStyle } from './types';

export class Prompt {
  text: Phaser.GameObjects.Text;
  gameService = inject(GameService);
  scene = inject(MainScene);

  constructor() {
    this.text = this.scene.add
      .text(100, 100, 'Press [E] to interact', {
        fontSize: '16px',
        color: '#ffffff',
      })
      .setDepth(1000);

    this.gameService.isPromptVisible$
      .pipe(tap((isVisible: boolean) => this.text.setVisible(isVisible)))
      .subscribe();
  }
}
