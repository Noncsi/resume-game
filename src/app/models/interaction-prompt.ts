import { tap } from 'rxjs';
import { GameService } from '../services/game-service';

export class Prompt {
  text: Phaser.GameObjects.Text;
  private scene: Phaser.Scene;

  constructor(private gameService: GameService, scene: Phaser.Scene) {
    this.gameService = gameService;
    this.scene = scene;
    this.text = this.scene.add
      .text(100, 100, 'Press [E] to interact', {
        fontSize: '16px',
        color: '#ffffff',
      })
      .setDepth(1000);


    this.gameService
      .selectPromptVisible()
      .pipe(tap((isVisible: boolean) => this.text.setVisible(isVisible)))
      .subscribe();
  }

  show(x: number, y: number): void {
    this.gameService.showPrompt(x, y);
  }

  hide(): void {
    this.gameService.hidePrompt();
    console.log('ip hide')
  }
}
