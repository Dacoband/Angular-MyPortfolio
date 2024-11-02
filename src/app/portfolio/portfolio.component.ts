import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];
  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Volka | Portfolio'); // set tab title name for the portfolio page
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
