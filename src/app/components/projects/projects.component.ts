import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Website Portfolio',
      description: 'Website cá nhân giới thiệu bản thân và các dự án đã thực hiện của tui qua những giai đoạn khác nhau.',
      tech: 'Angular, SCSS, Bootstrap',
      github: 'https://github.com/Dacoband/Angular-MyPortfolio'
    }
  ];
}