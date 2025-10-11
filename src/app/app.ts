import { Component, signal } from '@angular/core';
import { GameComponent } from './components/game-component/game-component';
import { OverlayComponent } from './components/overlay-component/overlay-component';
import { ResumeComponent } from './components/resume-component/resume-component';

@Component({
  selector: 'app-root',
  imports: [GameComponent, OverlayComponent, ResumeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('resume-game');
}
