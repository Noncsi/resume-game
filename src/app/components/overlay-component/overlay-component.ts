import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsOverlayOpen, selectInteractableArea } from '../../store/game.selector';
import { closeOverlay } from '../../store/game.actions';
import { CommonModule } from '@angular/common';
import { IInteractableAreaConfig } from '../../models/types';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.scss',
})
export class OverlayComponent {
  store = inject(Store);
  isOverlayOpen: Signal<boolean> = this.store.selectSignal(selectIsOverlayOpen);
  area: Signal<IInteractableAreaConfig | null> = this.store.selectSignal(selectInteractableArea);

  close() {
    this.store.dispatch(closeOverlay());
  }
}
