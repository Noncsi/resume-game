import { tap } from 'rxjs';
import { IInteractableAreaConfig } from './types';
import { Scene } from 'phaser';
import { GameService } from '../services/game-service';

export class Prompt extends Phaser.GameObjects.Text {
  constructor(scene: Scene, gameService: GameService) {
    super(scene, 0, 0, 'Press [E] to interact', {
      fontSize: '16px',
      color: '#ffffffff',
      backgroundColor: '#252525ab',
      padding: { x: 8, y: 4 },
    });

    this.setDepth(1000);

    gameService.isPromptVisible$
      .pipe(
        tap((isVisible: boolean) => {
          this.setVisible(isVisible);
        })
      )
      .subscribe();

    gameService.currentArea$
      .pipe(
        tap((area: IInteractableAreaConfig) => {
          this.setPosition(area?.position.x - 100, area?.position.y - 64);
        })
      )
      .subscribe();

    scene.add.existing(this);
  }
}
