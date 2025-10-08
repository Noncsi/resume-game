import { Component, signal } from '@angular/core';
import { GameComponent } from './components/game-component/game-component';
import { OverlayComponent } from './components/overlay-component/overlay-component';
import { ParchmentFragmentContainerComponent } from './components/parchment-fragment-container-component/parchment-fragment-container-component';

@Component({
  selector: 'app-root',
  imports: [GameComponent, OverlayComponent, ParchmentFragmentContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('resume-game');
}
