import { Component, inject, Injector, OnDestroy, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { GAME_CONFIG } from '../../config/game';
import { MainScene } from '../../scenes/main-scene';

@Component({
  selector: 'app-game',
  templateUrl: './game-component.html',
  styleUrl: './game-component.scss',
})
export class GameComponent implements OnInit, OnDestroy  {
  game: Phaser.Game;

  constructor(private injector: Injector) {}

  ngOnInit() {
    const config = {
      ...GAME_CONFIG,
      scene: new MainScene(this.injector)
    };
    this.game = new Phaser.Game(config);
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }
}
