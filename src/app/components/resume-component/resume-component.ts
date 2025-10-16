import { Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCollectedFragments } from '../../store/game.selector';
import { CommonModule } from '@angular/common';
import { ResumeContentComponent } from '../resume-content-component/resume-content-component';
import { INTERACTABLE_AREA_CONFIGS } from '../../config/interactable-areas';
import { KEY } from '../../models/keys';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.scss',
})
export class ResumeComponent {
  store = inject(Store);
  collectibleFragments = this.store.selectSignal(selectCollectedFragments);

  skills = computed(() => this.getFragmentContent(KEY.area.well));
  experience = computed(() => this.getFragmentContent(KEY.area.stones));
  softSkills = computed(() => this.getFragmentContent(KEY.area.flowers));
  contact = computed(() => this.getFragmentContent(KEY.area.mailbox));

  getFragmentContent(key: string) {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === key,
    );

    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === key).content
      : '???';
  }
}
