import { Component, HostListener, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsOverlayOpen, selectInteractableArea, selectIsGameEnded } from '../../store/game.selector';
import { closeOverlay } from '../../store/game.actions';
import { CommonModule } from '@angular/common';
import { IInteractableAreaConfig } from '../../models/types';
import { ResumeContentComponent } from '../resume-content-component/resume-content-component';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.scss',
})
export class OverlayComponent {
  store = inject(Store);
  isOverlayOpen: Signal<boolean> = this.store.selectSignal(selectIsOverlayOpen);
  area: Signal<IInteractableAreaConfig | null> = this.store.selectSignal(selectInteractableArea);
  isGameEnded: Signal<boolean> = this.store.selectSignal(selectIsGameEnded);

  @HostListener(`document:keydown.escape`)
  handleEscKey() {
    if (this.isOverlayOpen()) {
      this.close();
    }
  }

  close() {
    this.store.dispatch(closeOverlay());
  }
}
