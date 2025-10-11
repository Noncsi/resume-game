import { Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCollectedFragments } from '../../store/game.selector';
import { CommonModule } from '@angular/common';
import { ParchmentFragmentComponent } from '../parchment-fragment-component/parchment-fragment-component';
import { INTERACTABLE_AREA_CONFIGS } from '../../config/interactable-areas';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, ParchmentFragmentComponent],
  templateUrl: './resume-component.html',
  styleUrl: './resume-component.scss',
})
export class ResumeComponent {
  store = inject(Store);
  collectedFragments = this.store.selectSignal(selectCollectedFragments);
  parchments = computed(() => INTERACTABLE_AREA_CONFIGS.filter((area)=> area.containsCVFragment).map(area => {
    const fragment = this.collectedFragments().find(fragment => fragment.areaName === area.key);
    return { key: area.key, content: fragment?.isCollected ? area.content : '???' };
  }));
}
