import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-content',
  imports: [CommonModule],
  templateUrl: './resume-content-component.html',
  styleUrl: './resume-content-component.scss',
})
export class ResumeContentComponent {
  content = input.required<string>()
}
