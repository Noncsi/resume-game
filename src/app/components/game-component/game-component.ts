import { Component } from '@angular/core';
import Phaser from 'phaser';
import { gameConfig } from '../../config/game';
import { GameService } from '../../services/game-service';
import { MainScene } from '../../scenes/main-scene';
import { AssetLoadService } from '../../services/asset-load-service';
import { AssetFactoryService } from '../../services/asset-factory-service';

@Component({
  selector: 'app-game',
  templateUrl: './game-component.html',
  styleUrl: './game-component.scss',
})
export class GameComponent {
  game: Phaser.Game;
  sceneCallback: (scene: Phaser.Scene) => void;

  constructor(
    private addService: AssetFactoryService,
    private loadService: AssetLoadService,
    private gameService: GameService
  ) {}

  ngOnInit() {
    const config = {
      ...gameConfig,
      scene: new MainScene(this.addService, this.loadService, this.gameService),
    };
    this.game = new Phaser.Game(config);
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }
}
