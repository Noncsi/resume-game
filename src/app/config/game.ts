import { GameConfig } from "../models/types";
import { MainScene } from "../scenes/main-scene";

export const gameConfig: GameConfig = {
  type: Phaser.AUTO,
  width: 1520,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
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
