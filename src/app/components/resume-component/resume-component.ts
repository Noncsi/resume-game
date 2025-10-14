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

  skills = computed(() => {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === KEY.area.well
    );
    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === KEY.area.well).content
      : '???';
  });

  experience = computed(() => {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === KEY.area.stones
    );
    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === KEY.area.stones).content
      : '???';
  });

  softSkills = computed(() => {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === KEY.area.flowers
    );
    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === KEY.area.flowers).content
      : '???';
  });

  contact = computed(() => {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === KEY.area.mailbox
    );
    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === KEY.area.mailbox).content
      : '???';
  });
}
