import { tap } from 'rxjs';
import { IInteractableAreaConfig } from '../types';
import { Scene } from 'phaser';
import { GameService } from '../../services/game-service';
import { TextBubble } from './text-bubble';

export class Prompt extends TextBubble {
  constructor(scene: Scene, gameService: GameService) {
    super(scene, 0, 0, 'Press [E] to interact');

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
  }
}
