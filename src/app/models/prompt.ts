import { tap } from 'rxjs';
import { ITextConfig, TextStyle } from './types';
import { Scene } from 'phaser';
import { GameService } from '../services/game-service';

export class Prompt extends Phaser.GameObjects.Text {
  constructor(scene: Scene, config: ITextConfig, gameService: GameService) {
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

    this.setDepth(1000);
    gameService.isPromptVisible$
      .pipe(
        tap((isVisible: boolean) => {
          this.setVisible(isVisible);
        })
      )
      .subscribe();

    scene.add.existing(this);
  }
}
