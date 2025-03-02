import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe], 
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeUrl = '/assets/resume/resume.pdf'; 
}