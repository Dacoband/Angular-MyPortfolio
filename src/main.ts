import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { AwardsComponent } from './app/components/awards/awards.component';
import { ResumeComponent } from './app/components/resume/resume.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
}).catch(err => console.error(err));