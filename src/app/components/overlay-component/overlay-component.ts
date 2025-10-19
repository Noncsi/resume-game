import { Component, HostListener, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { IInteractableAreaConfig } from '../../models/types';
import { ResumeContentComponent } from '../resume-content-component/resume-content-component';
import { selectCurrentArea, selectIsCongratulationsVisible, selectIsGameEnded, selectIsOverlayOpen } from '../../store/game/game.selector';
import { closeOverlay } from '../../store/game/game.actions';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.scss',
})
export class OverlayComponent {
  store = inject(Store);
  isOverlayOpen: Signal<boolean> = this.store.selectSignal(selectIsOverlayOpen);
  area: Signal<IInteractableAreaConfig | null> = this.store.selectSignal(selectCurrentArea);
  IsCongratulationsVisible: Signal<boolean> = this.store.selectSignal(selectIsCongratulationsVisible);

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
