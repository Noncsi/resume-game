import Phaser from 'phaser';
import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
import { CONTROLS, DYNAMIC_SPRITES, MOVEMENT_MAP } from '../models/collections';
import {
  Sprite,
  IMovement,
  ITextConfig,
  StaticGroup,
  DynamicSprite,
  Direction,
} from '../models/types';
import { KEY } from '../models/keys';
import { GameService } from '../services/game-service';
import { AssetLoader } from '../utils/asset-loader';
import { AssetFactory } from '../utils/asset-factory';
import { AssetPlayer } from '../utils/asset-player';
import { Button } from '../models/button';
import { BUTTON_CONFIGS } from '../config/buttons';
import { InteractableArea } from '../models/interactable-area';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';
import { Prompt } from '../models/prompt';
import { TEXT_CONFIGS } from '../config/texts';

@Injectable({ providedIn: 'root' })
export class MainScene extends Phaser.Scene {
  private gameService: GameService;

  private greeting: Phaser.GameObjects.Text;
  private player: DynamicSprite;
  private collidingAreas: StaticGroup;

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
    this.physics.world.createDebugGraphic();

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

    // create Prompt
    new Prompt(this, this.gameService);

    // create Buttons
    const muteButtonConfig = BUTTON_CONFIGS.find((button) => button.key === KEY.button.muteMusic);
    new Button(this, muteButtonConfig, () => this.gameService.toggleBackgroundMusic());

    // AssetPlayer.playAll();
    this.player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);

    this.cameras.main.fadeIn(800);
  }

  override update() {
    // check walking out of area
    if(!this.physics.overlap(this.player, this.collidingAreas)) this.gameService.leaveArea();

    this.player.setVelocity(0);

    const pressedMovementKeys = Object.entries(CONTROLS.get('move')).find(
      ([key, value]) => value.isDown
    );
    // console.log('pressedMovementKeys', pressedMovementKeys)

    // if (pressedMovementKeys.length === 1) {
    //   this.lastPressedKey = newlyPressedKey;
    // } else {
    //   const idx = pressedMovementKeys.findIndex((a) => a[0] === this.lastPressedKey);
    //   pressedMovementKeys.splice(idx, 1);
    // }

    if (!pressedMovementKeys) return this.player.anims.stop();
    // if (pressedMovementKeys) this.greeting.setVisible(false);

    const movement: IMovement = MOVEMENT_MAP.get(Direction[pressedMovementKeys[0]]);
    this.player.setVelocity(movement.velocity.x, movement.velocity.y);
    return this.player.anims.play(movement.animationKey, true);
  }
}
