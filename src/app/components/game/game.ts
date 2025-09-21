import { Component, AfterViewInit } from '@angular/core';
import Phaser from 'phaser';
import { gameConfig } from '../../config/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class GameComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Phaser.Game(gameConfig);
  }
}
