import { Component, signal } from '@angular/core';
import { GameComponent } from './components/game/game';

@Component({
  selector: 'app-root',
  imports: [GameComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('resume-game');
}
