import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from './components/game/game';

@Component({
  selector: 'app-root',
  imports: [Game],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('resume-game');
}
