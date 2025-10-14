import Phaser from 'phaser';
import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
import { DYNAMIC_SPRITES, MOVEMENT_MAP } from '../models/collections';
import { IMovement, StaticGroup, DynamicSprite, Direction, CursorKeys } from '../models/types';
import { KEY } from '../models/keys';
import { GameService } from '../services/game-service';
import { AssetLoader } from '../utils/asset-loader';
import { AssetFactory } from '../utils/asset-factory';
import { AssetPlayer } from '../utils/asset-player';
import { Button } from '../models/texts/button';
import { BUTTON_CONFIGS } from '../config/buttons';
import { InteractableArea } from '../models/interactable-area';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { Prompt } from '../models/texts/prompt';
import { IntroSpeech } from '../models/texts/intro-speech';
import { Help } from '../models/texts/help';

@Injectable({ providedIn: 'root' })
export class MainScene extends Phaser.Scene {
  private gameService: GameService;

  private keyE: Phaser.Input.Keyboard.Key;
  private intro: IntroSpeech;
  private player: DynamicSprite;
  private collidingAreas: StaticGroup;
  private cursors: CursorKeys;
  lastPressedKey = null;

  constructor(private injector: Injector) {
    super({ key: 'main' });
    runInInjectionContext(injector, () => {
      this.gameService = inject(GameService);
    });
  }

  preload() {
    AssetLoader.loadAll(this);
  }

  create() {
    // create Non-reactive assets
    const map = this.make.tilemap({ key: KEY.map });
    AssetFactory.createAll(this, map);

    // create Interactable Areas
    this.collidingAreas = this.physics.add.staticGroup();
    const player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);
    INTERACTABLE_AREA_CONFIGS.forEach((config) => {
      this.collidingAreas.add(
        new InteractableArea(this, config, player, () => this.gameService.enterArea(config))
      );
    });

    // create texts
    new Prompt(this, this.gameService);
    new Help(this);

    // create Buttons
    const muteButtonConfig = BUTTON_CONFIGS.find((button) => button.key === KEY.button.muteMusic);
    const muteSoundsButtonConfig = BUTTON_CONFIGS.find(
      (button) => button.key === KEY.button.muteSounds
    );
    new Button(this, muteButtonConfig, () => this.gameService.toggleBackgroundMusic());
    new Button(this, muteSoundsButtonConfig, () => this.gameService.toggleBackgroundMusic());

    AssetPlayer.playAll();
    this.player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);

    // create interaction for [E]
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.cursors = this.input.keyboard.createCursorKeys();

    // create intro speech
    this.intro = new IntroSpeech(this);
    this.keyE.on('down', () => {
      this.intro.continue();
    });

    this.cameras.main.fadeIn(800);
  }

  override update() {
    if (!this.intro.visible) {
      this.keyE.off('down');
      this.keyE.on('down', () => this.gameService.interact());
    }
    // check walking out of area
    if (!this.physics.overlap(this.player, this.collidingAreas)) this.gameService.leaveArea();

    this.player.setVelocity(0);

    const pressedMovementKeys = Object.entries(this.cursors).filter(([keyName, key]) => {
      return key.isDown && !!MOVEMENT_MAP.get(Direction[keyName]);
    });

    const newlyPressedKey = pressedMovementKeys[0]?.[0];

    if (pressedMovementKeys.length === 1) {
      this.lastPressedKey = newlyPressedKey;
    } else {
      const idx = pressedMovementKeys.findIndex((a) => a[0] === this.lastPressedKey);
      pressedMovementKeys.splice(idx, 1);
    }

    if (!pressedMovementKeys.length) return this.player.anims.stop();

    const movement: IMovement = MOVEMENT_MAP.get(Direction[pressedMovementKeys[0][0]]);
    if (!this.intro.visible) {
      this.player.setVelocity(movement.velocity.x, movement.velocity.y);
    }
    return this.player.anims.play(movement.animationKey, true);
  }
}
