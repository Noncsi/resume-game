import { Component, AfterViewInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from './main-scene';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements AfterViewInit {
  ngAfterViewInit() {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
      },
      scene: [MainScene],
      physics: {
        default: 'arcade',
        arcade: { debug: false },
      },
      parent: 'game-container',
      input: { keyboard: true },
      backgroundColor: '#7BAE58',
    };
    new Phaser.Game(config);
  }
}
