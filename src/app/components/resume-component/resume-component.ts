import { Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCollectedFragments } from '../../store/game.selector';
import { CommonModule } from '@angular/common';
import { ParchmentFragmentComponent } from '../parchment-fragment-component/parchment-fragment-component';
import { INTERACTABLE_AREA_CONFIGS } from '../../config/interactable-areas';
import { KEY } from '../../models/keys';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, ParchmentFragmentComponent],
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

  projects = computed(() => {
    const fragment = this.collectibleFragments().find(
      (fragment) => fragment.areaKey === KEY.area.mushroom
    );
    return fragment?.isCollected
      ? INTERACTABLE_AREA_CONFIGS.find((area) => area.key === KEY.area.mushroom).content
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
