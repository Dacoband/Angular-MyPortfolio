import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
 @Input() project = {} as Project;
 bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
    
  }

  openProjectModal(){
    this.bsModalRef = this.modalService.show('');
  }
}
