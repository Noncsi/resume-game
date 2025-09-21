import { Component, signal } from '@angular/core';
import { GameComponent } from './components/game-component/game-component';
import { OverlayComponent } from './components/overlay-component/overlay-component';

@Component({
  selector: 'app-root',
  imports: [GameComponent, OverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('resume-game');
}
