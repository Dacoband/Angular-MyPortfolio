import { Component } from '@angular/core';
import { Experience } from '../../models/experience';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Công ty ABC',
      position: 'Front-end Intern',
      time: '06/2022 - 12/2022',
      description: 'Phát triển giao diện web bằng React.'
    }
  ];
}