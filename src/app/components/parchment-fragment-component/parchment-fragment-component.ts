import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parchment-fragment',
  imports: [CommonModule],
  templateUrl: './parchment-fragment-component.html',
  styleUrl: './parchment-fragment-component.scss',
})
export class ParchmentFragmentComponent {
  content = input.required<string>()
}
