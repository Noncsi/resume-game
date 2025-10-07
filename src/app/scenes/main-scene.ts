import Phaser from 'phaser';
import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
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
import { GameService } from '../services/game-service';
import { AssetLoader } from '../utils/asset-loader';
import { AssetFactory } from '../utils/asset-factory';
import { AssetPlayer } from '../utils/asset-player';
import { Button } from '../models/button';
import { BUTTON_CONFIGS } from '../config/buttons';

@Injectable({ providedIn: 'root' })
export class MainScene extends Phaser.Scene {
  private gameService: GameService;

  private greeting: Phaser.GameObjects.Text;
  private map: Phaser.Tilemaps.Tilemap;
  private player: DynamicSprite;
  private currentKeyHandler?: () => void; // Add this to store the key handler
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
    // this.physics.world.createDebugGraphic();

    const map = this.make.tilemap({ key: KEY.map });
    this.collidingAreas = this.physics.add.staticGroup();

    AssetFactory.createAll(this, map, this.collidingAreas, (area: IInteractableAreaConfig) =>
      this.gameService.enterInteractableArea(area)
    );

    AssetPlayer.playAll();
    this.player = DYNAMIC_SPRITES.get(KEY.texture.spritesheet.player);
    const muteButtonConfig = BUTTON_CONFIGS.find((button) => button.key === KEY.button.muteMusic);
    new Button(this, muteButtonConfig, () => this.gameService.toggleBackgroundMusic());

    this.cameras.main.fadeIn(500);
    // this.sound.play(KEY.audio.backgroundMusic);
  }

  override update() {
    this.physics.overlap(this.player, this.collidingAreas)
      ? this.gameService.showPrompt(50, 50)
      : this.gameService.hidePrompt();

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
    if (pressedMovementKeys) this.greeting.setVisible(false);

    const movement: IMovement = MOVEMENT_MAP.get(Direction[pressedMovementKeys[0]]);
    this.player.setVelocity(movement.velocity.x, movement.velocity.y);
    return this.player.anims.play(movement.animationKey, true);
  }
}
