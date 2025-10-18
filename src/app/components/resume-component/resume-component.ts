import { Component, computed, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ResumeContentComponent } from '../resume-content-component/resume-content-component';
import { INTERACTABLE_AREA_CONFIGS } from '../../config/interactable-areas';
import { InteractableAreaKey } from '../../models/keys';
import { selectCollectedFragments, selectIsGameEnded } from '../../store/game/game.selector';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.scss',
})
export class ResumeComponent {
  store = inject(Store);
  collectibleFragments = this.store.selectSignal(selectCollectedFragments);
  isGameEnded: Signal<boolean> = this.store.selectSignal(selectIsGameEnded);

  skills = computed(() => this.getFragmentContent(InteractableAreaKey.Well));
  experience = computed(() => this.getFragmentContent(InteractableAreaKey.Stones));
  softSkills = computed(() => this.getFragmentContent(InteractableAreaKey.Flowers));
  contact = computed(() => this.getFragmentContent(InteractableAreaKey.Mailbox));

  getFragmentContent(key: string) {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === key,
    );

    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === key).content
      : '???';
  }
}
