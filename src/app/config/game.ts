import { GameConfig } from '../models/types';
import { MainScene } from '../scenes/main-scene';

export const GAME_CONFIG: GameConfig = {
  type: Phaser.AUTO,
  width: 1094,
  height: 820,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_VERTICALLY,
  },
  scene: [MainScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  parent: 'game-container',
  input: { keyboard: true },
  backgroundColor: '#967e5d',
  pixelArt: true,
};
