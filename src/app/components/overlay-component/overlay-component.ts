import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectOverlayOpen, selectOverlayPayload } from '../../store/game.selector';
import * as actions from '../../store/game.actions';
import { CommonModule } from '@angular/common';
import { IInteractableAreaConfig } from '../../models/types';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.scss'
})
export class OverlayComponent {
  overlayOpen$: Observable<boolean>;
  payload$: Observable<IInteractableAreaConfig | null>;

  constructor(private store: Store) {
    this.overlayOpen$ = this.store.select(selectOverlayOpen);
    this.payload$ = this.store.select(selectOverlayPayload);
  }

  close() {
    this.store.dispatch(actions.closeOverlay());
  }
}
