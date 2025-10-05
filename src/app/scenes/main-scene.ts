import Phaser from 'phaser';
import { Injectable } from '@angular/core';
import { CONTROLS, DYNAMIC_SPRITES, MOVEMENT_MAP, SPRITES, TEXTS } from '../models/collections';
import {
  CursorKeys,
  Sprite,
  IMovement,
  ITextConfig,
  StaticGroup,
  DynamicSprite,
  Direction,
} from '../models/types';
import { KEY } from '../models/keys';
import { TEXT_CONFIGS } from '../config/texts';
import { Prompt } from '../models/interaction-prompt';
import { GameService } from '../services/game-service';
import { AssetLoadService } from '../services/asset-load-service';
import { AssetFactoryService } from '../services/asset-factory-service';

@Injectable()
export class MainScene extends Phaser.Scene {
  assetLoadService: AssetLoadService;
  assetFactoryService: AssetFactoryService;
  gameService: GameService;
  private prompt: Prompt;
  private map: Phaser.Tilemaps.Tilemap;
  private player: DynamicSprite;
  private lastPressedKey = '';
  private isInInteractionZone = false; // Add this flag
  private currentKeyHandler?: () => void; // Add this to store the key handler
  private collidingAreas: StaticGroup;

  constructor(
    assetFactoryService: AssetFactoryService,
    assetLoadService: AssetLoadService,
    gameService: GameService
  ) {
    super('main');
    this.assetLoadService = assetLoadService;
    this.assetFactoryService = assetFactoryService;
    this.gameService = gameService;
  }

  private addTexts(): void {
    TEXT_CONFIGS.forEach(({ key, position, text, style }: ITextConfig) => {
      const textObject = this.add
        .text(position.x, position.y, text, style)
        .setDepth(100)
        .setVisible(false);
      TEXTS.set(key, textObject);
    });
  }

  preload() {
    this.assetLoadService.loadAssets(this);
    this.addTexts();
  }

  create() {
    this.map = this.make.tilemap({ key: KEY.map });
    this.collidingAreas = this.physics.add.staticGroup();
    this.assetFactoryService.addAssets(this, this.map, this.collidingAreas, this.gameService);

    this.prompt = new Prompt(this.gameService, this);
    this.player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);
    // this.physics.world.createDebugGraphic();

    SPRITES.forEach((sprite: Sprite, spriteName: string) => {
      sprite.play(spriteName);
    });

    this.cameras.main.fadeIn(500);
    // this.sound.play(KEY.audio.backgroundMusic);
  }

  override update() {
    this.physics.overlap(this.player, this.collidingAreas)
      ? this.gameService.showPrompt(50,50)
      : this.gameService.hidePrompt();

    this.player.setVelocity(0);

    const pressedMovementKeys = Object.entries(CONTROLS.get('move')).find(([key, value]) => value.isDown);
    // console.log('pressedMovementKeys', pressedMovementKeys)

    // if (pressedMovementKeys.length === 1) {
    //   this.lastPressedKey = newlyPressedKey;
    // } else {
    //   const idx = pressedMovementKeys.findIndex((a) => a[0] === this.lastPressedKey);
    //   pressedMovementKeys.splice(idx, 1);
    // }

    if (!pressedMovementKeys) return this.player.anims.stop();

    const movement: IMovement = MOVEMENT_MAP.get(Direction[pressedMovementKeys[0]]);
    this.player.setVelocity(movement.velocity.x, movement.velocity.y);
    return this.player.anims.play(movement.animationKey, true);
  }
}
