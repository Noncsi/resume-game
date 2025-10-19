import Phaser from 'phaser';
import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
import { AUDIOS, DYNAMIC_SPRITES, MOVEMENT_MAP } from '../models/collections';
import {
  IMovement,
  StaticGroup,
  DynamicSprite,
  Direction,
  CursorKeys,
  Audio,
} from '../models/types';
import { AudioKey, ButtonKey, MapKey, SpritesheetKey, TextKey } from '../models/keys';
import { GameService } from '../services/game-service';
import { AssetLoader } from '../utils/asset-loader';
import { AssetFactory } from '../utils/asset-factory';
import { AssetPlayer } from '../utils/asset-player';
import { Button } from '../models/texts/button';
import { BUTTON_CONFIGS } from '../config/buttons';
import { InteractableArea } from '../models/interactable-area';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { IntroSpeech } from '../models/texts/intro-speech';
import { Help } from '../models/texts/help';
import { PromptService } from '../services/prompt-service';
import { TEXT_CONFIGS } from '../config/texts';

@Injectable({ providedIn: 'root' })
export class MainScene extends Phaser.Scene {
  private gameService: GameService;
  private promptService: PromptService;

  private keyE: Phaser.Input.Keyboard.Key;
  private intro: IntroSpeech;
  private player: DynamicSprite;
  private interactableAreaZones: StaticGroup;
  private cursors: CursorKeys;
  private previousZone: InteractableArea | null;
  private overlay: Phaser.GameObjects.Graphics;
  private lastPressedKey: string = '';
  private footstepsSound: Audio;
  private isFootstepsSoundAlreadyPlaying: boolean;

  constructor(injector: Injector) {
    super({ key: 'main' });
    runInInjectionContext(injector, () => {
      this.gameService = inject(GameService);
      this.promptService = inject(PromptService);
    });
  }

  preload() {
    AssetLoader.loadAll(this);
  }

  create() {
    this.input.setDefaultCursor('url("/assets/cursors/pixel.cur"), pointer');
    // create Non-reactive assets
    const tileMap = this.make.tilemap({ key: MapKey.Map });
    AssetFactory.createAll(this, tileMap);

    // create Interactable Areas
    this.interactableAreaZones = this.physics.add.staticGroup();
    INTERACTABLE_AREA_CONFIGS.forEach((config) => {
      this.interactableAreaZones.add(new InteractableArea(this, config));
    });

    // create prompt
    const promptConfig = TEXT_CONFIGS.get(TextKey.Prompt);
    this.promptService.setPrompt(
      this.add.text(0, 0, promptConfig.text, promptConfig.style).setDepth(1000).setVisible(false)
    );

    new Help(this);

    // create Buttons
    const muteButtonConfig = BUTTON_CONFIGS.find((button) => button.key === ButtonKey.MuteMusic);
    const muteSoundsButtonConfig = BUTTON_CONFIGS.find(
      (button) => button.key === ButtonKey.MuteSounds
    );
    new Button(this, muteButtonConfig, () => this.gameService.toggleBackgroundMusic());
    new Button(this, muteSoundsButtonConfig, () => this.gameService.toggleBackgroundSounds());

    AssetPlayer.playAll();
    this.player = DYNAMIC_SPRITES.get(SpritesheetKey.Player);

    // create interaction for [E]
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.cursors = this.input.keyboard.createCursorKeys();

    // create intro speech
    this.intro = new IntroSpeech(this);
    this.keyE.on('down', () => {
      this.intro.continue();
    });

    this.overlay = this.add.graphics().setDepth(1000);
    this.overlay
      .fillStyle(0x000000, 0.8)
      .fillRect(0, 0, this.game.scale.width, this.game.scale.height);
    const maskGraphics = this.make.graphics();
    maskGraphics.fillStyle(0xffffff);
    maskGraphics.fillRect(16, 60, 500, 220);
    const mask = new Phaser.Display.Masks.BitmapMask(this, maskGraphics);
    mask.invertAlpha = true;
    this.overlay.setMask(mask);

    this.footstepsSound = AUDIOS.get(AudioKey.Footsteps);

    this.cameras.main.fadeIn(800);
  }

  override update() {
    if (!this.intro.visible) {
      this.keyE.off('down');
      this.keyE.on('down', () => this.gameService.interact());
      this.overlay.setVisible(false);
    }

    // Area detection
    const currentZone: InteractableArea = this.interactableAreaZones.children.entries.find((area) =>
      this.physics.overlap(this.player, area)
    ) as InteractableArea;

    if (this.previousZone !== currentZone) {
      currentZone ? this.gameService.enterArea(currentZone.config) : this.gameService.leaveArea();
      this.previousZone = currentZone;
    }

    // Player movement
    this.player.setVelocity(0);
    const pressedMovementKeys = Object.entries(this.cursors).filter(
      ([keyName, key]) => key.isDown && !!MOVEMENT_MAP.get(Direction[keyName])
    );

    const newlyPressedKey = pressedMovementKeys[0]?.[0];

    if (pressedMovementKeys.length === 1) {
      this.lastPressedKey = newlyPressedKey;
    } else {
      const idx = pressedMovementKeys.findIndex((kv) => kv[0] === this.lastPressedKey);
      pressedMovementKeys.splice(idx, 1);
    }

    const isMovementKeyPressed = pressedMovementKeys.length > 0 && !this.intro.visible;

    if (
      isMovementKeyPressed &&
      !this.isFootstepsSoundAlreadyPlaying &&
      !this.gameService.isOverlayOpen() &&
      this.gameService.IsSoundsOn()
    ) {
      this.footstepsSound.play();
      this.isFootstepsSoundAlreadyPlaying = true;
    } else if (!isMovementKeyPressed) {
      this.footstepsSound.stop();
      this.isFootstepsSoundAlreadyPlaying = false;
      return this.player.anims.stop();
    }

    if (!this.intro.visible && !this.gameService.isOverlayOpen()) {
      const movement: IMovement = MOVEMENT_MAP.get(Direction[pressedMovementKeys[0][0]]);
      this.player.setVelocity(movement.velocity.x, movement.velocity.y);
      this.player.anims.play(movement.animationKey, true);
    }

    return true;
  }
}
