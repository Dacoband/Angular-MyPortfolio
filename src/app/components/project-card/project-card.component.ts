import { Component, input, InputSignal } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    projectData: InputSignal<Project> = input.required<Project>();
}
