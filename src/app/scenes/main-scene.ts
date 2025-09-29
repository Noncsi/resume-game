import Phaser from 'phaser';
import { Injectable } from '@angular/core';
import {
  DYNAMIC_SPRITES,
  INTERACTABLE_AREAS,
  SPRITES,
  TEXTS,
} from '../models/collections';
import {
  CursorKeys,
  Sprite,
  IMovement,
  IInteractableAreaConfig,
  ITextConfig,
  StaticGroup,
} from '../models/types';
import { SPRITESHEET_IMAGE_CONFIGS, TILESET_IMAGE_CONFIGS } from '../config/textures';
import { DYNAMIC_SPRITE_CONFIGS, SPRITE_CONFIGS } from '../config/sprites';
import { LAYER_CONFIGS } from '../config/layers';
import { COLLISION_CONFIGS } from '../config/collisions';
import { ANIMATION_CONFIGS, FRAME_RATE, REPEAT } from '../config/animations';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { KEY } from '../models/keys';
import { MOVEMENT_MAP } from '../config/movement';
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
  private cursors: CursorKeys;
  private map: Phaser.Tilemaps.Tilemap;
  private lastPressedKey = '';
  private isInInteractionZone = false; // Add this flag
  private currentKeyHandler?: () => void; // Add this to store the key handler
  private collisionArea: StaticGroup;

  constructor(
    assetFactoryService: AssetFactoryService,
    assetLoadService: AssetLoadService,
    gameService: GameService
  ) {
    super('main');
    this.gameService = gameService;
    this.assetLoadService = assetLoadService;
    this.assetFactoryService = assetFactoryService;
  }

  private addInteractableAreas(): void {
    INTERACTABLE_AREA_CONFIGS.forEach(({ key, title, content, links }: IInteractableAreaConfig) => {
      INTERACTABLE_AREAS.set(key, { key, title, content, links });
    });
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

  private handleInteractableCollision() {
    if (this.isInInteractionZone) return;
    this.isInInteractionZone = true;

    const player = DYNAMIC_SPRITES[KEY.texture.spritesheet.player];
    const playerBounds = player.getBounds();

    this.prompt.show(playerBounds.centerX, playerBounds.top - 20);

    const keyE = this.input.keyboard.addKey('E');
    this.currentKeyHandler = () => {
      this.gameService.handleInteraction(KEY.area.house);
      this.prompt.hide();
    };

    keyE.on('down', this.currentKeyHandler);

    this.events.on('update', this.checkExit, this);
  }

  private checkExit = () => {
    if (!this.isInInteractionZone) return;
    const player = DYNAMIC_SPRITES[KEY.texture.spritesheet.player];
    const isStillOverlapping = this.physics.overlap(player, this.collisionArea);

    if (!isStillOverlapping) {
      // Clean up when player exits the zone
      this.isInInteractionZone = false;
      this.prompt.hide();

      if (this.currentKeyHandler) {
        this.input.keyboard.removeKey('E');
        this.currentKeyHandler = undefined;
      }

      // Remove the update listener
      this.events.off('update', this.checkExit);
    }
  };

  preload() {
    this.assetLoadService.loadAssets(this);
    this.addInteractableAreas();
    this.addTexts();
  }

  create() {
    this.prompt = new Prompt(this.gameService, this);
    this.physics.world.createDebugGraphic();

    this.cameras.main.fadeIn(500);
    this.cursors = this.input.keyboard.createCursorKeys();

    if (!this.cursors) return;

    this.map = this.make.tilemap({ key: KEY.map });
    this.assetFactoryService.addAssets(this, this.map);

    Object.entries(SPRITES).forEach((sprite: [string, Sprite]) => {
      sprite[1].play(sprite[0]);
    });

    // Add collision detection
    this.collisionArea = this.physics.add.staticGroup();
    const houseMarker = this.collisionArea
      .create(400, 229, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);
    const wellMarker = this.collisionArea
      .create(675, 200, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);
    const mushroomMarker = this.collisionArea
      .create(930, 170, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);
    const flowerMarker = this.collisionArea
      .create(1020, 510, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);
    const stonesMarker = this.collisionArea
      .create(568, 460, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);
    const mailboxMarker = this.collisionArea
      .create(590, 300, 'exteriorAsSheet', 954)
      .setBodySize(64, 64);

    this.tweens.add({
      targets: [houseMarker, wellMarker, mushroomMarker, flowerMarker, stonesMarker, mailboxMarker],
      y: '-= 10',
      duration: 1000,
      yoyo: true,
      flipX: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    this.physics.add.overlap(
      DYNAMIC_SPRITES[KEY.texture.spritesheet.player],
      this.collisionArea,
      () => this.handleInteractableCollision(),
      undefined,
      this
    );
    // this.sound.play(KEY.audio.backgroundMusic);
  }

  override update() {
    const player = DYNAMIC_SPRITES[KEY.texture.spritesheet.player];
    player.setVelocity(0);

    const pressedMovementKeys = Object.entries(this.cursors).filter(([keyName, key]) => {
      return keyName in MOVEMENT_MAP && key.isDown;
    });

    const newlyPressedKey = pressedMovementKeys[0]?.[0];

    if (pressedMovementKeys.length === 1) {
      this.lastPressedKey = newlyPressedKey;
    } else {
      const idx = pressedMovementKeys.findIndex((a) => a[0] === this.lastPressedKey);
      pressedMovementKeys.splice(idx, 1);
    }

    if (!pressedMovementKeys.length) return player.anims.stop();

    const movement: IMovement = MOVEMENT_MAP[newlyPressedKey];
    player.setVelocity(movement.velocity.x, movement.velocity.y);
    return player.anims.play(movement.animationKey, true);
  }
}
