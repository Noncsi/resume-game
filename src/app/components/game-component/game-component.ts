import { Component } from '@angular/core';
import Phaser, { Events } from 'phaser';
import { gameConfig } from '../../config/game';
import { GameService } from '../../services/game-service';
import { EventBus } from '../../services/event-bus';
import { EventKey } from '../../models/types';

@Component({
  selector: 'app-game',
  templateUrl: './game-component.html',
  styleUrl: './game-component.scss',
})
export class GameComponent {
  scene: Phaser.Scene;
  game: Phaser.Game;
  sceneCallback: (scene: Phaser.Scene) => void;

  constructor(private gameService: GameService) {}
  ngOnInit() {
    this.game = new Phaser.Game(gameConfig);
    this.registerEventListeners();
  }

  private registerEventListeners(): void {
    Object.values(EventKey).forEach((eventKey) => {
      EventBus.on(eventKey, (payload) => {
        this.gameService.openOverlay(payload);
      });
    });
  }

  ngOnDestroy() {
    Object.values(EventKey).forEach((eventKey) => {
      EventBus.off(eventKey);
    });

    if (this.game) {
      this.game.destroy(true);
    }
  }
}
