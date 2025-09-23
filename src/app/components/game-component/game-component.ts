import { Component } from '@angular/core';
import Phaser from 'phaser';
import { gameConfig } from '../../config/game';
import { GameService } from '../../services/game-service';
import { EventBus } from '../../services/event-bus';
import { KEY } from '../../models/keys';

@Component({
  selector: 'app-game',
  templateUrl: './game-component.html',
  styleUrl: './game-component.scss',
})
export class GameComponent {
  game: Phaser.Game;
  sceneCallback: (scene: Phaser.Scene) => void;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.game = new Phaser.Game(gameConfig);
    this.gameService.registerEventListeners();
  }

  ngOnDestroy() {
    this.gameService.unregisterEventListeners();
    this.game.destroy(true);
  }
}
